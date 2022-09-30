import { faker } from '@faker-js/faker';
 class Locators{
    constructor (page) {
        this._page = page
    }
    
//Login Popup Page url
    get urlLoginPagePopup(){
        return "https://ganttpro.com/en/#/login"
    }
//Main page url
get urlMainPage(){
    return "https://ganttpro.com/en"
}


//Popup Sign Up

    get buttonSignUpLoginPage(){
        return this._page.locator('//div [@class="menu_buttons"]/a[@class="btn sign_up"]')
    }
    get inputEmailPopupSignUp(){
        return this._page.frameLocator('#frame').locator('//input[@id="email"]')
        //return this._page.locator('//input[@id="email"]')
    }
    get emailForRegistration(){
       // return "1playwright@test.test"
          const email = faker.internet.email()
          return email
    }
    get butttonCreateAccount (){
        return this._page.frameLocator('#frame').locator('//a[@class="submit_btn embed-btn-login"]')
    }
    get checkboxTerms(){
        //return this._page.frameLocator('#frame').locator('//input[@class="embed-checkbox"][@id="form-checkbox"]')
        return this._page.frameLocator('#frame').locator('//input[@id="form-checkbox"]')
    }

//Popup login
    get inputEmail(){
        return this._page.frameLocator('#frame').locator('#email')
    }
  
   get email (){
    return "playwright@test.test"
   }
   get inputPassword(){
    return this._page.frameLocator('#frame').locator('#password')
   }
    get passwordValue(){
        return "123456"
    }
    get buttonLoginFormPopup(){
        return this._page.frameLocator('#frame').locator('#login')
    }
   get selectUserIndustry (){
    return this._page.locator('//div[@class="welcome_main_buttons add_dropdown"]').selectOption('marketing')
    //select[@id="js-select-user-industry"]
   }

//345534
//454545
}
 module.exports = Locators