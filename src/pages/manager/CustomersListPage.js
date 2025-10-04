import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search Customer"]');
    this.customerRows = page.locator('tbody tr');
    this.deleteButtons = page.locator('button[ng-click="deleteCust(cust)"]');
  }

  async searchCustomer(term) {
    await this.searchInput.fill(term);
  }

  async assertOnlyOneResult() {
    await expect(this.customerRows).toHaveCount(1);
  }

  async deleteFirstCustomer() {
    await this.deleteButtons.first().click();
  }

  async getCustomerRowData() {
    const cells = this.customerRows.first().locator('td');
    const data = await cells.allTextContents();
    return data.map((t) => t.trim());
  }
}
