import { $ } from '@wdio/globals'
import Page from './saucedemo.base';
class HomePage extends Page {
    get landingPage () {
        return $('//span[contains(text(),"Products")]');
    }
}

export default new HomePage();