let singerItems = document.querySelector(".singer-item");
let noItem = document.querySelector(".no-item");
let localFavArr = JSON.parse(localStorage.getItem("fav"));
if (localFavArr.length == 0) {
  noItem.classList.replace("d-none", "d-block");
} else {
  localFavArr.forEach((singer) => {
    singerItems.innerHTML += `<tr>
    <th scope="row">${singer.id}</th>
    <td>${singer.name}</td>

<td>    <div class="table-image"><img src="${singer.image}" alt=""></div></td>
    <td>${singer.age}</td>

    <td>${singer.country}</td>

    <td>
      <button name="${singer.id}" type="button" class="fav-delete-btn delete-btn btn btn-outline-danger">
        <i class="fa-solid fa-trash" style="color: #ff0000"></i>
      </button>
    </td>
  </tr>`;
  });
  let favDelBtns = document.querySelectorAll(".fav-delete-btn");
  // console.log(favDelBtns);
  favDelBtns.forEach((favdelbtn) => {
    favdelbtn.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      localFavArr = localFavArr.filter((y) => y.id != this.name);
      localStorage.setItem("fav", JSON.stringify(localFavArr));
    });
  });
}
