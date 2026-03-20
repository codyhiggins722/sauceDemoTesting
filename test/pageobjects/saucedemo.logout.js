import { $ } from '@wdio/globals'
import Site from './saucedemo.base';
class LogoutProcess extends Site {
    get hamburgerMenu(){
        return $('.bm-burger-button')
    }
    get logoutBtn(){
        return $('#logout_sidebar_link')
    }
    async logout(){
    await this.hamburgerMenu.click();
    await this.logoutBtn.waitForClickable({ timeout: 3000 });
    await this.logoutBtn.click();
    }
}

export default new LogoutProcess();