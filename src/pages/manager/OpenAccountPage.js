export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.customerDropdown = page.locator('#userSelect');
    this.currencyDropdown = page.locator('#currency');
    this.currencySelect = this.currencyDropdown; // alias for test compatibility
    this.processButton = page.locator('button[type="submit"]');
  }

  async selectCustomer(customerName) {
    await this.customerDropdown.selectOption({ label: customerName });
  }

  async selectCurrency(currency) {
    await this.currencyDropdown.selectOption({ label: currency });
  }

  async process() {
    this.page.once('dialog', async (dialog) => await dialog.accept());
    await this.processButton.click();
  }
}
