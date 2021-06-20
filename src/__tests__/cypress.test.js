import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

it('renders learn Earth link and navigates to it', () => {
  mount(<App />);
  cy.get('ul li:last').should('be.visible').click();
  cy.location('pathname').should('match', /\/Uranus$/);
  cy.contains('Uranus').should('be.visible');
});
