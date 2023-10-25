let mainInput = document.querySelector(".main-input");
let error = document.querySelector(".error");
let addButton = document.querySelector(".add-button");
let list = document.querySelector(".list");
let ClearAll = document.querySelector(".clear-button");
let infoSpan = document.querySelector(".info");
let Sbutton = document.querySelector(".button-success");
mainInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.target.value.length > 0) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});
addButton.addEventListener("click", () => {
  if (mainInput.value.length == 0) {
    alert("input is empty");
  } else {
    list.innerHTML += `<div class="list-item d-flex justify-content-between mb-3">
  <span class="todo-item">${mainInput.value}</span>
  <button type="button" class="btn btn-danger delete-button">delete</button>
</div>`;
    mainInput.value = "";
  }
  let deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((deletebutton) => {
    deletebutton.addEventListener("click", (e) => {
      if (confirm("do you want to delete this item?") == true) {
        e.target.parentElement.remove();
      }
    });
  });
  infoSpan.textContent = `you have ${deleteButtons.length} pending tasks`;
  ClearAll.addEventListener("click", () => {
    if (deleteButtons.length == 0) {
      alert("no input");
    } else {
      list.remove();
      infoSpan.textContent = "you have 0 pending tasks";
    }
  });
});
