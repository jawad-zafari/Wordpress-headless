import React from 'react';

function Header(props) {
  let title = "Derniers Articles du Blog";
  
  if (props.currentView !== 'articles') {
    title = 'Bienvenue sur mon blog';
  }

  return (
<div></div>
  );
}

export default Header;