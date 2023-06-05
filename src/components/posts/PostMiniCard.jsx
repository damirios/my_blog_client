import {Link} from 'react-router-dom';

export function PostMiniCard(props) {
    const {postData} = props;
    const imagesPath = 'http://localhost:4000/assets/images';

    return <Link to={`/post/${postData._id}`} className="posts__mini-card mini-card">
        <img className="mini-card__image" src={`${imagesPath}/${postData.image}`} alt="post-preview" />
        <div className="mini-card__top-info">
            <div className="mini-card__title">{postData.title}</div>
            <div className="mini-card__author">автор: {postData.author.login}</div>
            <div className="mini-card__publication">опубликовано: {postData.publicationDate}</div>
        </div>
        {postData.isEdited && <div className="mini-card__bottom-info">
            <div className="mini-card__edit"><span>изменено:</span> {postData.editDate}</div>
        </div>}
    </Link>
}