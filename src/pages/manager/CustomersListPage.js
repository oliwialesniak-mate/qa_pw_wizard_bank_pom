import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search Customer');
    this.customerRows = page.locator('table tbody tr');
  }

  async searchCustomer(term) {
    await this.searchInput.fill(term);
  }

  async assertOnlyOneResult() {
    await expect(this.customerRows).toHaveCount(1);
  }

  async assertCustomerExists(firstName, lastName) {
    const row = this.page.locator('table tbody tr', { hasText: firstName });
    await expect(row).toContainText(lastName);
  }

  async deleteCustomerByName(firstName) {
    const deleteButton = this.page
      .locator('table tbody tr', { hasText: firstName })
      .getByRole('button', { name: 'Delete' });

    await deleteButton.click();
  }
}
