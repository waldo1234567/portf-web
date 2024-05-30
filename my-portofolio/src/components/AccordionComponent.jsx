import React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import PercentageBar from './PercentageBar';
import StorageIcon from '@mui/icons-material/Storage';
import '../css/index.css';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const AccordionComponent = ({ dark, aosDuration }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isSecondExpanded, setIsSecondExpanded] = useState(false);
    const [isThirdExpanded, setIsThordExpanded] = useState(false);

    const handleAccordionClick = () => {
        setIsExpanded(!isExpanded);
    }

    const handleSecondAccordionClick = () => {
        setIsSecondExpanded(prevState => !prevState);
    }

    const handleThirdAccordionClick = () => {
        setIsThordExpanded(prevState => !prevState);
    }

    const getAccordionAnimation = (isExpanded, dark) => {
        if (isExpanded) {
            return {
                borderRadius: '1rem',
                transition: 'background-color 0.3s ease-in-out',
                animation: dark ? 'darkBackgroundAnim 2s ease-in 0s 1 normal forwards' : 'backgroundAnim 2s ease-in 0s 1 normal forwards'
            };
        }
        return { borderRadius: '1rem', transition: 'background-color 0.3s ease-in-out' }
    }

    return (
        <>
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between">
                <div className='flex-grow mb-5 md:mb-0 md:mr-5'
                    data-aos="fade-down-right"
                    data-aos-duration={aosDuration}
                >
                    <Accordion defaultExpanded={isExpanded}
                        className={`mb-5 ${isExpanded ? 'bg-blue-200' : 'bg-gray-200 hover:bg-blue-100'} w-full md:w-64`}
                        style={getAccordionAnimation(isExpanded, dark)}
                        onClick={handleAccordionClick}

                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className='flex items-center'
                        >
                            <SettingsEthernetIcon />
                            <p className='text-2xl font-semibold ml-3 fontheader'> Frontend </p>
                        </AccordionSummary>
                        <AccordionDetails className='m-4 fontheader'>
                            <PercentageBar name={'javascript'} percentage={70} color={'#975a16'} isExpanded={isExpanded} />
                            <PercentageBar name={'HTML'} percentage={75} color={'#975a16'} isExpanded={isExpanded} />
                            <PercentageBar name={'CSS'} percentage={75} color={'#975a16'} isExpanded={isExpanded} />
                            <PercentageBar name={'React'} percentage={70} color={'#975a16'} isExpanded={isExpanded} />
                            <PercentageBar name={'Tailwind'} percentage={75} color={'#975a16'} isExpanded={isExpanded} />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='flex-grow mb-5 md:mb-0 md:mr-5'
                    data-aos="fade-down"
                    data-aos-duration={aosDuration + 400}
                >
                    <Accordion
                        className={`mb-5 ${isSecondExpanded ? 'bg-blue-200' : 'bg-gray-200 hover:bg-blue-100'} w-full md:w-64`}
                        style={getAccordionAnimation(isSecondExpanded, dark)}
                        onClick={handleSecondAccordionClick}

                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <StorageIcon />
                            <p className='text-2xl font-semibold ml-3 fontheader'> Backend </p>
                        </AccordionSummary>
                        <AccordionDetails className='m-4 fontheader'>
                            <PercentageBar name={'postgreSQL'} percentage={70} color={'#975a16'} isExpanded={isSecondExpanded} />
                            <PercentageBar name={'Javascript'} percentage={75} color={'#975a16'} isExpanded={isSecondExpanded} />
                            <PercentageBar name={'Knex'} percentage={75} color={'#975a16'} isExpanded={isSecondExpanded} />
                            <PercentageBar name={'Redis'} percentage={60} color={'#975a16'} isExpanded={isSecondExpanded} />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='flex-grow mb-5 md:mb-0 md:mr-5'
                    data-aos="fade-down-left"
                    data-aos-duration={aosDuration + 600}
                >
                    <Accordion
                        className={`mb-5 ${isThirdExpanded ? 'bg-blue-200' : 'bg-gray-200 hover:bg-blue-100'} w-full md:w-64`}
                        style={getAccordionAnimation(isThirdExpanded, dark)}
                        onClick={handleThirdAccordionClick}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <FormatListBulletedIcon />
                            <p className='text-2xl font-semibold ml-3 fontheader'> Other </p>
                        </AccordionSummary>
                        <AccordionDetails className='m-4 fontheader'>
                            <PercentageBar name={'Github'} percentage={65} color={'#975a16'} isExpanded={isThirdExpanded} />
                            <PercentageBar name={'Postman'} percentage={70} color={'#975a16'} isExpanded={isThirdExpanded} />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div >
        </>
    )
}

export default AccordionComponent;