//business logic
function Pizza (userName, size, toppings) {
  this.userName = userName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaCost = 10;
  this.total =0;
}
Pizza.prototype.allInfo=function() {
  return "Thank you for your order, " + this.userName +". Your order is a" + this.size +" pizza with " + this.toppings + ". Total cost: $" + this.pizzaCost + ".";
};
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

    var newOrder = new Pizza(userName, size, toppings);
    var finalInfo = costCalculator(newOrder);
    var total =0;
    $("#userOrder").html("<li>" + newOrder.allInfo() + "</li>");
    $("#formPizza")[0].reset();
    event.preventDefault();
  });
});
