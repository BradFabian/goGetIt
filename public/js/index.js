$(document).ready(function() {
  
  //call function when page loads//
getInventory();

function getInventory() {

$.get("/api/inventory", function(data) {

  if (data.length !== 0) {
   console.log(data.length);
    for (var i = 0; i < data.length; i++) {
                   
                        var tbody = $("#gogetit_db");
                          // Create and save a reference to new empty table row
                          var tr = $("<tr>");
                          // Create and save references to 3 td elements 
                          var idRow = '<td>' + data[i].id + '</td>';
                          var productRow = '<td>' + data[i].product_name + '</td>';
                          var stockRow = '<td>' + data[i].product_quantity + '</td>';
                          var neededRow = '<td>' + data[i].product_needed + '</td>';
                          var quantityRow = '<td>' + data[i].quantity_ordered + '</td>';
                          var deleteBut =   '<button type="button" class="btn btn-danger id="delete">'+ Delete + '</button>'  
  
                         
                          
  
                          // Append the td elements to the new table row
                          tr.append(idRow);
                          tr.append(productRow);
                          tr.append(stockRow);
                          tr.append(neededRow);
                          tr.append(quantityRow);
                          tr.append(deleteBut);
                          // Append the table row to the tbody element
                          tbody.append(tr)
    }
    }
  });
}
});  
