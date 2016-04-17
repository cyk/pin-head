describe('Pin', () => {

  beforeEach( () => {
    browser.get('');
  });

  it('should have an input', () => {
    expect(element(by.css('ph-app ph-pin form input')).isPresent()).toEqual(true);
  });

  it('should have a list of computer scientists', () => {
    expect(element(by.css('ph-app ph-pin ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', () => {
    element(by.css('ph-app ph-pin form input')).sendKeys('Tim Berners-Lee');
    element(by.css('ph-app ph-pin form button')).click();
    expect(element(by.css('ph-app ph-pin ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });
});
