import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Default } from '../stories/NavLink.stories';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders the text of the button component', () => {
  render(
    <Router>
      <Default {...Default.args} />
    </Router>
  );
  expect(screen.getByRole('/Earth')).toHaveTextContent('Earth');
});
