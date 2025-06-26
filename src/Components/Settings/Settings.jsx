import React from 'react'
import {Link} from "react-router-dom";
import { useState,useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../firebase"
import {  FiPlusSquare, FiBarChart2, FiCheckCircle, FiSettings, FiHelpCircle } from "react-icons/fi";
let email;
let password;
const Settings = () => {
  
  
  const [picture,setPicture]=useState( null)
  const [isEditing,setIsEditing]=useState(true)
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""

  })
  const fileInputRef = useRef(null)
  function handleChange(e){
   setFormData({...formData,[e.target.value]:e.target.value})
  }
  function toggleEdit(){
    setIsEditing(!isEditing)
  }
function handlePictureChange (e){
  const file = e.target.files[0];
  if(file){
    const pictureUrl=URL.createObjectURL(file);
    setPicture(pictureUrl);
  }
  
}
const handleButton = ()=>{
  fileInputRef.current.click();
}
  const handleRegister= async ()=>{
     try{
      await createUserWithEmailAndPassword(auth,email,password);
      alert("User is registered successfully ");
     }catch(error){
      alert(error.message);
     }
    toggleEdit(); 
  }
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

    
    <main className='ml-7'> 
      <h1 className='font-bold text-4xl mb-6'>Settings</h1>
      <div className="grid grid-cols-2 gap-7">
        <div className="pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2 className='font-bold text-2xl'>User Profile</h2>
          <p>Manage you personal information and preferences</p>
          <div className="flex gap-4 mt-4 mb-4">
            {picture? <img src={picture} alt="Profile" className='w-24 h024 rounded-full object-cover'/>:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-18">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
            }
            <input type="file" accept='image/*' ref={fileInputRef}
              onChange={handlePictureChange} className='hidden'/>       

            <button onClick={handleButton} className="pt-4 flex border border-gray-300 rounded px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
Upload New Picture</button>
          </div>
          <div className="">
  <p className="flex flex-col">
   {isEditing ? (
        <>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong></p>
          </>)}
          </p>
          </div>
          <button className=' mr-5 mt-5 border border-gray-300 rounded px-2 py-1'>Change Password</button>
          <button onClick={handleRegister} className='mt-5 bg-blue-700 border border-gray-300 rounded px-2 py-1'>{isEditing?"Save Changes":"Edit changes"}</button>
        </div>
        <div className="pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2 className='font-bold text-3xl mt-3'>Notification Preferences</h2>
          <p className='mt-2 mb-3'>Customize how you receive alerts and updates</p>
          <h4 className='mb-2 font-bold'>Email Reminders</h4>
          <p className='mb-2'>Receive email notifications for task deadlines</p>
          <h4 className='font-bold mb-2'>Job Update Alerts</h4>
          <p className='mb-2'>Get notified about new Job postings matching your criteria</p>
          <h4 className='mb-2'>Notification Frequency</h4>
          <div className='flex flex-col'>
          <select name="" id="">
            <option value="">Daily</option>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
          <button className='mt-5  bg-blue-700 border border-gray-300 rounded px-2 py-1'>Save Preferences</button>
         </div>
        </div>
        <div className="flex flex-col gap-3 pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2 className='font-bold text-3xl'>Appearance</h2>
          <p>Customize the application's look and feel</p>
          <h3 className='font-bold'>Dark Mode</h3>
          <p>Toggle between light and dark themes</p>
          <button className='mt-5 bg-blue-700 border border-gray-300 rounded px-2 py-1'>Apply Theme</button>
        </div>
        <div className=" flex flex-col gap-2 pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2>Account Settings</h2>
          <p>Manage your account and data</p>
          <div className='flex '>
          <div className='flex-1'>
          <h2>Export Data</h2>
          <p>Download your application data.</p>
          </div>
          <button className='flex  h-9 justify-center flex-1 border border-gray-300 rounded px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
</svg>
Export Data</button>
          </div>
          <div className='flex'>
            <div className='flex-1'>
          <h2>Delete Account</h2>
          <p>Permanently delete your account and all associated data</p>
          </div>
          <button className=' bg-red-600   flex-1 ml-4 h-9 justify-center flex border border-gray-300 px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
Delete Account</button>
          </div>
          <button className=' bg-blue-700 border border-gray-300 rounded px-2 py-1'>Save Settings</button>
        </div>
        <div className="flex flex-col gap-2 pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2>Privacy and Security</h2>
          <p>Control your account security and privacy</p>
          <h3>Enable two-factor Authentication</h3>
          <p>Add an extra layer of security to your account</p>
         <div className='flex'>
          <div className='flex-1'>
          <h3>Manage Active Sessions</h3>
          <p>See devices logged into your account</p>
          </div>
          <button className=' h-9 border border-gray-300 rounded px-2 py-1'>View Sessions</button>
          </div>
          <div className='flex'>
            <div className='flex-1'>
          <h3>Logout from all devices</h3>
          <p>Sign out from all active sessions immediately</p>
          </div>
          <button className='flex h-9 border border-gray-300 rounded px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>
Logout All</button>
          </div>
          <button className="bg-blue-700 border border-gray-300 rounded px-2 py-1 mt-5">Save Security Settings</button>
        </div>
        <div className="pt-4 pl-4 pb-4 border border-gray-300 rounded px-2 py-1">
          <h2>Connected Applications</h2>
          <p>Integrate with your favorite services to enhance functionality</p>
          <div className="flex mb-4  mt-4">
            <p className="flex-1"><img src="" alt="" /> Google calendar</p>
            <button>Connect</button>
          </div>
          <div className="flex mb-4 ">
            <p className="flex-1"><img src="" alt="" /> LinkedIn</p>
            <button>Connect</button>
          </div>
          <div className="flex mb-4 ">
            <p className="flex-1"><img src="" alt="" /> Twitter</p>
            <button>Connect</button>
          </div>
          <div className="flex mb-4 ">
            <p className="flex-1"><img src="" alt="" /> Instagram</p>
            <button>Connect</button>
          </div>
          <div className="flex mb-4 ">
            <p className="flex-1"><img src="" alt="" /> Microsoft Outlook</p>
            <button>Connect</button>
          </div>
           <div className="flex mb-4 ">
            <p className="flex-1"><img src="" alt="" /> Github</p>
            <button>Connect</button>
          </div>
          <button className='h-9 border border-gray-300 rounded px-2 py-1'>Manage All integrations</button>
        </div>
        
      </div>
    </main>
    </div>
    
    
    </>
  )
}

export default Settings