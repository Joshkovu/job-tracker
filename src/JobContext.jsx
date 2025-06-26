import { createContext,useContext,useState } from "react";

const JobContext = createContext ();

export function useJobs  (){ 
    return useContext(JobContext)
}
export const JobProvider =({children})=>{
    const [jobs,setJobs]=useState([]);
    const addJob =(job)=>{
        setJobs((prev)=> [...prev,job])
    }
    return (
        <JobContext.Provider
         value={{jobs,addJob}}
        >
            {children}
        </JobContext.Provider>
    )
}