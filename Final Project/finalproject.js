  // Slideshow
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demodots");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-white";
  }

  // Modal
  var modal = document.getElementById('simpleModal');
    var modalBtn = document.getElementById('modalBtn');
    var closeBtn = document.getElementsByClassName('closeBtn')[0];
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);
    function openModal(){
        modal.style.display = 'block';
        }
    function closeModal(){
        modal.style.display = 'none';
        }
    function outsideClick(e){
        if(e.target == modal){
            modal.style.display = 'none';
            }
        }