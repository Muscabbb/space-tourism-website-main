let imgSrcs = ["/starter-code/assets/crew/image-anousheh-ansari.png","/starter-code/assets/crew/image-douglas-hurley.png","/starter-code/assets/crew/image-mark-shuttleworth.png","/starter-code/assets/crew/image-victor-glover.png"];

let crewName = ["Anousheh Ansari","Douglas Hurley","Mark Shuttleworth","Victor Glover"];

let crewTopic = ["Flight Engineer","Commander","Mission Specialist","Pilot"];

let crewSpInfo = [ `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
Ansari was the fourth self-funded space tourist, the first self-funded woman to 
fly to the ISS, and the first Iranian in space.`,`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
and former NASA astronaut. He launched into space for the third time as 
commander of Crew Dragon Demo-2.`,`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
the Linux-based Ubuntu operating system. Shuttleworth became the first South 
African to travel to space as a space tourist.`,`Pilot on the first operational flight of the SpaceX Crew Dragon to the 
International Space Station. Glover is a commander in the U.S. Navy where 
he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
station systems flight engineer`];



for(let i=0;i<imgSrcs.length;i++){
    let li = document.createElement("li");
    document.querySelector(".crew-list").appendChild(li)
}

document.querySelectorAll(".crew-list li").forEach((el,ind)=>{

    el.addEventListener('click',()=>{
        //making a refresh to remove the prev active class
        document.querySelectorAll(".crew-list li").forEach((el)=>{
            
            el.classList.remove("crew-active")
        })
        //adding the active class in the clicked link
        el.classList.toggle("crew-active")
        //adding the title 
        document.querySelector(".crew-name").innerHTML = crewName[ind]
        //adding the crew word
        document.querySelector(".crew-word").innerHTML = crewTopic[ind];
        // adding the crew info 
        document.querySelector(".crew-sp-info").innerHTML = crewSpInfo[ind]
        // adding the crew img
        document.querySelector(".crew-img img").setAttribute("src",imgSrcs[ind]);
    })
})
