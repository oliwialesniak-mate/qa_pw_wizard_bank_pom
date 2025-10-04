import { expect } from '@playwright/test';

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.addCustomerButton = page.getByRole('button', { name: 'Add Customer' });
    this.openAccountButton = page.getByRole('button', { name: 'Open Account' });
    this.customersButton = page.getByRole('button', { name: 'Customers' });
  }

  async assertManagerPageIsVisible() {
    await expect(this.addCustomerButton).toBeVisible();
  }

  // aliases used by tests
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
