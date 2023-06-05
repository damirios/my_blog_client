import { NewCommentForm } from "./NewCommentForm";

import { SingleComment } from "./SingleComment";

export function Comments(props) {
    const { comments, post } = props;

    return <div className="comments">
        <h1 className="comments__title">
            Комментарии ({comments.length})
        </h1>
        <NewCommentForm postId={post._id} postAuthorId={post.author._id} />
        {comments.map((comment, index) => {
            return <SingleComment key={index} comment={comment} />
        })}
    </div>
}