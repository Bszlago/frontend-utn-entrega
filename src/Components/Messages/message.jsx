import React, { useState } from 'react'
import { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import './Message.css'
const Message = ({emisor, hora, id, texto, status}) => {

	console.log(emisor)
	const {deleteMessageById} = useContext(ContactContext)
    
	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	let message_container_class = 'message-container'

	if(emisor === 'YO'){
		message_container_class += ' my-message'
	}
	else{
		message_container_class += ' other-message'
	}

	return (
		<div className={message_container_class}>
			<div onContextMenu={handleChangeMessageSelected} className='message'>
				<p>{texto}</p>
				<span>{hora}</span>
				{
					message_selected && <button onClick={() => {deleteMessageById(id)}}>Eliminar</button>
				}
			</div>
		</div>
		
	)
}
export default Message