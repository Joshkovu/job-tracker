import React from 'react'
// import "./Home.css"
import trend from "../../assets/trend.png"
import {Link} from "react-router-dom";

import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
import logo from "../../assets/logo.png"
// import { HomeIcon } from '@heroicons/react/16/solid'
const Home = () => {
return (
    <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-6 w-64 flex flex-col gap-6 border-r">
            <Link to="/Home" className="hover:bg-sky-700 rounded-2xl p-2 flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
                Home
            </Link>
            <div className="hover:bg-sky-700 rounded-2xl p-2 flex items-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg><Link to="/Dashboard">Dashboard</Link> 
            </div>
            <div className="hover:bg-sky-700 rounded-2xl p-2  flex items-center gap-2">
               <FiPlusSquare /><Link to="/Job"> Add Job</Link>
            </div>
            <div className="hover:bg-sky-700 rounded-2xl p-2  flex items-center gap-2">
              <FiBarChart2 /> <Link to="/Stats">Analytics</Link> 
            </div>
            <div className="hover:bg-sky-700 rounded-2xl p-2  flex items-center gap-2">
               <FiCheckCircle /><Link to="/Tasks"> Tasks</Link>
            </div>
            <div className="hover:bg-sky-700 rounded-2xl p-2 flex items-center gap-2">
               <FiSettings /> <Link to="/Settings">Settings</Link>
            </div>
            <div className="hover:bg-sky-700 rounded-2xl p-2  flex items-center gap-2">
                <FiHelpCircle />
                <h4>Help & Support</h4>
            </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
                <div className="image">
                    <img src={logo} alt="" className="h-20 w-30 rounded-2xl " />
                </div>
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 border border-gray-300 rounded px-2 py-1" placeholder="Search tones, rules" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </div>
        </nav>
    <main className="ml-4">
        <div className="mt-9 border border-gray-300 p-6 rounded-lg shadow-md bg-white flex flex-col gap-3 mb-7 ">
            <h1 className='mt-2 font-bold text-3xl'>Welcome back</h1>
            <p>Today is  <span>Here is a summary of your job application progress</span></p>
        </div>
        <div className="flex justify-between">
            <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white flex-1/4">
                <p>Total jobs Applied</p>
                <span className="update"></span>
            </div>
             <div className="ml-3 border border-gray-300 p-6 rounded-lg shadow-md bg-white flex-1/4">
                <p>Interviews Scheduled</p>
                <span className="update"></span>
            </div>
             <div className="ml-3 border border-gray-300 p-6 rounded-lg shadow-md bg-white flex-1/4">
                <p>Offers received</p>
                <span className="update"></span>
            </div>
             <div className="ml-3 border border-gray-300 p-6 rounded-lg shadow-md bg-white flex-1/4">
                <p>Rejected Applications</p>
                <span className="update"></span>
            </div>
        </div>
        <div className="ml-3 border border-gray-300 p-6 rounded-lg shadow-md bg-white mt-16">
            <p className="recent-applications">Recent Job Applications</p>
            <div className="flex justify-between mt-7 mb-9">
                <div className="flex-1/4">
                    <p>Company</p>
                    <span></span>
                </div>
                 <div className="flex-1/4">
                    <p>Position</p>
                    <span></span>
                </div>
                 <div className="flex-1/4">
                    <p>Date Applied</p>
                    <span></span>
                </div>
                 <div className="flex-1/4">
                    <p>Status</p>
                    <span></span>
                </div>
            </div>
        </div>
        <div className="mt-6 border border-gray-300 p-6 rounded-lg shadow-md bg-white mb-7">
            <h2 className='mb-15'>Application stages</h2>
            <img className="w-2xl" src={trend} alt="" />
            <div className="flex ">
            <div className="flex-1/2">
                <p>Applied: <span></span></p>
                <p>Rejected: <span></span></p>
            </div>
            <div className="flex-1/2">
                <p>Interviewing: <span></span></p>
                <p>Hired: <span></span></p>
            </div>
            </div>
        </div>
        <div className='border border-gray-300 p-6 rounded-lg shadow-md bg-white'>
            <h2 className='font-bold text-2xl'>Quick Actions</h2>
            <div className="flex text-blue-50">
            <button className='flex items-center border bg-blue-700 border-gray-300 rounded px-4 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add Job</button>
            <button className='flex items-center border bg-blue-700 border-gray-300 rounded px-4 py-1 ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
</svg>
Go to Analytics</button>
            <button className='flex items-center border bg-blue-700 border-gray-300 rounded px-4 py-1 ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
Update Resume</button>
</div>
        </div>
    </main>
    <footer className="information">
        <p></p>
    </footer>
    </div>
     </div>
  )
}

export default Home