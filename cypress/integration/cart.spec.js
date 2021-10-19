import { getRandomNumber } from '../../util/math';

const id = getRandomNumber(1, 10);

export function dataCyString(item) {
  return `[data-cy="${item}"]`;
}

describe('Cart', () => {
  it('should check that cart is empty', () => {
    cy.visit('http://localhost:3000');
    cy.get(dataCyString('header-cart-link')).should(
      'have.text',
      '0 items in Cart',
    );
  });

  it('should go to a random product page', () => {
    cy.get(dataCyString('header-products-link')).click();
    cy.get(dataCyString(`products-item-${id}`)).click();
  });

  it('should check that amount increases', () => {
    cy.get(dataCyString(`product-amount-${id}`)).should('have.text', '0');
    cy.get(dataCyString('product-amount-increase')).click();
    cy.get(dataCyString(`product-amount-${id}`)).should('have.text', '1');
  });

  it('should check that amount decreases', () => {
    cy.get(dataCyString(`product-amount-${id}`)).should('have.text', '1');
    cy.get(dataCyString('product-amount-decrease')).click();
    cy.get(dataCyString(`product-amount-${id}`)).should('have.text', '0');
  });

  it('should add an item to the cart', () => {
    cy.get(dataCyString('product-amount-increase')).click();
    cy.get(dataCyString(`product-add-button-${id}`)).click();
    cy.get(dataCyString('header-cart-link')).should(
      'have.text',
      '1 item in Cart',
    );
  });

  it('should check that amount is reset', () => {
    cy.get(dataCyString(`product-amount-${id}`)).should('have.text', '0');
  });

  it('should count items in the cart', () => {
    cy.get(dataCyString('header-cart-link')).click();
    cy.get(dataCyString('cart-items')).should('have.length', 1);
  });

  it('should make sure total equals 50', () => {
    cy.get(dataCyString('cart-total')).should('have.text', 'Total: 50 €');
  });

  it('should remove item from cart', () => {
    cy.get(dataCyString(`cart-delete-button-${id}`)).click();
    cy.get(dataCyString('cart-items')).should('not.exist');
    cy.get(dataCyString('header-cart-link')).should(
      'have.text',
      '0 items in Cart',
    );
  });
});
