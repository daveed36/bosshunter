$(() => {




  //event listener
  $("form").on("submit", (event) => {
    //stop the function from loading data on page load, wait for listener
    event.preventDefault();

    // grab the users input from the form
    const userInput = $('input[type="text"]').val();

    //network request with jQuery
    $.ajax({
      //make user input the query parameter
      url: `https://api.hunter.io/v2/domain-search?domain=${userInput}&api_key=ce559ef10b7dddc1e3b51fb2b79f02722bde3d15`,
      // https://api.hunter.io/v2/email-finder?domain=asana.com&first_name=Dustin&last_name=Moskovitz&api_key=ce559ef10b7dddc1e3b51fb2b79f02722bde3d15
      //every promise returns a .then() function
      //.then() takes two callbacks as arguments; a success & error handler
    }).then(
      (data) => {

console.log(data);
        let arrayat = (data.data.emails)
				$('arrayat').addClass
        console.log(arrayat);
        // good code------------------------------------------------->

           reformattedArray = arrayat.map(obj => {
						// for (let i = 0; i < arrayat.length-1; i++) {

						  // let rObj = {}
              // rObj[obj.key] = obj
              // return rObj

              console.log(obj.first_name)
              console.log(obj.last_name)
							console.log(obj.value);


              const $fn = $('<div>').html('First Name :' + obj.first_name).appendTo('#s1')
              const $fnL = $('<div>').html('Last Name :' + obj.last_name).appendTo('#s2')
							const $fnv = $('<div>').html('Email Address: ' + obj.value).appendTo('#s3')
							const $fnP = $('<div>').html('Last date online :' + obj.verification.date).appendTo('#s4')
							const $fnT = $('<div>').html('Position :' + obj.position).appendTo('#s5')



          })

        // for (let i = 0; i < haiat.length; i++){
        //
        //  const $fn = $('<dd>').html('First Name :' + obj.first_name).appendTo('body')
        //
        //
        //
        // }
        //
        // $('#firstN3').html('First Name :' + data.data.emails['3'].first_name)
        // $('#lastN3').html('Last Name : ' + data.data.emails['3'].last_name)
        // $('#email3').html('Email Address : ' + data.data.emails['3'].value)
        // $('#position3').html('Department/Position: ' + data.data.emails['3'].position)
        // $('#type3').html('Type of Contact :' + data.data.emails['3'].type)
        // $('#verificationDate3').html('Last Date check: ' + data.data.emails['3'].verification.date)
        // $('#verificationStatus3').html('Email Validity: ' + data.data.emails['3'].verification.status)









        //good code----------------------------------------------------
        // $('#firstN').html('First Name :' + data.data.emails['3'].first_name)
        // $('#lastN').html('Last Name : ' + data.data.emails['3'].last_name)
        // $('#email').html('Email Address : ' + data.data.emails['3'].value)
        // $('#position').html('Department/Position: ' + data.data.emails['3'].position)
        // $('#type').html('Type of Contact :' + data.data.emails['3'].type)
        // $('#verificationDate').html('Last Date check: ' + data.data.emails['3'].verification.date)
        // $('#verificationStatus').html('Email Validity: ' + data.data.emails['3'].verification.status)

        //--------------------------––––---––––––––––––––––––––––------------------------------------------------------




        // console.log(data.data.emails['3'],data.data.emails['3'].first_name);


        // const $table = $('<ul>').addClass('result')
        // $('body').append('result')

        // $("#title").html(data.Title);
        // $("#year").html(data.Year);
        // $("#rated").html(data.Rated);
      },
      (errors) => {
        //handler for errors
        console.log(errors.id);
        const customError = `${errors.statusText.toUpperCase()}: "Bad request; Check URL."`;
        // $("#ifError").html(customError).css("color", "red");
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
