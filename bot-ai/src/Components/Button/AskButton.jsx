import React, { useCallback } from 'react';
import Button from "./Button";
import { data } from "../../StaticData/data";
import botAIImg from "../../assets/botAIimg.png";
import userImg from "../../assets/userimg.png";

const AskButton = ({ userInput, setUserInput, setStartChatting, setChatQnA }) => {

    const handleAsk = useCallback(() => {
        if (!userInput) return;

        const matchData = data.find(item => item.question.toLowerCase() === userInput.toLowerCase());

        setStartChatting(true);
        const time = new Date().toLocaleTimeString();

        if (matchData) {
            setChatQnA(prev => [
                ...prev, 
                {
                    id: matchData.id,
                    question: matchData.question,
                    response: matchData.response,
                    bot_img: botAIImg,
                    user_img: userImg,
                    message_time: time,
                },
            ]);
        } else {
            setChatQnA(prev => [
                ...prev, 
                {
                    id: time,
                    question: userInput,
                    response: "As an AI modal I'm not able to response this question",
                    bot_img: botAIImg,
                    user_img: userImg,
                    message_time: time,
                },
            ])
        }

        setUserInput("");
    }, [userInput, setUserInput, setChatQnA, setStartChatting]);

    return (
        <Button onClick={handleAsk} buttonText={"Ask"} />
    );
};

export default AskButton;
