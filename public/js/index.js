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

  $('#submit').on('click', function(e){
    e.preventDefault();

    // if(validate()){
      $('form').submit();
    // }
  });

  $(document).on('click', '.btn-delete', function(){
    var id = $(this).attr("data-id") 

    $("#deleteProduct").attr("data-id", id);

    $("#confirm-delete").modal();
  });

  $("#deleteProduct").on("click", function(){
    var id = $(this).attr("data-id"); 

    var url = '/' + id + '/delete'
    $.post(url, function(){
      $('#' + id).remove();
    });
});

  
 //background css//
  $('#member_bg').scroll(function() {
    var scrollPos = $(this).scrollTop();
    var pageHeight = $(document).height() - $(this).height();
    var progress = scrollPos / pageHeight;
    var backgroundOffset = (progress*100) + '%';
    $("html").css("background-position", "0% " + backgroundOffset);
  });

 
});  



// function getInventory() {
// $.get("/api/inventory", function(data) {

//   if (data.length !== 0) {
//    console.log(data.length);
//     for (var i = 0; i < data.length; i++) {
                   
//                         var tbody = $("#gogetit_db");
//                           // Create and save a reference to new empty table row
//                           var tr = $("<tr>");
//                           // Create and save references to 3 td elements 
//                           var idRow = '<td>' + data[i].id + '</td>';
//                           var productRow = '<td>' + data[i].product_name + '</td>';
//                           var stockRow = '<td>' + data[i].product_quantity + '</td>';
//                           var neededRow = '<td>' + data[i].product_needed + '</td>';
//                           var quantityRow = '<td>' + data[i].quantity_ordered + '</td>';
//                           var deleteBut =   '<button type="button" class="delete btn btn-danger">'+ "Delete" + '</button>'  
  
                         
                          
  
//                           // Append the td elements to the new table row
//                           tr.append(idRow);
//                           tr.append(productRow);
//                           tr.append(stockRow);
//                           tr.append(neededRow);
//                           tr.append(quantityRow);
//                           tr.append(deleteBut);
//                           // Append the table row to the tbody element
//                           tbody.append(tr)
//     }
//     }
//   });
// }
// //calling get function//
// getInventory();
// // Delete button Button//
// var itemSelect = $("#gogetit_db");
// $(document).on("click", "button.delete", handleDelete);
// // Delete Button Function//
// function deleteItem(id) {
//   $.ajax({
//     method: "DELETE",
//     url: "/api/inventory/" + id
//   })
//     .then(function() {
//       getInventory(itemSelect.val());
//     });
// }

// //Which item too delete//
// function handleDelete() {
//   var currentItem = $(this)
//     .parent()
//     .parent()
//     .data("inventory");
//   deleteItem(currentItem.id);
// }

// //call function when page loads//

// handleDelete();






