import Brochure from "./components/Brochure"
import Events from "./components/Events"
import Footer from "./components/Footer"
import Model3d from "./components/Model3d"
import NavbarActionButtonPreview from "./components/NavbarActionButtonPreview"
import Team from "./components/Team"
import Techtop from "./components/Techtop"
 
 
const App = () => {
  return (
    <>
    <NavbarActionButtonPreview/> 
    <Techtop/>
    <Model3d/>
    <Events/>
    <Brochure/>
    <Team/> 
    <Footer/>   
    </>
    
    )
}

export default App