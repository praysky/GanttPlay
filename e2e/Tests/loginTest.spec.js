
const { test, expect } = require('@playwright/test');
let Locator = require('../Pages/loginPage');
import { faker } from '@faker-js/faker';


// test.describe("open page Login", () => {
//   test.beforeEach(async ({ page }) => {
//     // Go to the starting url before each test.
//     await page.goto("https://ganttpro.com/en/#/login");
    
//   });

test('Id 2: sign in', async ({ page }) => {
  const locator = new Locator(page)
  await page.goto('https://ganttpro.com/en/#/login');
  //await expect(page).toHaveScreenshot()
  await locator.inputEmail.fill(locator.email)
  await locator.inputPassword.fill(locator.passwordValue)
  
  //await page.screenshot({ path: 'screenshot1.png' });
  await locator.buttonLoginFormPopup.click()
  
  await expect(page).toHaveTitle(/GanttPRO/);
  
  
  

});
// test('Id 1: sign up', async ({ page }) => {
//   const locator = new Locator(page)
// await page.goto(locator.urlMainPage)
//   await locator.buttonSignUpLoginPage.click()
//   await locator.inputEmailPopupSignUp.fill(locator.emailForRegistration)
//   await expect(page.frameLocator('#frame').locator('//input[@id="form-checkbox"]')).toBeVisible()
//  await locator.checkboxTerms.check(({force: true}))
//   await locator.butttonCreateAccount.click()
//   await page.locator('//div[@class="welcome_main_buttons add_dropdown"]/select').selectOption("marketing"); //industry
//   await page.locator('//div[@class="welcome_main_buttons"]/div[3]').click() //count users
//   await page.locator('//div[@class="welcome_main_button h72 js-company-submit-btn loading-btn green"]').click() //button
//   await page.locator('//div[@class="webix_el_box"]/input[@placeholder="Please enter your first name ..."]').fill(faker.fake.bind.name) //firstname
//   await page.locator('//div[@view_id="formLastName"]//input') //lastname
//   await page.locator('//div[@view_id="welcomePasswordSection"]//input') // password
//   await page.locator('//div[@class="welcome_main_button h72 js-user-submit-btn loading-btn step_2 green"]') //button create account
//   //await locator.selectUserIndustry
// });
// // });