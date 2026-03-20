import { $ } from '@wdio/globals'
import Site from './saucedemo.base';
class SauceLog extends Site {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    open () {
        return super.open('login');
    }
}

export default new SauceLog();