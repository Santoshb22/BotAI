import { useEffect, useState } from "react"
import InputSection from "../../Components/InputSection/InputSection"
import Sidebar from "../../Components/Sidebar/Sidebar"
import styles from "./PastConversation.module.css"
import { json } from "react-router-dom"
import ChatCard from "../../Components/Cards/ChatCard/ChatCard"

const PastConversation = () => {
  const [oldChats, setOldChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // console.log(oldChats[0].sessionData)

  const getOldConversation = () => {
    setLoading(true);
    const getChats = JSON.parse(localStorage.getItem("oldChats"));
    if(getChats.length > 0) {
      setOldChats(getChats);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getOldConversation();
  }, [])
  return (
    <div className={styles.pastConversation}>
      <div className={styles.sideBar}>
        <Sidebar/>
      </div>

      <div className={styles.conversationContainer}>
        
        <h1>Conversations History</h1>

        <div className={styles.conversationContent}>
        {loading ? (
            <h2>Loading...</h2>
          ) 
          : oldChats.length > 0 ? (
            oldChats.map((data) => (
              <div className={styles.cardsContainer} key={data.sessionId}>
                <p>{data.sessionDate}</p>
                {data.sessionData.map(chat => <div> <ChatCard data={chat} showQuestion = {true}/>
                    <ChatCard data={chat} showAnswer = {true}/>
                    </div>)}
              </div>
            ))
          ) 
          : error ? (
            <h2>No Conversation</h2>
          )
           : null}
        </div>

        <div className={styles.inputSection}>
          <InputSection/>
        </div>
      </div>
    </div>
  )
}

export default PastConversation