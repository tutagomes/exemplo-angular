import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('Should display login if not authenticated', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('login');
  });

  it('Should redirect if successfully logged', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('login');
    
    let userInput = element(by.css('[ng-reflect-name=username]'));
    userInput.sendKeys('usuario');
    expect(userInput.getAttribute('value')).toBe('usuario');
    
    let passwordInput = element(by.css('[ng-reflect-name=password]'));
    passwordInput.sendKeys('password');
    expect(passwordInput.getAttribute('value')).toBe('password');

    let loginButton = element(by.css('#loginButton'));
    loginButton.click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).not.toContain('login');
    browser.get('/tarefas');
    browser.waitForAngular();

    expect(element(by.css('#tarefa_titulo')).isPresent()).toBe(true);

    element(by.css('#logoutButton')).click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('login');
  });

  it('Should show Error if cannot login', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('login');
    
    let userInput = element(by.css('[ng-reflect-name=username]'));
    userInput.sendKeys('12123');
    expect(userInput.getAttribute('value')).toBe('12123');
    
    let passwordInput = element(by.css('[ng-reflect-name=password]'));
    passwordInput.sendKeys('password');
    expect(passwordInput.getAttribute('value')).toBe('password');

    let loginButton = element(by.css('#loginButton'));
    loginButton.click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('login');
    expect(element(by.css('#tarefa_titulo')).isPresent()).toBe(false);
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    /* const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry)); */
  });
});
