function animateNumber(currentNumber, targetNumber) {
    var increment = 1;
    var interval = setInterval(updateNumber, 50);
  
    function updateNumber() {
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      } else {
        currentNumber += increment;
        document.getElementById("currentNumber2").textContent = currentNumber;
      }
    }
  }
  
  function startAnimation() {
    var scrollTargetOffset = document.getElementById("scrollTarget2").offsetTop;
    var windowOffset = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
  
    if (windowOffset + windowHeight >= scrollTargetOffset) {
      animateNumber(0, 90);
      window.removeEventListener("scroll", startAnimation);
    }
  }
  
  window.addEventListener("scroll", startAnimation);
  