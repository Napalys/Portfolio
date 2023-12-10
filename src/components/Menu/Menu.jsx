import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuBtnClicked }) => {
  const menuItems = [
    {
      id: 'heroMenu',
      title: 'Home',
      position: '40%',
      number: '0',
      section: 'hero',
      extraClass: 'onVisitSection',
    },
    { id: 'aboutMenu', title: 'About', position: '45%', number: '1', section: 'about' },
    { id: 'projectsMenu', title: 'Projects', position: '50%', number: '2', section: 'projects' },
    { id: 'contactMenu', title: 'Contact', position: '55%', number: '3', section: 'contact' },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <>
          <button
            type="button"
            id={item.id}
            className={`btn btn-default round-button ${item.extraClass || ''}`}
            style={{ top: item.position }}
            onClick={() => menuBtnClicked(item.id, item.section)}
          >
            {item.number}
          </button>
          <span className="title" style={{ top: `calc(${item.position} + 1%)` }}>
            {item.title}
          </span>
        </>
      ))}
    </>
  );
};

Menu.propTypes = {
  menuBtnClicked: PropTypes.func.isRequired,
};

export default Menu;
