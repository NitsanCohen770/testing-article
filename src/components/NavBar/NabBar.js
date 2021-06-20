import React from 'react';
import { StyledUnorderedList } from './styles';
import NavLink from '../NavLink/NavLink';
import Hamburger from '../../images/icon-hamburger.svg';
import { defaultStyles } from '../../stories/NavLink.stories';
import { nanoid } from 'nanoid';

const activeStyles = { borderTop: 'solid 4px #d83a34' };

const linksList = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Saturn',
  'Jupiter',
  'Neptune',
  'Uranus',
];

const NavBar = () => {
  return (
    <>
      <StyledUnorderedList>
        <div>
          THE PLANETS
          <img src={Hamburger} alt="menu button" />
        </div>
        {linksList.map(link => (
          <NavLink
            children={link}
            key={nanoid()}
            activeStyles={activeStyles}
            styles={defaultStyles}
            page={`/${link}`}
          />
        ))}
      </StyledUnorderedList>
    </>
  );
};

export default NavBar;
