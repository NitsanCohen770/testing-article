import React from 'react';
import NavLink from '../components/NavLink/NavLink';
import { BrowserRouter as Router } from 'react-router-dom';
export default {
  component: NavLink,
  title: 'NavBar/NavLink',
};
const defaultStyles = {
  color: 'white',
  fontFamily: 'Spartan',
  fontStyle: 'normal',
  fontWeight: ' bold',
  fontSize: '10px',
  lineHeight: '25px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
};
const Template = args => (
  <Router>
    <NavLink {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  styles: {
    ...defaultStyles,
  },
  page: '/Earth',
  children: 'Earth',
};
