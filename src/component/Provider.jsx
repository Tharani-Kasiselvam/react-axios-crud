import axios from "axios"
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import '../App.css'
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";
import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();


export async function loader(){
console.log("****************LOADER**************")
    //Below API entry point is not allowing to add data
    // const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")

    //Provided my own mockapi data and designed the Project
    const apiData = await axios.get("https://666161f063e6a0189fe98846.mockapi.io/userData")
    return {apiData : apiData.data}
}


const Provider = ({children}) => {
    const [apiData,setApiData] = useState()


    useEffect(()=>{
        console.log("inside useeffect")
        loader().then((res)=>{
            console.log(res)
            setApiData(res.apiData)
        })
    },[])

    const [name,setName] = useState("")
    const [uname,setuName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [website,setWebsite] = useState("")

  return (
        <DataContext.Provider value = {{apiData,name,uname,email,phone,website,
            setName,setuName,setEmail,setPhone,setWebsite}}>
              {children}
        </DataContext.Provider>
  )
}

export default Provider