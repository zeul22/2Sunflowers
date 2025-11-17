import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import Panel from "./components/Panel"
import Login from "./components/modals/Login"


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" Component={()=>
        <>
        <Header />
        <Panel />
        </>
      } />

      <Route path="/login" Component={()=><Login  />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
