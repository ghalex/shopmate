describe("Products", () => {
  it("list products", () => {
    cy.visit("/");
    cy.get("[data-cy=products-grid]")
      .children()
      .should("have.length", 8);
  });

  it("filter products", () => {
    cy.visit("/");

    cy.get("[data-cy=filters-departments] > button")
      .eq(2)
      .click();

    cy.wait(2000);

    cy.get("[data-cy=filters-categories] > button")
      .eq(2)
      .click();

    cy.wait(2000);

    cy.get("[data-cy=products-grid] [data-cy=product] [data-cy=product-name]")
      .eq(0)
      .should($p => {
        expect($p).to.contain("Afghan Flower");
      });
  });

  it("view product", () => {
    cy.visit("/");

    cy.get("[data-cy=products-grid] [data-cy=product] [data-cy=product-view]")
      .eq(0)
      .click();

    cy.url().should("include", "/products/1");
    cy.get("[data-cy=product-details] [data-cy=product-name]").should("contain", "Arc d'Triomphe");
  });
});
