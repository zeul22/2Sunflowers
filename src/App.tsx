import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Panel from "./components/Panel"
import { lazy } from "react"
import Footer from "./components/Footer.tsx"
import style from "./app.module.scss"

function App() {

  const AboutPage=lazy(()=>import("./components/About.tsx"))
  const SignIn=lazy(()=>import("./components/Login.tsx"))
  const SignUpLazy=lazy(()=>import("./components/Signup.tsx"))
  const OrderFlowers=lazy(()=>import("./components/orderflowers/Orderflowers.tsx"))
  return (
    <>
    <BrowserRouter>
    <Header />
    <div className={`${style.minHeight}`}>

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
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
