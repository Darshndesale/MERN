const mobiles = [
  {
    name: "REDMI 12 (Pastel Blue, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "6 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 10499,
  },
  {
    name: "REDMI 13 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "4 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 20000,
  },
  {
    name: "REDMI 15 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "2 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 30000,
  },
  {
    name: "REDMI 17 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "16 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 15499,
  },
  {
    name: "REDMI 12 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "6 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 10499,
  },
  {
    name: "REDMI 12 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "6 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 25499,
  },
  {
    name: "REDMI 12 (Moonstone Silver, 128 GB)",
    ratings: "4.2",
    reviews: "5,262 Ratings & 2,470 Reviews",
    ram: "6 GB",
    displaySize: "17.25 cm (6.79 inch) Full HD+",
    camera: "50MP + 8MP + 2MP | 8MP Front Camera",
    battery: "5000 mAh",
    price: 10499,
  },
  // ... (Add more mobile objects based on the provided listings)
];

let container = document.querySelector(".right");
// To display the mobile information one by one
function toDisplayMobiles() {
  mobiles.forEach((mob) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
    <div class="phone-img">
        <img src="readme1.webp" alt="">
    </div>
    <div class="info">
        <h3 id="name">${mob.name}</h3>
        <ul id="config">
            <li id="ram">${mob.ram}</li>
            <li id="size">${mob.displaySize}</li>
            <li id="camera">${mob.camera}</li>
            <li id="Batery">${mob.battery}</li>
        </ul>
    </div>
    <div class="mob-price">
        <h3>$${mob.price}</h3>
    </div>`;

    container.appendChild(div);
  });
}
toDisplayMobiles();

// To display filter products
function displayProducts(store) {
  container.innerHTML = " ";
  if(store.length == 0) {
    container.innerHTML = "<h2>Product not found</h2>";
  }
  store.forEach((p)=> {
    let div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
    <div class="phone-img">
        <img src="readme1.webp" alt="">
    </div>
    <div class="info">
        <h3 id="name">${p.name}</h3>
        <ul id="config">
            <li id="ram">${p.ram}</li>
            <li id="size">${p.displaySize}</li>
            <li id="camera">${p.camera}</li>
            <li id="Batery">${p.battery}</li>
        </ul>
    </div>
    <div class="mob-price">
        <h3>$${p.price}</h3>
    </div>`;

    container.appendChild(div);
  })
}

let form = document.getElementById("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // take a data form fields
    let min_price = document.querySelector("#price");
    let max_price = document.querySelector("#price2");
    let brand     = document.getElementById("brand");
    let ram       = document.getElementById("ram");
    console.log(`${typeof(min_price.value)}, ${max_price.value}, ${brand.value}, ${ram.value}`);

    // Filter to list product based on user choice
    apply_filter(min_price.value,max_price.value,brand.value,ram.value);
})
let mobile
function apply_filter(min_price,max_price,brand,ram) {
  if(min_price !== "MIN" && max_price !== "MAX") {
     mobile = mobiles.filter( (m) => m.price >= min_price && m.price <= max_price);
    console.log(mobile);
    displayProducts(mobile);
  }

  if(ram != "Choose")
  {
    mobile = mobile.filter( (m) => m.ram == ram);
    displayProducts(mobile);
  }

  // remaining tommorow : same technique follow karo filter lagao and displa karo simple
  
}
