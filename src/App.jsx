import { RouterProvider, createBrowserRouter } from "react-router-dom"
import APIDataLoad from "./component/APIDataLoad"

import {loader as dataLoader} from './component/APIDataLoad'

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <APIDataLoad />,
      loader : dataLoader
    }
  ])
  return <RouterProvider router={router} />
}

export default App