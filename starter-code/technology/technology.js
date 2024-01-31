document.querySelectorAll(".launch-lists a").forEach((e,index)=>{
    e.addEventListener('click',()=>{
        let imgSrcs = ["/starter-code/assets/technology/image-launch-vehicle-portrait.jpg","/starter-code/assets/technology/image-space-capsule-portrait.jpg","/starter-code/assets/technology/image-spaceport-portrait.jpg"];
        document.querySelectorAll(".launch-lists a").forEach((el)=>{
            el.classList.remove("launch-lists-active");
        });
        e.classList.add("launch-lists-active");

        document.querySelector(".launch-img img").setAttribute("src",imgSrcs[index])

    })
})