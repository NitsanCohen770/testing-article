import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledListItem } from './styles';

const NavLink = ({ children, page, styles }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <StyledListItem
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isHovering={isHovering}
    >
      <Link style={styles} to={page}>
        {children}
      </Link>
    </StyledListItem>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  page: PropTypes.string,
  styles: PropTypes.object,
};

export default NavLink;
