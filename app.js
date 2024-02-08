
function fadeOut(targetElement, duration = 300) {
  let currentHeight = targetElement.clientHeight;
  targetElement.style.transition = `opacity ${duration / 1000}s ease-in-out`;
  targetElement.style.overflow = 'hidden';
  targetElement.style.opacity = 0;
  
  setTimeout(() => {
    let intervalId = setInterval(function() {
      currentHeight -= (currentHeight / (duration / 15)); // Adjust the divisor for animation speed
      if (currentHeight >= 0.6) {
        targetElement.style.height = currentHeight + 'px';
      } else {
        clearInterval(intervalId);
        targetElement.removeAttribute('style');
        targetElement.style.display = 'none';
      }
    }, 15); // Adjust the interval time for the animation speed
  }, duration / 2);
}




function isElementOrAncestorHidden(element) {

  while (element !== null && element !== document) {
    if (window.getComputedStyle(element).display === 'none' || window.getComputedStyle(element).opacity === '0') {
      console.log("true")
      return true;
    }


    element = element.parentNode;
  }
  return false;
}



function handleSingleAccordion (element , contentHolder, callback = false){
  let accodionContent = element.querySelector(contentHolder);
  if(element.classList.contains('active')){
    console.log(element.scrollHeight)
    accodionContent.style.maxHeight = accodionContent.scrollHeight + "px";
  }else{
    accodionContent.style.maxHeight = 0;
  }
      
  if (typeof callback === 'function') {
    let  func =  callback(accodionContent);
  }
}



function fadeOut(targetElement, duration = 300) {
  let currentHeight = targetElement.clientHeight;
  targetElement.style.transition = `opacity ${duration / 1000}s ease-in-out`;
  targetElement.style.overflow = 'hidden';
  targetElement.style.opacity = 0;
  
  setTimeout(() => {
    let intervalId = setInterval(function() {
      console.log(currentHeight);
      currentHeight -= (currentHeight / (duration / 15)); // Adjust the divisor for animation speed
      if (currentHeight >= 0.6) {
        targetElement.style.height = currentHeight + 'px';
      } else {
        clearInterval(intervalId);
        targetElement.removeAttribute('style');
        targetElement.style.display = 'none';
      }
    }, 15); // Adjust the interval time for the animation speed
  }, duration / 2);
}



function hideElementByForAttribute(clickedElement) {
  // Check if the clicked element has a 'for' attribute
  let forAttribute = clickedElement.getAttribute('for');
  
  if (forAttribute) {
    // Find the element with the corresponding ID
    let targetElement = document.getElementById(forAttribute);
  
    // Check if the target element exists and hide it
    if (targetElement) {
      //targetElement.classList.add('hidden-element');
      fadeOut(targetElement,150);
      targetElement.style.display = 'none';
    }
  }
}


const close = document.querySelector("icon-close")

console.log(close)

hideElementByForAttribute(close)