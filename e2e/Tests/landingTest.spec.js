const { test, expect } = require('@playwright/test');
const { request } = require('@playwright/test');
let LandingPage = require('../Pages/landingPage');
let CommonFunctions = require('../commonFunctions')

test('open main page', async ({ page }) => {
    const landingPage = new LandingPage(page)
    await page.goto(landingPage.urlMainPage)
    await expect(page).toHaveTitle(/GanttPRO/)
});
 
test.describe('locale block De', () => {
    // Run tests in this describe block with portrait-like viewport.
    test.use({ locale: 'de-DE',
    timezoneId: 'Europe/Berlin',});
  
    test('Main page: DE locale', async ({ page }) => {
        const landingPage = new LandingPage(page)
        await page.goto(landingPage.urlMainPage)
        await expect(page.locator('.btn.sign_up')).toHaveText('Kostenlos Testen');
        //*[.='Kostenlos Testen']
        await expect(page).toHaveTitle(/GanttPRO/)
    });
  });

  test('Main page: EN locale', async ({ page }) => {
    const landingPage = new LandingPage(page)
    await page.goto(landingPage.urlMainPage)
    await expect(page.locator('.btn.sign_up')).toHaveText('Sign up free');
    //*[.='Kostenlos Testen']
    await expect(page).toHaveTitle(/GanttPRO/)
});

