 const menu = [
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
    {
        id: 1,
        title: "john",
        catergory: "carpenter",
        distance: "15 min away",
        img: "./images/fixit-logo.jpg",
        desc: "Lorem ipsum dolor, sit amet consectetur ",
        rating: 5,
    },
 
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
//   displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item) {
    return `<article class="menu-item">
      <img src = ${item.img} class="photo" alt = ${item.title} />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="time">${item.distance}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
        <p class="rating">${item.rating}</p>
        <button>Profile</button>
        <button>Contact</button>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// function displayMenuButtons() {
//   const categories = menu.reduce(function(values, item) {
//     if (!values.includes(item.category)) {
//       values.push(item.category);
//     }
//     return values;
//   }, ["all"]);
//   const categoryBtns = categories.map(function(category) {
//     return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
//   }).join("");

//   container.innerHTML = categoryBtns;
//   const filterBtns = document.querySelectorAll(".filter-btn");

//   filterBtns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function(menuItem) {
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         displayMenuItems(menu);
//       } else {
//         displayMenuItems(menuCategory);
//       }
//     });
//   });
// }
