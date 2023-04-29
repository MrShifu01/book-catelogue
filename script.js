const bookTitle = document.querySelector("#book-title")
const bookAuthor = document.querySelector("#book-author")
const bookGenre = document.querySelector("#book-genre")
const bookReview = document.querySelector("#book-review")
const bookRecommend= document.querySelector("#book-recommend")
const submitBtn = document.querySelector(".submit-button")

// Event Listener to add books to the catelogue
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the click event (e.g., form submission)
    addBook();
    bookTitle.value = ""
    bookAuthor.value = ""
    bookGenre.value = ""
    bookReview.value = ""
    bookRecommend.value = ""
})

// Function to add books to the catelogue
function addBook() {
    sessionStorage.setItem("title", bookTitle.value);
    sessionStorage.setItem("author", bookAuthor.value);
    sessionStorage.setItem("genre", bookGenre.value);
    sessionStorage.setItem("review", bookReview.value);
    sessionStorage.setItem("recommend", bookRecommend.value);
    addBookToList(sessionStorage.getItem("title"))
}

// Function to the book to the list to show on the website
function addBookToList (newBook) {
    const listItems = document.querySelector(".listItems")
    const listItem = document.createElement('li')
    listItem.innerHTML = `<a href="#" onClick="displayInfo()" class="added-book-title">${newBook}<span class="delete">\u00D7</span></a>`
    listItems.appendChild(listItem)
}

const displayTitle = document.querySelector(".display-title")
const displayAuthor = document.querySelector(".display-author")
const displayGenre = document.querySelector(".display-genre")
const displayReview = document.querySelector(".display-review")
const displayRecommend = document.querySelector(".display-recommend")

// Function to display a clicked book's details in the third column
function displayInfo () {
    displayTitle.textContent = `Title: ${sessionStorage.getItem("title")}`
    displayAuthor.textContent = `Author: ${sessionStorage.getItem("author")}`
    displayGenre.textContent = `Genre: ${sessionStorage.getItem("genre")}`
    displayReview.textContent = `Review: ${sessionStorage.getItem("review")}`
    displayRecommend.textContent = `Recommend: ${sessionStorage.getItem("recommend")}`
}

