import { useState } from "react"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddData = () => {
    const [name,setName] = useState("")
    const [uname,setuName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [website,setWebsite] = useState("")

    const toastAlerts = (message,status) => {
        if(status=="success"){
            toast.success(message,{position: "top-center",theme: "colored",autoClose: "2000"})
        }

        else{
            toast.error(message,{position: "top-center",theme: "colored",autoClose: "2000"})
        }
    }


    const addNewUser = (e) => {
        e.preventDefault()
        // let newUser = {}
        {console.log(name,"--",uname,"--",email)}

            //creating object for new user
            const newUser = {
                name, 
                username:uname, 
                email,
                phone,
                website
            }
  
    if(name!="" && uname!="" && email!="" && phone!="" && website!=""){
    //adding the new user
    axios.post("https://666161f063e6a0189fe98846.mockapi.io/userData",newUser)
        .then((response) => {toastAlerts("User added successfully","success")

        }).catch((error) => {
            toastAlerts("Failed to add new user","error")
        })
    }
    else{
        toastAlerts("Please Input the values for all the fields","error")
    }
        setName("");
        setuName("");
        setEmail("");
        setPhone("");
        setWebsite("");
    }

  return (
    <div className="add_form">
        <h1 className="frm_hdr">New User creation</h1>
        <form className="form" onSubmit={addNewUser}>
            <label htmlFor="name" id="name">Name:&nbsp;</label> 
            <input type="text" 
            id="name_txt"
            placeholder="Enter name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            /><br /><br />
            <label htmlFor="uname" id="uname">User Name: &nbsp;</label>
            <input type="text" 
            id="uname_txt"
            placeholder="Enter User Name"
            value={uname}
            onChange={(e)=>setuName(e.target.value)}
            /><br /><br />
            <label htmlFor="email" id="email">Email: &nbsp;</label>
            <input type="email" 
            id="email_txt"
            placeholder="Enter Email Id"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /><br /><br />
            <label htmlFor="phone" id="phone">Phone: &nbsp;</label>
            <input type="text" 
            id="phone_txt"
            placeholder="Enter Phone num"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            /><br /><br />
            <label htmlFor="website" id="website">Website: &nbsp;</label>
             <input type="email" 
            id="web_txt"
            placeholder="Enter website Id"
            value={website}
            onChange={(e)=>setWebsite(e.target.value)}
            /><br /><br />
            <button className="btn btn-primary text-white" style={{marginLeft:"100px"}}>Add User</button>
        </form>

        <ToastContainer />
    </div>
  )
}

export default AddData