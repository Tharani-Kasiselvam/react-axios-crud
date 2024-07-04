import axios from "axios"
import { Outlet } from "react-router-dom"
import '../App.css'
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const DataContext = createContext();


export async function loader(){
    //Below API entry point is not allowing to add data
    // const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")

    //Provided my own mockapi data and designed the Project
    const fetchApiData = await axios.get("https://666161f063e6a0189fe98846.mockapi.io/userData")
    return {fetchApiData : fetchApiData.data}
}


const Provider = ({children}) => {
    const [apiData,setApiData] = useState()
    
    useEffect(()=>{
        console.log("inside useeffect")
        loader().then((res)=>{
            console.log(res)
            setApiData(res.fetchApiData)
        })
    },[])

    const [name,setName] = useState("")
    const [uname,setuName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [website,setWebsite] = useState("")
    const [userId,setUserId] = useState(0)
    const [reload,setReload] = useState(false)

    const toastAlerts = (message,status) => {
        if(status=="success"){
            toast.success(message,{position: "top-center",theme: "colored",autoClose: "500"})
        }

        else{
            toast.error(message,{position: "top-center",theme: "colored",autoClose: "500"})
        }
    }

    //CRUD - Update selected data via axios
    const modifyUserData = (editName,editUname,editEmail,editPhone,editWebsite) => {
        editName = (name == editName) ? name : editName
        editUname = (uname == editUname) ? uname : editUname
        editEmail = (email == editEmail) ? email : editEmail,
        editPhone = (phone == editPhone) ? phone : editPhone,
        editWebsite = (website == editWebsite) ? website : editWebsite

        if (editName != "" && editUname != "" && editEmail != "" && editPhone != "" && editWebsite != "") {
            // Modifying Existing data value
            axios.put(`https://666161f063e6a0189fe98846.mockapi.io/userData/${userId}`,
                {name : editName,
                username : editUname,
                email : editEmail,
                phone : editPhone,
                website : editWebsite
                }
        )
        .then((response) => {
            setReload(false)
            toastAlerts("User Modified successfully", "success")
        }).catch((error) => {
            toastAlerts("Failed to Modify existing user","error")
        })
      }
      else {
        toastAlerts("Please Input the values for all the fields", "error")
    }
    }

    //CRUD - Delete selected data via axios
    const deleteUserData = (delUserId) => {
        //Deleting the selected User data
        axios.delete("https://666161f063e6a0189fe98846.mockapi.io/userData/"+delUserId)
        .then((response) => {
        setReload(true)
        toastAlerts("User Deleted successfully", "success")
        }).catch((error) => {
          toastAlerts("Failed to Delete user","error")
         })
        }

  return (
        <DataContext.Provider value = {{apiData,setApiData,name,uname,email,phone,website,userId,reload,
            setName,setuName,setEmail,setPhone,setWebsite,setUserId,modifyUserData,deleteUserData,setReload}}>
              {children}
              <Outlet />
        </DataContext.Provider>
  )
}

export default Provider