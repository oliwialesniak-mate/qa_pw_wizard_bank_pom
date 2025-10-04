import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search Customer"]');
    this.customerRows = page.locator('table tbody tr');
    this.deleteButtons = page.locator('button', { hasText: 'Delete' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async searchCustomer(keyword) {
    await this.searchInput.fill(keyword);
  }

  async getCustomerRowData(index = 0) {
    const row = this.customerRows.nth(index);
    const cells = row.locator('td');
    const firstName = await cells.nth(0).textContent();
    const lastName = await cells.nth(1).textContent();
    const postCode = await cells.nth(2).textContent();
    const accountNumber = await cells.nth(3).textContent();
    return { firstName, lastName, postCode, accountNumber };
  }

  async assertCustomerExists(firstName, lastName) {
    await expect(this.page.locator('table')).toContainText(firstName);
    await expect(this.page.locator('table')).toContainText(lastName);
  }

  async deleteCustomerByName(firstName) {
    const row = this.customerRows.filter({ hasText: firstName }).first();
    await row.locator('button', { hasText: 'Delete' }).click();
  }
}
