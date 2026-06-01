import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PageContent from './components/PageContent';

function App() {
  const [currentView, setCurrentView] = useState('accueil'); 
  const [pageData, setPageData] = useState(null); 

  const API_URL = process.env.REACT_APP_WP_API;


  useEffect(() => {
    if (currentView !== 'articles') {
      
      let slug = 'accueil';
      if (currentView === 'about') {
        slug = 'a-propos';
      }

      const url = `${API_URL}/pages?slug=${slug}`;
      
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.length > 0) {
            setPageData(data[0]); 

          }
        });
    }
  }, [currentView, API_URL]);


  let sendingTitle = '';
  if (pageData !== null) {
    sendingTitle = pageData.title.rendered;
  }

  return (
    <div className="App">
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        pageTitle={sendingTitle} 
      />
      
      <main className="posts-container">

        {currentView === 'articles' && (
          <PostList apiUrl={API_URL} />
        )}

        {currentView !== 'articles' && (
          <PageContent pageData={pageData} />
        )}
      </main>
    </div>
  );
}

export default App;