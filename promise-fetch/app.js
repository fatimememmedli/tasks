let row = document.querySelector(".row");

let url = "https://northwind.vercel.app/api/suppliers/";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((elem) => {
      //   console.log(elem);
      row.innerHTML += `<div class="card me-3 mb-3" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="name">${elem.companyName}</h5>
        <p class="contact-name">${elem?.contactName}</p>
        <p class="phone">${elem.address?.phone}</p>
        <p class="country">${elem.address?.country}</p>

        <button type="button" name="${elem.id}" class="btn delete-btn btn-danger">delete</button>
        <button type="button" class="btn info-btn btn-info">Info</button>
      </div>
    </div>`;

      //
    });

    let deleteBtns = document.querySelectorAll(".delete-btn");
    for (let deletebtn of deleteBtns) {
      deletebtn.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
        // console.log(this.name);
        fetch(url + this.name, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {});
      });
    }
    let infoBtns = document.querySelectorAll(".info-btn");
    infoBtns.forEach((infobtn) => {
      infobtn.addEventListener("click", function () {
        data.forEach((element) => {
          Swal.fire(
            `Company Name:${element.companyName}`,
            `phone: ${element.address?.phone}`
          );
        });
      });
    });
  });

let obj = {
  companyName: "fatime",
  address: {
    city: "baku",
    country: "azerbaijan",
  },
};
