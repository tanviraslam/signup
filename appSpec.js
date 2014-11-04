describe("Simple Signup Form", function(){
  var scope,
      compiled,
      element,
      html;

  beforeEach(module('app'));
  beforeEach(module('form_template.html'));
  beforeEach(inject(function($rootScope, $compile){
    html = "<opt-in><div class='brand-logo'></div></opt-in>";
    scope = $rootScope.$new();
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();
  }));

  it("Renders a simple signup form with the company logo above it", function(){
    expect(element.find('input').length).toBe(4);
    expect(element.find('div').attr('class')).toContain('brand');
  });
});