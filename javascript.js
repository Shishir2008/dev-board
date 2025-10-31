document.getElementById('Blog-click').addEventListener('click', function () {
    window.location.href = "./main.html";
})





const quantityElement = document.querySelectorAll('.main-btn');
const cardContenar = document.getElementById('card-contenar');
let array = [];
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
        
        btn.style.background = 'white';
        btn.style.color = 'gray';
        btn.style.cursor = 'not-allowed';
        btn.style.pointerEvents = 'none';


        const p = document.createElement('p');
        p.classList.add('bg-[#F4F7FF]','rounded-md','p-2','my-3','text-gray-400','font-semibold')
        p.innerText = 'You have Complete The Task Add Dark Mode at 12:48:15 PM';
        cardContenar.appendChild(p);

    })
}


document.getElementById('hidde-btn').addEventListener('click',function(){
    cardContenar.classList.add('hidden');
})