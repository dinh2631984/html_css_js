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

/*console.log(nftNavReponsive);
console.log(modal)
console.log(nftNavRes)*/
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
// const nfttabBarAfter = document.querySelectorAll('.nft_tabBar-item::after');
// console.log(nfttabBarAfter);

nfttabBarList.forEach((item, key) => {
    // console.log(item);
    item.addEventListener('click', () => {
            // item.style.setProperty('color', 'white');
            item.style.color = "white";
            window.getSelection(
                item, ':after'
            ).backgroundColor = "red";

            item.lastElementChild.style.backgroundColor = "#858584";
            // console.log(key);
            // console.log(item.lastChild.previousSibling);
        // console.log(item.querySelector('.nft_tabBar-item:after'));
        //     console.log(item.after);  //.style.setProperty('background', '#858584');

            nfttabBarList.forEach((item2, key2) => {
                    // console.log(item);
                    if (key !== key2) {
                        item2.style.removeProperty('color');
                        item2.lastElementChild.style.backgroundColor = "#3B3B3B";
                    }
                }
            )


        }
    )
});