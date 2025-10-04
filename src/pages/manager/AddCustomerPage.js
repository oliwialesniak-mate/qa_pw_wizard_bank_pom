import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.postCodeInput = page.locator('input[placeholder="Post Code"]');
    this.addCustomerButton = page.getByRole('button', { name: 'Add Customer' });
  }

  async addCustomer(firstName, lastName, postCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);

    // ✅ Reliable dialog handling
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.addCustomerButton.click();

    const dialog = await dialogPromise;
    const message = dialog.message();
    await dialog.accept();

    expect(message).toContain('Customer added successfully');
    return message;
  }
}
