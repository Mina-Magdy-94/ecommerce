class Product {
  constructor(id, name, price, desc, imgSrc, categories, color) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.imgSrc = imgSrc;
    this.categories = categories;
    this.color = color;
  }
}

// class Mobile extends Product {
//   constructor(
//     id,
//     name,
//     price,
//     desc,
//     imgSrc,
//     categories,
//     color,
//     brand,
//     memory,
//     storage
//   ) {
//     super(id, name, price, desc, imgSrc, categories, color);
//     this.brand = brand;
//     this.memory = memory;
//     this.storage = storage;
//   }
// }

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function generateProds() {
  let productIndex = 0;
  const tshirts = 17;
  const mobiles = 19;
  const laptops = 15;

  const prods = [];
  for (let i = 0; i < tshirts; i++) {
    prods.push(
      new Product(
        productIndex++,
        `T-shirt ${i}`,
        i + 10,
        `This is T-shirt ${i}`,
        `./Tshirts/${i}.jpg`,
        ["T-shirt", "Cheap"]
      )
    );
  }

  for (let i = 0; i < mobiles; i++) {
    prods.push(
      new Product(
        productIndex++,
        `Mobile ${i}`,
        i + 10,
        `This is Mobile ${i}`,
        `./mobile/${i}.jpg`,
        ["Mobile", "Cheap", "Tech"]
      )
    );
  }

  for (let i = 0; i < laptops; i++) {
    prods.push(
      new Product(
        productIndex++,
        `Laptop ${i}`,
        i + 10,
        `This is Laptop ${i}`,
        `./laptops/${i}.jpg`,
        ["Laptop", "Expensive", "Tech"]
      )
    );
  }

  return prods;
}

data = {
  checkedCategories: [],
  cart: [],
  products: generateProds(),
  shownProducts: [],
};

function subset(superset, subsetToCheck) {
  console.log(superset, subsetToCheck);
  for (const elem of subsetToCheck) {
    if (!superset.includes(elem)) {
      return false;
    }
  }
  return true;
}

function filterProducts(category, categoryChecked) {
  console.log(category, categoryChecked);
  if (categoryChecked) {
    data.checkedCategories.push(category);
  } else {
    data.checkedCategories = removeItemOnce(data.checkedCategories, category);
  }

  data.shownProducts = data.products.filter((product) =>
    subset(product.categories, data.checkedCategories)
  );
  showProducts();
}

function showCounter() {
  document.getElementById("cartCounter").textContent =
    data.cart.length === 0 ? "" : String(data.cart.length);
}

/**
 * productId is number
 */
function addToCart(btnId) {
  const productId = Number(btnId.split("_")[1]);
  const foundProdInCart = data.cart.find((product) => product.id === productId);
  if (!foundProdInCart) {
    const prod = data.products.find((product) => product.id === productId);
    console.log(prod);
    data.cart.push(prod);
  }

  // set cookie
  setCookie("cart", JSON.stringify(data.cart), 1);

  // create elements
  showCounter();
}

function closeBtn() {
  document.getElementById("slider").remove();
}

function updateSlider(imageIndexToShow) {
  const shownProduct = document
    .getElementById("slider")
    .querySelector(".productToShow");
  const nextProductToShow = data.shownProducts[imageIndexToShow];
  shownProduct.remove();
  const productToShow = document.createElement("div");
  productToShow.id = imageIndexToShow;
  productToShow.className = "productToShow";
  productToShow.innerHTML = getProductToShowElem(nextProductToShow);
  document.getElementById("slider").appendChild(productToShow);
}

function nextBtn() {
  const shownProductIndexInShownProducts = document
    .getElementById("slider")
    .querySelector(".productToShow").id;
  updateSlider(
    (Number(shownProductIndexInShownProducts) + 1) % data.shownProducts.length
  );
}

function prevBtn() {
  const shownProductIndexInShownProducts = document
    .getElementById("slider")
    .querySelector(".productToShow").id;
  let imageIndexToShow = Number(shownProductIndexInShownProducts) - 1;
  if (imageIndexToShow < 0) {
    imageIndexToShow = data.shownProducts.length - 1;
  }
  updateSlider(imageIndexToShow);
}

function showSlider(productId) {
  const product = data.shownProducts.find(
    (product) => product.id === Number(productId)
  );
  console.log("show slider", product);
  // get parent section
  const parentSection = document.getElementById("products");

  // create and insert slider
  const sliderElem = document.createElement("div");
  sliderElem.id = "slider";
  sliderElem.innerHTML = `
    <button id="nextBtn" onclick="nextBtn()">&gt;</button>
    <button id="prevBtn" onclick="prevBtn()">&lt;</button>
    <button id="closeBtn" onclick="closeBtn()">X</button>
    <div id="${data.shownProducts.indexOf(product)}" class="productToShow">
    <img class="clonedImg" src="${product.imgSrc}">
    <p>Product: ${product.name} <br>
    Price:${product.price} <br>
    Description:${product.desc}
    </p>
    <button class="cartBtn" id="btn_${
      product.id
    }" onclick="addToCart(this.id)">Add to Cart</button>
  
    </div>
  `;

  parentSection.insertAdjacentElement("beforebegin", sliderElem);

  // todo: add css for elems in slider
}
// **************************************************************************************************

function showCategory(category) {
  const categoriesElem = document.getElementById("categories");
  const categoryDiv = document.createElement("div");
  categoryDiv.id = category;
  categoryDiv.className = "category";
  categoryDiv.innerHTML = `
     <label>
     <input type="checkbox" value="${category}" onchange="filterProducts(this.value, this.checked)">
     <span>${category}</span>
    </label>
   `;

  categoriesElem.appendChild(categoryDiv);
}

function getProductToShowElem(product) {
  return `
        <img class="clonedImg" src="${product.imgSrc}">
        <p>Product: ${product.name} <br>
        Price:${product.price} <br>
        Description:${product.desc}
        </p>
        <ul class="productCategories">
        </ul>
        <button id="btn_${product.id}" class="cartBtn" onclick="addToCart(this.id)">Add to Cart</button>
      `;
}

function showProduct(product) {
  const prodsElem = document.getElementById("products");
  let productDiv = document.createElement("div");
  productDiv.id = `div_${product.id}`;
  productDiv.className = "productDiv";
  productDiv.innerHTML = `
      <img class="productImg" src="${product.imgSrc}" onclick="showSlider(${product.id})">
      <p id="textToShow">
      Product: ${product.name} <br>
      Price:${product.price}
      </p>
      <ul class="productCategories">
      </ul>
      <button id="btn_${product.id}" onclick="addToCart(this.id)">Add to Cart</button>
  `;
  const categoriesToShow = productDiv.querySelector(".productCategories");
  for (category of product.categories) {
    const categoryDiv = document.createElement("li");
    categoryDiv.textContent = category;
    categoriesToShow.appendChild(categoryDiv);
  }

  prodsElem.appendChild(productDiv);
}

function showProducts() {
  // clear prods
  clearElementById("products");

  // create prods
  for (const product of data.shownProducts) {
    showProduct(product);
  }
}

//**********************Start on load to perform all these function//**************** */

function loadCartFromCookie() {
  data.cart = getCookie("cart") ? JSON.parse(getCookie("cart")) : [];
}

function clearElementById(id) {
  const elem = document.getElementById(id);
  elem.innerHTML = "";
}

function load() {
  //clear categories
  clearElementById("categories");

  // create categories
  const categories = [];
  for (const product of data.products) {
    for (const category of product.categories) {
      if (categories.indexOf(category) < 0) {
        categories.push(category);
      }
    }
  }
  categories.sort();
  for (const category of categories) {
    showCategory(category);
    // console.log("categories are shown");
  }

  // show products
  data.shownProducts = data.products;
  console.log("Products are shown");
  showProducts();

  // show cart
  loadCartFromCookie();
  showCounter();
  scrollFunction();
}

//Get the button:
var mybutton = document.getElementById("backToTop");

var sectionOfProducts = document.getElementById("products");

function scrollFunction() {
  if (sectionOfProducts.scrollTop > 25) {
    mybutton.style.display = "block";
    console.log("block");
  } else {
    mybutton.style.display = "none";
    console.log("None");
  }
}

//Scrolling behaviour
var topInterval;
var topFunction = function () {
  sectionOfProducts.scrollBy(0, -200);
  if (sectionOfProducts.scrollTop == 0) {
    clearInterval(topInterval);
  }
  console.log("scrolling");
  console.log(sectionOfProducts.scrollTop);
};

mybutton.addEventListener("click", function () {
  topInterval = setInterval(topFunction, 100);
  console.log(sectionOfProducts.scrollTop);
});

load();
