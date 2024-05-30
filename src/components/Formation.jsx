import axios from "axios";
import {useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import { ContextFormation } from "../context/context";

const Formation = ()=>{
    const [Formation, setFormation]=useState([])
    const getFormation = async ()=>{
        try{
            const dataFormation = axios.get(`http://localhost:5173/api/decouvrir`)
            dataFormation.then(rep=>setFormation(rep.data))
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getFormation()
    },[]);
    return (
        <section className="top">
            <div className="mega-web">
                <h2>Nos formation</h2>
                <div className="wx" style={{width:"100%"}}>
                    {
                        Formation.map((gal)=>
                            <div className="box-web" key={gal.id}>
                                <img src={`/decouvrir/${gal.image}`} alt="" />
                                <h4>{gal.title} {gal.niveau}</h4>
                                <Link className="aaa" to={`/formation/detail/${gal.id}`}>Plus d'info</Link>
                            </div>
                        ) 
                    }
                </div>
            </div>
        </section>
    )
}
export default Formation