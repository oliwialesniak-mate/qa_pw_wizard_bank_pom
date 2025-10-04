export class BankHomePage {
  constructor(page) {
    this.page = page;
    this.bankManagerLoginButton = page.locator('button[ng-click="manager()"]');
    this.customerLoginButton = page.locator('button[ng-click="customer()"]');
    this.homeButton = page.locator('.home'); // optional: the "Home" link
  }

  async open() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }

  async clickBankManagerLogin() {
    await this.bankManagerLoginButton.click();
  }

  async clickCustomerLogin() {
    await this.customerLoginButton.click();
  }
}
