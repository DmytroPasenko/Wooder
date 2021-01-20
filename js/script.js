window.onload = function() {
    var scrolled = 0
    var timer
    var firstScroll = document.getElementById('furniture').getBoundingClientRect().top - 35

    document.getElementById('scroll').onclick = function() {
        scrollToFirstBlock()
    }    

    function scrollToFirstBlock() {
        if (scrolled < firstScroll) {
            window.scrollTo(0, 0)
            scrolled = scrolled + 12
            timer = setTimeout(scrollToFirstBlock, .1)
            window.scrollTo(0, scrolled)
        }
        else {
            clearTimeout(timer)
            scrolled = firstScroll
            window.scrollTo(0, scrolled)
        }
    }
}