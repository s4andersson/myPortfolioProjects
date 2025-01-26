function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    document.getElementById('newAbout').classList.toggle('light-mode');
    document.getElementById('newAbout').classList.toggle('dark-mode');
    document.querySelectorAll('.about-cardContainer').forEach(card => {
        card.classList.toggle('light-mode');
        card.classList.toggle('dark-mode');
    });
}

function flipCard() {
    document.querySelector('.about-cardContainer').classList.toggle('flipped');
}

// function updateViewportWidth() {
//     const viewportWidthValue = document.getElementById('viewportWidthTellerValue');

//     // Get the viewport width
//     const viewportWidth = window.innerWidth;

//     // Display the viewport width in the placeholder
//     viewportWidthValue.textContent = viewportWidth;
// }

// // Call the function initially and whenever the window is resized
// updateViewportWidth();
// window.addEventListener('resize', updateViewportWidth);




// function updateBoxSize() {
//     const box = document.querySelector('.about-cardContainer');
//     const textContainer = document.querySelector('.aboutFront');

//     if (!box || !textContainer) {
//         console.error('One or more elements not found!');
//         return;
//     }

//     // Get the width and height of the text container
//     const textWidth = textContainer.scrollWidth;
//     const textHeight = textContainer.scrollHeight;

//     console.log('Text Width:', textWidth);
//     console.log('Text Height:', textHeight);

//     // Set the box's height to match the text container
//     box.style.height = `${textHeight}px`;
//     // box.style.width = `${textWidth}`;
// }

// // Call the function initially and whenever the window is resized
// document.addEventListener('DOMContentLoaded', function () {
//     console.log("DOM Fully Loaded");
//     updateBoxSize();
//     // window.addEventListener('resize', updateBoxSize);
//     window.onload = function () {
//         console.log('All resources loaded');
//         setTimeout(() => {
//             updateBoxSize();
//         }, 10);
//         // updateBoxSize();
//         window.addEventListener('resize', updateBoxSize);
//     };
// });