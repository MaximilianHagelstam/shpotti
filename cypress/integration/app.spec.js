describe("Home", () => {
  it("should contain James heading", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("James");
  });
});
