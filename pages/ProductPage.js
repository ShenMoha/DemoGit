exports.ProductPage=
class ProductPage{

    constructor(page)
    {
        this.page=page;
        this.productBackToproducts='#back-to-products';
        this.productLinkName='//div[@class="inventory_details_name large_size"]';
        this.productProductDetails='//div[@class="inventory_details_desc large_size"]';
        this.productImage='//div[@id="inventory_item_container"]/div/div/div[1]/img';
    }
   
    async  clickBackToProductLink(){
        await this.page.locator(this.productBackToproducts).click();
    }

    async  getProductLinkName(){
        return await this.page.locator(this.productLinkName).innerText()
    }

    
    async  getProductImage(){
         return await this.page.locator(this.productImage).getAttribute("alt");
    }

    async  getProductDetails(){
         return await this.page.locator(this.productProductDetails).innerText();
    }

}