import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setisLiked] = useState(false);
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setisLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.jpg" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/like.jpg" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="likeCount">{like} People Likes this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
