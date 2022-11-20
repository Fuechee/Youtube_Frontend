import { useEffect } from "react";

const RelatedVideos = (props) => {
    useEffect(() => {
        props.relatedVideos();
    }, [])

    return ( 
        <div>{props.relatedVideos.map((video, index) => {
            if(video.snippet != undefined){
                return(
                    <div>
                        <Card key={index} class="related-card" style={{ width: '15rem'}}>
                            <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
                                <Card.Body>
                                    <Card.Title>{video.snippet.title}</Card.Title>
                                    <Button variant="primary" onClick={() => props.selectedVideoId(video)}>Watch</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        })}</div>
     );
}
 
export default RelatedVideos;