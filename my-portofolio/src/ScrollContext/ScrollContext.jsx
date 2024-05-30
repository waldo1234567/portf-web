import React, { createContext, useRef, useContext } from 'react';
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <ScrollContext.Provider value={{ aboutMeRef, skillsRef, projectRef, contactRef }}>
            {children}
        </ScrollContext.Provider>
    )
};

export const useScroll =()=> useContext(ScrollContext);