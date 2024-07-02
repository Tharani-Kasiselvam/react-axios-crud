import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import APIDataLoad from "./component/APIDataLoad"

import AddData from "./component/AddData"
import EditData from "./component/EditData"
import { loader as dataloader } from "./component/Provider"


const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <h1>Welcome to view the API data load via AXIOS and <Link to='/dataload'>CRUD Operations</Link></h1>,
      loader : dataloader
    },
    {
    path: "/dataload",
    element : <APIDataLoad />,
    },
    {
      path:"/addUser",
      element : <AddData />
    },
    {
      path:"/editUser",
      element : <EditData />
    }
  ])
  return <RouterProvider router={router} />
}

export default App