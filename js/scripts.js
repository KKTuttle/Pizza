//business logic
function Pizza (userName, size, toppings) {
  this.userName = userName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaCost = 10;
  this.total =0;
}
// function Toppings(toppings, total) {
//   this.toppings = toppings;
//   // this.price = price;
//   this.total =0;
// }
Pizza.prototype.allInfo=function() {
  return "Thank you for your order, " + this.userName +". Your order is a" + this.size +" pizza with " + this.toppings + ". Total cost: $" + this.pizzaCost + ".";
};

// Toppings.prototype.totalCost = function() {
//   return "hey" + this.total +
// }

// var cennik = function (newCena) {
//   if(newCena.toppings === "ham" || newCena.toppings === "bacon" || newCena.toppings === "pepperoni") {
//     var total = newCena.total + 2;
//   } else if (newCena.toppings === "pineapple" || newCena.toppings === "cheese" || newCena.toppings === "tomatoe" || newCena.toppings === "garlic") {
//     var total = newCena.total + 0.5;
//     return newCena.total;
//   }
// }

var costCalculator = function (newOrder) {
  if (newOrder.size === "large") {
    newOrder.pizzaCost *= 2.5;
  } else if (newOrder.size === "medium") {
    newOrder.pizzaCost *= 1.5;
  } else if (newOrder.size === "small") {
    newOrder.pizzaCost *= 1.3;
  }
};
var toppings=[];
$(document).ready(function() {
  $("form#formPizza").submit(function(event) {
    var userName=$("#userName").val();
    var size =$("input:radio[name=size]:checked").val();
    toppings =$("input:checkbox[name=toppings]:checked").map(function(_, toppings) {
      return $(toppings).val();
    }).get();
    // var toppings =$("input:checkbox[name=toppings]:checked").map(function() {
    //   return $(this).val();
    // }).get();

    // working only for one
    // if ($(".toppings").is(":checked")) {
    //   debugger;
    //   toppings.push($(".toppings").val());
    // }  else if($(this).is(":not(:checked)")) {
    //     alert("Almost there, Katie");
    // }
    var newOrder = new Pizza(userName, size, toppings);
    var finalInfo = costCalculator(newOrder);
    // var newCena = new Toppings(toppings, total)
    // var finalCost = cennik(newCena);
    var total =0;
      // console.log(toppings);

    $("#userOrder").html("<li>" + newOrder.allInfo() + "</li>");
    $("#formPizza")[0].reset();
    // $("#userOrder").remove();

    event.preventDefault();
  });
});
