//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbymHqv51yk0WENKOKipsGrMp3PfMd-p76_M4YAign0t0mMrhJ3ZLbq_MCItvCbouEk/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

// $("#contact").click(function(){
//   $("header").css( {"padding-bottom":"100px","clip-path":"polygon(100% 0%, 100% 100%, 0% 80%, 0% 100%, 0% 0%)"} );
//   $("#contact-section").show(1000);
// });
// $("#contact").dblclick(function(){
//   $("header").css( {"padding-bottom":"50px","clip-path":"polygon(100% 0%, 100% 100%, 0% 100%, 0% 100%, 0% 0%)"} );
//   $("#contact-section").hide(1000);
// });


$("#top-button").click(function(){
  $("html, body").animate({scrollTop: 0}, 1000);
  
});
$(window).scroll(function () {
  if ($(window).scrollTop() == 0) {
      $('#top-button').hide();
  } else {
      $('#top-button').show();
  }
});


AOS.init();