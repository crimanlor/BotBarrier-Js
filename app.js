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
   selectedImages.forEach(imgId => {
    const img = document.getElementById(imgId)
        if (img.classList.contains('bike-img')) {
        imagesHaveBikeImage.push(imgId)
        return
        } 
    })
    if(imagesHaveBikeImage.length === 4){
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

const imageElements = document.querySelectorAll("[data-img]")

imageElements.forEach(img => {
    img.addEventListener("click", () => {
        selectImg(img)
    })
})


