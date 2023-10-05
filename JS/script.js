// afficher une liste de livres à partir du tableau
let bookList = [
    {
      title: "A Game of Thrones",
      picture: "https://placehold.co/300x400",
      author: "George R.R. Martin",
      description: "Lorsque Sophie, une pâtissière timide de New York, voyage à Paris pour un concours de pâtisserie, elle ne s'attend pas à rencontrer un charismatique chef français, Pierre. Leurs différences culturelles et culinaires sèment le chaos, mais est-ce que l'amour et la cuisine les uniront ?",
      statut: "read"
    },
    {
      title: "A Clash of Kings",
      picture: "https://placehold.co/300x400",
      author: "George R.R. Martin",
      description: "Le détective amateur, Emily, reçoit une invitation énigmatique pour passer la nuit dans un manoir réputé hanté. Elle et son groupe d'amis se retrouvent pris au piège dans un labyrinthe de mystères et de phénomènes paranormaux. Emily doit résoudre l'énigme du manoir pour sauver ses amis avant qu'il ne soit trop tard.",
      statut: "read"
    },
    {
      title: "A Storm of Swords" ,
      picture: "https://placehold.co/300x400",
      author: "George R.R. Martin",
      description: "Dans le monde exotique de l'orchidée noire, l'experte en botanique, Amelia, se retrouve mêlée à une série de meurtres mystérieux. Elle devra démêler les fils de cette intrigue mortelle tout en veillant à ce que l'orchidée rare et précieuse ne tombe pas entre de mauvaises mains.",
      statut: "en cours de lecture"
    },
    {
      title: "A Feast for Crows" ,
      picture: "https://placehold.co/300x400",
      author: "George R.R. Martin",
      description: "Dans le monde exotique de l'orchidée noire, l'experte en botanique, Amelia, se retrouve mêlée à une série de meurtres mystérieux. Elle devra démêler les fils de cette intrigue mortelle tout en veillant à ce que l'orchidée rare et précieuse ne tombe pas entre de mauvaises mains.",
      statut: "à lire" 
    },
    {
      title: "A Dance with Dragons" ,
      picture: "https://placehold.co/300x400",
      author: "George R.R. Martin",
      description: "Dans le monde exotique de l'orchidée noire, l'experte en botanique, Amelia, se retrouve mêlée à une série de meurtres mystérieux. Elle devra démêler les fils de cette intrigue mortelle tout en veillant à ce que l'orchidée rare et précieuse ne tombe pas entre de mauvaises mains.",
      statut: "à lire"
    },
  ]
  
 function showBooks (status) {
    console.log(status)
    let bookListContainer = document.querySelector(".book__list");

    bookListContainer.innerHTML = "";
  
    for (let eachBook of bookList) { // for (let element of array)
        console.log(eachBook)
    if (status == "all" || eachBook.statut == status) {
        let bookCard = document.createElement("article");
        bookCard.classList.add("card"); // ajoute une classe à l'élément html
        bookCard.style.width = "18rem"; // pas une bonne pratique, passer par le css
      
        // <img src="..." />
        let bookPicture = document.createElement("img");
        bookPicture.src = eachBook.picture;
      
        // <h3>...</h3>
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = eachBook.title;
      
        let bookAuthor = document.createElement("h4");
        bookAuthor.textContent = eachBook.author;
      
        let bookDescription = document.createElement("p");
        bookDescription.textContent = eachBook.description;
    
        let select= document.createElement ("select");
          let optionToRead = document.createElement("option");
              optionToRead.value = "à lire";
              optionToRead.textContent = "À lire";
      
         let optionReading = document.createElement("option");
             optionReading.value = "en cours de lecture";
             optionReading.textContent = "En cours de lecture";
      
         let optionFinished = document.createElement("option");
             optionFinished.value = "lu";
             optionFinished.textContent = "Lu";
      
        select.appendChild(optionToRead)
        select.appendChild(optionReading)
        select.appendChild(optionFinished)
      
        // je créé la structure de la carte du livre à afficher
        bookCard.appendChild(bookPicture);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookDescription);
        bookCard.appendChild(select);
    
        select.addEventListener("change", function(event) {
            let value = select.options[select.selectedIndex].value;
            alert(value);
          })
    
        // j'ajoute la carte du livre à la liste des livres
        bookListContainer.appendChild(bookCard);
    }
     
    }
 }
  
  // filtrer les livres en fonction de leur statut : lu, à lire, en cours de lecture
    var statut__Fieldset = document.getElementById('Statut__Fieldset');
    statut__Fieldset.addEventListener('change', function () {
      //  bookList.innerHTML ='';
    
    var radio = statut__Fieldset.querySelectorAll('input[type="radio"]');
    radio.forEach(function (radio) {
        if (radio.checked) {
            showBooks(radio.value)
           // var listItem = document.createElement('li');
            //listItem.textContent = radio.value;
            //bookListContainer.appendChild(listItem);
        }
     });
    });

    showBooks("all")
    

  // pouvoir changer le statut d'un livre
  
  
  // pouvoir noter un livre