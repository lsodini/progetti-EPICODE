const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTVjY2YyNjBjYzAwMTVjYzBkZDQiLCJpYXQiOjE3MzgwODA2ODYsImV4cCI6MTczOTI5MDI4Nn0.V_wT6Nh0vBpTsTB5cZJ06Vt1YQfriPsLzvteRszYKVw';

// Funzione per ottenere i parametri dalla URL
function fetchProducts() {
  return fetch(API_URL, {
    headers: {
      Authorization: API_TOKEN
    }
  }).then(response => response.json());
}

// mostra i prodotti nella pagina
function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = `
     <div class="col-md-4 mb-4 d-flex align-items-stretch">
  <div class="card shadow-sm d-flex flex-column">
    <a href="detail.html?productId=${product._id}">
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    </a>
    <div class="card-body oro d-flex flex-column">
      <a href="detail.html?productId=${product._id}">
        <h5 class="card-title">${product.name}</h5>
      </a>
      <p class="card-text">${product.description}</p>
      <p class="card-text"><strong>Brand:</strong> ${product.brand}</p>
      <p class="card-text"><strong>Price:</strong> ${product.price} crediti</p>
      <div class="mt-auto">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="backoffice.html?productId=${product._id}" class="btn btn-sm btn-outline-primary">Edit</a>
          </div>
          <div>
            <a href="#" class="btn btn-primary">BUY</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
    productContainer.innerHTML += productCard;
  });
}

// inizializzare la pagina
if (document.getElementById('product-container')) {
  fetchProducts().then(displayProducts).catch(error => console.error('Error fetching products:', error));
}
