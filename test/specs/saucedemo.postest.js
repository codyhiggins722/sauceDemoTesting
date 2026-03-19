import { expect } from '@wdio/globals'
import SauceLog from '../pageobjects/saucedemo.login.js'
import HomePage from '../pageobjects/saucedemo.logconf.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SauceLog.open()

        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting()
    })
})
