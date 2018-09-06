$(document).ready(function(){
	// datatable config
    $('table').DataTable({
		"columnDefs": [
            { "orderable": false, "targets": [5] }
          ],
        order: [[ 0, "asc" ]],
        info: false,
		paging: true,
		pagingType: "full_numbers"
    });

    // Validate the form before submit it
	$('#submit').on('click', function(e){
		e.preventDefault();
		
		if(validate())
		{
			$('form').submit();
		} 
	});
    

    // Delete button class onClick event. Those are the delete buttons inside the table
    // Each of those buttons has a unique data-id attr
    $(document).on("click", ".btn-delete", function(){
        var id = $(this).attr("data-id"); //get the product id from the data-id

        //Pass this id to the delete button in the confirm dialog box
        $("#deleteProduct").attr("data-id", id);

        //Show the dialog box
        $("#confirm-delete").modal();
    });

    // This is the delete button in the confirm dialog box
    $("#deleteProduct").on("click", function(){
        var id = $(this).attr("data-id"); //get the product id from its data attr

        // Remove the record from the database
        var url = '/' + id + '/delete'
        $.post(url, function(){
        	//Remove the row from the table
        	$('#' + id).remove();
        });
    });

    // Validate user's input         
    function validate(){

    	 // Remove all error messages and error classes
        $('span.help-block').remove();
        $('.has-error').removeClass('has-error');

        // Validate the name
    	var name = $('#name');
    	if(name.val().trim() === "")
    	{
    		displayError(name, 'Enter the name of the product');
    		return false;
    	}

    	// Validate the department
    	var department = $('#department');
    	if(department.val().trim() === "")
    	{
    		displayError(department, 'Enter the department.');
    		return false;
    	}

    	// Validate the price
    	var stock = $('#stock');
    	if(stock.val().trim() != "" && !/^\d+$/.test(stock.val().trim()))
    	{
    		displayError(stock, 'Stock must be 0 or a whole number greater than 0.');
    		return false;
    	}

    	// Validate the stock for 0 or a whole number greater than 0
    	var stock = $('#required');
    	if(stock.val().trim() != "" && !/^\d+$/.test(stock.val().trim()))
    	{
    		displayError(stock, 'Stock must be 0 or a whole number greater than 0.');
    		return false;
    	}
    	return true;
    }            

    // This function is called by validate to display an error message
	// if the input is invalid
	function displayError(el, message){
		// Create a span element with class text-danger
		var $span = $('<span class="help-block">');

		// Add the message passed as argument to the new span
	    $span.html('<strong>' + message + '<strong>');

	    //Append the span after the input that is not valid
	    el.after($span);
	   
	    // Set the focus 
	    el.focus();

	    // Add class "has-error to the element's parent"
	    el.parent().addClass('has-error');
	}
});

$(".icon_edit").tooltip();
$(".icon_delete").tooltip();
$(".icon_info").tooltip();

