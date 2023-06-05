import { TextArea } from "../../UI-kit/TextArea";

export function NewCommentForm(props) {
    const { postId, postAuthorId } = props;

    return <form action={`http://localhost:4000/post/${postId}/comment`} method="POST" className="comments__new-comment new-comment">
        <TextArea placeholder="Комментарий" name="text" className="new-comment__text" />
        <input type="hidden" name="post" value={postId} />
        <input type="hidden" name="author" value={postAuthorId} />
        <button className="new-comment__submit-button" type="submit">Отправить</button>
    </form>
}