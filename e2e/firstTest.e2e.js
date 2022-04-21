/* eslint-disable no-undef */
describe('Regist until Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have Login Screen', async () => {
    await expect(element(by.id('LoginScreen'))).toBeVisible();
    await expect(element(by.id('LoginImage'))).toBeVisible();
    await expect(element(by.id('LoginHelpText'))).toBeVisible();
    await expect(element(by.id('FormComponent'))).toBeVisible();
    await expect(element(by.id('ButtonTextRegist'))).toBeVisible();
  });

  it('should fill Login Form', async () => {
    await element(by.id('emailForm')).typeText('pompom@mail.co');
    await element(by.id('passwordForm')).typeText('pompom123');
    await element(by.id('ButtonLoginRegis')).tap();
    await expect(element(by.id('HomeScreen'))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
