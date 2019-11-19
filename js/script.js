function init() {
   //add your javascrip between these two lines of code
   var click = document.getElementById("entrybutton");
   click.addEventListener("click", function () {
      var input = document.getElementById("entryinput")
      var output = document.getElementById("textoutput");

      output.innerHTML = input.value;

      alert("Joanna Liu:" + input.value);
   });
}

window.addEventListener('load', init);
