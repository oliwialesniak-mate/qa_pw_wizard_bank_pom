export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('input[placeholder="First Name"]');
    this.lastNameInput = page.locator('input[placeholder="Last Name"]');
    this.postCodeInput = page.locator('input[placeholder="Post Code"]');
    this.addCustomerBtn = page.locator('button[type="submit"]');
  }

  async open() {
    await this.page.goto(
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust'
    );
  }

  async addCustomer(firstName, lastName, postCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postCodeInput.fill(postCode);

    // Handle alert popup
    this.page.once('dialog', async (dialog) => {
      console.log(`Alert message: ${dialog.message()}`);
      await dialog.accept();
    });

    await this.addCustomerBtn.click();
  }
}
