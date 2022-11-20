import axios from "axios";
import { useEffect } from "react";
import CreateComment from "../CreateComment/CreateComment";

const DisplayComments = (props) => {

    async function getComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.videoId}/`);
        setVideoComments(response.data.reverse());
        console.log(response.data);
    }

    useEffect(() => {
        getComments();
    }, [])

    return ( 
        <div>
            <CreateComment selectedVideoId={props.selectedVideoId} videoId={props.videoId} userCode={props.userCode} getComments={getComments} user={props.user} />
            {props.videoComments.map((comment, index) => {
                return (
                    <div className="form-grid">
                        <div key={index} className="form-control" >
                            <h4 className="form-heading">{comment.user.username}</h4>
                            <div  className="post-content">{comment.text}</div> 
                        </div>
                    </div>
                );
            })}
        </div>
     );
}
 
export default DisplayComments;