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
nftNavReponsive.addEventListener('click', () => {
    modal.classList.toggle('isShow');
    // nftNavRes.classList.add('isShowRes');
});

modal.addEventListener('click', () => {
    modal.classList.toggle('isShow');
})

nftNavRes.addEventListener('click', (e) => e.stopImmediatePropagation());


/*  For tabBar    */
const nfttabBarList = document.querySelectorAll('.nft_tabBar-item');
nfttabBarList.forEach((item, key) => {
    item.addEventListener('click', () => {
            // item.style.setProperty('color', 'white');
            /*
            item.style.color = "white";
            item.style.borderBottom = '.2rem solid #858584';
            */
            item.classList.add('nft_tabBar-active');

            nfttabBarList.forEach((item2, key2) => {
                    if (key !== key2) {
                        /* item2.removeAttribute('style');*/
                        item2.classList.remove('nft_tabBar-active');
                        // item2.style.removeProperty('color');
                        // item2.style.removeProperty('border-bottom');
                        // item2.lastElementChild.style.backgroundColor = "#3B3B3B";
                    }
                }
            )
        }
    )
});