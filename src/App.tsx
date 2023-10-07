
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/screen/Layout"
import { Primary } from "./components/screen/Primary"
import { Secondary } from "./components/screen/Secondary"
import { Tertiary } from "./components/screen/Tertiary"
import { Quadrinary } from "./components/screen/Quadrinary"

import { ViewData } from "./components/screen/ViewData"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Primary />
      },

      {
        path: "/secondary",
        element: <Secondary />
      },

      {
        path: "/tertiary",
        element: <Tertiary />
      },
      {
        path: "/quadrinary",
        element: <Quadrinary />
      },

      {
        path: "/viewdata",
        element: <ViewData />
      },


    ]
  },
])


function App() {



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
