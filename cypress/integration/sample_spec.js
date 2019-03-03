describe('My first test', function () {
  it('Does not do much', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Home')
    cy.contains('About').click()
    cy.url().should('include','/about')
    cy.contains('Home').click()
    cy.contains('Jewellery').click()
    // expect(true).to.equal(true)
  })
})
