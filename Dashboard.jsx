import React from 'react'
import {Link} from "react-router-dom";
import {Chart as ChartJS, BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto"
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

import {Bar} from "react-chartjs-2"
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
const Dashboard = () => {
return (
    <div>
             <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="bg-gray-100 p-6 w-64 flex flex-col gap-6 border-r">
                    <div className="hover:bg-sky-700 rounded-2xl p-2  flex items-center gap-2 mb-3">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                            </svg><Link to="/Home"> Home</Link>
                    </div>
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
            <section className='pl-10'>
                    <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white mt-8 flex justify-end gap-130 mb-16">
                    <h2 className="font-bold text-3xl flex-1">Dashboard</h2>
                    <div className="flex gap-7 flex-1 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 absolute pt-5">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

                            <input type="text"placeholder='Last 30 Days' className='pl-9 border border-gray-300 rounded px-2 py-1' />
                            <select name="" id="">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
<option value=""></option>
                            </select>
<button className='border border-gray-300 flex items-center bg-blue-700 rounded px-4 py-1'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>Add new Application</button>
                    </div>
            </div>
            <div className="flex mb-16">
                    <div className="flex-1/4 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="description">Jobs Applied</p> <br />
                            <span className="applied">42</span> <br />
                            <span>Total jobs submitted</span>
                    </div>
                     <div className="ml-8 flex-1/4 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="description">Interviews Scheduled</p> <br />
                            <span className="">5</span> <br />
                            <span>Upcoming interviews</span>
                    </div>
                     <div className="ml-8 flex-1/4 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="description">Offers Received</p> <br />
                            <span className="applied">2</span> <br />
                            <span>Job offers in hand</span>
                    </div>
                     <div className="ml-8 flex-1/4 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="description">Rejections Received</p> <br />
                            <span className="applied">7</span> <br />
                            <span>Applications declined</span>
                    </div>
            </div>
            
            <main className="flex mb-14">
                    <div className="flex-1 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="app-description">Application status</p>
                            <p className="overview">Overview of your job application pipeline</p>
                 <div>
                    <Bar
                        data ={{
                            labels:["Applied","Interviewing","Offer","Rejected"],
                            datasets:[
                                 { label:"Status",
                                    data:[42,5,2,7],
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
                    </div>
                    <div className="ml-8 flex-1 border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <h1>Recent Activity</h1>
                            <p>Latest updates on your applications</p>
                            <div className="recent-jobs">
                                    <ul className="list">
                                            <li className="list-item"> <span className="description-job"></span></li>
                                    </ul>
                            </div>
                    </div>
                    </main>
                    <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                            <p className="font-bold text-3xl">Job Applications</p>
                            <p className='mt-3'>Detailed overview of all your applications</p>
                    <div className="flex mt-8">
                            <input type="text"  placeholder='Search applications'/>
                            <input type="text"  placeholder='Filter by Company' name="Filter "/>
                            <input type="text" placeholder='Filter by tags'/>
                            <button className="add">Add new Job</button>
                    </div>
                    <div className="flex mt-8">
                            <div className="flex-1/5">
                                    <p>Company</p>
                                    <span className="company-name"></span>
                            </div>
                             <div className="flex-1/5">
                                    <p>Role</p>
                                    <span className="company-role"></span>
                            </div>
                             <div className="flex-1/5">
                                    <p>Date Applied</p>
                                    <span className="company-date-applied"></span>
                            </div>
                             <div className="flex-1/5">
                                    <p>Status</p>
                                    <span className="company-status"></span>
                            </div>
                             <div className="flex-1/5">
                                    <p>Notes</p>
                                    <span className="company-notes"></span>
                            </div>
                    </div>
                    </div>
            </section>
    </div>
    </div>
)
}

export default Dashboard