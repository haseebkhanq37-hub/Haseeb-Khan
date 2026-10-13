let products=[
            {
                ProductImage: "Shield.jpg",
                ProductName: "Shield",
                ProductDes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corporis necessitatibus nulla ab quo natus!"
            },
            {
                ProductImage: "Keychain.jpg",
                ProductName: "Keychain",
                ProductDes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corporis necessitatibus nulla ab quo natus!"
            },
            {
                ProductImage: "Pen.jpg",
                ProductName: "Pen",
                ProductDes: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero corporis necessitatibus nulla ab quo natus!"
            }
        ]
        let con=document.querySelector('.Container')
        products.forEach(p=>{
            let card= `<div class="card">
            <img src=${p.ProductImage} alt="">
            <h1> ${p.ProductName}</h1>
            <p>${p.ProductDes}</p>
            </div>`
            con.innerHTML+=card
        })
        
        