import Actualite from "./Actualite"
import Apropos from "./Apropos"
import Decouvrir from "./decouvrir"

const Acceuil = () => {
    return (
        <>
        <section id="begin">
            <div className="begin11">
            <h2>Bienvenue à l'Univeristé de Toamasina </h2>
            <p>Une université publique de premier plan située dans la ville portuaire animée de Toamasina,
            sur la cote est de Madagascar. Nous offrons une large gamme de programmes de premier cycle et de deuxieme 
            cycle dans les domaines des arts et des sciences,de ingénierie,du commerce et de l'éducation</p>
            </div>        
        </section>

        <section className="section2">
        <div className="sectionPresident">
        <h2 className="titre">Mot Du Président</h2>
        <div className="nomP">
        <h4 className="nomdiny">Dr HDR Diny RAZANAKOLONA</h4>
        </div>
        <div className="sectionmotdePresident">
            <div className="motdu">
                <div id="diny">
                    <img src="image/diny.jpg" alt="logo"className="sarydiny"/>
                </div>
            </div>
            <div className="motdu">
                <div id="mtPresident1">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis aspernatur, quaerat corporis quas excepturi 
                        nesciunt eum illo deserunt! Atque animi consectetur ipsa 
                        cum commodi assumenda tempore cupiditate sapiente nihil eaque.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis aspernatur, quaerat corporis quas excepturi 
                            nesciunt eum illo deserunt! Atque animi consectetur ipsa 
                            cum commodi assumenda tempore cupiditate sapiente nihil eaque.
                        </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis aspernatur, quaerat corporis quas excepturi 
                            nesciunt eum illo deserunt! Atque animi consectetur ipsa 
                            cum commodi assumenda tempore cupiditate sapiente nihil eaque.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
        <Actualite/>
        <Decouvrir/>
        </>
    ) 
}
export default Acceuil