let box = document.createElement("div");
let list = document.createElement("ul");
let h3 = document.createElement("h3");
let p = document.createElement("p");
let btn = document.createElement("button");

box.classList.add("box");
h3.style.color = "red";
p.innerHTML = "Address <em>Baku, Azerbaijan</em>";
btn.classList.add("btn");
btn.setAttribute("disabled", true);
btn.textContent = "Disabled button";
let arr = [
  {
    href: "https://google.com",
    content: "google",
  },
  {
    href: "https://youtube.com",
    content: "youtube",
  },
  {
    href: "https://twitter.com",
    content: "twitter",
  },
];

for (let i = 0; i < arr.length; i++) {
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  link.textContent = arr[i].content;
  link.setAttribute("target", "_blank");
  link.setAttribute("href", arr[i].href);
  listItem.appendChild(link);
  list.appendChild(listItem);
}
box.append(list);
document.body.append(box, h3, p, btn);
