import React, { useContext } from 'react'
import './NewMessageForm.css'
import { ContactContext } from '../../Context/ContactContext'

const NewMessageForm = () => {

    const {addNewMessage} = useContext(ContactContext)
    
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
                addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    

    return (
        <form onSubmit={handleSubmitSendMessageForm}>
            <div>
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    )
}

export {NewMessageForm}