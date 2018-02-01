import React from 'react';

class Message extends React.Component{
    render(){
        return(
            <p className="user-message">
                {this.props.pseudo}: Mon super message !
            </p>
        )
    }
}

//exporter connexion pour l'utiliser dans index.js
export default Message;