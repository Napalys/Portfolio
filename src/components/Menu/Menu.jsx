import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menuBtnClicked }) => {
  const menuItems = [
    { id: 'heroMenu', position: '40%', number: 'Front', section: 'hero', extraClass: 'onVisitSection' },
    { id: 'aboutMenu', position: '45%', number: 'About', section: 'about' },
    { id: 'projectsMenu', position: '50%', number: 'Projects', section: 'projects' },
    { id: 'contactMenu', position: '55%', number: 'Contact', section: 'contact' },
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
        </>
      ))}
    </>
  );
};

Menu.propTypes = {
  menuBtnClicked: PropTypes.func.isRequired,
};

export default Menu;
