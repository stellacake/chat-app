import React from 'react';
import './Contact.css';

// function Contact (props) {
//     return (
// <div className="Contact">
//     <img className="avatar" src={props.avatar} alt={props.name}/>
//     <div><p className="name">{props.name}</p>
//     <div class="status">
//     <div className="status-online"></div>
//     <p className="status-text">{props.online ? "online" : "offline"}</p>
//     </div>
//     </div>
// </div>
//     );
// }

class Contact extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           online: this.props.online,
       };
   }
    render () {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div><p className="name">{this.props.name}</p>
                <div class="status" onClick={event => {
            const newOnline = !this.state.online;
            this.setState({ online: newOnline });
            }}>
                <div className={this.state.online ? "status-online" : "status-offline"}></div>
                <p className="status-text">{this.state.online ? "online" : "offline"}</p>
                </div>
                </div>
            </div>
                );

    }
}

export default Contact;