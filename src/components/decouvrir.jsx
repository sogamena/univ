import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlick } from "../lib/slick";
import { Link } from "react-router-dom";

const Decouvrir = () => {
    const [Decouvrir, setDecouvrir] = useState([]);

    const getDecouvrir = () => {
        fetch(`http://localhost:5173/api/decouvrir`)
            .then((rep) => rep.json())
            .then((data) => {
                setDecouvrir(data);
            })
            .catch(() => console.log("Erreur"));
    };

    useEffect(() => {
        getDecouvrir();
    }, []);

    return (
        <section className="section3">
            <h1 className="title">Découvrir les formations</h1>
            <div className="ligne"></div>
            <div className="container">
                <div style={{ width: "100%" }}>
                    <Slider {...settingSlick}>
                        {Decouvrir.map((sary) => (
                            <div className="sary" key={sary.id}>
                                <div className="cards">
                                    <div className="img">
                                        <img src={`/decouvrir/${sary.image}`} alt="" />
                                        <div className="boutonLien">
                                            <Link className="infos" to={"/formation"}>Plus d'info</Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h1>{sary.title}</h1>
                                        <p>{sary.describe}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="vr">
                <div className="boribory">
                    <div className="rond1"></div>
                    <div className="rond1"></div>
                    <div className="rond1"></div>
                </div>
            </div>
        </section>
    );
};



export default Decouvrir;
