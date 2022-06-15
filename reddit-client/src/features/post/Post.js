import React from "react";

export const Post = (props) => {
    const post = props.post.data;
    const date = new Date(post.created_utc * 1000);
    const postUrl = `https://www.reddit.com${post.permalink}`;
    const subredditUrl = `https://www.reddit.com/${post.subreddit_name_prefixed}`

    return (
        <div className="post">
            <h2 className="post-title"><a href={postUrl} target="_blank" rel="noreferrer">{post.title}</a></h2>
            <h3 className="post-subreddit">posted in <a href={subredditUrl} target="_blank" rel="noreferrer">{post.subreddit_name_prefixed}</a></h3>
            {post.is_video &&
                <video controls width={720}>
                    <source src={post.media.reddit_video.fallback_url}
                        type="video/webm" />
                    Sorry, your browser doesn't support embedded videos.
                </video>} 
            {post.url.endsWith('.jpg') && <img src={post.url} alt="Main content"></img>}
            <p>{post.selftext}</p>
            <p className="post-author">Posted by <strong>{post.author} </strong>on {date.toDateString()}</p>
            <p className="post-points">{post.score}</p>
            <button className="post-comments">{post.num_comments} Comments</button>
        </div>
    )
}