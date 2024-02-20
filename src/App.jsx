// import './App.css'
import  React from "react";
import  {RouterProvider}  from "react-router-dom";
// import BrowserRouter from "./routes";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App
