import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import '../css/percentbar.css';

const PercentageBar = ({ name, percentage, color, isExpanded}) => {
    const [currentProgress,setCurrentProgress] = useState(0);

    useEffect(()=>{
        if(isExpanded){
            let increment = 1;
            const interval = setInterval(()=>{
                setCurrentProgress(prevPrecentage => {
                    if(prevPrecentage >= percentage){
                        clearInterval(interval);
                        return percentage
                    }
                    return prevPrecentage + increment;
                });
            },15);
            return ()=> clearInterval(interval);
        }else{
            setCurrentProgress(0);
        }
    },[isExpanded,percentage]);

    const linearProgressStyle = {
        '& .MuiLinearProgress-bar': {
            backgroundColor: isExpanded ? color : '#1976d2',
            transition: isExpanded ? 'background-color 1.5s ease-in-out' : "none",
            animation: isExpanded ? 'fillAnimation 1.5s ease-in-out' : 'none' 
        },

    }

    return (
        <div className='w-full'>
            <p className='mb-1 font-semibold'>{name}</p>
            <div className="flex items-center">
                <LinearProgress
                    variant='determinate'
                    value={percentage}
                    className='h-6 flex-grow mr-2'
                    sx={linearProgressStyle}
                />
                <span className="text-sm font-medium">{currentProgress}%</span>
            </div>
        </div>
    )
}

export default PercentageBar;