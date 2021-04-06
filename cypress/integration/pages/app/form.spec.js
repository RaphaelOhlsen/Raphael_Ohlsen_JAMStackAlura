import FormScreenPageObject from "../../../../src/components/screens/app/FormScreen/FormScreen.pageObject";

describe('Testing Contact Form', () => { 
  it('click in Contact Link, Open Contact Form and submitForm', () => {
    cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
      .as('submitForm');

    const formScreen = new FormScreenPageObject(cy);

    formScreen.fill({
      name: 'Raphael', 
      email: 'raphael@gmail.com', 
      message: 'Apenas um teste',
    }).submitForm()

    cy.wait('@submitForm')
    .then((intercept) => {
      const {statusCode} = intercept.response;
      cy.get('p[id="success"]').should('exist');
    });
 })
});