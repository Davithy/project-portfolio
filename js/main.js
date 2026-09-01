const fancybox = document.querySelectorAll("[data-fancybox]");
console.log(fancybox);

// const images = document.querySelectorAll(".gallery-item img");
// const modal = document.querySelector(".modal");
// const modalImg = document.querySelector(".modal-img");
// const closeBtn = document.querySelector(".close-btn");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");

// let imgIndex

// images.forEach((img, i) => {
//     img.addEventListener("click", (e) => {
//         imgIndex = i;
//         modalImg.src = images[i].src;
//         modal.classList.add("active");
//     });
// });

// closeBtn.onclick = () => {
//     modal.classList.remove("active");
// };

// nextBtn.onclick = () => {
//     modalImg.src = nextImg()
// };

// prevBtn.onclick = () => {
//     modalImg.src = prevImg();
// };


// let nextImg = () => {
//     imgIndex++;
//     if (imgIndex >= images.length) {
//         imgIndex = 0;
//     }
//     return images[imgIndex].src;
// };

// let prevImg = () => {
//     imgIndex--;
//     if (imgIndex < 0) {
//         imgIndex = images.length - 1
//     }
//     return images[imgIndex].src;
// }
