import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/swiper.css';
import Project1 from '../images/Project1.png';
import Project2 from '../images/project2.png';
import Project3 from "../images/project3.png";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TruncateContent = ({ item, screenWidth, dark, onReadMore }) => {
    const truncate = () => {
        if (screenWidth > 768) {
            return item.content;
        }
        return item.content.length > 75 ? item.content.slice(0, 75) + '...' : item.content;
    };
    const [truncatedContent, setTruncatedContent] = useState(truncate);

    useEffect(() => {
        const handleResize = () => {
            setTruncatedContent(truncate());
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [screenWidth, item.content]);
    return (
        <div>
            <p className={`${dark ? "dark:text-slate-100" : ''}`}>{truncatedContent}</p>
            {item.content.length > 75 && screenWidth <= 768 && (
                <button onClick={() => onReadMore(item)} className="text-blue-500">Read More</button>
            )}
        </div>
    );
}

const SwiperComponent = ({ dark }) => {
    const [isPaginationVisible, setIsPaginationVisible] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSlideChange = () => {
        console.log("masuk sinis", isPaginationVisible)
        setIsPaginationVisible(false);
        setTimeout(() => {
            setIsPaginationVisible(true)
        }, 1000);
    }

    const handleReadMore = (item) => {
        setSelectedItem(item);
    };

    const handleClosePopup = () => {
        setSelectedItem(null);
    };

    const items = [
        {
            title: 'Project 1',
            content: 'I built an e-commerce website implementing a CRUD system, enabling users to post, view, update, and delete items. It utilizes an API to connect the backend infrastructure with the frontend interface. I also incorporated features such as user authentication and authorization to ensure secure access to the CRUD functionalities.',
            imgSrc: Project1,
        },
        {
            title: 'Project 2',
            content: 'I had the opportunity to gain hands-on experience by collaborating with team members to develop our website. We utilized React, React hooks, and Tailwind to create a more elevated user experience Implementing CRUD flow and more complex backend functions.',
            imgSrc: Project2,
        },
        {
            title: 'Project 3',
            content: 'I built a React-based article website, I put in place elements like a user registration system that allows writers to submit their material and a search feature for quick article discovery. To effectively handle articles and user profiles, I also created an easy-to-use article creation interface and integrated CRUD functions.',
            imgSrc: Project3,
        }
    ];

    return (
        <>
            {console.log(items)}
            <div className="max-w-5xl mx-auto h-96 relative group z-0">
                <div className="w-full h-full flex items-center justify-center"
                    data-aos="fade-up"
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Navigation, Scrollbar, A11y]}
                        navigation={true}
                        loop={true}
                        onSlideChange={handleSlideChange}
                        style={{ borderRadius: '1rem', padding: '12px', paddingTop: '17px' }}
                    >
                        <div className={`h-[5em] w-[5em] ${dark ? 'bg-[#FDEE00]' : 'bg-[#9bc2ec]'} rounded-full absolute bottom-full -left-[5.5em] top-[-2.5em] group-hover:scale-[1700%] md:group-hover:scale-[2900%] sm:group-hover:scale-[2000%] z-[-1] duration-[1200ms]`}></div>
                        <div className={`h-[5em] w-[5em] ${dark ? 'bg-[#aaa013]' : 'bg-[#2c77c7]'} rounded-full absolute bottom-full -left-[5.5em] top-[-2.5em] group-hover:scale-[900%] md:group-hover:scale-[1500%] sm:group-hover:scale-[1000%] z-[-1] duration-[800ms]`}></div>

                        {
                            items.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center relative px-14">
                                        <div className="w-1/2 p-4 text-center fontheader relative">
                                            <h3 className={`text-xl font-bold mb-2 ${dark ? "dark:text-slate-100" : ''}`}>{item.title}</h3>
                                            <TruncateContent item={item} screenWidth={screenWidth} dark={dark} onReadMore={handleReadMore} />
                                        </div>
                                        <div className="w-1/2">
                                            <img
                                                src={item.imgSrc}
                                                alt={`Project ${index + 1} img goes here`}
                                                className="object-cover h-full w-full"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fontheader" style={{
                    opacity: selectedItem ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                }}>
                    <div className={`${dark ? 'bg-slate-800' :'bg-white' } rounded-lg p-8 max-w-md w-full`} style={{
                        transform: selectedItem ? 'scale(1)' : 'scale(0.5)',
                        transition: 'transform 0.3s ease-in-out',
                    }}>
                        <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-600 dark:text-gray-300">
                            <CloseOutlinedIcon />
                        </button>
                        <h2 className={`text-2xl font-bold mb-4 ${dark? 'text-slate-100' : 'text-black'}`}>{selectedItem.title}</h2>
                        <p className={`mb-4 ${dark? 'text-slate-100' : 'text-black'}`}>{selectedItem.content}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default SwiperComponent;