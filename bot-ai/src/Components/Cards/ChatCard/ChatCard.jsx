import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import styles from "./ChatCard.module.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MyModal from '../../Modal/MyModal';
import { useEffect, useState } from 'react';

export default function ChatCard({data, showQuestion = false, showAnswer = false, setChatQnA}) {
const [value, setValue] = useState(0)
const [isRating, setIsRating] = useState(false);
console.log("data:", data)
const {question, response, bot_img, user_img, feedback, message_time, id} = data

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
            sx={{ maxWidth: 1015, minHeight: 105, 
            boxShadow: showQuestion && showAnswer ? "none" : "-4px 4px 15px 0px #0000001A",
            borderRadius: "20px", display: 'flex', justifyContent: "start",
            alignItems: "center", marginBottom: 1, padding: 1,
        }}>
            <Box className={styles.chatCardImg}>
                <img src={showQuestion? user_img: bot_img} alt="user img" />
            </Box>

            <Box>
                <CardContent >
                    {showQuestion && 
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                        <span className={styles.you}>You</span>
                        {question}
                        <span className={styles.time}>{message_time}</span>
                    </Typography>}
                
                    {
                    showAnswer 
                    && <Box >
                        <Typography variant="body1" sx={{ fontSize: "16px",}}>
                        <span className={styles.soulAI}>Soul AI</span>
                        {response}
                        <span className={styles.time}>{message_time}</span>
                        </Typography>

                        <br />
                        <Box>
                            <button>
                                <MyModal setChatQnA = {setChatQnA}/>
                            </button>  

                            <button onClick={showRating}>
                                <ThumbUpOffAltIcon/>
                            </button>    
                        </Box>

                            <br />
                            {isRating && <Box>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
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
