export class FormPage {
static get firstName() {
    return cy.get('#firstName');
}

static get lastName() {
    return cy.get('#lastName');
}

static get email() {
    return cy.get('#userEmail');
}

static get genderMale() {
    return cy.get('label[for="gender-radio-1"]');
}

static get mobileNumber() {
    return cy.get('#userNumber');
}

static get dateOfBirthInput() {
    return cy.get('#dateOfBirthInput');
}

static get monthSelect() {
    return cy.get('.react-datepicker__month-select');
}

static get yearSelect() {

    return cy.get('.react-datepicker__year-select');
}

static get daySelect() {
    return cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)');
}

static get subjectsInput() {
    return cy.get('#subjectsInput');
}

static get hobbiesMusic() {
    return cy.get('label[for="hobbies-checkbox-3"]');
}

static get uploadPicture() {
    return cy.get('#uploadPicture');
}

static get address() {
    return cy.get('#currentAddress');
}

static get stateDropdown() {
    return cy.get('#state');
}

static selectNCR() {
    return cy.get('.css-11unzgr').should('be.visible').contains('NCR');
}

static get cityDropdown() {
    return cy.get('#city');
}

static selectDelhi() {
    return cy.get('.css-11unzgr').should('be.visible').contains('Delhi');
}

static get submitButton() {
    return cy.get('#submit');
}

static get modalContent() {
    return cy.get('.modal-content');
}
}

