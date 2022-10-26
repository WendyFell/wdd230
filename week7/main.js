// Get all images, store in variable
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Optional parameters for the IntersectionObserver
const imgOptions = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0.5 // 0 is when it is just in the view range of 50px from bottom, 1 is 100% in view of 50px from bottom
};

// Setting a source for a placeholder, then resetting that attribute to get the real image
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src")); // First attribute is what we are using and the second is what it is setting it to.
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

// Check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    // Loop through each image and check status and load if necessary
    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });   
} else { // Load all images if intersection observer is not supported
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}

