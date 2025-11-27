import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Panel from "./components/Panel"
import { lazy, Suspense } from "react"
import Footer from "./components/Footer.tsx"
import style from "./app.module.scss"
import CompareFlowers from "./components/compare/CompareFlowers.tsx"

function App() {

  const AboutPage=lazy(()=>import("./components/About.tsx"))
  const SignIn=lazy(()=>import("./components/Login.tsx"))
  const SignUpLazy=lazy(()=>import("./components/Signup.tsx"))
  const OrderFlowers=lazy(()=>import("./components/orderflowers/Orderflowers.tsx"))
  const DashboardSellers=lazy(()=>import("./components/Dashboard/Sellers/Sellers.tsx"))
  const ContactPage=lazy(()=>import("./components/Contact.tsx"))
  const FAQPage=lazy(()=>import("./components/FAQ.tsx"))
  const PrivacyPage=lazy(()=>import("./components/Privacy.tsx"))
  return (
    <>
    <BrowserRouter>
    <Header />
    <div className={`${style.minHeight}`}>

    <Suspense fallback={<div style={{ padding: "40px", textAlign: "center" }}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUpLazy />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="order" element={<OrderFlowers />} />
        <Route path="compare" element={<CompareFlowers />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="/dashboard/sellers" element={<DashboardSellers />} />
      </Routes>
    </Suspense>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
