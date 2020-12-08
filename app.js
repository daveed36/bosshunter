$(() => {




  //event listener
  $("form").on("submit", (event) => {
    //stop the function from loading data on page load, wait for listener
    event.preventDefault();
$('userInput').empty()
    // grab the users input from the form
    const userInput = $('input[type="text"]').val();

    //network request with jQuery
    $.ajax({
      //make user input the query parameter
      url: `https://api.hunter.io/v2/domain-search?domain=${userInput}&api_key=ce559ef10b7dddc1e3b51fb2b79f02722bde3d15`,

    }).then(
      (data) => {

console.log(data);
        let arrayat = (data.data.emails)
				$('arrayat').addClass
        console.log(arrayat);

           reformattedArray = arrayat.map(obj => {


              console.log(obj.first_name)
              console.log(obj.last_name)
							console.log(obj.value);


              const $fn = $('<div>').html('First Name :' + obj.first_name).appendTo('#s1')
              const $fnL = $('<div>').html('Last Name :' + obj.last_name).appendTo('#s2')
							const $fnv = $('<div>').html('Email Address: ' + obj.value).appendTo('#s3')
							const $fnP = $('<div>').html('Last date online :' + obj.verification.date).appendTo('#s4')
							const $fnT = $('<div>').html('Position :' + obj.position).appendTo('#s5')



          })


      },
      (errors) => {
        //handler for errors
        console.log(errors.id);
        const customError = `${errors.statusText.toUpperCase()}: "Bad request; Check URL."`;
      }
    );
  });
	let carousel = $('#carousel'),
	    threshold = 300,
	    slideWidth = 500,
	    dragStart,
	    dragEnd;

	$('#next').click(() => {shiftSlide(-1) })
	$('#prev').click(() => {shiftSlide(1) })


	function shiftSlide(direction) {
	  if (carousel.hasClass('transition')) return;
	  dragEnd = dragStart+1;
	  $(carousel).off('move')
	  carousel.off('move')
	          .addClass('transition')
            // ------------------------------------------->
	          .css('transform','translateX(' + (direction * slideWidth) + 'px)');
            // this on the google for smoth slide
	  setTimeout(() => {
	    if (direction === 1) {
	      $('.slide:first').before($('.slide:last'));
	    } else if (direction === -1) {
	      $('.slide:last').after($('.slide:first'));
	    }
	    carousel.removeClass('transition')
			carousel.css('transform','translateX(0px)');
	  },700)
	}

});
