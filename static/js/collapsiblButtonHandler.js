function whichButton(buttonElement){
  var btn = buttonElement.id;
  
  var num = btn.slice(3,);
  var div = "hidden"+num;
  document.getElementById(div).innerHTML = num;

}


// $( document ).ready(function() {
  
//     // GET REQUEST
//     $(".view-button").click(function(event){
//       event.preventDefault();
//       console.log("view button clicked");
//     //   ajaxGet();
//     });
    
//     // DO GET
//     function ajaxGet(){
  
//       $.ajax({
//         type : "GET",
//         url : "/patient/api/users/all",
//         // data: {key: "value"},
//         success: function(result){
//           $('#getResultDiv ul').empty();
//           var custList = "";
//           $.each(result, function(i, customer){
//             // let rec = customer.id + ". " + customer.fullname + " " + customer.ethaddr + "<br>";
//             let rec = "<div class='panel panel-default'>" + "<div class='panel-heading'>" + 
//                   "<h4 class='panel-title'>" + 
//                     "<a data-toggle='collapse' data-parent='#getResultDiv' href=#" + customer.id + ">" + customer.fullname + "</a>" + 
//                   "</h4>" + 
//                 "</div>" +
//                 "<div id=" + customer.id + " class='panel-collapse collapse'>" + 
//                   "<div class='panel-body'>" + customer.ethaddr + " <br>  " + customer.contact_info + " <br> " + customer.address + " " + "</div>" + 
//                 "</div>" + 
//               "</div>";
//             $('#getResultDiv .list-group').append(rec);
//           });
//           console.log("Success: ", result);
//         },
//         error : function(e) {
//           $("#getResultDiv").html("<strong>Error</strong>");
//           console.log("ERROR: ", e);
//         }
//       });  
//     }

  
//   })
  