import { browser } from '@wdio/globals'
export default class Site {
    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}