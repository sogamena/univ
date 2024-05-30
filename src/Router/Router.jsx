import { Route, Routes } from "react-router-dom"
import Acceuil from "../components/Acceuil"
import Univeristé from '../components/Universite'
import Apropos from "../components/Apropos"
import Formation from "../components/Formation"

 

const AppRouter = ()=>{
    return (
        <Routes>
            <Route path={"/"} element={<Acceuil/>}/>
            <Route path={"/universite"} element={<Univeristé/>}/>
            <Route path={"/formation"} element={<Formation/>}/>
            <Route path={"/apropos"} element={<Apropos/>}/>

        </Routes>
    )
}
export default AppRouter
