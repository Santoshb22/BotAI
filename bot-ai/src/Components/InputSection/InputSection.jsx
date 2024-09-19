import { useState } from 'react'
import AskButton from '../Button/AskButton';
import SaveButton from '../Button/SaveButton';
import styles from "./InputSection.module.css";

const InputSection = ({setChatQnA, chatQnA, setStartChatting}) => {
    const [userInput, setuserInput] = useState("");

    const handleInputChange = (value) => {
        setuserInput(value)
      }
  return (
    <div className={styles.inputContainer}>
        <input 
        className={styles.inputBox} type = "text"
        value={userInput}
        onChange={(e) => {handleInputChange(e.target.value)}}
        />

        <AskButton userInput = {userInput} setuserInput = {setuserInput} setChatQnA = {setChatQnA} setStartChatting = {setStartChatting}/>
        <SaveButton chatQnA = {chatQnA} setChatQnA = {setChatQnA}/>
    </div>
  )
}

export default InputSection;