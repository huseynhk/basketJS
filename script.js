let btnadd = document.querySelectorAll(".btnadd");
let productCount = document.getElementById("productCount");

btnadd.forEach(btn => {
    btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }
        let arr = JSON.parse(localStorage.getItem("basket"));
        let productId = this.parentElement.getAttribute("data-id");
        let existProductId = arr.find(p => p.id == productId);
        if (existProductId == undefined) {
            arr.push({
                id: productId,
                price: this.previousElementSibling.firstElementChild.innerText,
                imageUrl: this.parentElement.previousElementSibling.getAttribute("src"),
                name: this.parentElement.firstElementChild.innerText,
                count: 1
            })
        }
        else {
            existProductId.count++;
        }
        localStorage.setItem("basket", JSON.stringify(arr));
        WriteProductCount();
    })

})

 function WriteProductCount() {
    if(localStorage.getItem("basket")!=null){
        let arr = JSON.parse(localStorage.getItem("basket"));
        let totalCount=0;
        arr.map(product=>{
            totalCount = totalCount + product.count;
        })
        productCount.innerText = totalCount;
    }
    
}
WriteProductCount();
