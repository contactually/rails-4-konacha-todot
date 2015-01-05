//= require spec_helper
//= require models/dot
//= require templates/dot_view
//= require views/dot_view

describe('DotView', function() {

  var subject, dot;

  beforeEach(function() {
    dot = new Dot({
      name: 'shopping'
    });

    subject = new DotView({
      model: dot
    });

    SANDBOX.append(subject.render().el);
  });

  it('renders', function() {
    expect(SANDBOX.find('.dot-name').text()).to.eq('shopping');
  });

  describe('on click', function() {
    it("toggles its dot's status", function() {
      subject.$('.dot-status').trigger('click');

      expect(subject.model.get('status')).to.eq('complete');
    });
  });

});
