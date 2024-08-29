  const {test,expect} = require('@playwright/test')

  test('login',async({page})=>{

    (async function maximizeWindow() {
      // Initialize the WebDriver
      let driver = await new Builder().forBrowser('chrome').build();
  
      try {
          // Maximize the browser window
          await driver.manage().window().maximize();
  
          // Navigate to a website
          await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/log');


          await page.screenshot({ path: 'screenshot.png' });
  
          // Your test steps go here
  
      } finally {
          // Quit the browser session
          await driver.quit();
      }
  })();



 const pageTitle=page.title();
 console.log('page Title is:',pageTitle)


  })