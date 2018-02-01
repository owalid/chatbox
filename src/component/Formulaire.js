import React from 'react';

class Formulaire extends React.Component{

    state={
      length: this.props.length
    };
    createMessage = event => {
        event.preventDefault();

        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage(message);

        //reset
         this.messageForm.reset();
         const length = this.props.length;
         this.setState({length});

    };

    compteur = event => {
      const length = this.props.length - this.message.value.length;
      this.setState({length});
    };

    render(){
        return(
                <form className="form" onSubmit={e => this.createMessage(e)} ref={input =>{this.messageForm = input}}>
                   <textarea required maxLength={this.props.length} onChange={e => this.compteur(e)} ref={input =>{this.message = input}}>
                   </textarea>
                    <div className="info">{this.state.length}</div>

                    <button type="submit">Envoyer</button>
                </form>

        )
    }
    static propTypes={
        addMessage: React.PropTypes.func.isRequired,
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.string.isRequired
    };
}


//exporter connexion pour l'utiliser dans index.js
export default Formulaire;