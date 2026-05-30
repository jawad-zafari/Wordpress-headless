import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedPostId, setExpandedPostId] = useState(null);

}

export default PostList;