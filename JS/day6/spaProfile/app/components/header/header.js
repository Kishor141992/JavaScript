spa.$('header', {
  //style:'.', // Enable only if this component has specific styles in header/header.css

  target: '#targetContainer',

  data: { name: 'header' },
  //dataUrl: '', // use this property for external data source instead of above static data property

  renderCallback: function(){
    // function called after this component is rendered.

    var templateData = this.$data; //or app.header.$data
    console.log('Component header has been rendered with Data:', templateData);
  },

  doSomething: function(){
    //call app.header.doSomething();
  },

  events: [
    // { target: '#btnSubmit',
    //   onClick: function(){
    //     app.header.doSomething();
    //   }
    // }
  ]
});