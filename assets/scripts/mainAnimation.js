// função para quando o mouse entra em uma carta
function handleMouseEnter() {
    this.classList.add('sCard--hovered');
    document.body.id = `${this.id}-hovered`;
}
// função para quando o mouse sai de uma carta
function handleMouseLeave() {
    this.classList.remove('sCard--hovered');
    document.body.id = '';
}

// função para adicionar eventos ao mouse
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName("sCard");
    
    for(let index = 0; index <cardElements.length; index++){
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
