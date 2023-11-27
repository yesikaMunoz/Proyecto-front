import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/chat.css'

const Chat = ({ tipoUsuario }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const userId = localStorage.getItem("id");

    useEffect(() => {
      // Obtener mensajes desde la API solo para el usuario actual
      axios
        .get(`http://localhost:4000/messages/${userId}`)
        .then((response) => setMessages(response.data))
        .catch((error) => console.error("Error fetching messages:", error));
    }, [userId]);
    const handleSendMessage = () => {
        // Enviar un nuevo mensaje Link la API
        axios.post('http://localhost:4000/messages', { content: newMessage, tipoUsuario })
            .then(response => setMessages([...messages, response.data]))
            .catch(error => console.error('Error sending message:', error));

        // Limpiar el campo de nuevo mensaje
        setNewMessage('');
    };

    return (
        <div className="container bootstrap snippets bootdeys">
            <div className="col-md-7 col-xs-12 col-md-offset-2">
                {/* Panel Chat */}
                <div className="panel" id="chat">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <i className="icon wb-chat-text" aria-hidden="true" /> Chat
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="chats">
                            <div className="chat">
                                <div className="chat-avatar">
                                    {/* Contenedor de mensajes */}
                                </div>
                                <div className="message-container">
                                    {messages.map((message) => (
                                        <div className={`message ${message.tipoUsuario === 'administador' ? 'AdminPage' : 'ClientPage'}`}>
                                            <strong>{message.tipoUsuario}:</strong> {message.content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <form>
                            <div className="input-group">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        placeholder="Escribe tu mensaje..."
                                    />
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleSendMessage}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
/*
<div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-6">
                <div className="card card-bordered">
                    <div className="card-header">
                        <h4 className="card-title"><strong>Chat</strong></h4>
                    </div>
                    <div className="ps-container ps-theme-default ps-active-y" id="chat-content" style={{ overflowY: 'scroll !important', height: '400px !important' }}>
                        <div className="chat-view">
                            <div className="message-container">
                                {messages.map((message) => (
                                    <div key={message.id} className="message">
                                        <strong>{message.tipoUsuario}:</strong> {message.content}
                                    </div>
                                ))}
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                />
                                <button className="send-button" onClick={handleSendMessage}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    */
