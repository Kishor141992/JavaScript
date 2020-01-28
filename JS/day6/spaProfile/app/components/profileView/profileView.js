spa.$('profileView', {
  //style:'.', // Enable only if this component has specific styles in profileView/profileView.css

  target: '#targetContainer',

  data: { name: 'profileView' },
  //dataUrl: '', // use this property for external data source instead of above static data property

  renderCallback: function(){
    // function called after this component is rendered.

    var templateData = this.$data; //or app.profileView.$data
    console.log('Component profileView has been rendered with Data:', templateData);
  },

  doSomething: function(){
    //call app.profileView.doSomething();
  },

  events: [
    // { target: '#btnSubmit',
    //   onClick: function(){
    //     app.profileView.doSomething();
    //   }
    // }
  ]
});