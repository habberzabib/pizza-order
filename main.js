document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder() {
  let size = prompt("Enter a size of pizza (small, medium, large): ");
  let topping1 = prompt("Enter first topping: ");
  let topping2 = prompt("Enter second topping");

  let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  alert(msg);
}
