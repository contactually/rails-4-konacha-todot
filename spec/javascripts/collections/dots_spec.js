//= require spec_helper
//= require models/dot
//= require collections/dots

describe('Dots', function() {

  var subject;

  beforeEach(function() {
    subject = new Dots();

    subject.add([{
      name: 'lunch',
      priority: 2
    }, {
      name: 'laundry',
      priority: 555
    }, {
      name: 'groceries'
    }]);
  });

  it('sorts by highest priority first', function() {
    expect(subject.first().get('name')).to.eq('laundry');
  });

  it('can mark a dot as highest priority', function() {
    subject.make_top_priority(subject.at(1));

    expect(subject.first().get('name')).to.eq('lunch');
  });

});
