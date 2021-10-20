import { getRandomNumber } from '../../util/math';

const id = getRandomNumber(1, 10);

export function dataCyString(item) {
  return `[data-cy="${item}"]`;
}

describe('Checkout from cart', () => {
  it('should navigate to product page', () => {
    cy.visit(`http://localhost:3000/products/${id}`);
  });

  it('should add an item to the cart', () => {
    cy.get(dataCyString('product-amount-increase')).click();
    cy.get(dataCyString(`product-add-button-${id}`)).click();
    cy.get(dataCyString('header-cart-link')).should(
      'have.text',
      '1 item in Cart',
    );
  });

  it('should go to cart page', () => {
    cy.get(dataCyString('header-cart-link')).click();
  });

  it('should have 1 item in the cart', () => {
    cy.get(dataCyString('cart-items')).should('have.length', 1);
  });

  it('should go to checkout page', () => {
    cy.get(dataCyString('cart-checkout-link')).click();
  });

  it('should enter customer data', () => {
    cy.get(dataCyString('checkout-input-firstname'))
      .type('Sarah')
      .should('have.value', 'Sarah');
    cy.get(dataCyString('checkout-input-lastname'))
      .type('Sahara')
      .should('have.value', 'Sahara');
    cy.get(dataCyString('checkout-input-email'))
      .type('sarah.sahara@provider.com')
      .should('have.value', 'sarah.sahara@provider.com');
    cy.get(dataCyString('checkout-input-address'))
      .type('Somewhere Street 42')
      .should('have.value', 'Somewhere Street 42');
    cy.get(dataCyString('checkout-input-city'))
      .type('Closeby City')
      .should('have.value', 'Closeby City');
    cy.get(dataCyString('checkout-input-postcode'))
      .type('4242')
      .should('have.value', '4242');
  });

  it('should go to thanks page', () => {
    cy.get(dataCyString('checkout-buy-button')).click();
    cy.url().should('include', '/thanks');
    cy.get(dataCyString('page-thanks-heading')).should('exist');
  });
});
