import { useEffect, useState } from "react";
import BotAiText from "../../Components/BotAiText";
import HomeDefault from "../../Components/HomeDefault/HomeDefault";
import Sidebar from "../../Components/Sidebar/Sidebar"
import styles from "./Home.module.css";
import ChatCard from "../../Components/Cards/ChatCard/ChatCard";
import botAIImg from "../../assets/botAIimg.png";
import userImg from "../../assets/userimg.png";
import AskButton from "../../Components/Button/AskButton";
import SaveButton from "../../Components/Button/SaveButton";

const Home = () => {
  const [randomClicked, setRandomClicked] = useState(null);
  const [startChatting, setStartChatting] = useState(false);
  const [chatQnA, setChatQnA] = useState([]);
  const [userInput, setuserInput] = useState("");

  const handleInputChange = (value) => {
    setuserInput(value)
  }

  const handleStartNewChat = () => {
    setChatQnA([]);
    setStartChatting(false);
  }

  useEffect(() => {
    if(randomClicked) {
      const time = new Date().toLocaleTimeString()
      setChatQnA((prev) => {
       return [...prev,
        { id: randomClicked.id,
          question: randomClicked.question, 
          response: randomClicked.response, 
          bot_img: botAIImg,
          user_img: userImg,
          rating: null,
          feedback: null,
          message_time: time
        }]
      })
      setStartChatting(true);
    }
  }, [randomClicked])


  return (
    <div className={styles.homePage}>
        <div className={styles.sideBar}>
            <Sidebar onClick = {handleStartNewChat} />
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
                    <ChatCard data={data} setChatQnA={setChatQnA} showAnswer = {true}/>
                  </div>
                ))
              ) : (
                <h2 className={styles.notFoundinData}>Question not found in dummy data</h2>
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
                <SaveButton chatQnA = {chatQnA} setChatQnA = {setChatQnA}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home