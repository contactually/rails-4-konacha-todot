//= require spec_helper
//= require models/dot
//= require collections/dots
//= require templates/dot_view
//= require views/dot_view
//= require views/dots_view

describe('DotsView', function() {

  var subject, dot;

  beforeEach(function() {
    dots = new Dots();
    dots.add([{
      id: 1,
      name: 'Breakfast',
      priority: 3
    }, {
      id: 2,
      name: 'Lunch',
      priority: 2
    }, {
      id: 3,
      name: 'Dinner',
      priority: 1
    }]);

    subject = new DotsView({
      collection: dots
    });

    SANDBOX.append(subject.render().el);
  });

  describe("when an item is prioritized", function() {
    it("re-renders with the prioritized item at the top", function() {
      subject.$('.dot-prioritize[data-dot-id=' + dots.at(2).id + ']').trigger('click');

      expect(subject.children.findByIndex(0).$el.hasClass('js-top')).to.be.true;
    });
  });

});
