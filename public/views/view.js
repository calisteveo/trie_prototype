App.Views.View = Backbone.View.extend({
  tagName: 'li'

  render: function(){
    $(this.el).append(this.template(this.model));

    return this;
  },

  events: {
    'submit #wikiSearch': 'search'
  },

  search: function(){

  }
});