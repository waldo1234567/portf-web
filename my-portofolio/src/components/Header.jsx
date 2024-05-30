import React from "react";
import '../css/index.css';
import '../css/header.css';
import { useScroll } from "../ScrollContext/ScrollContext";

const Header = ({ dark }) => {
    const { aboutMeRef, skillsRef, projectRef, contactRef } = useScroll();

    const handleScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigation = [
        { name: 'about me', ref: aboutMeRef },
        { name: 'Skills', ref: skillsRef },
        { name: 'Projects', ref: projectRef },
        { name: 'Contact me', ref: contactRef },
    ];
    return (
        <>
            <header className={`inset-x-0 top-0 z-50 ${dark ? 'bg-black' : 'bg-slate-50'} fontheader`}>
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1"></div>
                    <div className="hidden lg:flex lg:gap-x-24">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.ref)}
                                className={`text-sm font-semibold leading-6 ${dark ? 'text-slate-50' : 'text-black'} Link-container`}>
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                    </div>
                </nav>

            </header>
        </>
    )

}

export default Header;