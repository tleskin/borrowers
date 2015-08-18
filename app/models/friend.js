import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  latName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number')
});
