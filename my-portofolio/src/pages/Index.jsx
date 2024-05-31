import React, { useState, useEffect } from "react";
import AOS from 'aos';
import Header from "../components/Header";
import '../css/index.css';
import 'aos/dist/aos.css';
import man from '../images/man.png';
import goodPerson from '../images/goodPerson.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import AccordionComponent from "../components/AccordionComponent";
import SwiperComponent from "../components/SwiperComponent";
import Form from "../components/FormComponent";
import { useScroll } from "../ScrollContext/ScrollContext";

const Index = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { aboutMeRef, skillsRef, projectRef, contactRef } = useScroll();
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const scrollIntoContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        AOS.init({
            duration: 1400,
        })
    }, [])

    return (
        <>
            <div className={`${darkMode ? "ripple-background-dark" : "ripple-background"} overflow-hidden`}>
                <div className={`${darkMode ? " circle-dark xxlarge" : "circle xxlarge "} shade1`} />
                <div className={`${darkMode ? "circle-dark xlarge" : "circle xlarge"} shade2`} />
                <div className={`${darkMode ? "circle-dark large" : "circle large"} shade3`} />
                <div className={`${darkMode ? "circle-dark medium" : "circle medium"} shade4`} />
                <div className={`${darkMode ? "circle-dark small" : "circle small"} shade5`} />
            </div>
            <Header dark={darkMode} />
            <div className={darkMode ? "dark" : ""}>
                <div className={`${darkMode ? "dark: bg-gradient-to-b transition duration-700 ease-in-out delay-150 bg-black" : "bg-gradient-to-b transition duration-300 ease-in-out delay-150 bg-slate-50"} flex justify-center items-center min-h-screen fontheader`}
                >
                    <div className="toggle">
                        <input type="checkbox" defaultChecked onChange={toggleDarkMode} />
                        <label></label>
                    </div >
                    <div className="flex flex-col md:flex-row-reverse items-center max-w-3xl z-20 p-4 md:p-8">
                        <div className="relative w-64 h-64 md:w-96 md:h-96 ml-8 overflow-visible mb-4 md:mb-0 md:ml-12">
                            <div className="gooey">
                                <img className="clipmask relative overflow-hidden w-full h-full" src={man} alt="Profile" />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-col text-center md:text-left mb-4 md:mb-0 md:grid md:grid-cols-1 md:gap-4">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <div className="flex flex-row justify-center items-center mt-4 mr-7 ml-6 mb-5 md:mt-0 md:flex-col md:ml-9">
                                    <a href="https://github.com/waldo1234567" target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon fontSize="large" className="mt-4 md:mt-0 md:mb-4 mr-4 md:mr-0" style={darkMode ? { color: "white" } : { color: "black" }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/waldo-walerian-75ba03288/" target="_blank" rel="noopener noreferrer">
                                        <LinkedInIcon fontSize="large" className="mt-4 md:mt-0 md:mb-4 mr-4 md:mr-0" style={darkMode ? { color: "white" } : { color: "black" }} />
                                    </a>
                                    <a href="https://www.instagram.com/waldowalerian/" target="_blank" rel="noopener noreferrer">
                                        <InstagramIcon fontSize="large" className="mt-4 md:mt-0 md:mb-4 mr-4 md:mr-0" style={darkMode ? { color: "white" } : { color: "black" }} />
                                    </a>
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-2xl md:text-4xl font-semibold mb-2 md:mb-4 ${darkMode ? 'dark:text-slate-100' : 'text-black'}`}>Hi!, I'm Waldo</p>
                                    <p className={`text-base md:text-lg mb-2 ${darkMode ? "dark:text-neutral-500" : "text-neutral-700"}`}>and I am a website developer</p>
                                    <p className={`mt-2 text-sm md:text-base ${darkMode ? "dark:text-slate-100" : ''}`}>A freshly graduated from a website development bootcamp program
                                        currently open for job vacancy
                                    </p>
                                    <button className={`mt-4 ${darkMode ? 'dark:bg-yellow-400 hover:bg-yellow-300' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-2 rounded w-48 mx-auto md:mx-0`} onClick={scrollIntoContact} ><SendIcon className="mr-2" />Contact Me</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`${darkMode ? "dark: bg-gradient-to-b transition duration-300 ease-in-out delay-150 bg-black" : "bg-gradient-to-b bg-slate-50 transition duration-300 ease-in-out delay-150"} min-h-screen flex justify-center`} ref={aboutMeRef}>
                    <div className="max-w-full flex flex-col items-center"
                        data-aos="fade-up"
                    >
                        <p className={`text-5xl font-semibold fontheader wiggle mb-4 ${darkMode ? 'dark:text-slate-100' : 'text-black'}`}> About Me</p>
                        <div className="flex flex-col md:flex-row items-center mt-12 justify-center">
                            <div className="w-full md:w-auto h-80 ml-8 md:mr-8 rounded-lg">
                                <img
                                    src={goodPerson}
                                    alt="supposed to be here"
                                    className="w-96 h-80 object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col max-w-lg p-8 fontheader md:ml-4 md:p-10">
                                <p className={`text-lg mb-2 ${darkMode ? "dark:text-neutral-500" : "text-neutral-700"}`}>A brief Introduction about me, </p>
                                <p className={`mt-2 text-base ${darkMode ? "dark:text-slate-100" : ''}`}>I am a university student who recently completed Binar Academy's Fullstack Web Development course.
                                    Immersed in web development, I have hands-on expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, PostgreSQL and SQL.
                                    I have built responsive websites and robust server-side applications.I continuously learn new frameworks and tools to enhance my skills.
                                </p>
                                <button className={`mt-10 ${darkMode ? 'dark:bg-yellow-400 hover:bg-yellow-300' : "bg-white hover:bg-blue-700 hover:text-white"} font-bold py-2 px-4 rounded-full w-48`}>
                                    <a href="public/CV_WALDO_2024.pdf" download="CV_WALDO_2024.pdf" >
                                        <SaveAltIcon className="mr-1" />
                                        Download CV
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${darkMode ? "dark: transition duration-300 ease-in-out delay-150 bg-black" : "bg-slate-50"} max-w-full`} ref={skillsRef}>

                    <div className="max-w-full flex flex-col items-center mb-12">
                        <p className={`text-5xl font-semibold fontheader  ${darkMode ? "dark:text-slate-100" : ''}`}> Skills </p>
                    </div>
                    <AccordionComponent dark={darkMode} aosDuration={1000} />
                    <div className="custom-shape-divider-bottom-1713816615">
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs>
                            <linearGradient id="gradient" x1="10%" y1="21%" x2="90%" y2="79%"><stop offset="5%" stopColor="#0693e3"></stop><stop offset="95%" stopColor="#0693e3"></stop></linearGradient>
                        </defs><path d="M 0,600 L 0,300 C 90.14285714285714,286.7678571428571 180.28571428571428,273.5357142857143 310,249 C 439.7142857142857,224.46428571428572 608.9999999999999,188.625 736,181 C 863.0000000000001,173.375 947.7142857142858,193.96428571428572 1058,181 C 1168.2857142857142,168.03571428571428 1304.142857142857,121.51785714285714 1440,75 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                            <defs><linearGradient id="gradient" x1="10%" y1="21%" x2="90%" y2="79%"><stop offset="5%" stopColor="#0693e3"></stop><stop offset="95%" stopColor="#0693e3"></stop></linearGradient></defs><path d="M 0,600 L 0,500 C 124.46428571428572,507.9821428571429 248.92857142857144,515.9642857142858 353,490 C 457.07142857142856,464.0357142857143 540.7500000000001,404.12500000000006 653,373 C 765.2499999999999,341.87499999999994 906.0714285714284,339.5357142857143 1042,328 C 1177.9285714285716,316.4642857142857 1308.9642857142858,295.7321428571429 1440,275 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
                    </div>

                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><style>
                    </style><defs><linearGradient id="gradient" x1="10%" y1="21%" x2="90%" y2="79%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#0693e3"></stop></linearGradient></defs><path d="M 0,600 L 0,300 C 71.51196172248802,322.71770334928226 143.02392344497605,345.4354066985646 254,311 C 364.97607655502395,276.5645933014354 515.4162679425838,184.97607655502392 628,167 C 740.5837320574162,149.02392344497608 815.3110047846889,204.66028708133973 905,213 C 994.6889952153111,221.33971291866027 1099.3397129186603,182.38277511961724 1191,139 C 1282.6602870813397,95.61722488038278 1361.3301435406697,47.80861244019139 1440,0 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><style>
                        </style><defs><linearGradient id="gradient" x1="10%" y1="21%" x2="90%" y2="79%"><stop offset="5%" stopColor="#8ed1fc"></stop><stop offset="95%" stopColor="#0693e3"></stop></linearGradient></defs><path d="M 0,600 L 0,500 C 65.15789473684211,470.9090909090909 130.31578947368422,441.8181818181818 236,446 C 341.6842105263158,450.1818181818182 487.8947368421052,487.6363636363637 605,460 C 722.1052631578948,432.3636363636363 810.1052631578948,339.6363636363636 887,291 C 963.8947368421052,242.36363636363637 1029.6842105263158,237.8181818181818 1120,230 C 1210.3157894736842,222.1818181818182 1325.157894736842,211.0909090909091 1440,200 L 1440,600 L 0,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>
                    <div className="max-w-full flex flex-col items-center mb-28" ref={projectRef}>
                        <p className={`text-5xl font-semibold fontheader ${darkMode ? "dark:text-slate-100" : ''}`}> Projects </p>
                    </div>
                    <div >
                        <SwiperComponent dark={darkMode} />
                    </div>

                    <div className="flex flex-col items-center mb-28 mt-28" ref={contactRef}>
                        <p className={`text-5xl font-semibold fontheader ${darkMode ? "dark:text-slate-100" : ''}`}>Contact Me</p>
                    </div>
                    <div    >
                        <Form dark={darkMode} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;