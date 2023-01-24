const menu = [
  {
    id: 1,
    title: "Garlic Knots",
    category: "appetizers",
    price: 7,
    img: "./images/bread-img.jpg",
    desc: `Fresh hand-tied knots, baked and tossed in olive oil and garlic, topped with Romano cheese and fresh-cut basil. Served with a side of warm marinara.`,
  },
  {
    id: 2,
    title: "Classic Cheese",
    category: "pizza",
    price: 17,
    img: "./images/chz-pizza-img.jpg",
    desc: `Marinara, fresh cheeses and basil, classic and delicious `,
  },
  {
    id: 3,
    title: "the nona house",
    category: "salad",
    price: 11,
    img: "./images/housesalad-img.jpg",
    desc: `Romaine lettuce, cucumbers, cherry tomatoes, kalamata olives & red onion`,
  },
  {
    id: 4,
    title: "Baked Wings",
    category: "appetizers",
    price: 16,
    img: "./images/wings-img.jpg",
    desc: `No fryer here! Ten wings baked and finished on the grill, tossed in a buffalo sauce with a local thai chili infused honey. Served with blue cheese. `,
  },
  {
    id: 5,
    title: "death by pepperoni",
    category: "pizza",
    price: 28,
    img: "./images/pep-pizza-img.jpg",
    desc: `Pepperoni, Rosa Grande pepperoni, and Cup’n’Char pepperoni with smoked provolone, topped with two stripes of marinara. `,
  },
  {
    id: 6,
    title: "classic caesar",
    category: "salad",
    price: 7,
    img: "./images/caesarsalad-img.jpg",
    desc: `Romaine lettuce, Caesar dressing, croutons, and shaved parmesan. Add grilled chicken for $4.`,
  },
  {
    id: 7,
    title: "Grilled Caprese",
    category: "appetizers",
    price: 10,
    img: "./images/caprese-img.jpg",
    desc: `Our Spin on a classic. Cherry tomatoes and fresh mozzarella-ball skewers lightly grilled and served with fresh basil and balsamic drizzle, seasoned with sea salt. `,
  },
  {
    id: 8,
    title: "the garden pesto",
    category: "pizza",
    price: 28,
    img: "./images/veg-pizza-img.jpg",
    desc: `Fresh spinach, roasted cherry tomatoes, artichokes and black olives with a checkerboard of house-made pesto and finished with fresh basil. `,
  },
  {
    id: 9,
    title: "NY cheesecake",
    category: "encore",
    price: 7,
    img: "./images/chzcake-img.jpg",
    desc: `Made in-house on a graham cracker crust served with a dollop of whipped cream. Add strawberry or Blueberry topping for $2.`,
  },
  {
    id: 10,
    title: "canoli",
    category: "encore",
    price: 7,
    img: "./images/canoli-img.jpg",
    desc: `Filled with sweetened ricotta and chocolate chips, topped with powdered sugar.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
