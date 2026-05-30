import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PageContent from './components/PageContent';

function App() {
  const [currentView, setCurrentView] = useState('articles');
  const [pageData, setPageData] = useState(null);

  const API_URL = process.env.REACT_APP_WP_API;

 
}

export default App;