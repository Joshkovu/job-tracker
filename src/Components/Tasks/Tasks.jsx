import React from 'react'
import {Link} from "react-router-dom";
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
const Tasks = () => {
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
<main className="ml-5 mt-4 w-lvw ">
    <h1 className="font-bold text-4xl">Tasks overview</h1>
        <div className="flex mt-5 mb-6">
            <div className="pt-4 pl-4 pb-4 flex-1/3 border border-gray-300 rounded px-2 py-1">
              <div className='flex'>  <h4 className="flex-1">Total tasks</h4>
              <svg color='blue' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

              </div>
               <br />
                 <span className=''></span>
                 <p>All tasks across job applications</p>
            </div>
             <div className="pt-4 pl-4 pb-4 flex-1/3 border ml-4 border-gray-300 rounded px-2 py-1">
               <div className='flex'> <h4 className="flex-1">Due this week</h4> 
               <svg color='blue' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>

               </div>
               <br />
                 <span className='due'></span>
                 <p>Pending tasks with upcoming deadlines</p>
            </div>
             <div className=" pt-4 pl-4 pb-4 flex-1/3 border ml-4 border-gray-300 rounded px-2 py-1">
              <div className='flex'>  <h4 className="flex-1">Completed tasks</h4> 
              <svg color='blue'    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 flex-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

              </div>
              <br />
                 <span className='completed'></span>
                 <p>Tasks successfully finished</p>
            </div>
        </div>
        <div className="flex mb-5">
            <div className="flex flex-col pl-4 border flex-1 border-gray-300 rounded px-2 py-1">
                <h1 className='pt-4'>Add new Task</h1>
              <input className='mt-2 mb-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='Task title'/>
              <input className="mt-2 mb-4 border border-gray-300 rounded px-2 py-1" type="date" placeholder='Pick a due date' />
              <select name="Medium Priority" id="">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
              <input className='mt-2 mb-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='tags'/>
              <button className=" text-blue-50 pt-3 pb-3  flex align-center justify-center mt-2 mb-4 bg-blue-800 border border-gray-300 rounded px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add task</button>
            </div>
             <div className="pt-4 pl-4 border ml-4 flex-1 border-gray-300 rounded px-2 py-1">
                <h2 className='font-bold text-3xl'>Upcoming reminders</h2>
                <ul className="pl-9 pt-4">
                    <li>Interview with</li>
                    <li>Portfolio</li>
                    <li>Networking</li>
                </ul>
                
            </div>
        </div>
        <div className="flex">
            <div className='pl-4 flex-1/4 border border-gray-300 rounded px-2 py-1'>
                <h1 className="mt-4 mb-4">Filter Tasks</h1>
                <p className="mb-4">Related Job</p>
                <select name="All Jobs" id="">
                
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <p className="mt-4 mb-3">Tags</p>
                <select name="All tags" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <p className='mb-3 mt-4'>Due date range</p>
                <input className='mb-4 border border-gray-300 rounded px-2 py-1' type="date" />
            </div>
            <div className="flex-1/4 ml-4 border border-gray-300 rounded px-2 py-1">
               <div >
                <p><img src="" alt="" />To Do</p>
                <span className='number'>
                    <div className='mb-4 mt-4 border border-gray-300 rounded px-2 py-1'>
                    <h1>Follow Up with HR Regarding</h1>
                    <p className='flex gap-2 mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg> Jul 15 2024
</p>
 <button className='flex gap-1 mt-2 border bg-red-400 rounded-full border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg> High
       </button>
       <div className='flex mb-3'>
       <button className='mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>Follow-up
</button>
<button className='ml-2 mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>
 Application</button>
</div>
                    </div>
                </span>
                </div> 
                <ul className="list-toDo">
                    <li></li>
                </ul>
            </div>
            <div className="flex-1/4 ml-4 border border-gray-300 rounded px-2 py-1">
                  <div >
                <p><img src="" alt="" />In progress</p>
                <span className='number'>
                         <div className='mb-4 mt-4 border border-gray-300 rounded px-2 py-1'>
                    <h1>Follow Up with HR Regarding</h1>
                    <p className='flex gap-2 mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg> Jul 15 2024
</p>
 <button className='flex gap-1 mt-2 border bg-red-400 rounded-full border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg> High
       </button>
       <div className='flex mb-3'>
       <button className='mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>Follow-up
</button>
<button className='ml-2 mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>
 Application</button>
</div>
                    </div>
                </span>
                </div> 
                <ul className="list-progress">
                    <li></li>
                </ul>
            </div>
            <div className="flex-1/4 ml-4 border border-gray-300 rounded px-2 py-1">
                  <div>
                <p><img src="" alt="" />Completed</p>
                <span className='number'>
                         <div className='mb-4 mt-4 border border-gray-300 rounded px-2 py-1'>
                    <h1>Follow Up with HR Regarding</h1>
                    <p className='flex gap-2 mt-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg> Jul 15 2024
</p>
 <button className='flex gap-1 mt-2 border bg-red-400 rounded-full border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg> High
       </button>
       <div className='flex mb-3'>
       <button className='mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>Follow-up
</button>
<button className='ml-2 mt-3 flex rounded-full border border-gray-300  px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>
 Application</button>
</div>
                    </div>
                </span>
                </div> 
                <ul className="list-completed">
                    <li></li>
                </ul>
            </div>
        </div>
          <footer>
        <p>@2025 <span>Job tracker</span> All rights reserved</p>
    </footer>
    </main>
  
    </div>
    </>
  )
}

export default Tasks