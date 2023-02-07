it('works', () => {
  cy.wait(10_000)
  cy.wrap(true).should('be.false')
})
