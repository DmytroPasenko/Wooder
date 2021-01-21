window.onload = function() {
    var scrolled = 0
    var timer

    var firstScroll = document.getElementById('furniture').getBoundingClientRect().top - 35
    var secondScroll = document.getElementById('decor').getBoundingClientRect().top - 35
    var thirdScroll = document.getElementById('quality').getBoundingClientRect().top - 35
    var fourthScroll = document.getElementById('complexity').getBoundingClientRect().top - 35
    var lastScroll = document.getElementById ('footer').getBoundingClientRect().bottom    

    var mouseScr = document.getElementById('mouse-scroll')
    var upArrowScr = document.getElementById('up-arrow')
    var downArrowScr = document.getElementById('down-arrow')

    document.getElementById('scroll').onclick = function() {
        scrolled = 0
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

    document.getElementById('up-arrow').onclick = function() {
        if (scrolled == firstScroll) {
            scrollToTop()         
        }

        function scrollToTop() {
            if (scrolled < firstScroll || scrolled == firstScroll) {
                scrolled = scrolled - 12
                timer = setTimeout(scrollToTop, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = 0
                window.scrollTo(0, 0)
            }
        }        

        if (scrolled == lastScroll) {
            scrollToHome()

        }

        function scrollToHome() {
            if (scrolled < lastScroll || scrolled == firstScroll) {
                scrolled = scrolled - 12
                timer = setTimeout(scrollToHome, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = 0
                window.scrollTo(0, 0)
            }
        }
    }

    document.getElementById('down-arrow').onclick = function() {
        if (scrolled == firstScroll) {
            scrollToSecondBlock()
        }

        function scrollToSecondBlock() {
            if (scrolled == firstScroll || scrolled > firstScroll & scrolled < secondScroll) {
                scrolled = scrolled + 12
                timer = setTimeout(scrollToSecondBlock, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = secondScroll
                window.scrollTo(0, scrolled)
            }
        }

        if (scrolled == secondScroll) {
            scrollToThirdBlock()
        }

        function scrollToThirdBlock() {
            if (scrolled == secondScroll || scrolled > secondScroll & scrolled < thirdScroll) {
                scrolled = scrolled + 12
                timer = setTimeout(scrollToThirdBlock, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = thirdScroll
                window.scrollTo(0, scrolled)
            }
        }

        if (scrolled == thirdScroll) {
            scrollToFourthBlock() 
            
            // mouseScr.className = "white-mouse-scroll"
            // upArrowScr.className = "white-up-arrow"
            // downArrowScr.className = "white-down-arrow"
            // upArrowBtn.className = "white-arrow-button"
            // downArrowBtn.className = "white-arrow-button"

            mouseScr.style.filter = "brightness(0) invert(1)"
            upArrowScr.classList.add("white-up-arrow")
            downArrowScr.classList.add("white-down-arrow")
        }

        function scrollToFourthBlock() {
            if (scrolled == thirdScroll || scrolled > thirdScroll & scrolled < fourthScroll) {
                scrolled = scrolled + 12
                timer = setTimeout(scrollToFourthBlock, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = fourthScroll
                window.scrollTo(0, scrolled)
            }
        }

        if (scrolled == fourthScroll) {
            scrollToBottom()

            mouseScr.style.filter = "brightness(1) invert(1)"
            upArrowScr.classList.remove("white-up-arrow")
            downArrowScr.classList.remove("white-down-arrow")
        }        

        function scrollToBottom() {
            if (scrolled == fourthScroll || scrolled > fourthScroll & scrolled < lastScroll) {
                scrolled = scrolled + 12
                timer = setTimeout(scrollToBottom, .1)
                window.scrollTo(0, scrolled)
            }
            else {
                clearTimeout(timer)
                scrolled = lastScroll
                window.scrollTo(0, scrolled)
            }
        }
    }
}