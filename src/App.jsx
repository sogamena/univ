import { useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from './Router/Router';
import Apropos from './components/Apropos';




const App =()=> {
  const location = useLocation()
  return (
    <>
    {location.pathname !=="/not-found" &&
    <Header/>}
    <AppRouter/>
    {location.pathname !=="/not-found" && <Footer/>}
    </>
  )
}
export default App
