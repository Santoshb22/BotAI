import React, { useEffect, useState } from 'react'
import Button from './Button'

const SaveButton = ({chatQnA, setChatQnA}) => {
    const [pastConversations, setPastConversations] = useState([]);

    useEffect(() => {
        const getOldChats = () => {
          const oldChats = localStorage.getItem('oldChats');
          if (oldChats) {
            setPastConversations(JSON.parse(oldChats));
          }
        }
        getOldChats();
      }, [])

    const storeChatsToLocalStorage = () => {
        if(chatQnA.length > 0){
            const addNewConversations = [{...pastConversations}, {chatQnA}]
            localStorage.setItem("oldChats", JSON.stringify(addNewConversations));
        }
    }

    const handleSaveChat = () => {
        storeChatsToLocalStorage();
        setChatQnA([]);

    }

  return (
    <Button onClick={handleSaveChat} buttonText={"Save"}/>
  )
}

export default SaveButton