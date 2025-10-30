document.getElementById('Blog-click').addEventListener('click', function () {
    window.location.href = "./main.html";
})





const quantityElement = document.querySelectorAll('.main-btn');
for (let btn of quantityElement) {
    btn.addEventListener('click', function (event) {
        alert('Bord Updedt Successfully')
        const amount = event.target.innerText === 'Completed' ? 1 : -1;
        const amounts = event.target.innerText === 'Completed' ? -1 : 1;

        const quantityElement = document.getElementById('quantity');
        const quantityElements = document.getElementById('quantity-2');

        const curretQuantity = parseInt(quantityElement.innerText);
        const curretQuantitys = parseInt(quantityElements.innerText);

        const newQuantity = curretQuantity + amount;
        const sameNewQuantity = Math.max(0, curretQuantitys + amounts);

        quantityElement.innerText = newQuantity;
        quantityElements.innerText = sameNewQuantity;
    })
}
