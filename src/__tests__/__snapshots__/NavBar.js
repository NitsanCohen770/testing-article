import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/NavBar/NabBar';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('Gives the active style when clicked', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  const navLink = screen.getByRole('/Earth');
  fireEvent.click(navLink);
  expect(navLink).toHaveStyle('border-top: solid 4px #d83a34');
});
