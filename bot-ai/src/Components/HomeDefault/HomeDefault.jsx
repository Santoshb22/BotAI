import { data } from "../../StaticData/data";
import RandomQuestion from "../Cards/RandomQuestion/RandomQuestion";
import Logo from "../Logo";
import styles from "./HomeDefault.module.css";
const HomeDefault = ({setRandomClicked}) => {
    const randomNum = Math.floor(Math.random() * 40) + 1;
    const randomQ = [data[randomNum+1], data[randomNum+2], data[randomNum+3], data[randomNum+4]];
  
  return (
    <div>
        <div className={styles.botQuestionHeading}>
            <p>How Can I Help You Today?</p>
            <Logo/>
          </div>

          {randomQ.length > 0 && <div className={styles.randomQCard}>
            {
              randomQ.map(data => (
                <RandomQuestion key={data.id} data = {data} setRandomClicked = {setRandomClicked}/>
              ))
            }
         </div>}
    </div>
  )
}

export default HomeDefault