describe("React test app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("'Edit' word exist", () => {
    cy.contains("Edit");
  });

  it("Redirected to React docs docs", () => {
    cy.contains("Learn React").invoke("removeAttr", "target").click();

    cy.url().should("eq", "https://reactjs.org/");
  });
});
