describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads list of the characters", async () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://www.breakingbadapi.com/api/characters**",
        pathname: "/characters",
        query: {
          _limit: "10",
        },
      },
      {
        fixture: "characters.json",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).as("getCharacters");

    await cy.wait("@getCharacter");

    cy.get("[data-test-char-list] tbody > tr").should("have.length", 10);
  });
});
