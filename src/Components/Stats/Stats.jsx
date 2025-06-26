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
    <>
     <div className="flex min-h-screen">
             {/* Sidebar */}
             <aside className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} bg-gray-100 p-6 w-64 flex flex-col gap-6 border-r`}>
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
                           <div className="hover:bg-sky-700 rounded-2xl p-2 flex items-center gap-2">
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
      
   
    <main className="ml-5  w-lvw mt-4">
         <nav className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} flex  mb-7`}>
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
      <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} flex gap-6 mb-7`}>
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
        <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
            <h2>Applications by Status</h2>
            <p>Distribution of your job Applications across different stages</p>
        </div>
        <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
            <h2>Applications submitted over time</h2>
            <p>Monthly trends of new applications</p>
            <div className="" style={{ height: "200px", width: "700px" }}>
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
        <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
            <h2>Application Progression</h2>
            <p>Cumulative progress of your job search</p>
             <div className="" style={{ height: "200px", width: "700px" }}>
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
        <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
            <h2>Job Types Status Breakdown</h2>
            <p>Status distribution across various job roles</p>
             <div className="" style={{ height: "200px", width: "500px" }}>
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
        
          <div className="ml-7">
           <div className="grid grid-cols-2">
            <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex align-center">
                    <h2>Total Applications</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

                </div>
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border ml-4 border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex align-middle">
                    <h2>Interviews Scheduled</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

                </div>
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex align-middle">
                    <h2>Offers Received</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>

                </div>
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}  ml-3 border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex  gap-3">
                    <h2>Rejections</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </div>
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300  p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex gap-3">
                    <h2>Saved Jobs</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

                </div>
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 ml-3 p-6 rounded-lg shadow-md  mb-7`}>
                <div className="flex">
                    <h2>Average Time to interview</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                </div>
            </div>
            </div> 
            <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                <h2 className="text-3xl">Key Performance Insights</h2>
                <p className="mt-2">Actionable metrics to optimize your job search</p>
                <div className="mt-3 mb-4">
                    <h3>Offer Rate</h3>
                    <span className="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" color='blue'   strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
      <span>    </span>
                    </span>
                    <p>Successfully converted applications to offers</p>
                </div>
                 <div className="mt-3 mb-4">
                    <h3>Interview Success</h3>
                    <span className="">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" color='red' strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>
   <span></span>
                    </span>
                    <p>Applications progressing past initial interview</p>
                </div>
                 <div className="mt-3 mb-4">
                    <h3>Estimated annual Salary</h3>
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" color='green' strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>  <span></span>

                    </span>
                    <p>Based on current offers and market data</p>
                </div>
               
            </div>
             <div className={`mt-6 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md  mb-7`}>
                    <h2>Recent Application Activity</h2>
                    <p>Latest updates on your applications</p>
                    <ul className="update-offers">
                        <li className="list-offers">
                            
                        </li>
                    </ul>
                </div>
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