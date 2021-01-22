window.onload = function() {
    var scrolled = 0
    var timer

    var firstScroll = document.getElementById('furniture').getBoundingClientRect().top - 35
    var secondScroll = document.getElementById('decor').getBoundingClientRect().top - 35
    var thirdScroll = document.getElementById('quality').getBoundingClientRect().top - 35
    var fourthScroll = document.getElementById('complexity').getBoundingClientRect().top - 35
    var lastScroll = document.getElementById ('footer').getBoundingClientRect().bottom   

    var scrolling = document.getElementById('scrolling')
    var mouseScr = document.getElementById('mouse-scroll')
    var upArrowScr = document.getElementById('up-arrow')
    var downArrowScr = document.getElementById('down-arrow')

    var firstPlay = document.getElementById('first-play')
    var secondPlay = document.getElementById('second-play')
    var thirdPlay = document.getElementById('third-play')
    var firstPause = document.getElementById('first-pause')
    var secondPause = document.getElementById('second-pause')
    var thirdPause = document.getElementById('third-pause')
    var firstVideo = document.getElementById('first-video')
    var secondVideo = document.getElementById('second-video')
    var thirdVideo = document.getElementById('third-video')

    document.getElementById('scroll').onclick = function() {
        scrolled = 0
        window.scrollTo(0, 0)
        scrollToFirstBlock()

        scrolling.style.visibility = "visible"
    }    

    function scrollToFirstBlock() {
        if (scrolled < firstScroll) {
            scrolled = scrolled + 12
            console.log(scrolled)
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

            upArrowScr.blur()
        }

        function scrollToTop() {
            if (scrolled == firstScroll) {
                scrolling.style.visibility = "hidden"
                downArrowScr.style.opacity = "1"

                if (screen.width >= 1170) {
                    scrolling.style.bottom = "20vh"
                }
                if (screen.width >= 1400) {
                    scrolling.style.bottom = "25vh"
                }
                if (screen.width >= 1600) {
                    scrolling.style.bottom = "30vh"
                }
                if (screen.width >= 1920) {
                    scrolling.style.bottom = "35vh"
                }
            }
            if (scrolled < firstScroll || scrolled == firstScroll) {
                scrolled = scrolled - 12
                console.log(scrolled)
                timer = setTimeout(scrollToTop, .1)
                window.scrollTo(0, scrolled)
            }
            if (scrolled < 0) {
                clearTimeout(timer)
                scrolled = 0
                window.scrollTo(0, 0)
            }
        }  
        
        if (scrolled == secondScroll) {
            scrollToFirstFromSecond()   
            
            upArrowScr.blur()
        }

        function scrollToFirstFromSecond() {
            if (scrolled < secondScroll || scrolled == secondScroll) {
                scrolled = scrolled - 12
                console.log(scrolled)
                timer = setTimeout(scrollToFirstFromSecond, .1)
                window.scrollTo(0, scrolled)
            }
            if (scrolled < firstScroll) {
                clearTimeout(timer)
                scrolled = firstScroll
                window.scrollTo(0, firstScroll)
            }
        } 

        if (scrolled == thirdScroll) {
            scrollToSecondFromThird()   
            
            upArrowScr.blur()
        }

        function scrollToSecondFromThird() {
            if (scrolled < thirdScroll || scrolled == thirdScroll) {
                scrolled = scrolled - 12
                console.log(scrolled)
                timer = setTimeout(scrollToSecondFromThird, .1)
                window.scrollTo(0, scrolled)
            }
            if (scrolled < secondScroll) {
                clearTimeout(timer)
                scrolled = secondScroll
                window.scrollTo(0, secondScroll)
            }
        } 

        if (scrolled == fourthScroll) {
            scrollToThirdFromFourth()   
            
            upArrowScr.blur()
        }

        function scrollToThirdFromFourth() {
            if (scrolled == fourthScroll) {
                mouseScr.style.filter = "brightness(1) invert(1)"
                upArrowScr.classList.remove("white-up-arrow")
                downArrowScr.classList.remove("white-down-arrow")
            }
            if (scrolled < fourthScroll || scrolled == fourthScroll) {
                scrolled = scrolled - 12
                console.log(scrolled)
                timer = setTimeout(scrollToThirdFromFourth, .1)
                window.scrollTo(0, scrolled)
            }
            if (scrolled < thirdScroll) {
                clearTimeout(timer)
                scrolled = thirdScroll
                window.scrollTo(0, thirdScroll)
            }
        } 

        if (scrolled == lastScroll) {
            scrollToHome()

            upArrowScr.blur()
        }

        function scrollToHome() {
            if (scrolled == lastScroll) {
                scrolling.style.visibility = "hidden"
                downArrowScr.style.opacity = "1"
                scrolling.style.bottom = "20vh"
            }
            if (scrolled < lastScroll || scrolled == lastScroll) {
                scrolled = scrolled - 100
                console.log(scrolled)
                timer = setTimeout(scrollToHome, 1)
                window.scrollTo(0, scrolled)
            }
            if (scrolled < 0) {
                clearTimeout(timer)
                scrolled = 0
                window.scrollTo(0, 0)
            }
        }
    }

    document.getElementById('down-arrow').onclick = function() {
        if (scrolled == firstScroll) {
            scrollToSecondBlock()

            downArrowScr.blur()
        }

        function scrollToSecondBlock() {
            if (scrolled == firstScroll || scrolled > firstScroll & scrolled < secondScroll) {
                scrolled = scrolled + 12
                console.log(scrolled)
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

            downArrowScr.blur()
        }

        function scrollToThirdBlock() {
            if (scrolled == secondScroll || scrolled > secondScroll & scrolled < thirdScroll) {
                scrolled = scrolled + 12
                console.log(scrolled)
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

            downArrowScr.blur()

            mouseScr.style.filter = "brightness(0) invert(1)"
            upArrowScr.classList.add("white-up-arrow")
            downArrowScr.classList.add("white-down-arrow")
        }

        function scrollToFourthBlock() {
            if (scrolled == thirdScroll || scrolled > thirdScroll & scrolled < fourthScroll) {
                scrolled = scrolled + 12
                console.log(scrolled)
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

            downArrowScr.blur()

            mouseScr.style.filter = "brightness(1) invert(1)"
            upArrowScr.classList.remove("white-up-arrow")
            downArrowScr.classList.remove("white-down-arrow")

            downArrowScr.style.opacity = "0"
            scrolling.style.bottom = "5vh"
        }        

        function scrollToBottom() {
            if (scrolled == fourthScroll || scrolled > fourthScroll & scrolled < lastScroll) {
                scrolled = scrolled + 12
                console.log(scrolled)
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

    document.getElementById('first-play').onclick = function() { 
        firstPlay.style.visibility = "hidden"
        firstPause.style.visibility = "visible"

        firstVideo.play()
    }

    document.getElementById('first-pause').onclick = function () {
        firstPlay.style.visibility = "visible"
        firstPause.style.visibility = "hidden"

        firstVideo.pause()
    }

    document.getElementById('second-play').onclick = function() { 
        secondPlay.style.visibility = "hidden"
        secondPause.style.visibility = "visible"

        secondVideo.play()
    }

    document.getElementById('second-pause').onclick = function () {
        secondPlay.style.visibility = "visible"
        secondPause.style.visibility = "hidden"

        secondVideo.pause()
    }

    document.getElementById('third-play').onclick = function() { 
        thirdPlay.style.visibility = "hidden"
        thirdPause.style.visibility = "visible"

        thirdVideo.play()
    }

    document.getElementById('third-pause').onclick = function () {
        thirdPlay.style.visibility = "visible"
        thirdPause.style.visibility = "hidden"

        thirdVideo.pause()
    }
}