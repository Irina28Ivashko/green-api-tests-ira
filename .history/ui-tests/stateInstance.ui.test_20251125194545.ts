import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import 'dotenv/config';

describe('UI test: instance authorization status', () => {
  let driver: any;

  beforeAll(async () => {
    const options = new chrome.Options();

    options.addArguments(
      `--user-data-dir=C:/Users/${process.env.USERNAME}/AppData/Local/Google/Chrome/User Data`,
      '--profile-directory=Default',
      '--disable-popup-blocking',
    );

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    driver.manage().setTimeouts({ implicit: 5000 });
  }, 20000);

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  test('should display instance state on the page', async () => {
    const instanceId = process.env.INSTANCE_ID;

    await driver.get(`https://console.green-api.com/instanceList/${instanceId}`);

    const statusElement = await driver.wait(
      until.elementLocated(By.css('span.statusesAuth')),
      15000,
    );

    const statusText = await statusElement.getText();
    console.log('UI status:', statusText);

    const allowed = ['Авторизован', 'Неавторизован'];

    expect(allowed).toContain(statusText);
  }, 30000);
});
