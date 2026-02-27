console.log("JavaScript File is linked");

// variables
const labels = document.querySelectorAll(".label")
const targetZones = document.querySelectorAll(".target-zone");
const button = document.querySelector(".resetBtn");
const labelBox = document.querySelector("#label-box");
let currentDraggedElement = null;

// functions
function dragStart() {
    console.log("Started Dragging")
    // Whatever the user is dragging, store it in currentDraggedElement
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called")
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped")

    // prevent double drops here
    // if this dropzone has a child, dont let it drop
    // use a return statement

    if(this.firstElementChild) {
        return;
    }

    // drop the piece in
    this.appendChild(currentDraggedElement);

    // reset the reference
    currentDraggedElement = null;
}

function resetLabels() {
    console.log("Labels Reset");
    labelBox.appendChild(labels);
}

// Event Listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
})

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
}) 

button.addEventListener("click", resetLabels);