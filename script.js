
document.getElementById('slideshow-trigger').addEventListener('dblclick', function() {
  const slideshowImages = document.getElementsByClassName('mySlides');
  let slideIndex = 0;

  function showSlides() {
    for (let i = 0; i < slideshowImages.length; i++) {
      slideshowImages[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slideshowImages.length) {
      slideIndex = 1;
    }

    slideshowImages[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Timpul de tranzitie între slide-uri: 3 secunde
  }

  showSlides();
});
