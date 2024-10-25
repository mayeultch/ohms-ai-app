import React from 'react';

function Composants() {
  const handleDragStart = (event, svgContent) => {
    event.dataTransfer.setData('text/plain', svgContent);
  };

  return (
    <div className="Composants" id="composant">
      <span className="Subhead">Vous trouverez ici tous les composants de toutes les librairies</span>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher..." className="search-input" />
        <div className="search-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#414941"/>
          </svg>
        </div>
      </div>
      <div className="Frame_574">
        <div className="grid-item">
          <i draggable="true" onDragStart={(e) => handleDragStart(e, '<svg width="120" height="23" viewBox="0 0 120 23" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="37.791" y="0.514526" width="44.4186" height="21.7093" fill="white" stroke="black"/><rect x="39.4902" y="2.21216" width="41.0233" height="18.314" fill="white"/><rect x="1.03034" y="11.3692" width="35.8953" height="0.732558" fill="white" stroke="black" strokeWidth="0.732558"/><rect x="83.0772" y="11.3692" width="35.8953" height="0.732558" fill="white" stroke="black" strokeWidth="0.732558"/></svg>')}>
            <svg width="120" height="23" viewBox="0 0 120 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="37.791" y="0.514526" width="44.4186" height="21.7093" fill="white" stroke="black"/>
              <rect x="39.4902" y="2.21216" width="41.0233" height="18.314" fill="white"/>
              <rect x="1.03034" y="11.3692" width="35.8953" height="0.732558" fill="white" stroke="black" strokeWidth="0.732558"/>
              <rect x="83.0772" y="11.3692" width="35.8953" height="0.732558" fill="white" stroke="black" strokeWidth="0.732558"/>
            </svg>
          </i>
        </div>
        <div className="grid-item">
          <i draggable="true" onDragStart={(e) => handleDragStart(e, '<svg width="117" height="32" viewBox="0 0 117 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.4485H25.9543L29.4935 4.65112L35.9821 27.3611L43.3555 4.65112L48.6643 27.3611L55.4478 4.65112L62.2313 27.3611L68.4249 4.65112L74.9135 27.3611L81.1071 4.65112L87.5957 27.3611L91.7248 16.4485H116.499" stroke="black" stroke-width="2"/></svg>')}>
            <svg width="117" height="32" viewBox="0 0 117 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 16.4485H25.9543L29.4935 4.65112L35.9821 27.3611L43.3555 4.65112L48.6643 27.3611L55.4478 4.65112L62.2313 27.3611L68.4249 4.65112L74.9135 27.3611L81.1071 4.65112L87.5957 27.3611L91.7248 16.4485H116.499" stroke="black" strokeWidth="2"/>
            </svg>
          </i>
        </div>
        <div className="grid-item">
          <i>
            {/* Ajoutez ici le troisième SVG si nécessaire */}
          </i>
        </div>
        {/* Ajoutez les autres éléments de la grille ici */}
      </div>
    </div>
  );
}

export default Composants;