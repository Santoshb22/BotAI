import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import styles from "./ChatCard.module.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MyModal from '../../Modal/MyModal';
import { useEffect, useState } from 'react';

export default function ChatCard({data, showQuestion = false, showAnswer = false, setChatQnA, showingOldChats = false}) {
const [value, setValue] = useState(0)
const [isRating, setIsRating] = useState(false);

const {question, response, bot_img, user_img, feedback, message_time, rating} = data

const showRating = () => {
    setIsRating(true);
}

const handleRating = (newValue) => {
    setValue(newValue);
    setChatQnA(prev => prev.map(item => 
        item.id === data.id? {...item, rating: newValue} : item
    ))
}

  return (
    <Box>
        <Card 
           sx={{ 
            maxWidth: 1015, 
            minHeight: 105, 
            boxShadow: showingOldChats ? "none" : "-4px 4px 15px 0px #0000001A",
            backgroundColor: showingOldChats ? "#D7C7F4" : "none",
            borderRadius: !showingOldChats ? "20px" : "none", 
            display: 'flex', 
            justifyContent: "start",
            alignItems: "center", 
            marginBottom: showingOldChats ? 0 : 1, 
            padding: 1,
        }}>
            <Box className={styles.chatCardImg}>
                <img src={showQuestion? user_img: bot_img} alt="user img" />
            </Box>

            <Box>
                <CardContent >
                    {showQuestion && 
                    <Typography variant="body1" sx={{ fontSize: {xs: "12px", sm: "16px"} }}>
                        <span className={styles.you}>You</span>
                        {question}
                        <span className={styles.time}>{message_time}</span>
                    </Typography>}
                
                    {
                    showAnswer 
                    && <Box>
                        <Typography variant="body1" sx={{ fontSize: {xs: "12px", sm: "16px"}}}>
                        <span className={styles.soulAI}>Soul AI</span>
                        {response}
                        <span className={styles.time}>{message_time}</span>
                        </Typography>

                        {!showingOldChats && <Box sx={{marginTop: 1}}>
                            <button className={styles.likeButton}>
                                <MyModal setChatQnA = {setChatQnA}/>
                            </button>  

                            <button className={styles.likeButton} onClick={showRating}>
                                <ThumbUpOffAltIcon sx={{width: 16, height: 16, opacity: "50%",}} />
                            </button>    
                        </Box>}

                            <br />
                            {(isRating || (showingOldChats && rating > 0)) && <Box>
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => {handleRating(newValue)}}
                                />
                            </Box>}

                            {feedback && <Typography>
                                <b>Feedback: </b> {feedback}
                            </Typography>}
                       </Box>
                    }

                    
            </CardContent>
        </Box>
        </Card>
    </Box>
  );
}
