import React from 'react';

function PageContent(props) {
  if (props.pageData === null) {
    return null;
  }

  return (
    <article className="post-card">
      <div dangerouslySetInnerHTML={{ __html: props.pageData.content.rendered }} />
    </article>
  );
}

export default PageContent;