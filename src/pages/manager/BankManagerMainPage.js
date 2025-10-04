import { expect } from '@playwright/test';

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.locator('button[ng-class="btnClass1"]');
    this.openAccountButton = page.locator('button[ng-class="btnClass2"]');
    this.customersButton = page.locator('button[ng-class="btnClass3"]');
  }

  async assertManagerPageIsVisible() {
    await expect(this.addCustomerButton).toBeVisible();
  }

  async openAddCustomerPage() {
    await this.addCustomerButton.click();
  }

  async openOpenAccountPage() {
    await this.openAccountButton.click();
  }

  async openCustomersPage() {
    await this.customersButton.click();
  }
}
