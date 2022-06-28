// const container = document.querySelector('.Newcomment');

// const renderComments = async()=>{
//     let uri =' http://localhost:3000/Comments';

//     const res = await fetch(uri);
//     const comments = await res.json();
//     console.log(comments);
// }

// window.addEventListener('DOMContentLoaded',() => renderComments());


// $.fn.stars = function() {
//     return $(this).each(function() {
//         // Get the value
//         var val = parseFloat($(this).html());
//         // Make sure that the value is in 0 - 5 range, multiply to get width
//         var size = Math.max(0, (Math.min(5, val))) * 16;
//         // Create stars holder
//         var $span = $('<span />').width(size);
//         // Replace the numerical value with stars
//         $(this).html($span);
//     });
// }

// $(function() {
//     $('span.stars').stars();
// });


$.fn.stars = function() {
    return $(this).each(function() {
        const rating = $(this).data("rating");
        const numStars = $(this).data("numStars");
        const fullStar = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
        const halfStar = (rating%1!== 0) ? '<i class="fas fa-star-half-alt"></i>': '';
        const noStar = '<i class="far fa-star"></i>'.repeat(Math.floor(numStars-rating));
        $(this).html(`${fullStar}${halfStar}${noStar}`);
    });
}