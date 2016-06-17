function Pizza (size, toppings) {
  this.size=size;
  this.toppings=toppings;
}
var toppings=[];
$(document).ready(function() {
  $("form#formPizza").submit(function(event) {
    var size =$("input:radio[name=size]:checked").val();
    var toppings=[$("input:checkbox[name=toppings]:checked").val()];
      console.log(size);
      console.log(toppings);

    event.preventDefault();
  });
});
