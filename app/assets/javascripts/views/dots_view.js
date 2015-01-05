var DotsView = Backbone.Marionette.CollectionView.extend({

  className: 'ul list-unstyled dots-view',

  itemView: DotView,
  itemViewEventPrefix: 'dot_view:',

  collectionEvents: {
    'sort': 'render'
  },

  events: {
    'dot_view:prioritize': 'on_dot_view_prioritize'
  },

  onRender: function() {
    this.children.findByIndex(0).$el.addClass('js-top');
  },

  on_dot_view_prioritize: function(bbe, dot) {
    this.collection.make_top_priority(dot);
  }

});
