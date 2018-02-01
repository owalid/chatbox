import React from 'react';

class Formulaire extends React.Component{
    render(){
        return(
                <form className="form">
                   <textarea required maxLength="140">
                   </textarea>
                    <div className="info">140</div>

                    <button type="submit">Envoyer</button>
                </form>

        )
    }
}

//exporter connexion pour l'utiliser dans index.js
export default Formulaire;