describe('Members Sign Up Form', () => {
    it('RUNS THE SITE', () => {
        cy.visit('http://localhost:3000/')
    })
    it('HAS A USERNAME', () => {
        cy.get('input[name="name"]')
            .type('Erick Canales')
            .should('have.value', 'Erick Canales')
    })
    it('HAS AN EMAIL', () => {
        cy.get('input[name="email"]')
            .type('ecanales@canales.com')
    })
    it('HAS A PASSWORD', () => {
        cy.get('input[name="password"]')
            .type('Password123')
    })
    it('HAS TOS CHECKED', () => {
        cy.get('input[name="tos"]')
            .check()
    })

    it('CAN SUBMIT FORM', () => {
        cy.get('input[name="name"]')
            .should('have.value', 'Erick Canales')
        cy.get('input[name="email"]')
            .should('have.value', 'ecanales@canales.com')
        cy.get('input[name="password"]')
            .should('have.value', 'Password123')
        cy.get('input[name="tos"]')
            .should('have.value', 'true')
        cy.contains('Submit')
            .click()
    })
        
})