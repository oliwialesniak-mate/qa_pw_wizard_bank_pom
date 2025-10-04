import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.customerDropdown = page.locator('#userSelect');
    this.currencyDropdown = page.locator('#currency');
    this.processButton = page.locator('button', { hasText: 'Process' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/openAccount');
  }

  async selectCustomer(customerName) {
    await this.customerDropdown.selectOption({ label: customerName });
  }

  async selectCurrency(currencyName) {
    await this.currencyDropdown.selectOption({ label: currencyName });
  }

  async clickProcess() {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.processButton.click(),
    ]);
    expect(dialog.message()).toContain('Account created successfully');
    await dialog.accept();
  }
}
