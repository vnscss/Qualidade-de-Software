const cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stopRotate)
}

function rotate(e){
  const cardItem = this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight) / 7+'deg) rotateY('+(e.offsetX - halfHeight) / 7+'deg)';
}
function stopRotate(){
  const cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}


window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}