import { expect } from '@wdio/globals'
import SauceLog from '../pageobjects/saucedemo.login.js'
import HomePage from '../pageobjects/saucedemo.logconf.js'
import LogoutProcess from '../pageobjects/saucedemo.logout.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SauceLog.open()
//Postive Test for All Users------------------------
        await SauceLog.login('standard_user', 'secret_sauce');
        await expect(HomePage.landingPage).toBeExisting();
        await LogoutProcess.logout();
        await SauceLog.login('locked_out_user', 'secret_sauce');
        await expect(HomePage.sadFaceButGood).toBeExisting();
        await SauceLog.login('problem_user', 'secret_sauce');
        await expect(HomePage.landingPage).toBeExisting();
        await LogoutProcess.logout();
        await SauceLog.login('performance_glitch_user', 'secret_sauce');
        await expect(HomePage.landingPage).toBeExisting();
        await LogoutProcess.logout();
        await SauceLog.login('error_user', 'secret_sauce');
        await expect(HomePage.landingPage).toBeExisting();
        await LogoutProcess.logout();
        await SauceLog.login('visual_user', 'secret_sauce');
        await expect(HomePage.landingPage).toBeExisting();
        await LogoutProcess.logout();
        //Negative Test for all users------------------------
        await SauceLog.login('standard_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        await SauceLog.login('locked_out_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        await SauceLog.login('problem_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        await SauceLog.login('performance_glitch_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        await SauceLog.login('error_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        await SauceLog.login('visual_user', '');
        await expect(HomePage.needsPassword).toBeExisting();
        
    })
})
