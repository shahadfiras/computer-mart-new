const fasolid= document.querySelector(".fa-solid");
const action= document.querySelector(".action");

console.log(action)
fasolid.addEventListener("click",()=>{
    fasolid.classList.toggle('fa-list')
    fasolid.classList.toggle('fa-rectangle-xmark')
    action.classList.toggle('is-active')
})