const { test, expect } = require('@playwright/test');


test('Locater',async({page})=>{
   

    await  page.goto('https://qasa.ziply.ai/login');


    await new Promise(resolve => setTimeout(resolve, 2000));

    //await page.locator('xpath=//input[@placeholder='Username']').click();

  

    await page.getByPlaceholder('example@gmail.com').type("superadmin@yopmail.com")
    const buffer = await page.screenshot();
console.log(buffer.toString('base64'));
   await page.getByPlaceholder('password').type("Mobile@123")

   await page.screenshot({ path: 'screenshot.png' });
   await page.click("//button[normalize-space()='Login']")
   await page.screenshot({ path: 'screenshot.png' });
   await page.click("//div[contains(text(),'Add Customer')]")
  
  


   await page.screenshot({ path: 'tests\Locaters.spec.js'+'screenshot.png' });

})