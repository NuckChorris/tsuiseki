import Ember from 'ember';

var LinkModalView = Ember.Component.extend({
  tagName: 'a',
  title: null,
  eventName: 'click',
  modal: null,
  init: function() {
    this._super.apply(this, arguments);
    // Map desired event name to invoke function
    var eventName = this.get('eventName');
    this.on(eventName, this, this._invoke);
  },
  _invoke: function(event) {
    if (this.preventDefault === true) { event.preventDefault(); }
    if (this.bubbles === false) { event.stopPropagation(); }
    // TODO: open modal
  },
});

var slice = Array.prototype.slice;

/*
@method link-modal
@for Ember.Handlebars.helpers
@param {String} modalName
@param [options] {Object} Handlebars key/value pairs of options, you can override any property of Ember.LinkView
@return {String} HTML string
@see {Ember.LinkView}
*/
export default function linkModal() {
  var options = slice.call(arguments, -1)[0];
  var args = slice.call(arguments, 0, -1);

  Ember.assert("You must provide one or more parameters to the link-modal helper.", args.length);

  options.helperName = 'link-modal';
  options.modal = args[0];
  return Ember.Handlebars.helpers.view.call(this, LinkModalView, options);
}
