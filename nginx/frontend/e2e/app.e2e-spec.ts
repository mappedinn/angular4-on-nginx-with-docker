import { HelloAngularPage } from './app.po';

describe('hello-angular App', () => {
  let page: HelloAngularPage;

  beforeEach(() => {
    page = new HelloAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
