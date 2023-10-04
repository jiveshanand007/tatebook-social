import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/4.jpeg" alt="" />
                        <span className="postUsername">Sallu</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey Its my first Post</span>
                    <img src="/assets/posts/2.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.jpg" alt="" className="likeIcon" />
                        <img src="/assets/like.jpg" alt="" className="likeIcon" />
                        <span className="likeCount">9k+ people likes this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">4k+ Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
