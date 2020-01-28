spa.$('header', {
  loadProfile: function loadProfile(){
    console.log('load profile view componenet here');
    spa.$render('profileView', {
      dataUrlParams:{
        pid : spa.rand( 1, 10 )
      }
    });
  },

  loadHome :function loadHome(){
    spa.$render('home')
  }
});

