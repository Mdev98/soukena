const card = document.querySelectorAll(".product-card")

const products = [
    {
        
        "name" : "Carotte",
        "categorie": "legumes",
        "price" : 500,
        "supplier": "Ninja-Vegetables",
        "imgUrl" : "./images/carrot.png"
    },
    {
        
        "name" : "Chou",
        "categorie": "legumes",
        "price" : 400,
        "supplier": "Ninja-Vegetables",
        "imgUrl" : "./images/cabbage.png"
    },
    {
        
        "name" : "Oignon",
        "categorie": "legumes",
        "price" : 500,
        "supplier": "Ninja-Vegetables",
        "imgUrl" : "./images/oignon.png"
    },
    {
        
        "name" : "Aubergine",
        "categorie": "legumes",
        "price" : 250,
        "supplier": "Ninja-Vegetables",
        "imgUrl" : "./images/eggplant.png"
    },
    {
        
        "name" : "Orange",
        "categorie": "fruits",
        "price" : 600,
        "supplier": "Gojo-fruits",
        "imgUrl" : "./images/orange.png"
    },
    {
        
        "name" : "Pomme",
        "categorie": "fruits",
        "price" : 700,
        "supplier": "Gojo-fruits",
        "imgUrl" : "./images/apple.png"
    },
    {
        
        "name" : "Banane",
        "categorie": "fruits",
        "price" : 500,
        "supplier": "Gojo-fruits",
        "imgUrl" : "./images/banana.png"
    },
    {
        
        "name" : "Ananas",
        "categorie": "fruits",
        "price" : 900,
        "supplier": "Gojo-fruits",
        "imgUrl" : "./images/pineapple.png"
    }
]

card.forEach((item,i) => {
    item.querySelector('.product-image').src = products[i].imgUrl
    item.querySelector('.product-name').innerText = products[i].name
    item.querySelector('.int').innerText = products[i].price
    item.querySelector('.product-supplier').innerText = products[i].supplier

    let links = item.querySelectorAll('a')
    links.forEach(link => {
        link.setAttribute("href", `./details.html?item=${products[i].name}`);
    })
    
})


