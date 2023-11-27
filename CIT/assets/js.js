const a = document.querySelector('.nft_coverProfile');

function myFunction(x) {
    if (x.matches) { // If media query matches
       a.setAttribute('', '')

    }
}

var x = window.matchMedia("(max-width: 834px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes