document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder() {
  let size = document.getElementById("size-in").value;
  let topping1 = document.getElementById("topping1-in").value;
  let topping2 = document.getElementById("topping2-in").value;

  let msg = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  document.getElementById("output").innerHTML = msg;
}
