import { useNavigate } from "react-router-dom"
import '../App.css'
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useContext } from "react";
import { DataContext } from "./Provider"
import { ToastContainer } from "react-toastify"


const APIDataLoad = () => {
    const {apiData,setUserId,deleteUserData} = useContext(DataContext);

    const navigate = useNavigate();

       const addClickHandler = () => {
        navigate("/addUser")
         }

        const editUserHandler = (userId) => {
            if(userId!=0){
            setUserId(userId)
            navigate("/editUser")
             }
        }

        const deleteUserHandler = (userId) => {
            deleteUserData(userId)
            setTimeout(() => {
                navigate("/")
              }, 3000);
        }

  return (
    <div className="main">
          <h1 style={{textAlign:"center"}}>API Data</h1> 
                <span id="btn-align"><button className="btn btn-primary" 
                    style={{marginLeft:"10px"}}
                    onClick={()=>{
                        navigate("/")
                        }} >Home</button>
                <div className="card-deck"></div>
               <button className="btn btn-primary" 
                    style={{marginLeft:"10px"}}
                    onClick={addClickHandler}>Create New User</button></span>
                <div className="card-deck">
                {apiData.map(data=>{
                    return (
                        <form key={data.id}>
                        <div className="card">
                            <div className="card-body">
                            <p className="card-text"><b>Name: </b> 
                            <input type="text" id="data-val-name" value={data.name} disabled></input> <br />
                            </p>
                            <p className="card-text"><b>UserName: </b> 
                            <input type="text" id="data-val-uname" value={data.username} disabled></input> <br />
                            </p>
                            <p className="card-text"><b>Email: </b> 
                            <input type="text" id="data-val-email" value={data.email} disabled></input> <br />
                            </p>
                            <p className="card-text"><b>Phone: </b> 
                            <input type="text" id="data-val-email" value={data.phone} disabled></input> <br />
                            </p>
                            <p className="card-text"><b>Website: </b> 
                            <input type="text" id="data-val-email" value={data.website} disabled></input> <br />
                            </p>
                            <div className="oprtns">
                                <LuClipboardEdit size={25} color="blue" onClick={()=>editUserHandler(data.id)}/> &emsp; &emsp; &emsp;
                                <RiDeleteBin2Line size={25} color="red" onClick={()=>deleteUserHandler(data.id)}/>
                            </div>
                            </div>

                        </div>
                        </form>
                    )
                })}
        </div>
        <ToastContainer />
    </div>
  )
}

export default APIDataLoad