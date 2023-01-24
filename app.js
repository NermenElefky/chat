// make click in mark all as read
let mark = document.getElementById("mark");

// get the notifactions box
let boxes = document.querySelectorAll(".notfication-box.unread-box");

// get unread p
let ps = document.querySelectorAll(".unread")

// get notification number
let number = document.querySelector("#notfication_number");

mark.addEventListener("click",()=>{
    for (let box of boxes){
        if (box.getAttribute("class") === 'notfication-box unread-box'){
            box.className = 'notfication-box';

            for (let p of ps){
                p.classList.remove("unread")
            }
            number.textContent =0;
        }
        else {
            box.className ='notfication-box unread-box';
            for (let p of ps){
                p.classList.add("unread")
            }
            number.textContent =3;
        }
    }
})