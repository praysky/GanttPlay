
const { test, expect } = require('@playwright/test');
//const { inputEmail, inputPassword, buttonLoginInPopup } = require('../loginLocators/loginLocators');
let Locator = require('../loginLocators/loginLocators');


test.describe("open page Login", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://ganttpro.com/en/#/login");
    
  });

test('1authorization in ganttpro', async ({ page }) => {
  const locator = new Locator(page)
  //await page.goto('https://ganttpro.com/en/#/login');
  await locator.inputEmail.fill(locator.email)
  //await page.frameLocator('#frame').locator('#email').fill("playwright@test.test")
  await locator.inputPassword.fill(locator.passwordValue)
  
  //await page.screenshot({ path: 'screenshot1.png' });
  await locator.buttonLogin.click()
  
  await expect(page).toHaveTitle(/GanttPRO/);
  await expect(page).toHaveScreenshot()
  
  

});
});