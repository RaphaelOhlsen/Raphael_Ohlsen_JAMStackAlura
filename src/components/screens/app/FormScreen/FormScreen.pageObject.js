export default class FormScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/');
    this.cy.get('a[href="/form"]').click();
  }

  fill({name, email, message}) {
    const fieldName = this.cy.get('input[name="name"]');
    fieldName.type(name);

    const fieldEmail = this.cy.get('input[name="email"]');
    fieldEmail.type(email);

    const fieldMessage = this.cy.get('textarea');
    fieldMessage.type(message);

    return this;
  }
  submitForm() {
    const sendButton = this.cy.get('button[type="submit"]');
    sendButton.click();

    return this;
  }
}