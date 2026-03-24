import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import HomePage from './saucedemo.logconf'
import Site from './saucedemo.base';
class SauceLog extends Site {
    //---selectors------------
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
     get btnSubmit () {
        return $('#login-button');
    }
    get hamburgerMenu(){
        return $('.bm-burger-button')
    }
    get logoutBtn(){
        return $('#logout_sidebar_link')
    }
    //-------------------------------
    users = [
        {username: 'standard_user', shouldAccess: true},
        {username: 'locked_out_user', shouldAccess: false},
        {username: 'problem_user', shouldAccess: true},
        {username: 'performance_glitch_user', shouldAccess: true},
        {username: 'error_user', shouldAccess: true},
        {username: 'visual_user', shouldAccess: true}
    ];
    //---------functions--------------
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async logout(){
        await this.hamburgerMenu.click();
        await this.logoutBtn.waitForClickable({ timeout: 3000 });
        await this.logoutBtn.click();
    }
};

export default new SauceLog();