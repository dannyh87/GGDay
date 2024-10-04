const addOnClickHandler = (productCode) => {
    console.log('CLICK', productCode)
    const addItem = fetch("https://www.wickes.co.uk/cart/add", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.wickes.co.uk/Dulux-Matt-Emulsion-Paint---Polished-Pebble---2-5L/p/107093",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `productCodePost=${productCode}&postcode=&CSRFToken=3c0acb61-f1f8-4315-a63d-ab068149167b&addedForDelivery=true&qty=1`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      })
}
//Find cards
const highlightedItem = document.querySelectorAll(".product-card");
console.log('highlightedItem', highlightedItem);

// Iterate through each highlighted item
highlightedItem.forEach((item) => {
  const addBtn = document.createElement('button');
  const clickAndCollectbtn = document.createElement('button');
    addBtn.classList.add('btn', 'btn-action', 'btn_full', 'btn-add-to-basket');
    addBtn.style.marginBottom = '5px';
    clickAndCollectbtn.classList.add('btn', 'btn-action', 'btn_full', 'btn-add-to-basket');

  addBtn.innerHTML = 'Add';
  clickAndCollectbtn.innerHTML = 'Click and Collect';
  const productCode = item.dataset.productCode;

  addBtn.addEventListener('click', function(){
    addOnClickHandler(productCode)
  });

  item.appendChild(addBtn);
  item.appendChild(clickAndCollectbtn);
});



