class RegistrationPage {
    elements = {
        jmenoInput: () => cy.get('input[id="customer_firstname"'),
        prijmeniInput: () => cy.get('input[id="customer_lastname"]'),
        emailInput: () => cy.get('input[id="customer_email"]'),
        emailConfirmInput: () => cy.get('input[id="customer_conf_email"]'),
        passwordCheckbox: () => cy.get('input[id="checkbox_create_account"]'),
        passwordInput: () => cy.get('input[id="customer_passwd"]'),
        passwordConfirmInput: () => cy.get('input[id="customer_conf_passwd"]'),
    }

    typeIntoJmeno(text) {
        this.elements.jmenoInput().type(text);
    }

    clickJmeno()
    {
        this.elements.jmenoInput().click();
    }

    typeIntoPrijmeni(text) {
        this.elements.prijmeniInput().type(text);
    }

    clickPrijmeni()
    {
        this.elements.prijmeniInput().click();
    }

    typeIntoEmail(text) {
        this.elements.emailInput().type(text);
    }

    typeIntoEmailConf(text) {
        this.elements.emailConfirmInput().type(text);
    }

    emailConfClick()
    {
        this.elements.emailConfirmInput().click();
    }

    checkOwnPassword() {
        this.elements.passwordCheckbox().check();
    }

    typeIntoPassword(text) {
        this.elements.passwordInput().type(text);
    }

    typeIntoPasswordConf(text) {
        this.elements.passwordConfirmInput().type(text);
    }

    passwordConfClick(){
        this.elements.passwordConfirmInput().click();
    }
}

module.exports = new RegistrationPage();

//https://www.browserstack.com/guide/cypress-page-object-model