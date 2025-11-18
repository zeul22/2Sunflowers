import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Panel from "./components/Panel"
import { lazy } from "react"


function App() {

  const AboutPage=lazy(()=>import("./components/About.tsx"))
  const SignIn=lazy(()=>import("./components/Login.tsx"))
  const SignUpLazy=lazy(()=>import("./components/Signup.tsx"))
  const OrderFlowers=lazy(()=>import("./components/orderflowers/Orderflowers.tsx"))
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" Component={()=>
        <>
        <Panel />
        </>
      } />

      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUpLazy />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="order" element={<OrderFlowers />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
