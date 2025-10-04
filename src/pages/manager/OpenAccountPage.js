import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.customerDropdown = page.locator('#userSelect');
    this.currencyDropdown = page.locator('#currency');
    this.processButton = page.getByRole('button', { name: 'Process' });

    // alias for tests
    this.currencySelect = this.currencyDropdown;
  }

  async open() {
    // Optional if test calls open() before interacting
    await expect(this.customerDropdown).toBeVisible();
  }

  async selectCustomer(name) {
    await this.customerDropdown.selectOption({ label: name });
  }

  async selectCurrency(currency) {
    await this.currencyDropdown.selectOption({ label: currency });
  }

  async clickProcess() {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.processButton.click();
    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();
    expect(message).toContain('Account created successfully');
    return message;
  }
}
