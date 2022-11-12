import {useState} from "react";

type Props = {
};
export default function ParentPage({}: Props) {
    const [passedNo1Gate, setPassedNo1Gate] = useState(false)
    const [passedNo2Gate, setPassedNo2Gate] = useState(false)
    const [isMissing, setIsMissing] = useState(false)

    return (
        <div>
        <div onClick={()=>{
            if(!passedNo1Gate){
                setPassedNo1Gate(!passedNo1Gate)
            }else if(!passedNo2Gate) {
                setPassedNo2Gate(!passedNo2Gate)
            }else if(!isMissing){
                setIsMissing(!isMissing)
            }}}>
            親用のページ
        </div>
            {passedNo1Gate && <p>1を通過しました</p>}
            {passedNo2Gate && <p>2を通過しました</p>}
            {isMissing && <p>友達とはぐれました！！</p>}
        </div>
    );
}
