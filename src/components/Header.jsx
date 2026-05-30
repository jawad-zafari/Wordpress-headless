import React from 'react';
import '../App.css';

function Header(props) {
  let title = "Bienvenue sur mon blog";
  
 if (props.currentView == 'about') {
    title = 'À propos de blog';
  }
  else if (props.currentView == 'articles') {
    title = "Derniers Articles du Blog";
  }

  return (
    <header className="App-header">
      <nav className="top-nav">
        <div className="logo"><a href="/">Mon Blog Headless</a></div>
        <ul>
          <li onClick={() => props.setCurrentView('home')}>Accueil</li>
          <li onClick={() => props.setCurrentView('articles')}>Articles</li>
          <li onClick={() => props.setCurrentView('about')}>À propos</li>
        </ul>
      </nav>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;