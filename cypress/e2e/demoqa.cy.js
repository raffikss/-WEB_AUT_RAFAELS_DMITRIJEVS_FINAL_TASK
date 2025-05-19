import { FormPage } from "../../pageObjects/FormPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA Form Automation', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('body').then($body => {
            if ($body.find('#close-fixedban').length) {
                cy.get('#close-fixedban').click({ force: true });
            }
        });
    });

    it('Complete form submission and validation', () => {
        //Form is opened via beforeEach (baseUrl is set to the correct URL)
        //Fill in all necessary information
        FormPage.firstName.type('Rafaels');
        FormPage.lastName.type('Dmit');
        FormPage.email.type('rdmit@test.lv');
        FormPage.genderMale.click();
        FormPage.mobileNumber.type('11772277');
        //Set Date of Birth to 28th Feb 1930
        FormPage.dateOfBirthInput.click();
        FormPage.monthSelect.select('February');
        FormPage.yearSelect.select('1930');
        FormPage.daySelect.click();
        // d. Set Subjects to Economics
        FormPage.subjectsInput.type('Economics{enter}');
        // e. Set Hobbies to Music
        FormPage.hobbiesMusic.click();
        // f. Upload an image
        FormPage.uploadPicture.selectFile('files/test.jpeg');
        // g & h. Set State to NCR and City to Delhi
        FormPage.stateDropdown.click();
        FormPage.selectNCR().click();
        FormPage.cityDropdown.click();
        FormPage.selectDelhi().click();
        // Additional fields
        FormPage.address.type('Valmiera, Terbatas iela 10');
        //Click Submit
        FormPage.submitButton.click();
        //Validate the submission modal
        FormPage.modalContent.should('be.visible');
        // Validate each labeled row
        cy.get('.modal-content').within(() => {
            cy.get('td').contains('Student Name').next().should('have.text', 'Rafaels Dmit');
            cy.get('td').contains('Student Email').next().should('have.text', 'rdmit@test.lv');
            cy.get('td').contains('Gender').next().should('have.text', 'Male');
            cy.get('td').contains('Mobile').next().should('have.text', '11772277');
            cy.get('td').contains('Date of Birth').next().should('have.text', '28 February,1930');
            cy.get('td').contains('Subjects').next().should('have.text', 'Economics');
            cy.get('td').contains('Hobbies').next().should('have.text', 'Music');
            cy.get('td').contains('Picture').next().should('have.text', 'test.jpeg');
            cy.get('td').contains('Address').next().should('have.text', 'Valmiera, Terbatas iela 10');
            cy.get('td').contains('State and City').next().should('have.text', 'NCR Delhi');
        });
    });
});