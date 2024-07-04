import { useContext } from "react"
import { DataContext } from "./Provider"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

const EditData = () => {
  const { apiData, userId, setReload, modifyUserData } = useContext(DataContext)

  const navigate = useNavigate()

  const modifyUserID = apiData.filter((data) => {
    if (userId == data.id) {
      return data
    }
  })

  const updateUser = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const editName = e.target[0].value
    const editUname = e.target[1].value
    const editEmail = e.target[2].value
    const editPhone = e.target[3].value
    const editWebsite = e.target[4].value

    //Passes the modifed data from the Form fields
    modifyUserData(editName, editUname, editEmail, editPhone, editWebsite)

  }
  return (
    <div className="edit_form">
      <button className="btn btn-primary text-white" id="add_back" onClick={() => {
        setReload(true)
        navigate("/")
      }} style={{ margin: "10px" }}>Home</button>
      <h1 className="frm_hdr">Modify Existing UserData</h1>
      {modifyUserID.map((modifyUser) => {
        return (
          <form className="form" onSubmit={updateUser} key={modifyUser.id}>
            <label htmlFor="edit_name" id="name">Name:&nbsp;</label>
            <input type="text"
              id="edit_name_txt"
              placeholder="Enter name"
              defaultValue={modifyUser.name}
            />
            <br /><br />
            <label htmlFor="edit_uname" id="uname">User Name: &nbsp;</label>
            <input type="text"
              id="edit_uname_txt"
              placeholder="Enter User Name"
              defaultValue={modifyUser.username}
            /><br /><br />
            <label htmlFor="email" id="email">Email: &nbsp;</label>
            <input type="email"
              id="edit_edit_email_txt"
              placeholder="Enter Email Id"
              defaultValue={modifyUser.email}
            /><br /><br />
            <label htmlFor="edit_phone" id="phone">Phone: &nbsp;</label>
            <input type="text"
              id="edit_phone_txt"
              placeholder="Enter Phone num"
              defaultValue={modifyUser.phone}
            /><br /><br />
            <label htmlFor="edit_website" id="website">Website: &nbsp;</label>
            <input type="text"
              id="edit_web_txt"
              placeholder="Enter website Id"
              defaultValue={modifyUser.website}
            /><br /><br />
            <button type="submit" className="btn btn-primary text-white" style={{ marginLeft: "100px" }}>Update User</button>
          </form>
        )})
      }
        <ToastContainer />
    </div>
  )
}

export default EditData