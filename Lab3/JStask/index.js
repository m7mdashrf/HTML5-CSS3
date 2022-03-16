// mapping products 
let MyProducts = JSON.parse(localStorage.getItem('Products'));
console.log(MyProducts);
let ShowProducts = function(MyProducts) {

    let productsUI = MyProducts.map((item) => {
        return `
      <div class="s">
      <img src="${item.imgUrl}" id="${item.Id}">
      <pre style:"text-align: center;">number of pieces: ${item.count}
price: ${item.Price} </pre>
  </div>
      `;
    });
    document.querySelector("#right").innerHTML = productsUI;
    allimages = document.images;
    for (var i = 0; i < allimages.length; i++) {
        allimages[i].addEventListener('dragstart', startdrag);
        allimages[i].addEventListener('dragend', enddrag);

    }

}

// mapping cart
let MyCartList = [];
let ShowCart = function(MyCartList) {
    let CartListUI = MyCartList.map((item) => {
        return `
      <div class="s" id="${item.Id}">
      <img src="${item.imgUrl}" >
  </div>
      `;
    });
    document.querySelector("#left").innerHTML = CartListUI;
    document.getElementById('cash').innerHTML = `Your Cash is ${TotalCash} $`
}

// 
let TotalCash = 0;

window.addEventListener('load', function() {

    // select all images : 
    // collection images
    ShowProducts(MyProducts);

    // left : cart
    left = document.getElementById('left');
    left.addEventListener('drop', dropped);
    left.addEventListener('dragenter', enterdrag);
    left.addEventListener('dragover', overdrag);
    left.addEventListener('dragleave', leavedrag);

    // // right :  products

    right = this.document.getElementById('right');
    right.addEventListener('dragleave', leavedrag);
    right.addEventListener('drop', dropped);
    right.addEventListener('dragenter', enterdrag);
    right.addEventListener('dragover', overdrag);

}); //end of load

function startdrag(e) {
    console.log(e);
    console.log(e.path[0].id);
    /*console.log(e.target.outerHTML);*/
    /*e.preventDefault();*/
    e.dataTransfer.setData('myid', e.path[0].id);
}

function enddrag(e) {
    // e.target.style.display = "none";

    e.preventDefault();
}

function dropped(e) {
    e.preventDefault();
    id = e.dataTransfer.getData('myid');

    // left.innerHTML += e.dataTransfer.getData('myimg');
    let CurrentProduct = MyProducts.find((product) => product.Id == id);
    console.log(CurrentProduct);
    if (CurrentProduct.count != 0) {
        MyProducts[id].count--;
        console.log(MyProducts[id].count)
        ShowProducts(MyProducts);
        let exist = MyCartList.some(item => (item.Id == CurrentProduct.Id));
        let index = MyCartList.findIndex(item => (item.Id == CurrentProduct.Id));

        if (exist) {
            TotalCash += CurrentProduct.Price;
            ShowCart(MyCartList)
            console.log(TotalCash);
            console.log(MyCartList)
        } else {
            TotalCash += CurrentProduct.Price;
            MyCartList.push(CurrentProduct)
            ShowCart(MyCartList)
            console.log(MyCartList)
        }

    } else {
        alert("This piece not available now")
    }

}

function leavedrag(e) {
    e.preventDefault();
}

function enterdrag(e) {
    e.preventDefault();
}

function overdrag(e) {
    e.preventDefault();
}