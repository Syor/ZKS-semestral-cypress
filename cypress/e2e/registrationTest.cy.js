import registrationPage from "../pageObjects/registrationPage";
import registrations from "../fixtures/registrationData.json";

registrations.forEach((registrationData => {
  describe('registration test ' + registrationData.testCase, () => {
    it('open page', () => {
      cy.registrationPage();
      registrationPage.checkOwnPassword();

      if(registrationData.jmeno.length != 0)
      {
        registrationPage.typeIntoJmeno(registrationData.jmeno);
      }
      else
      {
        registrationPage.clickJmeno();
      }

      if(registrationData.prijmeni.length != 0)
      {
        registrationPage.typeIntoPrijmeni(registrationData.prijmeni);
      }
      else
      {
        registrationPage.clickPrijmeni();
      }

      registrationPage.typeIntoEmail(registrationData.email);

      if(registrationData.emailconfirm)
      {
        registrationPage.typeIntoEmailConf(registrationData.email);
      }
      else
      {
        registrationPage.emailConfClick();
      }

      registrationPage.typeIntoPassword(registrationData.password);

      if(registrationData.passwordconfirm)
      {
        registrationPage.typeIntoPasswordConf(registrationData.password);
      }
      else{
        registrationPage.passwordConfClick();
      }

      if(registrationData.shouldFail)
      {
        expect(cy.get('span[class="help-block form-error"]')).to.exist;
      }
      else
      {
        cy.get('span[class="help-block form-error"]').should('not.exist');
      }

    })
  })
}))