// @ts-check
const { test, expect } = require('@playwright/test');
//let loginTest = require('../e2e/loginPage/loginLocators/loginLocators')
test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://ganttpro.com/en/#/login');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/GanttPRO Project Management Blog/);

  // const buttonLoginBlog = page.locator('//a[@href="#login"]')
  // await buttonLoginBlog.click
  
  // const headerLogin =page.frameLocator('#frame').locator('//p/a[contains(text(),"Зарегистрироваться")]')
  // await headerLogin.click
  await page.frameLocator('#frame').locator('#email').fill("playwright@test.test");
  await page.frameLocator('#frame').locator('#password').fill("123456");
 
   const login = page.frameLocator('#frame').locator('#login')
   await login.click()
   await expect(page).toHaveTitle(/GanttPRO/);
   //await expect(page).toHaveURL(/#project/)

//const signInLinkButtonFromPopup = page.locator('//p/a[contains(text(),"Зарегистрироваться")]')


  //const loginButton = page.locator('//*[contains(@class,"btn login")]')
  //await loginButton.click

  //const headerLogin = await page.frameLocator('#frame').locator('#email');
  //await headerLogin.type("123")

  //await expect(page).toHaveURL(/en/);
//const signUpButton = page.locator('//a[.="Sign up free"]/@href')
  //await signUpButton.click
 //const fieldEmail = page.locator('//*[@id="email"]')
// await expect(page).toHaveURL(/signup/);
  // create a locator
  //const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();
  
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);

});
// @ts-check
test('123homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://ganttpro.com/en/#/login');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/GanttPRO Project Management Blog/);

  // const buttonLoginBlog = page.locator('//a[@href="#login"]')
  // await buttonLoginBlog.click
  
  // const headerLogin =page.frameLocator('#frame').locator('//p/a[contains(text(),"Зарегистрироваться")]')
  // await headerLogin.click
  await page.frameLocator('#frame').locator('#email').fill("playwright@test.test");
  await page.frameLocator('#frame').locator('#password').fill("123456");
 
   const login = page.frameLocator('#frame').locator('#login')
   await login.click()
   await expect(page).toHaveTitle(/GanttPRO/);
   //await expect(page).toHaveURL(/#project/)

//const signInLinkButtonFromPopup = page.locator('//p/a[contains(text(),"Зарегистрироваться")]')


  //const loginButton = page.locator('//*[contains(@class,"btn login")]')
  //await loginButton.click

  //const headerLogin = await page.frameLocator('#frame').locator('#email');
  //await headerLogin.type("123")

  //await expect(page).toHaveURL(/en/);
//const signUpButton = page.locator('//a[.="Sign up free"]/@href')
  //await signUpButton.click
 //const fieldEmail = page.locator('//*[@id="email"]')
// await expect(page).toHaveURL(/signup/);
  // create a locator
  //const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();
  
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);

});
// @ts-check
test('authorization in ganttpro', async ({ page }) => {
  await page.goto('https://ganttpro.com/en/#/login');

  await page.frameLocator('#frame').locator('#email').fill("playwright@test.test"),
  await page.frameLocator('#frame').locator('#password').fill("123456"),
  await page.frameLocator('#frame').locator('#login').click,
  
  await expect(page).toHaveTitle(/GanttPRO/);
  
  

});