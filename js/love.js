// $(document).ready(function() {
    
//     $('.love').on('click', function() {
//         var icon = $(this).find('i'); 

//         // Check if the heart is not filled (fa-regular)
//         if (icon.hasClass('fa-regular')) {
//             icon.removeClass('fa-regular').addClass('fa-solid'); 
//             addBookToReadLater(this); 
//         } else {
//             icon.removeClass('fa-solid').addClass('fa-regular'); // Change to empty heart (fa-regular)
//             removeBookFromReadLater(this); // Call function to remove book from "Read Later"
//         }
//     });

//     // Function to add the book to the "Read Later" section
//     function addBookToReadLater(button) {
//         var bookCard = $(button).closest('.col-md-4').clone(); // Clone the book card (this can be customized)
//         var readLaterSection = $('#read-later'); // Assuming there's a section with ID "read-later"

//         // If the "Read Later" section doesn't exist, create it
//         if (!readLaterSection.length) {
//             readLaterSection = $('<div id="read-later" class="container mt-5"><h2>Read Me Later</h2></div>');
//             $('body').append(readLaterSection); // Append it to the body
//         }

//         // Append the cloned book card to the "Read Later" section
//         readLaterSection.append(bookCard);
//     }

//     // Function to remove the book from the "Read Later" section
//     function removeBookFromReadLater(button) {
//         var bookCard = $(button).closest('.col-md-4');
//         $('#read-later .col-md-4').each(function() {
//             if ($(this).is(bookCard)) {
//                 $(this).remove(); // Remove the cloned card from the "Read Later" section
//             }
//         });
//     }
// // });
// "use strict";
// document.addEventListener('DOMContentLoaded', () => {
//     // Function to render favorite books
//     function renderFavorites() {
//         const favoritesContainer = document.getElementById('favorites-list');
//         let selectedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

//         // Clear current list
//         favoritesContainer.innerHTML = '';

//         // Loop through the books and add them to the container
//         selectedBooks.forEach(book => {
//             let card = document.createElement('div');
//             card.classList.add('card');
            
//             // Add book info to the card
//             card.innerHTML = `
//                 <img src="${book.imageUrl}" alt="${book.title}" class="card-img-top">
//                 <div class="card-body">
//                     <h5 class="card-title">${book.title}</h5>
//                     <a href="${book.infoUrl}" class="btn btn-primary">More info</a>
//                 </div>
//             `;
            
//             // Append card to favorites container
//             favoritesContainer.appendChild(card);
//         });
//     }

//     // Render favorites on page load
//     renderFavorites();

//     // Function to handle "love" button clicks
//     document.querySelectorAll('.love').forEach(button => {
//         button.addEventListener('click', (event) => {
//             const bookId = event.target.getAttribute('data-book-id');
//             const bookTitle = event.target.closest('.info').querySelector('a').innerText; // Get the book title
//             const bookImage = event.target.closest('.col-md-4').querySelector('img').src; // Get the book image URL
//             const bookInfoUrl = event.target.closest('.info').querySelector('a').href; // Get the book info URL

//             // Retrieve the existing list of selected books or initialize an empty array
//             let selectedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

//             // Check if the book is already in the favorites list
//             let bookExists = selectedBooks.some(book => book.id === bookId);
//             if (!bookExists) {
//                 // Create a new book object
//                 let bookInfo = {
//                     id: bookId,
//                     title: bookTitle,
//                     imageUrl: bookImage,
//                     infoUrl: bookInfoUrl
//                 };

//                 // Add the new book to the favorites list
//                 selectedBooks.push(bookInfo);

//                 // Save the updated favorites list to localStorage
//                 localStorage.setItem('favoriteBooks', JSON.stringify(selectedBooks));

//                 // Re-render the favorites section
//                 renderFavorites();
//             }
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    loadFavorites();

    document.querySelectorAll(".love").forEach((button) => {
        button.addEventListener("click", () => {
            const bookId = button.dataset.Id;
            toggleFavorite(bookId, button);
        });
    });
});

function toggleFavorite(bookId, button) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const bookCard = button.closest(".col-md-4");
    const bookData = {
        id: bookId,
        imgSrc: bookCard.querySelector("img").src,
        title: bookCard.querySelector(".info a").textContent.trim(),
        link: bookCard.querySelector(".info a").href,
    };

    const index = favorites.findIndex((book) => book.id === bookId);

    if (index === -1) {
        favorites.push(bookData);
        button.innerHTML = `<i class="fa-solid fa-heart"></i>`; // Filled heart
    } else {
        favorites.splice(index, 1);
        button.innerHTML = `<i class="fa-regular fa-heart"></i>`; // Empty heart
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function loadFavorites() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.forEach((favorite) => {
        const button = document.querySelector(`.love[data-book-id="${favorite.id}"]`);
        if (button) {
            button.innerHTML = `<i class="fa-solid fa-heart"></i>`; // Filled heart
        }
    });
}





  
  
  


