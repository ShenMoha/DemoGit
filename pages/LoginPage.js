exports.LoginPage=

class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.username='#user-name';
        //this.username = '[data-test="username"]'
        
        this.password='#password';
        this.login="//input[@id='login-button']";
        this.lockedOutHeader='//div[@id="login_button_container"]/div/form/div[3]/h3'
        this.productspan='//div[@id="header_container"]/div[2]/span'
    }
    async doLogin(username,password){
        await this.page
          .waitFor({state:'visible'})
          .locator(this.username).fill(username);
        await this.page
           .locator(this.password).fill(password);
        await this.page
           .locator(this.login).click();
    }

    
}