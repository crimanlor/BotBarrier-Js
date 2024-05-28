const images = [
    { id:'img-1', src: 'images/1.png', hasBike: true },
    { id:'img-2', src: 'images/2.png', hasBike: true },
    { id:'img-3', src: 'images/3.png', hasBike: true },
    { id:'img-4', src: 'images/4.png', hasBike: false },
    { id:'img-5', src: 'images/5.png', hasBike: false },
    { id:'img-6', src: 'images/6.png', hasBike: true },
    { id:'img-7', src: 'images/7.png', hasBike: false },
    { id:'img-8', src: 'images/8.png', hasBike: false },
    { id:'img-9', src: 'images/9.png', hasBike: false }
]

function renderImgs(){
    const container = document.getElementById('images-container');
    let row;

    images.forEach((img, index) => {
        if (index % 3 === 0) {
            row = document.createElement('div');
            row.classList.add('row', 'p-2', 'justify-content-center');
            container.appendChild(row);
        }

        const imgElement = document.createElement('img');
        imgElement.id = img.id;
        imgElement.src = img.src;
        imgElement.hasBike = img.hasBike;
        imgElement.classList.add('rounded', 'float-start', 'w-25', 'col-sm-');
        imgElement.addEventListener('click', () => this.selectImg(imgElement));
        row.appendChild(imgElement);
    });
}

let selectedImages = []

function selectImg(img){
    img.style.opacity = 0.7;
    if (!selectedImages.includes(img.id)){
        selectedImages.push(img.id)
    } else {
        window.alert("This image has been selected before")
    } 
}

function checkSelectedImages(selectedImages){
   let imagesHaveBikeImage = []
   let incorrectImages = 0
   selectedImages.forEach(imgId => {
    const img = document.getElementById(imgId)
        if (img.hasBike === true) {
            imagesHaveBikeImage.push(imgId)
        } else {
            incorrectImages++
        }
    })
    if(imagesHaveBikeImage.length === 4 && incorrectImages === 0){
        window.location.href = "https://www.google.com";

    } else {
        window.alert("You have not selected all the images in which bicycles appear.")
    }
}

function resetSelectedImages(){
    selectedImages.forEach(imgId => {
        const img = document.getElementById(imgId)
        img.style.opacity = 1
    })
    selectedImages = []
}

document.addEventListener("DOMContentLoaded", renderImgs())
