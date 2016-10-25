import { KarateDirectoryPage } from './app.po';

describe('karate-directory App', function() {
  let page: KarateDirectoryPage;

  beforeEach(() => {
    page = new KarateDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
