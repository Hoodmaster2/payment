document.getElementById('products').addEventListener('change', function() {
  var product = this.value;
  var priceDisplay = document.getElementById('priceDisplay');
  var price;

  switch(product) {
    case 'dtb':
      price = 12;
      break;
    case 'spy':
      price = 17;
      break;
    case 'key':
      price = 20;
      break;
    case 'activator':
      price = 8;
      break;
    default:
      price = 0;
  }

  priceDisplay.innerHTML = '<p>Price: $' + price + '</p>';
});

function copyToClipboard(text) {
  var tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}
