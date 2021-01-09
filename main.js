//vars

const list = document.querySelector(".lists");
const titleInput = document.querySelector(".title");
const paragraphInput = document.querySelector(".note-paragraph");
const addBtn = document.querySelector(".add-btn");

//overlay area
const overlay = document.querySelector(".overlay");
const overlayNote = document.querySelector(".overlay-note");
const overlayTitle = document.querySelector(".overlay-title");
const overlayParagraph = document.querySelector(".overlay-paragraph");
const overlayCloseBtn = document.querySelector(".overlay-note .close");

//events listeners
addBtn.addEventListener("click",addNote);
list.addEventListener("click",features);
overlayCloseBtn.addEventListener("click",closeOverlay);






//functions
function addNote(event){
    event.preventDefault();
    console.log(event.target);

    const listContainer = document.createElement("div");
    listContainer.classList.add("list-item");
    
    const listContent = document.createElement("li");
   
    const heading = document.createElement("h1"); 
    heading.innerHTML = titleInput.value;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = paragraphInput.value;
        listContent.append(heading , paragraph);

    //buttons inside list
    const buttonsContainer = document.createElement("buttons");
    buttonsContainer.classList.add("buttons");
   //view buttons
    const viewBtn = document.createElement("button");
    viewBtn.classList.add("view-btn");
    viewBtn.innerHTML = "<i class = 'fas fa-eye'></i>";
   //delete buttons
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "<i class = 'fas fa-times'></i>";
    //heading value setting
    buttonsContainer.append(viewBtn,deleteBtn);

    listContainer.append(listContent , buttonsContainer);

    list.append(listContainer);

    titleInput.value = "";
    paragraphInput.value = "";
   
}

function features(event){
    // console.log(event.target);
    const listItem = event.target.parentElement.parentElement;

    if(event.target.className === "view-btn"){
        const LI = listItem.children[0];
        const heading = LI.children[0].innerHTML;
        const paragraph = LI.children[1].innerHTML;
        
        overlayTitle.innerHTML = heading;
        overlayParagraph.innerHTML = paragraph;
        overlay.classList.toggle("appear-overlay");

    }
    else if(event.target.className === "delete-btn"){

        listItem.classList.add("slide-exit");
        setTimeout(function(){
            list.removeChild(listItem);
        },500);


    }

    
}


function closeOverlay(event){
    console.log(event.target);
    overlay.classList.toggle("appear-overlay");
}