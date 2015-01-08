$(document).on('ready', function() {

	// Hide spoiler
	$('.spoiler span').hide();

	// Add a button
	$('.spoiler').append('<button>Reveal Spoiler!</button>');

	// When button is pressed
	$('.spoiler button').on('click', function() {
		// Show spoiler
		$(this).prev().show();
		// Hide button
		$(this).remove();
	});
  
});