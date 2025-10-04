export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.locator('button[ng-click="addCust()"]');
    this.openAccountButton = page.locator('button[ng-click="openAccount()"]');
    this.customersButton = page.locator('button[ng-click="showCust()"]');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager');
  }

  async goToAddCustomer() {
    await this.addCustomerButton.click();
  }

  async goToOpenAccount() {
    await this.openAccountButton.click();
  }

  async goToCustomers() {
    await this.customersButton.click();
  }
}
