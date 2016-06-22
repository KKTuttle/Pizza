//business logic
function Pizza (userName, size, toppings) {
  this.userName = userName;
  this.size = size;
  this.toppings = toppings;
  this.pizzaCost = 10;
  this.total = 0;
}
Pizza.prototype.costCalculator = function () {
  debugger;
  if (this.size === "large") {
    this.pizzaCost *= 2.5;
  } else if (this.size === "medium") {
    this.pizzaCost *= 1.5;
  } else if (this.size === "small") {
    this.pizzaCost *= 1.3;
  }
};
var toppings=[];
$(document).ready(function() {
  $("form#formPizza").submit(function(event) {
    var userName= $("#userName").val();
    var size = $("input:radio[name=size]:checked").val();
    toppings = $("input:checkbox[name=toppings]:checked").map(function(_, toppings) {
      return $(toppings).val();
    }).get();

    var newOrder = new Pizza(userName, size, toppings);
    var finalInfo = newOrder.costCalculator();
    $("#userOrder").html("<li>" + "Thank you for your order, " + newOrder.userName +". Your order is a " + newOrder.size +" pizza with " + newOrder.toppings + ". Total cost: $" + newOrder.pizzaCost + "."  + "</li>");
    var total = 0;
    event.preventDefault();
    $("#formPizza")[0].reset();
  });
});
