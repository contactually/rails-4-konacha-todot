var Dot = Backbone.Model.extend({

  defaults: {
    name: 'Dot',
    priority: 1,
    status: 'new'
  },

  mark_as_complete: function() {
    this._mark_as('complete');
  },

  mark_as_new: function() {
    this._mark_as('new');
  },

  _mark_as: function(status) {
    this.set('status', status);
  }

});
