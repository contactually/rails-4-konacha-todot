var Dots = Backbone.Collection.extend({

  model: Dot,

  comparator: function(a, b) {
    if (a.get('priority') > b.get('priority'))
      return -1;
    else if (a.get('priority') < b.get('priority'))
      return 1;
    else
      return 0;
  },

  mark_all_as_completed: function() {
    this.each(function(dot) {
      dot.mark_as_complete();
    });
  },

  make_top_priority: function(dot) {
    var pri = _(_.without(this.models, dot)).reduce(function(memo, model) {
      return memo + model.get('priority');
    }, 0);

    dot.set('priority', pri);
    this.sort();
  }

});
