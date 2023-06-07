import { PostMiniCard } from './PostMiniCard';

import { useState } from 'react';
import { useEffect } from 'react';

export function PostsGrid() {
    
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "http://localhost:4000/";
        fetch(API_URL + 'post')
        .then(response => response.json())
        .then(posts => {
            setPosts(posts);
            setIsLoading(false);
            setError(false);
        })
        .catch(error => {
            console.log("Error", error);
        });
    }, []);
    
    return <div className="posts">
        <h1 className="posts__title page-title">Все посты</h1>
        <div className="posts__grid">
            {isLoading && <div>...loading</div>}
            {posts && posts.map((post, index) => <PostMiniCard key={index} postData={post} />)}
        </div>
    </div>
}