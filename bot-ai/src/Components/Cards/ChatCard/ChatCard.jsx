import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styles from "./ChatCard.module.css"


export default function ChatCard({data, showQuestion = false, showAnswer = false}) {
    const {question, response, bot_img, user_img} = data
  return (
    <Box>
        <Card 
            sx={{ maxWidth: 1015, minHeight: 105, 
            boxShadow: "-4px 4px 15px 0px #0000001A",
            borderRadius: "20px", display: 'flex', justifyContent: "start",
            alignItems: "center", marginBottom: 1, padding: 1,
        }}>
        <Box className={styles.chatCardImg}>
        <img src={showQuestion? user_img: bot_img} alt="user img" />
        </Box>
        <Box sx={{width: "50%"}}>
        <CardContent>
            {showQuestion && 
            <Typography gutterBottom variant="body1" sx={{ fontSize: "16px" }}>
                <span className={styles.you}>You</span>
                 {question}
            </Typography>}
        
        {showAnswer && <Typography variant="body1" sx={{ fontSize: "16px" }}>
            <span className={styles.soulAI}>Soul AI</span>
            {response}
        </Typography>}
        
        </CardContent>
        </Box>
        </Card>

        {showAnswer && <div>
            <button>like</button>
            <button>dislike</button>
        </div>}
    </Box>
  );
}
