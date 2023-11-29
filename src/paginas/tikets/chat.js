import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../css/chat.css';

const Chat = ({ tipoUsuario }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Obtener mensajes desde la API solo para el ticket actual
      axios
        .get(`http://localhost:4000/messages?tikets=${id}`)
        .then((response) => setMessages(response.data))
        .catch((error) => console.error('Error fetching messages:', error));
    }
  }, [id]);

  const handleSendMessage = async () => {
    try {
      // Enviar un nuevo mensaje a la API con el ID del ticket
      const response = await axios.post('http://localhost:4000/messages', {
        content: newMessage,
        tipoUsuario,
        tikets: id,
      });

      // Actualizar el estado con el nuevo mensaje
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const mensajesFiltrados = messages.filter((message) => message.tikets === id);

  return (
    <div className="container bootstrap snippets bootdeys">
      <div className="col-md-7 col-xs-12 col-md-offset-2">
        <div className="panel" id="chat">
          <div className="panel-heading">
            <h3 className="panel-title">
              <i className="icon wb-chat-text" aria-hidden="true" /> Chat
            </h3>
          </div>
          <div className="panel-body">
            <div className="chats">
              {mensajesFiltrados.map((message) => (
                <div
                  key={message.id}
                  className={`chat ${
                    message.tipoUsuario === 'administador' ? 'AdminPage' : 'ClientPage'
                  }`}
                >
                  <div className="chat-avatar">{/* Puedes mostrar la información del usuario aquí */}</div>
                  <div className="message-container">
                    <div className="message">
                      <strong>{message.tipoUsuario}:</strong> {message.content}
                    </div>
                  </div>
                </div>
              ))}
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
                    type="button"
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
