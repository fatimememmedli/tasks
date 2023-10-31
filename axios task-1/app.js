let cardBox = document.querySelector(".card-box");
let url = "http://localhost:3000/singers/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((singer) => {
      cardBox.innerHTML += `<div class="card me-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="${singer.image}"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.country}</p>
          <button type="button" class="delete-btn btn btn-outline-danger">
            <i class="fa-solid fa-trash" style="color: #ff0000"></i>
          </button>
          <button  type="button" class="fav-btn btn btn-outline-danger">
            <i name="${singer.id}" class="fav-icon fa-regular fa-heart" style="color: #ff0000"></i>
          </button>
        </div>
      </div>`;
    });
    let favIcons = document.querySelectorAll(".fav-icon");
    let arr = [];
    let localFavArr = JSON.parse(localStorage.getItem("fav"));
    if (localFavArr) {
      arr = [...localFavArr];
    }
    for (let favicon of favIcons) {
      for (let elem of arr) {
        if (favicon.getAttribute("name") == elem.id) {
          favicon.classList.replace("fa-regular", "fa-solid");
        }
      }
    }
    for (let favicon of favIcons) {
      favicon.addEventListener("click", function () {
        if (this.classList.contains("fa-solid")) {
          this.classList.remove("fa-solid");
          this.classList.add("fa-regular");
          arr = arr.filter((x) => x.id != this.getAttribute("name"));
          localStorage.setItem("fav", JSON.stringify(arr));
        } else {
          this.classList.replace("fa-regular", "fa-solid");
          data.forEach((elem) => {
            if (elem.id == this.getAttribute("name")) {
              arr.push(elem);
              localStorage.setItem("fav", JSON.stringify(arr));
            }
          });
        }
        //sdfsfs
      });
    }
  });
