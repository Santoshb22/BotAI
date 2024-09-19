import { useEffect, useState } from "react";
import BotAiText from "../../Components/BotAiText";
import Button from "../../Components/Button/Button";
import HomeDefault from "../../Components/HomeDefault/HomeDefault";
import Sidebar from "../../Components/Sidebar/Sidebar"
import styles from "./Home.module.css";
import ChatCard from "../../Components/Cards/ChatCard/ChatCard";
import botAIImg from "../../assets/botAIimg.png";
import userImg from "../../assets/userimg.png";
import AskButton from "../../Components/Button/AskButton";

const Home = () => {
  const [randomClicked, setRandomClicked] = useState(null);
  const [startChatting, setStartChatting] = useState(false);
  const [chatQnA, setChatQnA] = useState([]);
  const [userInput, setuserInput] = useState("");


  const handleInputChange = (value) => {
    setuserInput(value)
  }

  useEffect(() => {
    if(randomClicked) {
      setChatQnA((prev) => {
       return [...prev,
        { id: randomClicked.id,
          question: randomClicked.question, 
          response: randomClicked.response, 
          bot_img: botAIImg,
          user_img: userImg
        }]
      })
      setStartChatting(true);
    }
  }, [randomClicked])


  useEffect(() => {
    console.log("Updated chatQuestions:", chatQnA);
  }, [chatQnA]);

  return (
    <div className={styles.homePage}>
        <div className={styles.sideBar}>
            <Sidebar/>
        </div>


        <div className={styles.homeContent}>
            <div>
              <BotAiText/>
            </div>

            <div className={styles.bottomHomeContent}>
            {startChatting === true ? (
            <div className={styles.chattingContainer}>
              {chatQnA.length > 0 ? (
                chatQnA.map((data) => (
                  <div key={data.id} className={styles.message}>
                    <ChatCard data={data} showQuestion = {true}/>
                    <ChatCard data={data} showAnswer = {true}/>
                  </div>
                ))
              ) : (
                <h2>Something went wrong</h2>
              )}
            </div>
          ) : (
            <div className={styles.randomQuestioDisplay}>
              <HomeDefault setRandomClicked={setRandomClicked} />
            </div>
          )}

              <div className={styles.inputContainer}>
                <input 
                className={styles.inputBox} type = "text"
                value={userInput}
                onChange={(e) => {handleInputChange(e.target.value)}}
                />

                <AskButton userInput = {userInput} setuserInput = {setuserInput} setChatQnA = {setChatQnA} setStartChatting = {setStartChatting}/>
                <Button buttonText={"Save"}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home