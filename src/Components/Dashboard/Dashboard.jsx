import React from 'react'
import {Link} from "react-router-dom";
import {Chart as ChartJS, BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend,
} from "chart.js/auto"
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { useJobs } from '../../JobContext';
import {Bar} from "react-chartjs-2"
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
const Dashboard = () => {
        const {jobs}=useJobs();
        
        const statusCount={
                Applied:0,
                Interview:0,
                'Offer Received':0,
                'Rejection received':0
        }
        jobs.forEach(job=>{
                statusCount[job.status]++
        })
const [darkMode, setDarkMode] = React.useState(() => {
        const stored = localStorage.getItem("dashboard-theme");
        return stored ? stored === "dark" : false;
});
React.useEffect(() => {
        if (darkMode) {
                document.body.style.backgroundColor = "#111827"; // dark bg
                document.body.style.color = "#f3f4f6"; // light text
        } else {
                document.body.style.backgroundColor = "#ffffff"; // white bg
                document.body.style.color = "#1d4ed8"; // blue text
        }
}, [darkMode]);
React.useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("dashboard-theme", darkMode ? "dark" : "light");
}, [darkMode]);

const toggleTheme = () => setDarkMode((prev) => !prev);

return (
        <div className={`transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
                <div className="flex min-h-screen">
                        {/* Sidebar */}
                        <aside className={` p-6 w-64 flex flex-col gap-6 border-r border-gray-200 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
                                <div className="flex items-center justify-between mb-6">
                                        <span className="text-xl font-bold tracking-tight text-blue-800">JobTracker</span>
                                        <button
                                                onClick={toggleTheme}
                                                className="rounded-full p-2 transition-colors duration-300 hover:bg-sky-700 hover:text-white focus:outline-none"
                                                aria-label="Toggle dark mode"
                                        >
                                                {darkMode ? (
                                                        <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                ) : (
                                                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                                        </svg>
                                                )}
                                        </button>
                                </div>
                                <nav className={`flex flex-col gap-2 `}>
                                        <Link to="/Home" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white  text-blue-800" >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                                                </svg>
                                                Home
                                        </Link>
                                        <Link to="/Dashboard" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white text-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                                </svg>
                                                Dashboard
                                        </Link>
                                        <Link to="/Job" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white text-blue-800">
                                                <FiPlusSquare />
                                                Add Job
                                        </Link>
                                        <Link to="/Stats" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white text-blue-800">
                                                <FiBarChart2 />
                                                Analytics
                                        </Link>
                                        <Link to="/Tasks" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white text-blue-800">
                                                <FiCheckCircle />
                                                Tasks
                                        </Link>
                                        <Link to="/Settings" className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white text-blue-800">
                                                <FiSettings />
                                                Settings
                                        </Link>
                                        <div className="flex items-center gap-2 p-2 rounded-xl transition-colors duration-300 hover:bg-sky-700 hover:text-white cursor-pointer text-blue-800">
                                                <FiHelpCircle />
                                                <span>Help & Support</span>
                                        </div>
                                </nav>
                        </aside>
                        <section className="flex-1 px-8 py-6 transition-colors duration-300">
                                <div className={`border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow  ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} mt-8 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 transition-colors duration-300`}>
                                        <h2 className="font-bold text-3xl flex-1">Dashboard</h2>
                                        
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                                        {[
                                                { title: "Jobs Applied", value: statusCount.Applied, desc: "Total jobs submitted", color: "bg-sky-100 dark:bg-sky-900" },
                                                { title: "Interviews Scheduled", value:statusCount.Interview, desc: "Upcoming interviews", color: "bg-emerald-100 dark:bg-emerald-900" },
                                                { title: "Offers Received", value:statusCount['Offer Received'], desc: "Job offers in hand", color: "bg-yellow-100 dark:bg-yellow-900" },
                                                { title: "Rejection Received", value: statusCount['Rejection received'], desc: "Applications declined", color: "bg-red-100 dark:bg-red-900" },
                                        ].map((card, idx) => (
                                                <div
                                                        key={idx}
                                                        className={`border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-md ${card.color} transition-colors duration-300 flex flex-col items-start hover:scale-105 hover:shadow-lg transform `}
                                                >
                                                        <p className="text-sm font-medium mb-2">{card.title}</p>
                                                        <span className="text-3xl font-bold mb-1">{card.value}</span>
                                                        <span className="text-xs text-gray-500 dark:text-gray-400">{card.desc}</span>
                                                </div>
                                        ))}
                                </div>
                                <main className={`flex flex-col md:flex-row ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} gap-6 mb-14`}>
                                        <div className={`flex-1 border  ${darkMode ? "bg-gray-900 dark:border-gray-800 text-gray-100" : "bg-gray-50 text-gray-900"} p-6 rounded-2xl shadow-md  transition-colors duration-300`}>
                                                <p className="font-semibold mb-1">Application status</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Overview of your job application pipeline</p>
                                                <Bar
                                                        data={{
                                                                labels: ["Applied", "Interviewing", "Offer", "Rejected"],
                                                                datasets: [
                                                                        {
                                                                                label: "Status",
                                                                                data: [
                                                                                        statusCount.Applied,
                                                                                         statusCount.Interview,
                                                                                  statusCount['Offer Received'],
                                                                                  statusCount['Rejection received']  ],
                                                                                backgroundColor: [
                                                                                        "rgba(59,130,246,0.7)",
                                                                                        "rgba(16,185,129,0.7)",
                                                                                        "rgba(251,191,36,0.7)",
                                                                                        "rgba(239,68,68,0.7)"
                                                                                ]
                                                                        }
                                                                ]
                                                        }}
                                                        options={{
                                                                responsive: true,
                                                                plugins: {
                                                                        legend: { display: false },
                                                                        title: { display: false }
                                                                }
                                                        }}
                                                />
                                        </div>
                                        <div className={`flex-1 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-md ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
                                                <h1 className="font-semibold mb-1">Recent Activity</h1>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Latest updates on your applications</p>
                                                <div className="recent-jobs">
                                                        <ul className="list">
                                                                <li className="list-item text-gray-400 dark:text-gray-600">No recent activity.</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </main>
                                <div className={`border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-md ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
                                        <p className="font-bold text-2xl mb-1">Job Applications</p>
                                        <p className="mb-6 text-gray-500 dark:text-gray-400">Detailed overview of all your applications</p>
                                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                                               
                                                <input type="text" placeholder="Search by Company" className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg  focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />
                                              
                                                
                                        </div>
                                        <div className="flex  gap-4">
                                                <div className="font-semibold flex-1/5">
                                                 <h1>Company</h1>
                                                 <div>
                                                           <ul>
                              {jobs.map((job,index)=>(
                         <li key={index} >
                             {job.company}
                                    </li>
                                       ))}
                                                </ul>
                                                 </div>
                                                </div>
                                                
                                                  <div className="font-semibold flex-1/5">
                                                 <h1>Position</h1>
                                                 <div>
                                                           <ul>
                              {jobs.map((job,index)=>(
                         <li key={index} >
                             {job.position}
                                    </li>
                                       ))}
                                                </ul>
                                                 </div>
                                                </div>
                                               
                                                  <div className="font-semibold flex-1/5">
                                                 <h1>Date Applied</h1>
                                                 <div>
                                                           <ul>
                              {jobs.map((job,index)=>(
                         <li key={index} >
                             {job.date}
                                    </li>
                                       ))}
                                                </ul>
                                                 </div>
                                                </div>
                                               
                                                  <div className="font-semibold flex-1/5">
                                                 <h1>Status</h1>
                                                 <div>
                                                           <ul>
                              {jobs.map((job,index)=>(
                         <li key={index} >
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                                                        job.status === "Applied" ? "bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-200" :
                                                                                        job.status === "Interview" ? "bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" :
                                                                                        job.status === "Offer Received" ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                                                                                        "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200"
                                                                                }`}>
                                                                                        {job.status}
                                                                                </span>
                                    </li>
                                       ))}
                                                </ul>
                                                 </div>
                                                </div>
                                              
                                                    <div className="font-semibold flex-1/5">
                                                 <h1>Location</h1>
                                                 <div>
                                                           <ul>
                              {jobs.map((job,index)=>(
                         <li key={index} >
                             {job.location}
                                    </li>
                                       ))}
                                                </ul>
                                                 </div>
                                                </div>
                                        </div>
                                        {/* Example job card */}
                                        <div className="mt-4 flex flex-col gap-4">
                                                {jobs.length === 0 ? (
                                                        <div className="text-center text-gray-400 dark:text-gray-600 py-8">No job applications found.</div>
                                                ) : (
                                                        jobs.map((job, idx) => (
                                                               
                                                                        <span key={idx}>
                                                                               
                                                                        </span>
                                                                        
                                                        
                                                        ))
                                                )}
                                        </div>
                                </div>
                
                        
                        
                        </section>
                </div>
        </div>
);
}

export default Dashboard