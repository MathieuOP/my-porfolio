var app = {
    init: function() {
          console.log('app.init');
          app.arrow = document.querySelectorAll('.arrow');
          app.browseTheClassArrow();

          app.arrow[0].parentNode.classList.add('open');
          app.arrow[0].classList.add('arrowTransform');
          
      },
      browseTheClassArrow: function() {
          for (var i = 0; i < app.arrow.length; i++) {
              // console.log(app.title [i]);
              app.arrow[i].parentNode.addEventListener('click', app.handleDisplayContenu);
          }
      },
      handleDisplayContenu: function(evt) {
          // console.log(evt.currentTarget);
  
          var h2Element = evt.currentTarget;

          var arrow = evt.currentTarget.childNodes[1];
  
          for (var i = 0; i < app.arrow.length; i++) {
              app.arrow[i].parentNode.classList.remove('open');
              app.arrow[i].classList.remove('arrowTransform');
          }
  
          h2Element.classList.add('open');
          arrow.classList.add('arrowTransform');
      }
  }
  
  document.addEventListener('DOMContentLoaded', app.init);