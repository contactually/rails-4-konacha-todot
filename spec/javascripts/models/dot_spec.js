//= require spec_helper
//= require models/dot

describe('Dot', function() {

  var subject;

  beforeEach(function() {
    subject = new Dot();
  });

  it('has the correct defaults', function() {
    expect(subject.get('name')).to.eq('Dot');
    expect(subject.get('priority')).to.eq(1);
    expect(subject.get('status')).to.eq('new');
  });

  it('can update its status', function() {
    subject.mark_as_complete();
    expect(subject.get('status')).to.eq('complete');

    subject.mark_as_new();
    expect(subject.get('status')).to.eq('new');
  });

});
