import { useContext } from 'react'
import {DataContext} from './Provider'
import { Link } from 'react-router-dom'

const Home = () => {
    const {reload,setReload} = useContext(DataContext)

const LoadContents = () => {
    if(!reload){
        return(
        <h1>
            <Link to='/dataload'>Click here</Link> to load API Data and to perform CRUD Operations
        </h1>
        )
    }
    else{
        window.location.reload();
        setReload(false)
    }
}
  return (
    <div className='home'>
        {LoadContents()}
    </div>
  )
}

export default Home