$(document).ready(function() {


 //background css//
  $('#member_bg').scroll(function() {
    var scrollPos = $(this).scrollTop();
    var pageHeight = $(document).height() - $(this).height();
    var progress = scrollPos / pageHeight;
    var backgroundOffset = (progress*100) + '%';
    $("html").css("background-position", "0% " + backgroundOffset);
  });

  $(document).on("click", ".delete", handleDelete);

function getInventory() {
$.get("/api/store", function(data) {

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
                         // var updateRow = '<td>' + data[i].product_needed + '</td>';
                          var quantityRow = `<td> 
                          <div class='form-group'>
                          <select class="chosen-select" id="selector">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                          </select>
                          </div>
                         </td>`;
                         var updateBut =   "<td>" +'<button type="button" class="delete btn btn-success">'+ "Update" + '</button>'+ "</td>" 
                          var deleteBut =   "<td>" + '<button type="button" class="delete btn btn-danger">'+ "Delete" + '</button>'+ "</td>" 
  
                         
                          
  
                          // Append the td elements to the new table row
                          tr.append(idRow);
                          tr.append(productRow);
                          tr.append(stockRow);
                         // tr.append(neededRow);
                          tr.append(quantityRow);
                          tr.append(updateBut);
                          tr.append(deleteBut);
                          // Append the table row to the tbody element
                          tbody.append(tr)
    }
    }
  });
}
//calling get function//
getInventory();

});  
