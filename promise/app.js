let table = document.querySelector(".table");
let getData = document.querySelector(".get-data-btn");
let sortUsername = document.querySelector(".sort-username");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let sortArr = [];

    getData.addEventListener("click", () => {
      data.forEach((elem) => {
        table.innerHTML += `<tr>
        <th scope="row">${elem.id}</th>
        <td>${elem.name}</td>
        <td>${elem.username}</td>
        <td>${elem.email}</td>
        <td>${elem.address.city}</td>
        <td>${elem.website}</td>
        <td><button type="button" class="btn btn-outline-success">Learn more</button></td>

      </tr>`;
        sortUsername.addEventListener("click", () => {
          let arr = [];
          arr.push(elem);
          sortArr = arr.sort();
          console.log(sortArr);
        });
      });
    });
  });
