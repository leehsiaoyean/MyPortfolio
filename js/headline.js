// Add the 'scroll' event listener to the window object
window.addEventListener('scroll', function() {
	// Get the navbar element
	var navbar = document.getElementById('mainNav');
	
	// Check if the user has scrolled down more than 50px
	if (window.pageYOffset > 50) {
	  // Add the 'bg-light' class to the navbar element
	  navbar.classList.add('bg-light');
	} else {
	  // Remove the 'bg-light' class from the navbar element
	  navbar.classList.remove('bg-light');
	}
  });
