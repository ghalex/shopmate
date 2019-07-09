describe("Cart", () => {
  it("add product", () => {
    cy.visit("/products/1");
    cy.get("[data-cy=navigation] [data-cy=cart-badge]").should("contain", "0");
    cy.get("[data-cy=product-details] [data-cy=product-add]").click();
    cy.get("[data-cy=navigation] [data-cy=cart-badge]").should("contain", "1");
  });
});
