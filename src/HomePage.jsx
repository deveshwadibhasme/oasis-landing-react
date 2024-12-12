import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Service from "./components/Service"
import Team from "./components/Team"

const HomePage = () => {
  return (
    <>
        <Home/>
        <About/>
        <Service/>
        <Team/>
        <Contact/>
        <Footer />
    </>
  )
}

export default HomePage