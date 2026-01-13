const colours_array = ["#FFF1CB", "#C2E2FA", "#B7A3E3", "#93BFC7", "#132440"];
const btn = document.querySelector("#btn");
btn.onclick = bgColourChange;
const pageBody = document.querySelector("body");
const colName = document.querySelector("#col-name");
let i = 0;
function bgColourChange() {
  if (i <= 4) {
    pageBody.style.backgroundColor = colours_array[i];
    colName.innerText = colours_array[i];
    i++;
  } else {
    i = 0;
    pageBody.style.backgroundColor = colours_array[i];
    colName.innerText = colours_array[i];
    i++;
  }
}
