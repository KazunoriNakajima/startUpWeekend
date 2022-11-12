import {useState} from "react";
import quiz2 from "./謎解き2.jpeg";
import quiz3 from "./謎解き3.webp";
import quiz4 from "./謎解き4.jpeg";
import styles from './HomePage.module.css';

type Props = {
};
export default function ChildPage({}: Props) {
    const [passedNo1Gate, setPassedNo1Gate] = useState(false)
    const [passedNo2Gate, setPassedNo2Gate] = useState(false)
    const [isMissing, setIsMissing] = useState(false)
    const [isFinished, setIsFinished] = useState(true)
    let quiz:string = quiz2

    if(!passedNo1Gate){
        quiz = quiz3
    }else if(!passedNo2Gate) {
        quiz = quiz4
    }


    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <div>子供用画面</div>
                <div className={styles.childScreen}>
                    <div className={styles.childScreenTitle}>AeonQuest!</div>
                    {!isFinished && <div className={styles.childScreenQuizContainer}>
                        <img className={styles.childScreenQuiz} src={quiz}  alt="クイズ" />
                        <div className={styles.childScreenButtons}>
                            <button
                                className={styles.childScreenTelButton}
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
                            className={styles.childScreenStartButton}
                            onClick={()=>{
                                    setIsFinished(!isFinished)
                            }}>始める</button>
                    </div>}
                </div>
            </div>
            <div className={styles.parent}>
                <div
                    onClick={()=>{
                        if(isFinished){
                            setIsFinished(!isFinished)
                        }else if(!passedNo1Gate){
                            setPassedNo1Gate(!passedNo1Gate)
                        }else if(!passedNo2Gate) {
                            setPassedNo2Gate(!passedNo2Gate)
                        }else if(!isMissing){
                            setIsMissing(!isMissing)
                        }}}>親用画面
                </div>
                <div className={styles.parentScreen}>
                    <div className={styles.parentScreenTitle}>AeonQuest!</div>
                    <div className={styles.parentScreenMessages}>
                        {!isFinished && <p className={styles.parentScreenMessage}>クエストを開始しました</p>}
                        {passedNo1Gate && <p className={styles.parentScreenMessage}>1を通過しました</p>}
                        {passedNo2Gate && <p className={styles.parentScreenMessage}>2を通過しました</p>}
                        {isMissing && <p className={styles.parentScreenMessage}>友達とはぐれました！！</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}