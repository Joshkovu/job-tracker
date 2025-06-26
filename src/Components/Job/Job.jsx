import React from 'react'
import {Link} from "react-router-dom";
import {useState} from "react"
import { useJobs } from '../../JobContext';
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
const Job = () => {
  const [darkMode, setDarkMode] = React.useState(() => {
          const stored = localStorage.getItem("dashboard-theme");
          return stored ? stored === "dark" : false;
  });
  const {addJob}=useJobs();
  const [job,setJob]=useState({company:"", location:"",link:"",status:"",position:"", title:"",date:"",notes:""});
  
  const handleSubmit =(e)=>{
        e.preventDefault();
        if(job.company && job.position && job.date && job.status){
    addJob(job);
    setJob({company:"", location:"",status:"",link:"",position:"", title:"",date:"",notes:""})
    }
  }
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
  const [contacts,setContacts]=useState([])
  const [newContact,setNewContact]=useState({name:"",role:""});
  const handleChange = (e)=>{
    setNewContact({...newContact,[e.target.name]:e.target.value})
  }
  const addNewContact=()=>{
    if(newContact.name && newContact.role){
    setContacts([...contacts,newContact])
    setNewContact({name:"",role:""});}
  }
  return (
    <div className={`transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
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
                    
                    <div className={`hover:bg-sky-700  rounded-2xl p-2  flex items-center gap-2 mb-3`}>
                      
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
    
    <div className='mt-10 ml-6 w-lvw'>
        <h1 className='font-bold text-3xl mb-6'>Track a New Opportunity</h1>
        <div className={`border ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border-gray-300 p-6 rounded-lg shadow-md `}>
        <h1 className='text-2xl'>Job Details</h1>
        <p className="mb-9">Enter the core information for this job opportunity</p>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2">
            <div className="">
             <div className="mb-4">
                <h4>Company Name</h4>
                <input name="company" className='pl-4 border border-gray-300 rounded px-2 py-1' value={job.company} onChange={(e)=>setJob({...job,company:e.target.value})} type="text" placeholder='eg google'/>
             </div>
              <div className="mb-4">
                <h4>Location</h4>
                <input name="location" value={job.location} onChange={(e)=>setJob({...job,location:e.target.value})} className='pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='eg Kampala'/>
             </div>
              <div className="mb-4">
                <h4>Status</h4>
                <select value={job.status} onChange={(e)=>setJob({...job,status:e.target.value})} className={`border ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border-gray-300 p-2 rounded-lg shadow-md `} type="text" placeholder='Applied'>
               <option value="">Select status</option>
  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Offer Received">Offer Received</option>
  <option value="Rejections received">Rejections received</option>
              </select>
             </div>
              <div className="mb-4">
                <h4>Application Link</h4>
                <input  name="link" value={job.link} onChange={(e)=>setJob({...job,link:e.target.value})} className='pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='eg https://careers.google.com/job/123'/>
             </div>
            </div>
            <div className="company-position">
                <div className="mb-4">
                <h4>Position Title</h4>
                <input  name="position" value={job.position} onChange={(e)=>setJob({...job,position:e.target.value})} className='pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='eg Software engineer'/>
             </div>
              <div className="mb-4">
                <h4>Job Title</h4>
                <input  name="title" value={job.title} onChange={(e)=>setJob({...job,title:e.target.value})} className='pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='full time'/>
             </div>
              <div className="mb-4">
                <h4>Date Applied</h4>
                <input  name="date" value={job.date} onChange={(e)=>setJob({...job,date:e.target.value})} className='pl-4 border border-gray-300 rounded px-2 py-1' type="date" />
             </div> 
             <div>
              <button  className='border bg-blue-600 border-gray-300 p-2 rounded-lg shadow-md '>Save changes</button>
             </div>
            </div>
            </div>
            </form>
        </div>
        <div className={`mt-6 border ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border-gray-300 p-6 rounded-lg shadow-md `}>
            <h1 className='font-bold text-3xl mb-4'>Additional Information</h1>
            <p className="mb-4">Add notes, documents and tags to enrich your job tracking</p>
           <h4>Notes</h4>
           <textarea name={job.notes} onChange={(e)=>setJob({...job,notes:e.target.value})} className='pl-3 border border-gray-300 rounded px-2 py-1'  rows="4" cols="50" placeholder="follow-up reminders,interview details"  id=""></textarea>
           <p className="resume">Upload Resume/CV used</p>
           <button className='mt-4 mb-4 flex align-center pl-3 border border-gray-300 rounded px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>
Upload Resume</button>
          <p>Tags/Labels</p>
          <span className="list-tasks"></span>
          <input className=' mb-5 pl-4 border border-gray-300 rounded px-2 py-1' type="text" placeholder='Add new tag' />
          <p className='mb-2'>Company Logo(Optional)</p>
          <button className='mt-4 mb-4 flex align-center pl-3 border border-gray-300 rounded px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>Upload Logo</button>
        </div>
        <div className={`mt-9 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md `}>
            <h1>Activity Timeline</h1>
            <p>Recent actions and updates for this job</p>
            <div className="job-list">
                <ul className="list-jobs">
                    <li className="item">
                        <img src="" alt="" />
                        <p></p><br />
                        <span className='time-stamp'></span>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`mt-8 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border border-gray-300 p-6 rounded-lg shadow-md `}>
            <h1>Contacts</h1>
            <p>Key People for this opportunity</p>
           
            <div className='mt-4'>
              <input name="name" placeholder='name' value={newContact.name} onChange={handleChange} className='border p-2 mr-2'/>
<input name="role" placeholder='Role' value={newContact.role} onChange={handleChange} className='border p-2 mr-2'/>
            </div>
            <ul>
        {contacts.map((contact,index)=>(
             <li key={index} className='border p-2 my-2 rounded'>
            {contact.name}-{contact.role}
              </li>
            ))}
            </ul>
            <button onClick={addNewContact}   className='mt-4 w-lvw flex align-center justify-center pl-3 border border-gray-300 rounded px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add new Contact</button>
        </div>
        <div className={` mt-7 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} border  border-gray-300 p-6 rounded-lg shadow-md `}>
           <div className='w-lvw align-middle justify-center'><h1 >Quick Insights</h1>
           <p>Summaries and reminders</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>

           <p>More insights will appear here as you track this job</p>
           </div> 
        </div>
        <footer className={`flex ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} gap-30 mt-5 border  border-gray-300 p-6 rounded-lg shadow-md `}>
            <button className='border border-gray-300 rounded px-2 py-1'>English</button>
            <p>@2025 jobTracker.inc</p>
        </footer>
    </div>
    </div> 
    </div>
  )
}

export default Job