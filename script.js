fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    // ici on a acces a notre donnee
    console.log(json)
    json.forEach(p=>{
        afficheUnproduit(p)
    })
})

function afficheUnproduit(produit){
  document.getElementById('cartes').innerHTML += `
   <div class="card large-3 flex column">

                <!-- Image -->
                <div>
                    <img class="responsive img" src=${produit.image} alt="">
                </div>

                <!-- Texte -->
                <div class="flex justify-between">
                    <h3>${produit.title}</h3>
                    <p>${produit.rating.rate}</p> <!-- en notes -->
                </div>

                <!-- Description -->
                <div>
                    <p>${produit.description}</p>
                </div>

                <!-- Boutons -->
                <div class="flex align-center align-end">
                    <p class="large-6">${produit.price} €</p> <!-- En Euro € -->
                    <img class="btn btn_panier large-1" src="assets/placeholder.jpg" alt=""> <!-- Panier -->
                    <p class="btn large-5">Voir plus</p> <!-- Bouton-->
                </div>
            </div>
  `
}