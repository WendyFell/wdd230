// Get all images, store in variable
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Setting a source for a placeholder, then resetting that attribute to get the real image
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

