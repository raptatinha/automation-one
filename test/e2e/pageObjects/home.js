class Home {
    constructor() {
        this.relativeUrl = "";
        this.itemsContainer = element(by.id("items-container"));
        this.viewButtonOfFirstItem = element.all(by.css("#items-container .item-card .item-view")).first();
        this.navigationContainer = element(by.id("navigation"));
        this.addNewItemButton = this.container.element(by.className("create-button"));
    }
}
module.exports = Home;