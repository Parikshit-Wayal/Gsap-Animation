function page1(){
    var tl=gsap.timeline()

tl.from("nav h1,nav h4,nav button",{
    y:-40,opacity:0,duration:1,delay:0.5,stagger:0.15
}
)
tl.from(".center1 h1",{
    x:-300,opacity:0,duration:0.5,
})
tl.from(".center1 p",{
    x:-100,opacity:0,duration:0.4,
})
tl.from(".center1 button",{
    x:-100,opacity:0,duration:0.4,
})
tl.from(".center2 img",{
    x:200,opacity:0,duration:0.4,
    
},"-=1")

tl.from(".section1bottom img ",{
    y:40,opacity:0,duration:0.4,stagger:0.15
}
)
}
page1()
var tl2=gsap.timeline({
scrollTrigger:{
    trigger:".section2",scroller:"body",start:"top 50%",end:"top 0",scrub:2
}})

tl2.from(".services",{
    y:30,opacity:0
})
tl2.from(".elem.line1.left",{
    opacity:0,duration:1,x:-300
} ,"anim")
tl2.from(".elem.line1.right",{
    opacity:0,duration:1,x:300
},"anim")
tl2.from(".elem.line2.left",{
    opacity:0,duration:1,x:-300
},"p")
tl2.from(".elem.line2.right",{
    opacity:0,duration:1,x:300
},"p")





gsap.from(".services p",{
    x:-100,opacity:0,duration:0.5,scrollTrigger:{
        trigger:".services h3",scroller:"body",
        start:"top 50%",
        
    }
    })
    

    gsap.to(".page2 h2",{
        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:".page2 ",
            scroller:"body",end:"top -130%",
            start:"top 0%",pin:true,scrub:1
        }
    })
    var inipath="M 10 100 Q 250 100 990 100"
var endpath="M 10 100 Q 250 100 990 100"

document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
    inipath=`M 10 100 Q ${dets.x} ${dets.y} 990 100`,
    gsap.to("svg path",{
        attr:{d:inipath},
        duration:0.3,
        ease:"power3.out"
    })
    
    
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:endpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})