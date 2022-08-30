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

data = {
  checkedCategories: [],
  cart: [],
  products: [
    new Product(20, "prod1", 10, "desc1", "imgsrc1", ["cat1", "cat2"]),
    new Product(15, "prod2", 10, "desc1", "imgsrc1", ["cat2", "cat3"]),
  ],
  shownProducts: [],
};

function clearElementById(id) {
  const elem = document.getElementById(id);
  elem.innerHTML = "";
}

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

  // todo: set cookie

  // create elements
  showCounter();
}

function showProducts() {
  // clear prods
  clearElementById("products");

  // create prods
  for (const product of data.shownProducts) {
    showProduct(product);
  }
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
  productToShow.id = nextProductToShow;
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

function getProductToShowElem(product) {
  return `
        <img class="clonedImg" src="${product.imgSrc}">
        <p>Product: ${product.name} <br>
        Price:${product.price} <br>
        Description:${product.desc}
        </p>
        <ul class="productCategories">
        </ul>
        <button id="btn_${product.id}" onclick="addToCart(this.id)">Add to Cart</button>
      `;
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
        ${getProductToShowElem(product)}
      </div>
    `;
  const categoriesToShow = sliderElem.querySelector(".productCategories");
  for (category of product.categories) {
    const categoryDiv = document.createElement("li");
    categoryDiv.textContent = category;
    categoriesToShow.appendChild(categoryDiv);
  }
  parentSection.insertAdjacentElement("beforebegin", sliderElem);

  // todo: add css for elems in slider
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
  }

  // show products
  data.shownProducts = data.products;
  showProducts();
}

load();
