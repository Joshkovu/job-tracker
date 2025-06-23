import React from 'react'
import {Link} from "react-router-dom";
import {Chart as ChartJS, BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto"
import {Bar,Line} from "react-chartjs-2"
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
const Stats = () => {
  return (
    <>
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

   
    <main className="ml-5 w-lvw mt-4">
         <nav className="flex  mb-7">
        <div className="flex-1">
            <img src="" alt="" />
            <p className='font-bold text-2xl'>JobTrack Analytics</p>
        </div>
        <div className=" flex gap-4 flex-1">
            <input className='pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='Search Applications' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

        </div>
    </nav>
        <div className="main-dashboard">
      <div className="flex gap-6 mb-7">
        <div className="description">
            <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
        </div>
        <div className="content">
            <input type="date" className='m-4 pl-4 border border-gray-300 rounded px-2 py-1'/>
            <select className='m-4 pl-4 border border-gray-300 rounded px-2 py-1' id="">
                <option value="">Software developer</option>
            </select>
            <select className='m-4 pl-4 border border-gray-300 rounded px-2 py-1' id="">
                <option value="">Kampala</option>
            </select>
            <select className='m-4 pl-4 border border-gray-300 rounded px-2 py-1' id="">
                <option value="">Microsoft</option>
            </select>
            <button className='m-4 pl-4 border border-gray-300 rounded px-2 py-1'>Apply filters </button>
            <button className='m-4 pl-4 border border-gray-300 rounded px-2 py-1'>Clear Filters</button>
        </div>
      </div>
      <div className="flex">
        <div className='grid grid-cols-2 gap-4'>
        <div className="mt-6 border border-gray-300 p-6 rounded-lg shadow-md bg-white mb-7">
            <h2>Applications by Status</h2>
            <p>Distribution of your job Applications across different stages</p>
        </div>
        <div className="mt-6 border border-gray-300 p-6 rounded-lg shadow-md bg-white mb-7">
            <h2>Applications submitted over time</h2>
            <p>Monthly trends of new applications</p>
            <div>
                <Bar 
                 data={{
                    labels:["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                    datasets:[{
                         data:[42,5,2,7]
                    }]
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
        <div className="mt-6 border border-gray-300 p-6 rounded-lg shadow-md bg-white mb-7">
            <h2>Application Progression</h2>
            <p>Cumulative progress of your job search</p>
             <div>
                <Line
                 data={{
                    labels:["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                    datasets:[{
                         data:[42,5,2,7]
                    }]
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
        <div className="mt-6 border border-gray-300 p-6 rounded-lg shadow-md bg-white mb-7">
            <h2>Job Types Status Breakdown</h2>
            <p>Status distribution across various job roles</p>
             <div>
                <Bar 
                 data={{
                    labels:["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],
                    datasets:[{
                         data:[42,5,2,7]
                    }]
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
     </div>
        </div>
          <div className="main-dashboard">
           <div className="status">
            <div className="applications">
                <div className="image">
                    <h2>Total Applications</h2>
                    <img src="" alt="" />
                </div>
            </div>
             <div className="applications">
                <div className="image">
                    <h2>Interviews Scheduled</h2>
                    <img src="" alt="" />
                </div>
            </div>
             <div className="applications">
                <div className="image">
                    <h2>Offers Received</h2>
                    <img src="" alt="" />
                </div>
            </div>
             <div className="applications">
                <div className="image">
                    <h2>Rejections</h2>
                    <img src="" alt="" />
                </div>
            </div>
             <div className="applications">
                <div className="image">
                    <h2>Saved Jobs</h2>
                    <img src="" alt="" />
                </div>
            </div>
             <div className="applications">
                <div className="image">
                    <h2>Average Time to interview</h2>
                    <img src="" alt="" />
                </div>
            </div>
            </div> 
            <div className="key">
                <h2 className="title-key">Key Performance Insights</h2>
                <p className="des">Actionable metrics to optimize your job search</p>
                <div className="offer">
                    <h3>Offer Rate</h3>
                    <span className="percentage"></span>
                    <p>Successfully converted applications to offers</p>
                </div>
                 <div className="interview">
                    <h3>Interview Success</h3>
                    <span className="percentage"></span>
                    <p>Applications progressing past initial interview</p>
                </div>
                 <div className="estimate">
                    <h3>Estimated annual Salary</h3>
                    <span className="percentage"></span>
                    <p>Based on current offers and market data</p>
                </div>
               
            </div>
             <div className="application-activity">
                    <h2>Recent Application Activity</h2>
                    <p>Latest updates on your applications</p>
                    <ul className="update-offers">
                        <li className="list-offers">
                            
                        </li>
                    </ul>
                </div>
        </div>
         </div>
    </main>
    <footer>
        
    </footer>
    </div>
    </>
  )
}

export default Stats