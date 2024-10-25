import React from 'react';

function TopAppBar() {
  return (
    <section className="Top_app_bar">
      <div className="top_1">
        <i className="trailing-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#414941"/>
          </svg>
        </i>
        <i className="leading-icon">
          <img src="Logo Ohms.AI 1.png" alt="logo" />
        </i>
        <span className="headline">Ohm's AI</span>
      </div>
      <div className="top_2">
        <span className="Project_Title">Project Title</span>
      </div>
    </section>
  );
}

export default TopAppBar;