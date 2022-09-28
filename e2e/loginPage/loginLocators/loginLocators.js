
 class Locators{
    constructor (page) {
        this._page = page
    }
//Login Page
    get urlLoginPagePopup(){
        return "https://ganttpro.com/en/#/login"
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
    get buttonLogin(){
        return this._page.frameLocator('#frame').locator('#login')
    }
//345534
//454545
}
 module.exports = Locators