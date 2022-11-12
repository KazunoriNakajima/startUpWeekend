import quiz2 from "./謎解き2.jpeg";
import quiz3 from "./謎解き3.webp";
import quiz4 from "./謎解き4.jpeg";
import {useState} from "react";
import styles from "./HomePage.module.css";

type Props = {
};
export default function ChildPage({}: Props) {
    const [passedNo1Gate, setPassedNo1Gate] = useState(false)
    const [passedNo2Gate, setPassedNo2Gate] = useState(false)
    const [isFinished, setIsFinished] = useState(true)
    let quiz:string = quiz2

    if(!passedNo1Gate){
        quiz = quiz3
    }else if(!passedNo2Gate) {
        quiz = quiz4
    }

    return (
        <div className={styles.childScreen}>
            <div className={styles.childScreenTitle}>AeonQuest!</div>
            {!isFinished && <div className={styles.childScreenQuizContainer}>
                <img className={styles.childScreenQuiz} src={quiz}  alt="クイズ" />
                <div className={styles.childScreenButtons}>
                    <button
                        className={styles.childScreenTelButton}
                        onClick={()=>{
                            if(!passedNo1Gate){
                                setPassedNo1Gate(true)
                            }else if(!passedNo2Gate) {
                                setPassedNo2Gate(true)
                            }
                        }}
                    >電話する</button>
                    <button
                        className={styles.childScreenFinishButton}
                        onClick={()=>{
                            setIsFinished(!isFinished)
                        }}>終了する</button>
                </div>
            </div>}
            {isFinished && <div>
                <button
                    className={styles.childScreenButton}
                    onClick={()=>{
                        setIsFinished(!isFinished)
                    }}>始める</button>
            </div>}
        </div>
    );
}
