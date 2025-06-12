document.addEventListener("DOMContentLoaded",function(){
    const projects = document.querySelectorAll(".project")
    let current = 0;
    const upbutton = document.querySelector(".upbutton")
    const downbutton = document.querySelector(".downbutton")
    function update(){
        projects.forEach((project,i)=>{
            project.classList.toggle("active", i===current);
        });
            
    };

    upbutton.addEventListener("click", ()=> {
        current = (current - 1 + projects.length)%projects.length;
        update();
    });
    downbutton.addEventListener("click", ()=>{
        current = (current + 1)%projects.length;
        update();
    });
    document.addEventListener("keydown", (e)=>{
        if (e.key === "ArrowUp") upbutton.click();
        if (e.key === "ArrowDown")downbutton.click();
    });
})

