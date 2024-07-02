
exports.HomePage =

class HomePage{
    constructor(page){
        this.page=page
        this.productsTitle='//span[@class="title"]';
        this.links='//div[@class="inventory_list"]/div/div/div/a';
        this.attachedText='//div[@class="inventory_item"]/div/div[1]/div';
        this.attachedImage='//div[@class="inventory_list"]/div/div/a/img';
        this.buttonMenu='//button[@id="react-burger-menu-btn"]';
        this.logoutLink='//a[@id="logout_sidebar_link"]'
    }

    async getAllProductLinks(){
         return await this.page.$$(this.links);
    }

    async getAllLinksAttachedText(){
        return await this.page.$$(this.attachedText);
    }

    async getAllLinksAttachedImage(){
        return await this.page.$$(this.attachedImage);
    }
    
    async clickProductLink(productname){
        await this.page.locator(`//div[normalize-space()="${productname}"]`).click()
   }

    async clickMenuButton()
    {
        await this.page.locator(this.buttonMenu).click();
    }

    async doLogout()
    {
        await this.page
         .locator(this.buttonMenu).click();
         await this.page
         .locator(this.logoutLink).click();
    }

    

}