var diamond = document.getElementById("side-nav-diamond");

var diamondTopPos = 3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
var diamondMaxMove = document.getElementById("side-nav-timeline").offsetHeight * 0.4;
console.log(document.getElementById("side-nav-timeline").offsetHeight);

// automatically move the diamond when the page is scrolled
document.addEventListener("scroll", (event) => {
    var diamondNewTop = diamondTopPos + ((diamondMaxMove * window.scrollY) / window.innerHeight);
    //console.log(diamondNewTop);
    diamond.style.transform = `translate(-0.65rem, ${diamondNewTop}px) rotate(45deg)`;
    //console.log(diamond.style.transform);
});

function scrollWithDiamond() // grab the diamond to scroll the page like a scrollbar
{
    // TODO
}