const filterElement = document.querySelector('input');
const cards = document.querySelectorAll('ul')

filterElement.addEventListener('input', filter);

function filter() {
  if(filterElement.value !== '') {
    for(let card of cards) {
      const title = document.querySelector('h2');
      title = title.textContent.toLocaleLowerCase();

      const filterText = filterElement.value.toLocaleLowerCase()
      
      if(!title.includes(filterText)) {
        card.style.display= 'none'
      }
      else {
        card.style.display= 'block'
      }      
    }
  }
  else {
    for(let card of cards) {
      card.style.display= 'block'
    }
  }
}

// filter function
  // if the filter is not empty
    // for each card of cards
      // get card heading (title)
      // tranform to lower case
      // transform filter text to lower case
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element








// get filter element
// get cards elements

// add input event for the filter element

// filter function
  // if the filter is not empty
    // for each card of cards
      // get card heading (title)
      // tranform to lower case
      // transform filter text to lower case
      // if card title does not include the filter text
        // hide the card element
      // else
        // unhide the card element
  // else
    // for each card of cards
      // unhide the card element