import React, { useEffect, useState, useCallback } from 'react';
import Button from './Button';
import { v4 as uuid } from "uuid";

const SaveButton = ({ chatQnA, setChatQnA, setStartChatting }) => {
    const [pastConversations, setPastConversations] = useState([]);
    const uniqueId = uuid().slice(0, 8);

    useEffect(() => {
        const getOldChats = () => {
            const oldChats = localStorage.getItem('oldChats');
            if (oldChats) {
                setPastConversations(JSON.parse(oldChats));
            }
        };
        getOldChats();
    }, []);

    const storeChatsToLocalStorage = useCallback(() => {
        if (chatQnA.length > 0) {
            const sessionData = chatQnA;
            const sessionDate = new Date().toISOString().split('T')[0];
            const newSession = {
                sessionDate,
                sessionId: uniqueId,
                sessionData,
            };

            const updatedConversations = [...pastConversations, newSession];
            localStorage.setItem("oldChats", JSON.stringify(updatedConversations));
            setPastConversations(updatedConversations);
            console.log("Saved chat to local: ", updatedConversations);
        }
    }, [chatQnA, pastConversations, uniqueId]);

    const handleSaveChat = useCallback(() => {
        storeChatsToLocalStorage();

        if (chatQnA.length > 0) {
            setChatQnA([]);
            setStartChatting(false);
            alert("Chat saved successfully");
        }
    }, [storeChatsToLocalStorage, chatQnA, setChatQnA, setStartChatting]);

    return (
        <Button onClick={handleSaveChat} buttonText={"Save"} />
    );
};

export default SaveButton;
