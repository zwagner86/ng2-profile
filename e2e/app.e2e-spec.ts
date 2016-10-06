import { NgLandingPage } from './app.po';

describe('ng-landing App', function() {
  let page: NgLandingPage;

  beforeEach(() => {
    page = new NgLandingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
