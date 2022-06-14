import React from "react";

export const Post = () => {
    return (
        <div className="post">
            <h2 className="post-title">{'Post title'}</h2>
            <div className="media">Content</div>
            <p className="post-author">Posted by:</p>
            <p className="post-date">Posted </p>
            <button className="upvote">Upvote</button>
            <button className="downvote">Downvote</button>
            <button className="post-comments">Comments</button>
        </div>
    )
}