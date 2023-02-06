//Prepare a reference to the template and the .books-list.
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const booksList = document.querySelector('.books-list');
//Add a render function, inside it go through each item from dataSource.books
function render() { //funkcja renderująca książki na stronie
  for (let book of dataSource.books) { //przechodzimy po każdej książce z tablicy dataSource.books i wyświetlamy je na stronie 
    const generatedHTML = template(book); //generujemy kodHTML dla każdej książki z tablicy dataSource.books
    booksList.innerHTML += generatedHTML; //dodajemy kod HTML do listy .books-list 
   
  }
}
render();

/* ADD BOOKS TO FAVORITES AND REMOVE */

// array with favorite books

const favoriteBooks = [];
function initActions() {

  const booksImage = document.querySelectorAll('.book__image');

  for (let image of booksImage) {

    image.addEventListener('dblclick', function (event) {
      event.preventDefault();

      event.target.classList.toggle('favorite');

      const bookId = event.target.getAttribute('data-id');

      if (!favoriteBooks.includes(bookId)) { // check if there is no such id in the array
        favoriteBooks.push(bookId); 
        image.classList.add('favorite'); // add the favorite class to the image
      } else {
        favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1); 
        image.classList.remove('favorite'); // remove the favorite class from the image
      }

    });
  }
}

initActions();