const validation = {
    slide : 0,
    comments: 0
}

const elements = {
    dot1: document.getElementById("dot-1"),
    dot2: document.querySelector("#dot-2"),
    firstPage: document.querySelector("#first-page"),
    main: document.getElementsByTagName("main")[0],
    commentIcon: document.querySelector("#comment-icon"),
    contentPage: document.querySelector("#content-pag"),
    commentPage: document.querySelector("#comment-pag"),
    xIcon: document.querySelector("#x-icon"),
    closeName: document.querySelector("#close-name")
}

const animation = {
    slide1(value){
        value.classList.add("slide-1")
    },
    slide2(value){
        value.classList.add("slide-2")
    },
    resetSlide(value1, value2){
        value1.classList.remove("slide-1")
        value2.classList.remove("slide-2")
    },
    antiSlide1(value){
        value.classList.add("anti-slide-1")
    },
    antiSlide2(value){
        value.classList.add("anti-slide-2")
    },
    resetAntiSlide(value1, value2){
        value1.classList.remove("anti-slide-1")
        value2.classList.remove("anti-slide-2")
    },
    openComments(value1, value2){
        value1.classList.add("open-comments-1")
        value2.classList.add("open-comments-2")
    },
    closeComments(value1, value2){
        value1.classList.add("close-comments-1")
        value2.classList.add("close-comments-2")
    },
    resetOpenComments(value1, value2){
        value1.classList.remove("open-comments-1")
        value2.classList.remove("open-comments-2")
    },
    resetCloseComments(value1, value2){
        value1.classList.remove("close-comments-1")
        value2.classList.remove("close-comments-2")
    }
}

elements.dot1.addEventListener("click", () => {
    if(validation.slide == 1){
        elements.dot2.style = "fill: gray"
        elements.dot1.style = "fill: rgb(54, 54, 54);"
    
        animation.antiSlide1(elements.firstPage)
        animation.antiSlide2(elements.main)  

        setTimeout(() => {
            validation.slide = 0
            animation.resetSlide(elements.firstPage, elements.main)
        }, 500);
    }
})

elements.dot2.addEventListener("click", () => {
    if(validation.slide == 0){
        elements.dot1.style = "fill: gray"
        elements.dot2.style = "fill: rgb(54, 54, 54);"
        
        animation.slide1(elements.firstPage)
        animation.slide2(elements.main)

        setTimeout(() => {
            validation.slide = 1
            animation.resetAntiSlide(elements.firstPage, elements.main)
        }, 500);

    }

})

elements.commentIcon.addEventListener("click", () => {
    if(validation.comments == 0){
        animation.openComments(elements.commentPage, elements.contentPage)

        setTimeout(() => {
            animation.resetCloseComments(elements.commentPage, elements.contentPage)
            validation.comments = 1
        }, 500);
    }
})

elements.xIcon.addEventListener("click", () => {
    if(validation.comments == 1){
        animation.closeComments(elements.commentPage, elements.contentPage)
        setTimeout(() => {
            animation.resetOpenComments(elements.commentPage, elements.contentPage)
            validation.comments = 0
        }, 500);
    }
})

elements.closeName.addEventListener("click", () => {
    alert("This application is just for demonstrate abilities of web development in front-end.")
})