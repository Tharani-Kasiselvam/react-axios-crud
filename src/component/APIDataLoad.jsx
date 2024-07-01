import axios from "axios"
import { useLoaderData, useNavigate } from "react-router-dom"
import '../App.css'
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";


export async function loader(){

    //Below API entry point is not allowing to add data
    // const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")

    //Provided my own mockapi data and designed the Project
    const apiData = await axios.get("https://666161f063e6a0189fe98846.mockapi.io/userData")
    return {apiData : apiData.data}
}


const APIDataLoad = () => {
    const {apiData} = useLoaderData()
    console.log(apiData)
    const navigate = useNavigate()

    const addClickHandler = () => {
        navigate("/addUser")
    }

    const editUserHandler = () => {
        navigate("/editUser")
    }

  return (
    <div className="main">
               <h1 style={{textAlign:"center"}}>API Data</h1> 
               <button className="btn btn-primary" 
                    style={{marginLeft:"10px"}}
                    onClick={addClickHandler}>Create New User</button>
                <div className="card-deck">
                {apiData.map(data=>{
                    return (
                        <form key={data.id} >
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
                                <LuClipboardEdit size={25} color="blue" onClick={editUserHandler}/> &emsp; &emsp; &emsp;
                                <RiDeleteBin2Line size={25} color="red"/>
                            </div>
                            </div>

                        </div>
                        </form>
                    )
                })}

        </div>
    </div>
  )
}

export default APIDataLoad