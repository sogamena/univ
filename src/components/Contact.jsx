const Contact =()=> {
    return (
        <section className="section3">
        <h3>Contactez-nous :</h3>
        <form>
            <input type="text" placeholder="votre nom"/>
            <input type="text" placeholder="votre prenom"/>
            <input type="email" placeholder="votre email"/>
            <textarea name="" id="" cols="30" rows="4" placeholder="votre message"></textarea>
            <button className="btn">valider</button>
        </form>
        </section>
    )
}
export default Contact