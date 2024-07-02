import { useContext } from "react"
import { DataContext } from "./Provider"
// import Provider from "./Provider"

const EditData = () => {
    const editUserHandler = useContext(DataContext)
    console.log("Edit Data componenet",editUserHandler)
    const updateUser = () => {

    
    }
  return (
    // <Provider>
    <div className="edit_form">
        <h1 className="frm_hdr">Modify Existing UserData</h1>
        {/* <form className="form" onSubmit={updateUser}>
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
            <button className="btn btn-primary text-white" style={{marginLeft:"100px"}}>Update User</button>
        </form> */}

        {/* <ToastContainer /> */}
    </div>
    // </Provider>
  )
}

export default EditData