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
// });

