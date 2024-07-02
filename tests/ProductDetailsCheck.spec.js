import {test,expect,chromium} from '@playwright/test';
//importing the pages javascript files
import { LoginPage } from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import fs from 'fs';
  

//Declaring global variables
let page,context,browser;

//fetching test data from the JSON test data file
const testDataPath="testdata/data.json";
const testData=JSON.parse(fs.readFileSync(testDataPath, 'utf8'))

//Initial setup before running the test method/function
test.beforeEach("Test setup",async()=>{
   browser=await chromium.launch();
   context=await browser.newContext();
   page= await context.newPage();
})

//closing all open browser
test.afterEach(()=>{
   page.close();
   context.close();
   browser.close();
})

//Running the test case for all the users
for (const user of testData){
   test(`Login with user ${user.username} for product details verification`,async()=>{

   //login to the application
   await page.goto("https://www.saucedemo.com/");

   const loginPage=new LoginPage(page);
   await loginPage.doLogin(user.username,user.password);
  
   await expect(page.getByText("Products")).toBeVisible()       
      
       //Home Page
      const homePage=new HomePage(page);
      const productPage=new ProductPage(page);
  
      const links=await homePage.getAllProductLinks();
      const attachedText=await homePage.getAllLinksAttachedText();
      const attachedImage=await homePage.getAllLinksAttachedImage();

      for (let i=0 ; i< await links.length; i++)
      {
         const productname=await links[i].innerText();
         const expectedText=await attachedText[i].innerText();
         const expectedImage=await attachedImage[i].getAttribute("alt")

         await homePage.clickProductLink(productname); 
         //product page
         //verification of product details
         test.step("Verify product link name",async()=>{
            const productLinkName=await productPage.getProductLinkName();
            expect.soft(productLinkName).toEqual(productname)
         })

         test.step("Verify product details",async()=>{
            const prouctDetails=await productPage.getProductDetails()
            expect.soft(prouctDetails).toEqual(expectedText)
         })

         test.step("Verify product image",async()=>{
            const imageDetails=await productPage.getProductImage() 
            expect.soft(imageDetails).toEqual(expectedImage);
         })

          await productPage.clickBackToProductLink();
          await page.locator('//span[@class="title"]').waitFor("visible")
      }

      await homePage.doLogout();
   
   })
}


test("Verification for locked out user",async()=>{
   //login to the application
   await page.goto("https://www.saucedemo.com/");

   const loginPage=new LoginPage(page);
   await loginPage.doLogin("locked_out_user","secret_sauce");
   
   await expect(page.getByText("Products")).not.toBeVisible()    
   
   const errValue=await page.locator('//div[@id="login_button_container"]/div/form/div[3]/h3').textContent();
   console.log("User failed to login application error =>"+ errValue)
      

})