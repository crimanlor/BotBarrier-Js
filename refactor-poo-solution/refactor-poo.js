class Captcha {
    constructor(){
        this.selectedImages = []
        this.imageElements = document.querySelectorAll("[data-img]")
        this.addClickListeners()
    }

    addClickListeners(){
        this.imageElements.forEach(img => {
            img.addEventListener("click", () => {
                this.selectImg(img)
            })
        })
    }

    selectImg(img){
        if (!this.selectedImages.includes(img.id)){
            img.style.opacity = 0.7;
            this.selectedImages.push(img.id)
        } else {
            window.alert("This image has been selected before")
        } 
    }

    checkSelectedImages(){
        let imagesHaveBikeImage = []
        let incorrectImages = 0
        this.selectedImages.forEach(imgId => {
            const img = document.getElementById(imgId)
            if (img.classList.contains('bike-img')) {
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

    resetSelectedImages(){
        this.selectedImages.forEach(imgId => {
            const img = document.getElementById(imgId)
            img.style.opacity = 1
        })
        this.selectedImages = []
    }
}

const captcha = new Captcha()


