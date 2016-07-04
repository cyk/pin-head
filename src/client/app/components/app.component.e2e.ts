describe('App', () => {

  beforeEach( () => {
      browser.get('');
  });

  it('should have a title', () => {
      expect(browser.getTitle()).toEqual('My Angular2 App');
  });

  it('should have <nav>', () => {
      expect(element(by.css('ph-app md-navbar nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Pin', () => {
      expect(element(by.css('ph-app md-navbar nav a:first-child')).getText()).toEqual('PIN');
  });

  it('should have correct nav text for About', () => {
      expect(element(by.css('ph-app md-navbar nav a:last-child')).getText()).toEqual('ABOUT');
  });

});
