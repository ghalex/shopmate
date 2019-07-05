describe("Products", () => {
  it("list products", () => {
    cy.visit("/");
    cy.get("[data-cy=products-grid]")
      .children()
      .should("have.length", 8);
  });
});
