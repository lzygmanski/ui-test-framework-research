import RCAPage from "../pageobjects/rca.page";

describe("React test app", () => {
  beforeEach(async () => {
    await RCAPage.open();
  });
  it("'Edit' word exist", async () => {
    await expect(RCAPage.mainText).toHaveTextContaining("Edit");
  });
  it("Redirected to React docs docs", async () => {
    RCAPage.redirect();
    expect(browser).toHaveUrl("https://reactjs.org/");
  });
});
