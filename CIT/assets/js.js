/*
const a = document.querySelector('.nft_coverProfile');

function myFunction(x) {
    if (x.matches) { // If media query matches
       a.setAttribute('', '')

    }
}
*/

/*var x = window.matchMedia("(max-width: 834px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes*/

const modal = document.querySelector('.modal');
const nftNavReponsive = document.querySelector('.nft_header .nft_nav-reponsive');
const nftNavRes = document.querySelector('.nft_nav-res');

console.log(nftNavReponsive);
console.log(modal)
console.log(nftNavRes)
nftNavReponsive.addEventListener('click', () => {
   modal.classList.toggle('isShow');
   nftNavRes.classList.add('isShowRes');
});