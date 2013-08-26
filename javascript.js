$(document).ready
(
	function() 
	{
	
		$('.click-modal').click
		(
			function () 
			{
				console.log('modal ok')
				$('.modal').addClass('modal-active');
			}
		)	

		$('.button.blue.small.active').click 
		(
			function()
			{
				console.log('modal box closed')
				$('.modal').removeClass('modal-active');
			}
		)

	} ) //end document ready