spa.$('profileEdit', {
  target: '#containerMain',
  dataUrl:'@$profileView',
  saveProfile: function () {
    console.log('send data')

    // var formData = app.profileView.$data;

    // formData['firstName'] = $('#nameFirst').val();
    // formData['lastName'] = $('#nameLast').val();
    // formData['email'] = $('#email').val();

    // console.log('formData', JSON.stringify(formData));

  // var formData = spa.serializeFormToSimpleObject( '#formProfile' );

  var formData = spa.serializeFormToObject( '#formProfile' );
  console.log(formData)


    // $.ajax({
    //   type: "method",
    //   url: "url",
    //   data: formData,
    //   dataType: "dataType",
    //   success: function (response) {
    //     //render profileView
    //   }, error: function(){
    //     //show error message to user
    //   }
    // });
  }
});