export function SingleComment({comment}) {


    return <div className="comment">
        <div className="comment__author author-comment">
            <div className="author-comment__avatar-box">
                <img src="/assets/images/avatar.jpg" alt="avatar" className="author-comment__avatar" />
            </div>
            <div className="author-comment__data">
                <div className="author-comment__login">
                    {comment.author.login}
                </div>
                <div className="author-comment__date">
                    {comment.publicationDate}
                    {comment.isEdited && <div className="author-comment__edit-date">
                        (<span>изм. </span>{comment.editDate})
                    </div>}
                </div>
            </div>
        </div>
        <div className="comment__text">
            {comment.text}
        </div>
    </div>
}