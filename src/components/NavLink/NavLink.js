import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import Chevron from '../../images/icon-chevron.svg';
import { StyledListItem } from './styles';

const NavLink = ({ children, page, styles, activeStyles }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <StyledListItem
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isHovering={isHovering}
    >
      <div></div>
      <ReactRouterNavLink
        role={page}
        style={styles}
        activeStyle={activeStyles}
        to={page}
      >
        {children}
      </ReactRouterNavLink>

      <img src={Chevron} alt="menu button" />
    </StyledListItem>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  page: PropTypes.string,
  styles: PropTypes.object,
  activeStyles: PropTypes.object,
};

export default NavLink;
