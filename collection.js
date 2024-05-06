var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent.toUpperCase();

        if (productname.indexOf(enteredValue) < 0) {
            productlist[i].style.display = "none";
        } else {
            productlist[i].style.display = "block";
        }
    }
});
