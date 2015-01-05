var DotView = Backbone.Marionette.ItemView.extend({

  template: JST.dot_view,
  model: Dot,
  tagName: 'li',
  className: 'dot-view',

  ui: {
    name: '.dot-name',
    status: '.dot-status'
  },

  events: {
    'click .dot-status': 'on_status_clicked',
    'click .dot-prioritize': 'on_prioritize_clicked'
  },

  modelEvents: {
    'change': 'render'
  },

  on_status_clicked: function() {
    if (this.model.get('status') === 'new')
      this.model.mark_as_complete();
    else
      this.model.mark_as_new();
  },

  on_prioritize_clicked: function(evt) {
    this.$el.trigger('dot_view:prioritize', this.model);
  }

});
