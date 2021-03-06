import React from 'react';


class Connexion extends React.Component{

    goToChat = event => {
        event.preventDefault();

        const pseudo = this.pseudoInput.value;
        //changer l'url
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    };

    render(){
        return(
            <div className="connexionBox" onSubmit={(e) => this.goToChat(e)}>
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required ref={(input => {this.pseudoInput = input})}/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }

    static contextTypes = {
        router: React.PropTypes.object
    }
}

//exporter connexion pour l'utiliser dans index.js
export default Connexion;