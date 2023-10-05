// afficher une liste de livres à partir du tableau
let bookList = [
    {
      title: "Avis de décès",
      picture: "https://m.media-amazon.com/images/I/51NdukGNqBS._SX195_.jpg",
      author: "Zhou Haohui",
      description: "18 avril 1984, une série de meurtres inexpliqués dans la ville de CHengdu incite la police à mettre sur pied une unité spéciale, la 4/18. Ne parvenant pas à trouver le coupable, l'unité est dissoute. Vingt-deux ans plus tard, un des policiers est toujours obsédé par cette affaire. Mais au moment où il pense enfin tenir un indice majeur, il est assassiné. L'Unité 4/18 renaît alors de ses cendres.",
      statut: "read"
    },
    {
      title: "L'île de Yule",
      picture: "https://www.babelio.com/couv/CVT_Lile-de-yule_3310.jpg",
      author: "Johanna Gustawsson",
      description: "Le coeur battant, Emma Lindhal cogne à la porte du manoir dressé sur une petite île au large de Stockholm. L'île et son manoir ont une réputation sulfureuse depuis que, neuf ans plus tôt, une adolescente a été découverte pendue à un arbre du domaine, tuée dans des circonstances affreuses. Son assassin n'a jamais été retrouvé.",
      statut: "read"
    },
    {
      title: "L'héritier" ,
      picture: "https://www.babelio.com/couv/CVT_Haut-Royaume-tome-2--LHeritier_2622.jpg",
      author: "Pierre Pevel",
      description: "Une couronne. Une épée. Un trône. Les divins l'avaient distingué. Son sang était celui, maudit et glorieux, des plus grands rois qui règnèrent jamais. Mais plus que d'un trône, il était l'héritier d'un destin sacrifié.",
      statut: "currently-reading"
    },
    {
      title: "L'Arabe du futur 6: Une jeunesse au Moyen-Orient (1994-2011)" ,
      picture: "https://www.babelio.com/couv/CVT_LArabe-du-futur-tome-6--Une-jeunesse-au-Moyen-Or_8301.jpg",
      author: "Riad Sattouf",
      description: "L'Arabe du futur, une jeunesse au Moyen-Orient est une série de bande dessinée en six tomes, écrite et dessinée par Riad Sattouf. Elle raconte l'enfance et l'adolescence de l'auteur, fila aîné d'une mère française et d'un père syrien. Ce sixième tome couvre les années 1994-2011. C'est le dernier tome de la série."
    },
    {
      title: "A Dance with Dragons" ,
      picture: "https://www.babelio.com/couv/CVT_cvt_A-Dance-with-Dragons-Dreams-and-Dust_1642.jpg",
      author: "George R.R. Martin",
      description: "Entre Winterfell, Meereen et Port-Réal, les intrigues n'en finissent plus à Westeros. Et l'hiver approche. ",
      statut: "toread"
    },
    {
    title: "1793" ,
    picture: "https://www.babelio.com/couv/CVT_1793_1289.jpg",
    author: "Niklas Natt och Dag",
    description: "1793. Le vent de la Révolution française souffle sur les monarchies du nord. Un an après la mort du roi Gustav III de Suède, la tension est palpable dans tout le pays. Rumeurs de conspirations, paranoïa, le pays est en effervescence. Jean Michael Cardell va bientôt devoir affronter le mal et la corruption qui règnent à tous les échelons de la société suédoise, pour mettre à jour une sombre et terrible réalité.",
    statut: "read"
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