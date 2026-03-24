import { expect } from '@wdio/globals'
import SauceLog from '../pageobjects/saucedemo.siteaccess.js'
import HomePage from '../pageobjects/saucedemo.logconf.js'

describe('My Login application', () => {
    SauceLog.users.forEach((user) => {
    it(`should login with valid credentials for, log out, then fail to log in with missing password: ${user.username}`, async () => {
        await SauceLog.open()
//Postive Test for All Users------------------------
        await SauceLog.login(user.username, 'secret_sauce');
                if (user.shouldAccess) {
                    await expect(HomePage.landingPage).toBeExisting();
                    await SauceLog.logout();
                    await SauceLog.inputUsername.waitForExist({timeout: 3000});
                    } else {
                        await expect(HomePage.sadFaceButGood).toBeExisting();
                        await browser.refresh();
                        await SauceLog.inputUsername.waitForExist({timeout: 3000});
                    }
        //Negative Test for all users------------------------
        await SauceLog.login(user.username, '');
        await expect(HomePage.needsPassword).toBeExisting();           
        });
    });
})