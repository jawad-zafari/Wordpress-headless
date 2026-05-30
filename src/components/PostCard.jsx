import React from 'react';
import '../App.css';

function PostCard(props) {
  const post = props.post;
  
  return (
    <article className="post-card">
      <h2>{post.title.rendered}</h2>
      
      {props.isExpanded === true && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <button className="close-button" onClick={() => props.setExpandedPostId(null)}>
            Fermer l'article
          </button>
        </div>
      )}

      {props.isExpanded === false && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <button className="read-more" onClick={() => props.setExpandedPostId(post.id)}>
            Lire la suite
          </button>
        </div>
      )}
    </article>
  );
}

export default PostCard;