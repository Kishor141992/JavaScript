spa.$('profileView', {
  target: '#containerMain',
  // dataProcess: function(templateData){
  //   templateData['first_name'] = templateData['firstName'];
  //   templateData['last_name'] = templateData['lasttName'];
  //   return templateData;
  // },

  loadProfileEdit: function ( ) {
    //console.log(app.profileView.$data)
    spa.$render('profileEdit', {
      dataUrlParams:{pid: app.profileView.$data.id}
    });


  }

});