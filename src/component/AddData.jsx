import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from "./Provider"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AddData = () => {
    const { setReload, name, uname, email, phone, website, setName, setuName, setEmail, setPhone, setWebsite } = useContext(DataContext)

    const navigate = useNavigate()

    const toastAlerts = (message, status) => {
        if (status == "success") {
            toast.success(message, { position: "top-center", theme: "colored", autoClose: "500" })
        }

        else {
            toast.error(message, { position: "top-center", theme: "colored", autoClose: "500" })
        }
    }

    //CRUD - Add a new user via Axios
    const addNewUserHandler = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            username: uname,
            email,
            phone,
            website
        }

        if (name != "" && uname != "" && email != "" && phone != "" && website != "") {
            //adding the new user
            axios.post("https://666161f063e6a0189fe98846.mockapi.io/userData", newUser)
                .then((response) => {
                    toastAlerts("User added successfully", "success")
                    setReload(true)
                }).catch((error) => {
                    toastAlerts("Failed to add new user", "error")
                })
        }
        else {
            toastAlerts("Please Input the values for all the fields", "error")
        }
        setName("");
        setuName("");
        setEmail("");
        setPhone("");
        setWebsite("");
    }

    return (
        <div className="add_form">
            <button className="btn btn-primary text-white" id="add_back" onClick={() => {
                navigate("/")
            }} style={{ margin: "10px" }}>Home</button>
            <h1 className="frm_hdr">New User creation</h1>
            <form className="form" onSubmit={addNewUserHandler}>
                <label htmlFor="name" id="name">Name:&nbsp;</label>
                <input type="text"
                    id="name_txt"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />
                <label htmlFor="uname" id="uname">User Name: &nbsp;</label>
                <input type="text"
                    id="uname_txt"
                    placeholder="Enter User Name"
                    value={uname}
                    onChange={(e) => setuName(e.target.value)}
                /><br /><br />
                <label htmlFor="email" id="email">Email: &nbsp;</label>
                <input type="email"
                    id="email_txt"
                    placeholder="Enter Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />
                <label htmlFor="phone" id="phone">Phone: &nbsp;</label>
                <input type="text"
                    id="phone_txt"
                    placeholder="Enter Phone num"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                /><br /><br />
                <label htmlFor="website" id="website">Website: &nbsp;</label>
                <input type="text"
                    id="web_txt"
                    placeholder="Enter website Id"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                /><br /><br />
                <button className="btn btn-primary text-white" style={{ marginLeft: "100px" }}>Add User</button>
            </form>

            <ToastContainer />
        </div>
    )
}

export default AddData