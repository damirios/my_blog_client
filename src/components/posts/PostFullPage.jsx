import { useParams } from 'react-router-dom';
import { postsData } from '../../mock/postsData';

import { Comments } from './Comments';

import { useState, useEffect } from 'react';

export function PostFullPage() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const imagesPath = 'http://localhost:4000/assets/images';

    useEffect(() => {
        const API_URL = "http://localhost:4000/";
        fetch(API_URL + 'post/' + id)
        .then(response => response.json())
        .then(data => {
            setPost(data.post);
            setComments(data.comments);
            setIsLoading(false);
            setError(false);
        })
        .catch(error => {
            console.log("Error", error);
        });
    }, []);

    if (isLoading) {
        return <div>
            ...loading
        </div>
    }

    return <div className='post'>
        <div className="post-box">
            <div className="post__publication-info">
                <div className="post__author">{post.author.login}</div>
                <div className="post__publiction-date">опубликовано: {post.publicationDate}</div>
                {post.isEdited && <div className='post__edit-date'>(посл. изм.: {post.editDate})</div>}
            </div>
            <div className="post__title">{post.title}</div>
            <div className="post__image-box">
                <img src={`${imagesPath}/${post.image}`} alt="post_image" className="post__image" />
            </div>
            <div className="post__text">
                {post.text}
            </div>
        </div>
        <Comments comments={comments} post={post} />
    </div>
}