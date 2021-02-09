var i;

function boxModel() {
    for (i = 0; i < 16; i++) {
        $('#appendToMe').append('<div class = "boxModel clickMe"></div>');
    }

  }
boxModel();

  $(".clickMe").click(function(){
    $(this).toggleClass("darkMode");
  });
console.log()


