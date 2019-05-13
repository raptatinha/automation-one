const helper = require("protactor-helper");

const HomePage = require("../pageObjects/home");

describe("Home Page", () => {
    const homePage = new HomePage();

    beforeEach(() => browser.get(homePage.relativeUrl));

    describe("adding new item", () => {
            beforeEach(() => helper.clickWhenClicable(homePage.addNewItemButton));

            it("checking if create new item page is displayed", () => {
                helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/items/create`);
            });
    });
});
