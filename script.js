class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class ="card-body">
          <strong>Product</strong>: ${product.name}
          <strong>Product Price</strong>: ${product.price}
          <strong>Product Year</strong>: ${product.year}
          <a hef="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
      </div>
    `;
    productList.appendChild(element);
    this.resetForm();
  }

  resetForm() {
    document.getElementById('product-form').reset();
  }

  delProduct(element) {
    if(element.name == 'delete') {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage('Product deleted successfully', 'danger');
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert- ${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const app = document.querySelector('#app-prod');
    container.insertBefore(div, app);
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}

document.getElementById('product-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const year = document.getElementById('year').value;

  const product = new Product(name, price, year);
  const ui = new UI();
  
  if(name, price == ''){
    return ui.showMessage('Complete fields');
  }
  ui.addProduct(product);
  ui.resetForm();
  ui.showMessage('Product added successfully', 'success');
});

document.getElementById('product-list').addEventListener('click', function(e) {
  const ui = new UI();
  ui.delProduct(e.target);
});