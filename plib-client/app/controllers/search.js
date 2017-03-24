import Ember from 'ember';

export default Ember.Controller.extend({
  selection: null, //
  selectionChanged: Ember.observer('selection', () => {
    // deal with the change
    console.log("observer triggered")
    //console.log(`fullName changed to: ${this.get('selection')}`);
    console.log("full name changed to:", this.get("model"));
  })

});
