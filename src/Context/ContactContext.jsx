import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getContactById } from "../services/contactService";

export const ContactContext = createContext()


const ContactContextProvider = ({ children }) => { 
    const { contact_id } = useParams()

    
    const [contact_info, setContactInfo] = useState(null)


    
    useEffect(
        
        () => {
            setTimeout(
                () => {
                    
                    const contact_selected = getContactById(contact_id)

                    
                    setContactInfo(contact_selected)
                },
                2000
            )


        },
        [contact_id]
    )

    const deleteMessageById = (message_id) => {
        const new_message_list = []
        for (const message of contact_info.messages) {
            if (message.id !== message_id) {
                new_message_list.push(message)
            }
        }

        setContactInfo(
            { ...contact_info, messages: new_message_list }
        )
    }

    const addNewMessage = (text) => {

        const new_mesage = {
            emisor: 'YO',
            hora: '11:10', //Investigar acerca de Date.
            texto: text,
            status: 'no-visto',
            id: contact_info.messages.length + 1
        }
        
        const cloned_messages_list = [...contact_info.messages]
        cloned_messages_list.push(new_mesage)
        setContactInfo(
            { ...contact_info, messages: cloned_messages_list }
        )
        
    }

    const deleteAllMessages = () => {
        setContactInfo(
            { ...contact_info, messages: [] }
        )
    }



    return (
        <ContactContext.Provider value={
            {
                contact_info: contact_info,
                deleteAllMessages: deleteAllMessages,
                deleteMessageById: deleteMessageById,
                addNewMessage: addNewMessage
            }
        }>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider