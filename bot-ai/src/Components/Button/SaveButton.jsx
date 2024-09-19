import React, { useEffect, useState } from 'react'
import Button from './Button'
import { v4 as uuid } from "uuid";


const SaveButton = ({chatQnA, setChatQnA}) => {
    const [pastConversations, setPastConversations] = useState([]);
    const uniqueId = uuid();
    const smallId = uniqueId.slice(0, 8);

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
          const sessionData = chatQnA;
          const newSession = {
            sessionDate: new Date(),
            sessionId: smallId,
            sessionData,
          }

          const addNewConversations = [...pastConversations, newSession];
          localStorage.setItem("oldChats", JSON.stringify(addNewConversations));
          setPastConversations(addNewConversations)
          console.log("Saved chat to local: ", addNewConversations);
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