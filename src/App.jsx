import { RouterProvider, createBrowserRouter } from "react-router-dom"
import APIDataLoad from "./component/APIDataLoad"

import AddData from "./component/AddData"
import EditData from "./component/EditData"
import { loader as dataloader } from "./component/Provider"
import Home from "./component/Home"

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home />,
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
      element : <EditData />,
    }
  ])
  return <RouterProvider router={router} />
}

export default App