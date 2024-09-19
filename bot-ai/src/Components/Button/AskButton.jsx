import Button from "./Button"
import { data } from "../../StaticData/data"
import botAIImg from "../../assets/botAIimg.png";
import userImg from "../../assets/userimg.png";

const AskButton = ({userInput, setuserInput, setStartChatting, setChatQnA}) => {

    const handleAsk = () => {
        if(!userInput) return;

        const matchData = data.find(data => (
            data.question.toLowerCase() == userInput.toLowerCase()
        ))

        setStartChatting(true);

        if(matchData) {
            setChatQnA(prev => [
                ...prev, {
                    id: matchData.id, 
                    question: matchData.question,
                    response: matchData.response,
                    bot_img: botAIImg,
                    user_img: userImg,
                }
            ])
        } else {
            console.log("No matching");
        }

        setuserInput("");
    }

  return (
    <Button onClick = {handleAsk} buttonText={"Ask"}/>
  )
}

export default AskButton