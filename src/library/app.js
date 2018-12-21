let books = [];

function getAllBooks () {
  return fetch('/api/books')
    .then(responce => {
      if (responce.ok) {
        return responce.json()
      }
      throw new Error('Somethon goes wrong =(')
    })
    .then(data => {
      renderBooks(data.payload);
      saveBooks(data.payload);
})
};
getAllBooks()

function saveBooks(receivedBooks) {
    books = receivedBooks;
}


function getBook (id) {
  return fetch(`/api/books/${id}`)
    .then(responce => {
      if (responce.ok) {
        return responce.json()
      }
      throw new Error('Somethon goes wrong =(')
    })
    .then(data => renderBooks([data.payload]))
}

const bookList = document.getElementById('books-list'); 


function renderBooks (books) {
  clear()
  for (let i = 0; i < books.length; i++) {
    let book = document.createElement('div'); 
    book.className = ('book')
    book.dataset.id = books[i].id;
    let title = document.createElement('div')
    title.textContent = books[i].title; 
    let author = document.createElement('div')
    author.textContent = books[i].author
    let img = document.createElement('img')
    img.src = books[i].image;
    img.width = '200'
    img.height = '200'
    let rating = renderRating(books[i].rating); 

    book.append(img)
    book.append(title); 
    book.append(author)
    book.append(rating)
    bookList.append(book)
  }}

  
	function mostPopular () {
	  return fetch('/api/books?filter=most-popular')
	    .then(responce => {
	      if (responce.ok) {
	        return responce.json()
	      }

	      throw new Error('Something goes wrong =(');
	    })
	    .then(data => renderBooks(data.payload));
	}