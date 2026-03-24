import { $ } from '@wdio/globals'
import Site from './saucedemo.base';
class HomePage extends Site {
    get landingPage () {
        return $('//span[contains(text(),"Products")]');
    }
    get sadFaceButGood() {
        return $('//h3[contains(text(), "locked out")]')
    }
    get needsPassword() {
        return $('//h3[contains(text(), "Password is required")]')
    }
}

export default new HomePage();