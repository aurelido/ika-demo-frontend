/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

// ***********************************************
// Begin Specific Selector Attributes for Cypress
// ***********************************************

// Entity
export const entityTableSelector = '[data-cy="entityTable"]';
export const entityCreateButtonSelector = '[data-cy="entityCreateButton"]';
export const entityCreateSaveButtonSelector = '[data-cy="entityCreateSaveButton"]';
export const entityCreateCancelButtonSelector = '[data-cy="entityCreateCancelButton"]';
export const entityDetailsButtonSelector = '[data-cy="entityDetailsButton"]'; // can return multiple elements
export const entityDetailsBackButtonSelector = '[data-cy="entityDetailsBackButton"]';
export const entityEditButtonSelector = '[data-cy="entityEditButton"]';
export const entityDeleteButtonSelector = '[data-cy="entityDeleteButton"]';
export const entityConfirmDeleteButtonSelector = '[data-cy="entityConfirmDeleteButton"]';

// ***********************************************
// End Specific Selector Attributes for Cypress
// ***********************************************

Cypress.Commands.add('getEntityHeading', (entityName: string) => {
  return cy.get(`[data-cy="${entityName}Heading"]`);
});

Cypress.Commands.add('getEntityCreateUpdateHeading', (entityName: string) => {
  return cy.get(`[data-cy="${entityName}CreateUpdateHeading"]`);
});

Cypress.Commands.add('getEntityDetailsHeading', (entityInstanceName: string) => {
  return cy.get(`[data-cy="${entityInstanceName}DetailsHeading"]`);
});

Cypress.Commands.add('getEntityDeleteDialogHeading', (entityInstanceName: string) => {
  return cy.get(`[data-cy="${entityInstanceName}DeleteDialogHeading"]`);
});

Cypress.Commands.add('setFieldSelectToLastOfEntity', (fieldName: string) => {
  return cy.get(`[data-cy="${fieldName}"]`).then(select => {
    const selectSize = (select[0] as HTMLSelectElement)?.options?.length || Number(select.attr('size')) || 0;
    if (selectSize > 0) {
      return cy.get(`[data-cy="${fieldName}"] option`).then((options: JQuery<HTMLElement>) => {
        const elements = [...options].map((o: HTMLElement) => (o as HTMLOptionElement).label);
        const lastElement = elements.length - 1;
        cy.get(`[data-cy="${fieldName}"]`).select(lastElement);
        cy.get(`[data-cy="${fieldName}"]`).type('{downarrow}');
      });
    } else {
      return cy.get(`[data-cy="${fieldName}"]`).type('{downarrow}');
    }
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      getEntityHeading(entityName: string): Cypress.Chainable;
      getEntityCreateUpdateHeading(entityName: string): Cypress.Chainable;
      getEntityDetailsHeading(entityInstanceName: string): Cypress.Chainable;
      getEntityDeleteDialogHeading(entityInstanceName: string): Cypress.Chainable;
      setFieldSelectToLastOfEntity(fieldName: string): Cypress.Chainable;
    }
  }
}

// Convert this to a module instead of script (allows import/export)
export {};
