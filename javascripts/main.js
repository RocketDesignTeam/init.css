$(document).ready(function(){
    var NavTop = $('nav').offset().top;

$(window).scroll(function(){
  if( $(window).scrollTop() > NavTop ) {
    $('nav').css({position: 'fixed', top: '0px',left: '0px',paddingLeft:'3em',paddingBottom:'1em', background: 'rgba(255,255,255,.8)', borderBottom:"2px solid #1B9AF7"}).find('.btn').css('margin-top','1em');
  } else {
    $('nav').css({position: 'static',borderBottom:"0px",paddingLeft:'0em'});
  }
});

    
$('nav a').click(function(e) {
  e.preventDefault();
  $('html,body').animate({ 
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});
});