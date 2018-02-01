//React
import React from 'react';

//Component
import Formulaire from './Formulaire';
import Message from './Message';

//base
import base from '../base';

//css
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component {
    //State
    state ={
        messages: {}
    };

    //Cycle de vie
    componentWillMount(){
        this.ref = base.syncState('/',{
                                        context: this,
                                        state: 'messages'})
    }

    componentDidUpdate(){
        //mettre le scroll en bas a l'arriver d'un nouveaux message
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    //fonction
    addMessage = message =>{
      //copier le state
        const messages = {...this.state.messages};

      //ajouter le message avec un key timestamp
        const timesstamp = Date.now();
        messages[`message-${timesstamp}`] = message;

      //on garde que 10 messages
        Object.keys(messages).slice(0, - 5).map(key => messages[key] = null);

      //Mettre a jours le state
        this.setState({messages});
    };

    isUser = (pseudo) =>{
      return pseudo === this.props.params.pseudo;
    };
    render() {

        const messages = Object.keys(this.state.messages).map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser} />);


        return (
            <div className="box">
                <div className="messages" ref={input => this.messages = input}>
                    <ReactCSSTransitionGroup component="div" className="message" transitionName="message" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        {messages}
                    </ReactCSSTransitionGroup>
                    {/*<Message pseudo={this.props.params.pseudo}/>*/}


                </div>
                    <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140"/>
            </div>
        )
    }
    static propTypes={
        params: React.PropTypes.object.isRequired
    };
}

export default App;