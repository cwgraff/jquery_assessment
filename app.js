// When the page loads, have a button on the DOM that says 'generate'.
// Upon clicking on that button, append a new container onto the DOM.
// That container should have two buttons, one that reads 'delete', the other that reads 'change'.
// Additionally, there should be text that provides a number. 
// The number should be the number of times the 'generate row' button has been clicked.

// The delete button should delete JUST the container that the button is in.
// The change button should change the background-color of the container to red.
// The default or 'normal' state of the background-color should be yellow. 
// Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc. 

// The number should be the number of times the 'generate row' button has been clicked.
var genRowCount = 0;

$(document).ready(function(){

// When the page loads, have a button on the DOM that says 'generate'.	
	$('.create-button').append('<button class="generate">generate</button>');

	$('.generate').on('click', function() {

		genRowCount ++;

	// Upon clicking on that button, append a new container onto the DOM.
	// That container should have two buttons, one that reads 'delete', the other that reads 'change'.
		$(this).parent().append('<div id="container" class="yellow">' +
			'<button class="delete">delete</button>' +
			'<button class="change">change</button>' +
			// Additionally, there should be text that provides a number. 
			'<span>' + genRowCount + '</span>' +
			'</div>');

		});

		$('#container').on('click', '.delete', function() {
			$(this).parent().remove();
			console.log('working');
	});
		$('#container').on('click', '.change', function() {
			$(this).parent().toggleClass('yellow', 'red');
			console.log('working');
	});
		

});

