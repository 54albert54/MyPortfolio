import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"


const Layout = ({ children }) => {
    return (
        <section className="relative  w-screen max-w-[1440px] mx-auto">
       <Navbar />
        <main>{children}</main>
        
             
        <Footer /> 
        </section>
    )
}

export default Layout