import { $ } from '@wdio/globals'
import Page from './saucedemo.base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get landingPage () {
        return $('//span[contains(text(),"Products")]');
    }
}

export default new HomePage();