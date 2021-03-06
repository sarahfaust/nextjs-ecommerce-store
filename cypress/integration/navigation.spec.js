export function dataCyString(item) {
  return `[data-cy="${item}"]`;
}

describe('Navigation', () => {
  it('should navigate to home page', () => {
    cy.visit('http://localhost:3000');
    cy.get(dataCyString('page-home-heading')).should('exist');
    cy.get(dataCyString('header-cart-link')).should(
      'have.text',
      '0 items in Cart',
    );
  });

  it('should navigate to about page', () => {
    cy.get(dataCyString('header-about-link')).click();
    cy.get(dataCyString('page-about-heading')).should('exist');
  });

  it('should navigate to products page', () => {
    cy.get(dataCyString('header-products-link')).click();
    cy.get(dataCyString('page-products-heading')).should('exist');
  });

  it('should navigate to backend page', () => {
    cy.get(dataCyString('header-backend-link')).click();
    cy.get(dataCyString('page-backend-heading')).should('exist');
  });

  it('should navigate to cart page', () => {
    cy.get(dataCyString('header-cart-link')).click();
    cy.get(dataCyString('page-cart-heading')).should('exist');
  });
});
