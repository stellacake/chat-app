import React from 'react';
import './Contact.css';

let connexion = true;

function Contact () {
    return (
<div className="Contact">
    <img className="avatar" src="https://randomuser.me/api/portraits/women/39.jpg" alt="Isabella picture"/>
    <div><p className="name">Thérèse Leblanc</p>
    <div class="status">
    <div className="status-online"></div>
    <p className="status-text">{connexion ? "online" : "offline"}</p>
    </div>
    </div>
</div>
    );
}

export default Contact;