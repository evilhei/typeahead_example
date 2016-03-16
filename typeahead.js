CitiesList = new Mongo.Collection('citiesList');

if (Meteor.isClient) {

Template.hello.helpers({
    citiesList: function(){
        return CitiesList.find().fetch().map(
                function(it){
                  return name = it.city;
                });
    }
});

  Template.hello.events({
  'submit form': function(event) {
    event.preventDefault();
    var city = event.target.city.value;
    CitiesList.insert({
      city: city
    });
    event.target.city.value = "";
  }
});

  Template.hello.onRendered(function() {
    Meteor.typeahead.inject();
  })

}