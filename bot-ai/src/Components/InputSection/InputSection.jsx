import { useState, useCallback } from 'react';
import AskButton from '../Button/AskButton';
import SaveButton from '../Button/SaveButton';
import styles from "./InputSection.module.css";

const InputSection = ({ setChatQnA, chatQnA, setStartChatting }) => {
    const [userInput, setUserInput] = useState("");

    const handleInputChange = useCallback((value) => {
        setUserInput(value);
    }, []);

    return (
        <div className={styles.inputContainer}>
            <input 
                className={styles.inputBox} 
                type="text"
                value={userInput}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <AskButton 
                userInput={userInput} 
                setUserInput={setUserInput} 
                setChatQnA={setChatQnA} 
                setStartChatting={setStartChatting} 
            />
            <SaveButton 
                chatQnA={chatQnA} 
                setChatQnA={setChatQnA} 
                setStartChatting={setStartChatting} 
            />
        </div>
    );
};

export default InputSection;
