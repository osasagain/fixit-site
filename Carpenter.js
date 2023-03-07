// // items

// const menu = [
//     {
//         id: 1,
//         title: "carpenter",
//         catergory: "freelance",
//         time: "15 min",
//         img: "./images/fixit-logo.jpg",
//         desc: "Lorem ipsum dolor, sit amet consectetur ",
//     },
//     {
//         id: 2,
//         title: "carpenter",
//         catergory: "freelance",
//         time: "15 min",
//         img: "./images/fixit-logo.jpg",
//         desc: "Lorem ipsum dolor, sit amet consectetur ",
//     },
//     {
//         id: 3,
//         title: "carpenter",
//         catergory: "freelance",
//         time: "15 min",
//         img: "./images/fixit-logo.jpg",
//         desc: "Lorem ipsum dolor, sit amet consectetur ",
//     },
//     {
//         id: 4,
//         title: "carpenter",
//         catergory: "freelance",
//         time: "15 min",
//         img: "./images/fixit-logo.jpg",
//         desc: "Lorem ipsum dolor, sit amet consectetur ",
//     },
// ]

// const sectionCenter = document.querySelector("section-center");

// window.addEventListener("DOMContentLoaded", ()=> {
//         displayMenuItems(menu);
//     });

//     function displayMenuItems(menuItems) {
//         let displayMenu = menuItems.map((item)=>{
//             return `<article class="menu-items">
//          <img src=${item.img}alt=${item.title}>
//          <div class="item-info">
//              <header>
//                  <h4>${item.title}</h4>
//                  <p class="time">${item.time} </p>
//              </header>
//              <p class="item-text">${item.desc}</p>
//          </div>
//      </article>`;
//         });
    
//     displayMenu = displayMenu.join("");
//     sectionCenter.innerHTML = displayMenu;
// };

