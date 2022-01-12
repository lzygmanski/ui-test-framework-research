import { ChainablePromiseElement } from "webdriverio";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RCAPage {
  /**
   * define selectors using getter methods
   */
  public get mainText(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $("p=Edit src/App.js and save to reload.");
  }

  public get redirectButton(): ChainablePromiseElement<
    Promise<WebdriverIO.Element>
  > {
    return $("=Learn React");
  }

  public async redirect(): Promise<void> {
    await this.redirectButton.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open(): Promise<string> {
    return browser.url("/");
  }
}

export default new RCAPage();
