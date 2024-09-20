import { useEffect, useState, useCallback } from "react";
import InputSection from "../../Components/InputSection/InputSection";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./PastConversation.module.css";
import ChatCard from "../../Components/Cards/ChatCard/ChatCard";
import { useNavigate } from "react-router-dom";

const PastConversation = () => {
  const [oldChats, setOldChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleStartNewChat = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const getOldConversation = useCallback(() => {
    setLoading(true);
    const getChats = JSON.parse(localStorage.getItem("oldChats"));
    if (getChats && getChats.length > 0) {
      setOldChats(getChats);
    } else {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getOldConversation();
  }, [getOldConversation]);

  return (
    <div className={styles.pastConversation}>
      <div className={styles.sideBar}>
        <Sidebar onClick={handleStartNewChat} />
      </div>
      <div className={styles.conversationContainer}>
        <h1>Conversations History</h1>
        <div className={styles.conversationContent}>
          {loading ? (
            <h2>Loading...</h2>
          ) : oldChats.length > 0 ? (
            oldChats.map(data => (
              <div className={styles.cardsContainer} key={data.sessionId}>
                <p>{data.sessionDate === new Date().toISOString().split('T')[0] ? "Today" : data.sessionDate}</p>
                {data.sessionData.map(chat => (
                  <div className={styles.chartCards} key={chat.id}>
                    <ChatCard data={chat} showQuestion={true} showingOldChats={true} />
                    <ChatCard data={chat} showAnswer={true} showingOldChats={true} />
                  </div>
                ))}
              </div>
            ))
          ) : error ? (
            <div className={styles.noChats}>
              <h2>No Conversation</h2>
            </div>
          ) : null}
        </div>
        <InputSection />
      </div>
    </div>
  );
};

export default PastConversation;
