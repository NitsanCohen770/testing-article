import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from '../components/NavLink/NavLink';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('With text given as children', () => {
  act(() => {
    render(
      <Router>
        <NavLink page="/earth">Test</NavLink>
      </Router>,
      container
    );
  });
  expect(container.textContent).toBe('Test');

  act(() => {
    render(
      <Router>
        <NavLink children="Earth" page="/earth" />
      </Router>,
      container
    );
  });
  expect(container.textContent).toBe('Earth');

  act(() => {
    render(
      <Router>
        <NavLink children="Mars" page="/earth" />
      </Router>,
      container
    );
  });
  expect(container.textContent).toBe('Mars');
});
