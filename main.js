/*const card=document.querySelector('.card__inner');

card.addEventListener('click', function ()  {
card.classList.toggle('is-flipped');
});*/
function flipCard(cardId)
{
    document.getElementById(cardId).classList.toggle('is-flipped');
}