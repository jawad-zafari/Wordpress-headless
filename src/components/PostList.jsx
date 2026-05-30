import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedPostId, setExpandedPostId] = useState(null);

  
  useEffect(() => {
    const url = props.apiUrl + '/posts?page=' + currentPage + '&per_page=1';
    
    fetch(url)
      .then((response) => {
        const total = response.headers.get('X-WP-TotalPages');
        if (total !== null) {
          setTotalPages(Number(total));
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, [props.apiUrl, currentPage]);

 
}

export default PostList;