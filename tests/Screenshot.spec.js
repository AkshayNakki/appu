const {test,expect}=require('@playwright/test')

test('Home page',async({page})=>{

  await  page.goto('https://qasa.ziply.ai/login');

  await page.screenshot({ path: 'screenshot.png' });

  const pageTitle= page.title();

})