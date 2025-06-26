import React, { useState } from 'react'
// import "./Home.css"
import trend from "../../assets/trend.png"
import {Link} from "react-router-dom";
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
// import logo from "../../assets/logo.png"
// import { HomeIcon } from '@heroicons/react/16/solid'
const Home = () => {
    const [stats,setStats]=useState({
         applied:0,
         interviews:0,
         offers:0,
         rejections:0
    })
    const[applications,setApplications]=useState({
        company:"",
        position:"",
        applied:"",
        status:""
    })
// Dark mode state and effect for persistence
const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : false;
});
React.useEffect(() => {
    document.documentElement.classList.add('transition-colors', 'duration-300');
}, []);
// Ensure sidebar links have blue text in light mode and white in dark mode

React.useEffect(() => {
    const sidebarLinks = document.querySelectorAll(
        'aside .flex.items-center.gap-2.font-semibold'
    );
    sidebarLinks.forEach(link => {
        if (darkMode) {
            link.classList.add('text-blue-700');
            link.classList.remove('text-white');
        } 
    });
}, [darkMode]);
React.useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}, [darkMode]);

// Example job applications array for card rendering
const jobEntries = [
    {
        company: applications.company || "Acme Corp",
        position: applications.position || "Frontend Developer",
        applied: applications.applied || "2024-06-01",
        status: applications.status || "Interviewing"
    }
];

return (
    <div className={`flex min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-pink-50'}`}>
        {/* Sidebar */}
        <aside className={`bg-gray-100 dark:bg-gray-800 p-6 w-64 flex flex-col gap-6 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-lg ${darkMode ? '' : 'bg-gradient-to-b from-blue-100 via-white to-pink-100'}`}>
            <Link to="/Home" className="hover:bg-sky-700 text-blue-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 mb-3 font-semibold ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                Home
            </Link>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                <Link to="/Dashboard">Dashboard</Link>
            </div>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700 ">
                <FiPlusSquare /><Link to="/Job"> Add Job</Link>
            </div>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700 ">
                <FiBarChart2 /> <Link to="/Stats">Analytics</Link>
            </div>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700">
                <FiCheckCircle /><Link to="/Tasks"> Tasks</Link>
            </div>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700 ">
                <FiSettings /> <Link to="/Settings">Settings</Link>
            </div>
            <div className="hover:bg-sky-700 hover:text-white transition rounded-2xl p-2 flex items-center gap-2 font-semibold text-blue-700">
                <FiHelpCircle />
                <h4>Help & Support</h4>
            </div>
            <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="mt-8 flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition font-semibold shadow"
                aria-label="Toggle dark mode"
            >
                {darkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M4.05 19.95l-.71-.71" />
                    </svg>
                )}
                {darkMode ? "Dark" : "Light"} Mode
            </button>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col transition-colors duration-300">
            {/* Navbar */}
            <nav className={`flex justify-between items-center p-6 shadow-sm transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-100 via-white to-pink-100'}`}>
                <div className="image">
                    <h1 className={`font-bold text-3xl transition-colors duration-300 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Job Tracker</h1>
                </div>
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${darkMode ? 'text-gray-300' : 'text-blue-400'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        className={`border rounded px-2 py-1 transition focus:border-sky-500 focus:outline-none ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500' : 'border-blue-200 bg-white text-blue-900 placeholder-blue-400'}`}
                        placeholder="Search jobs, companies"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${darkMode ? 'text-gray-300' : 'text-blue-400'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            </nav>
            <main className="ml-4">
                <div className={`mt-9 border p-6 rounded-lg shadow-md flex flex-col gap-3 mb-7 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-r from-white via-blue-50 to-pink-50'}`}>
                    <h1 className={`mt-2 font-bold text-3xl ${darkMode ? 'text-white' : 'text-blue-900'}`}>Welcome back</h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>Today is <span className="font-medium">Here is a summary of your job application progress</span></p>
                </div>
                <div className="flex flex-wrap gap-4 mb-7">
                    <div className={`flex-1 min-w-[180px] border p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-pink-50'}`}>
                        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Total jobs Applied</p>
                        <span className={`block text-2xl font-bold transition ${darkMode ? 'text-sky-400' : 'text-pink-600'}`}>{stats.applied}</span>
                    </div>
                    <div className={`flex-1 min-w-[180px] border p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-pink-50'}`}>
                        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Interviews Scheduled</p>
                        <span className={`block text-2xl font-bold transition ${darkMode ? 'text-sky-400' : 'text-yellow-500'}`}>{stats.interviews}</span>
                    </div>
                    <div className={`flex-1 min-w-[180px] border p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-pink-50'}`}>
                        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Offers received</p>
                        <span className={`block text-2xl font-bold transition ${darkMode ? 'text-sky-400' : 'text-green-600'}`}>{stats.offers}</span>
                    </div>
                    <div className={`flex-1 min-w-[180px] border p-6 rounded-xl shadow transition-all duration-300 hover:shadow-lg ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-pink-50'}`}>
                        <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Rejected Applications</p>
                        <span className={`block text-2xl font-bold transition ${darkMode ? 'text-sky-400' : 'text-red-500'}`}>{stats.rejections}</span>
                    </div>
                </div>
                <div className={`border p-6 rounded-lg shadow-md mt-16 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-r from-white via-blue-50 to-pink-50'}`}>
                    <p className={`recent-applications font-semibold text-lg mb-6 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Recent Job Applications</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobEntries.map((job, idx) => (
                            <div key={idx} className={`border rounded-xl p-5 shadow transition-all duration-300 hover:shadow-lg flex flex-col gap-2 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gradient-to-br from-white via-blue-50 to-pink-50 border-blue-100'}`}>
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg ${darkMode ? 'text-sky-400' : 'text-blue-700'}`}>{job.company}</span>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                        job.status === 'Interviewing'
                                            ? darkMode
                                                ? 'bg-yellow-900 text-yellow-200'
                                                : 'bg-yellow-100 text-yellow-800'
                                            : job.status === 'Rejected'
                                                ? darkMode
                                                    ? 'bg-red-900 text-red-200'
                                                    : 'bg-red-100 text-red-800'
                                                : job.status === 'Hired'
                                                    ? darkMode
                                                        ? 'bg-green-900 text-green-200'
                                                        : 'bg-green-100 text-green-800'
                                                    : darkMode
                                                        ? 'bg-gray-700 text-gray-200'
                                                        : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {job.status}
                                    </span>
                                </div>
                                <div className={`${darkMode ? 'text-gray-300' : 'text-blue-900'}`}>{job.position}</div>
                                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-blue-400'}`}>Applied: {job.applied}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`mt-6 border p-6 rounded-lg shadow-md mb-7 transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-r from-white via-blue-50 to-pink-50'}`}>
                    <h2 className={`mb-4 font-semibold text-lg ${darkMode ? 'text-white' : 'text-blue-900'}`}>Application stages</h2>
                    <img className="w-full max-w-2xl mx-auto rounded-lg shadow mb-6" src={trend} alt="Application trend" />
                    <div className="flex flex-wrap gap-6 justify-between">
                        <div className="flex-1 min-w-[180px]">
                            <p className={`${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Applied: <span className={`font-bold ${darkMode ? 'text-sky-400' : 'text-pink-600'}`}>{stats.applied}</span></p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Rejected: <span className={`font-bold ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{stats.rejections}</span></p>
                        </div>
                        <div className="flex-1 min-w-[180px]">
                            <p className={`${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Interviewing: <span className={`font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`}>{stats.interviews}</span></p>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-blue-700'}`}>Hired: <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{stats.offers}</span></p>
                        </div>
                    </div>
                </div>
                <div className={`border p-6 rounded-lg shadow-md transition-colors duration-300 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-blue-200 bg-gradient-to-r from-white via-blue-50 to-pink-50'}`}>
                    <h2 className={`font-bold text-2xl mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Quick Actions</h2>
                    <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 border bg-blue-700 hover:bg-blue-800 border-blue-300 dark:border-gray-700 rounded px-4 py-2 text-white transition-all duration-200 shadow font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Job
                        </button>
                        <button className="flex items-center gap-2 border bg-pink-600 hover:bg-pink-700 border-pink-300 dark:border-gray-700 rounded px-4 py-2 text-white transition-all duration-200 shadow font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>
                            Go to Analytics
                        </button>
                        <button className="flex items-center gap-2 border bg-green-600 hover:bg-green-700 border-green-300 dark:border-gray-700 rounded px-4 py-2 text-white transition-all duration-200 shadow font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            Update Resume
                        </button>
                    </div>
                </div>
            </main>
            <footer className={`information mt-8 text-center text-sm ${darkMode ? 'text-gray-500' : 'text-blue-400'}`}>
                <p>© {new Date().getFullYear()} Job Tracker. All rights reserved.</p>
            </footer>
        </div>
    </div>
);
}

export default Home