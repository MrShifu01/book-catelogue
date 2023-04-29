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

// Function to add a book to the sessionStorage
function addBook () {
    if (bookTitle.value) {
        const bookObj = {
            "title": bookTitle.value,
            "author": bookAuthor.value,
            "genre": bookGenre.value,
            "review": bookReview.value,
            "recommend": bookRecommend.value,
        }
        const bookString = JSON.stringify(bookObj)
        sessionStorage.setItem(bookTitle.value, bookString)
    } else {
        alert("Please add a book title to conitue")
    }
    
    addBookToList(sessionStorage.getItem(bookTitle.value))
}

let count = 0
// Function to the book to the list to show on the website
function addBookToList(bookString) {
    const bookObj = JSON.parse(bookString);
    const listItems = document.querySelector(".listItems");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <button class="book-list-btn">
            <span onClick="displayInfo('${bookObj.title}')" class="book-title">${bookObj.title}</span>
            <span onClick="deleteBook('${bookObj.title}${count}', event)" class="delete">\u00D7</span>
        </button>`;
    listItem.id = `${bookObj.title}${count}`;
    count += 1;
    listItems.appendChild(listItem);
}

// Function to delete a book from the display list and sessionStorage
function deleteBook (bookId) {
    const listItems = document.querySelector(".listItems")
    const deleteItem = document.getElementById(bookId)
    listItems.removeChild(deleteItem)

    // Removing the book from sessionStorage
    const bookTitle = bookId.slice(0, -1)
    sessionStorage.removeItem(bookTitle)
}

const displayTitle = document.querySelector(".display-title")
const displayAuthor = document.querySelector(".display-author")
const displayGenre = document.querySelector(".display-genre")
const displayReview = document.querySelector(".display-review")
const displayRecommend = document.querySelector(".display-recommend")

// Function to display a clicked book's details in the third column
function displayInfo (bookTitle) {
    const bookString = sessionStorage.getItem(bookTitle)
    const bookObj = JSON.parse(bookString)
    displayTitle.textContent = `Title: ${bookObj.title}`
    displayAuthor.textContent = `Author: ${bookObj.author}`
    displayGenre.textContent = `Genre: ${bookObj.genre}`
    displayReview.textContent = `Review: ${bookObj.review}`
    displayRecommend.textContent = `Recommend: ${bookObj.recommend}`
}

// Function to edit a book's information
function editBook () {

}



