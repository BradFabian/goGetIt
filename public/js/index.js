$(document).ready(function() {
  
  //call function whne page loads//
getInventory();

function getInventory() {

$.get("/api/all", function(data) {

  if (data.length !== 0) {
  
    for (var i = 0; i < data.length; i++) {
                   
                        var tbody = $("#grocerydb");
                          // Create and save a reference to new empty table row
                          var tr = $("<tr>");
                          // Create and save references to 3 td elements 
                          var idRow = '<td>' + data[i].id + '</td>';
                          var productRow = '<td>' + data[i].product + '</td>';
                          var stockRow = '<td>' + data[i].stock + '</td>';
                          
                         
                          
  
                          // Append the td elements to the new table row
                          tr.append(idRow);
                          tr.append(productRow);
                          tr.append(stockRow);
                         
                         
  
                          // Append the table row to the tbody element
                          tbody.append(tr)
    }
    }
  });
}
});  
