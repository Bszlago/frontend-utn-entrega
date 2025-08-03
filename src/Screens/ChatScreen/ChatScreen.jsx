import React, { useContext, useEffect, useState } from 'react'
import MessagesList from './../Components/MessagesList/MessagesList'
import { NewMessageForm } from './../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import { ContactContext } from '../../Context/ContactContext'


const ChatScreen = () => {

	const { contact_info, deleteAllMessages } = useContext(ContactContext)


	return (
		<div>
			<h1>Mensajes:</h1>
			{
				contact_info
				?
				(
					<div>
						{
							contact_info.messages.length > 0
							&&
							<button onClick={deleteAllMessages}>Borrar todos los mensajes</button>
						}
						<MessagesList />
						<NewMessageForm/>
					</div>
				)
				: <span>Cargando...</span>
			}

		</div>
	)
}



export default ChatScreen