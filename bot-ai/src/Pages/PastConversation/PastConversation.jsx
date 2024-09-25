import { useEffect, useState, useCallback } from "react";
import InputSection from "../../Components/InputSection/InputSection";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./PastConversation.module.css";
import ChatCard from "../../Components/Cards/ChatCard/ChatCard";
import { useNavigate } from "react-router-dom";
import RatingFilter from "../../Components/RatingFilter/RatingFilter";

const PastConversation = () => {
  const [oldChats, setOldChats] = useState([]);
  const [filteredChatsByRating, setFilteredChatsByRating] = useState([]);
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
      setFilteredChatsByRating(getChats);
    } else {
      setError(true);
    }
    setLoading(false);
  }, []);

  const handleFilterByRatings = (e) => {
    const ratingValue = parseInt(e.target.value)

    if (isNaN(ratingValue)) {
      setFilteredChatsByRating(oldChats);  
      return;
    }

      const filteredChats = oldChats.filter(chat => 
      chat.sessionData.some(chatData => chatData.rating === ratingValue));
      setFilteredChatsByRating(filteredChats);
    };

  useEffect(() => {
    getOldConversation();
  }, [getOldConversation]);

  return (
    <div className={styles.pastConversation}>
      <div className={styles.sideBar}>
        <Sidebar onClick={handleStartNewChat} />
      </div>
      <div className={styles.conversationContainer}>
        <div>
          <div>
            <h1>Conversations History</h1>
          </div>
          <div>
            <RatingFilter onChange={(e) => handleFilterByRatings(e)}/>
          </div>
        </div>
        <div className={styles.conversationContent}>
          {loading ? (
            <h2>Loading...</h2>
          ) : filteredChatsByRating.length > 0 ? (
            filteredChatsByRating.map(data => (
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
          ) : error? (
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
