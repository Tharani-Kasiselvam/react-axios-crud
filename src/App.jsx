import { RouterProvider, createBrowserRouter } from "react-router-dom"
import APIDataLoad from "./component/APIDataLoad"

import {loader as dataLoader} from './component/APIDataLoad'
import AddData from "./component/AddData"
import EditData from "./component/EditData"

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <APIDataLoad />,
      loader : dataLoader
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