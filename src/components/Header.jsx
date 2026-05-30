import React from 'react';

function Header(props) {
  let title = "Derniers Articles du Blog";
  
  if (props.currentView == 'home') {
    title = 'Bienvenue sur mon blog';
  }
  else if (props.currentView == 'about') {
    title = 'À propos de blog';
  }

  return (
    <header className="App-header">
      <nav className="top-nav">
        <div className="logo">Mon Blog Headless</div>
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