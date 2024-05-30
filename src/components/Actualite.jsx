import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlick } from "../lib/slick";
import { Link } from "react-router-dom";

const Actualite = () => {
    const [actualites, setActualites] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredActualites, setFilteredActualites] = useState([]);

    const getActualite = () => {
        fetch(`http://localhost:5173/api/actualite`)
            .then((rep) => rep.json())
            .then((data) => {
                setActualites(data);
                setFilteredActualites(data); // Initialize with all data
            })
            .catch(() => console.log("Erreur"));
    };

    useEffect(() => {
        getActualite();
    }, []);

    const handleSearch = () => {
        const filtered = actualites.filter(actualite =>
            actualite.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            actualite.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActualites(filtered);
    };

    return (
        <section className="section3">
            <h1 className="title">Actualités</h1>
            <div className="mitady">
                {/* <input type="text" placeholder="Recheche"/>
                <button className="goy">Recheche</button> */}
            </div>
            <div className="ligne"></div>
            <div className="container">
                <div style={{ width: "100%" }}>
                    <Slider {...settingSlick}>
                        {filteredActualites.map((sary) => (
                            <div className="sary" key={sary.id}>
                                <div className="card">
                                    <div className="img">
                                        <img src={`/gallery/${sary.image}`} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>{sary.nom}</h1>
                                        {/* <p>{sary.description}</p> */}
                                        <Link className="lien" to={"/Contact"}>Plus d'info</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="vr">
                <Link className="voir" to="">VOIR PLUS</Link>
            </div>
        </section>
    );
};

export default Actualite;
