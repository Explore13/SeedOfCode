import React, { createContext, useContext, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
    const [expanded, setExpanded] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <aside className="h-screen">
            <nav className=" h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className={`overflow-hidden transition-all text-2xl font-bold ${expanded ? "w-50" : "w-0"}`}>SeedOfCode<span className="text-xs font-semibold">Admin</span></h1>
                    <button onClick={() => setExpanded(prev => !prev)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" className="w-10 h-10 rounded-md" />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                        <div className="leading-4">
                            <a href="/users"><h4 className="font-semibold hover:underline">SeedOfCode</h4></a>
                            <span className="text-xs text-gray-600">seedofcode@gmail.com</span>
                        </div>
                    <a href="/"><MoreVertical className="hover:shadow hover:rounded-xl hover:bg-slate-200" size={20} /></a>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

const SidebarItem = ({ icon, text, to}) => {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            <Link to={to} className="flex items-center w-full">
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {isActive && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
                )}

                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text}
                    </div>
                )}
            </Link>
        </li>
    );
};

export { Sidebar, SidebarItem };
