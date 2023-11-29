const displayOptions = function (e) {

  document.querySelectorAll(".option").forEach(function (el) {
    const computedStyle = window.getComputedStyle(el);

    const currentOpacity = computedStyle.getPropertyValue("opacity");

    if (currentOpacity === "1") {
      el.style.opacity = 0;
      setTimeout(() => (el.style.display = "none"), 400);
    } else {
      el.style.opacity = 1;
      el.style.display = "";
    }
  });
};

document.getElementById("test").addEventListener("click", displayOptions);

//UPDATING THE VALUES OF THE SEARCHBAR
document.querySelectorAll(".option").forEach((e) => {
  e.addEventListener("click", function (el) {
    displayOptions();
    const target = el.target;
    document.getElementById("test").placeholder = target.placeholder;
    // console.log(target.placeholder);
    el.target.blur();
  });
});



//SEARCH OPTION WORKING
document.querySelector(".searchbutton").addEventListener("click", function () {

  //Implementing the selection of bussiness boxes
  let value = document.querySelector('input[id="test"]').placeholder;
  //If the user did not select anything
  if(value == "Select the business") return;

  filteredPlaceholder = value.toLowerCase().split(" ").join("");
  document.querySelectorAll(".box").forEach(function (e) {
    e.style.display = "";
    if (e.classList.contains(filteredPlaceholder)) return;
    e.style.display = "none";
});
});