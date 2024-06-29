import axios from "axios"
import { useLoaderData } from "react-router-dom"
import '../App.css'

export async function loader(){
    const apiData = await axios.get("https://jsonplaceholder.typicode.com/users")
    return {apiData : apiData.data}
}


const APIDataLoad = () => {
    const {apiData} = useLoaderData()
    console.log(apiData)

  return (
    <div className="main">
               <h1 style={{textAlign:"center"}}>API Data</h1>
                <div className="card-deck">
                {apiData.map(data=>{
                    return (
                        <div key={data.id} className="card">
                            <div className="card-body">
                            <p className="card-text"><b>Name:</b> {data.name}</p>
                            <p className="card-text"><b>UserName:</b> {data.username}</p>
                            <p className="card-text"><b>Email:</b> {data.email}</p>
                            <p className="card-text"><b>Addres:</b> {data.address.street},{data.address.suite},{data.address.suite},{data.address.city},{data.address.zipcode}</p>
                            <p className="card-text"><b>Contact:</b> {data.phone}</p>
                            <p className="card-text"><b>Website:</b> {data.website}</p>
                            <p className="card-text"><b>company: </b> {data.company.name}<br />
                            <b>Catch Phrase: </b>{data.company.catchPhrase}<br /></p>




                            </div>

                        </div>
                    )
                })}

        </div>
    </div>
  )
}

export default APIDataLoad