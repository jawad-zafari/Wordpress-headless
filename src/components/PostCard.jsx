import React from 'react';

function PostCard(props) {
  const post = props.post;
  
  return (
    <article className="post-card">
      <h2>{post.title.rendered}</h2>
      
      {props.isExpanded === true && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <button onClick={() => props.setExpandedPostId(null)}>
            Fermer l'article
          </button>
        </div>
      )}

      {props.isExpanded === false && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <button onClick={() => props.setExpandedPostId(post.id)}>
            Lire la suite
          </button>
        </div>
      )}
    </article>
  );
}

export default PostCard;