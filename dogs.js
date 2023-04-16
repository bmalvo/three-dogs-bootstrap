var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

let imagesDogs = ["./gallery/bis-and-choco (1).jpg", "./gallery/gallery_1_fix.jpg", "./gallery/gallery_2_fix.jpg" , "./gallery/gallery_3_fix.jpg", "./gallery/gallery_4 _fix.jpg", "./gallery/gallery_5_fix.jpg", "./gallery/gallery_6_fix.jpg", "./gallery/gallery_7_fix.jpg", "./gallery/gallery_8_fix.jpg", "./gallery/gallery_9_fix.jpg", "./gallery/gallery_10_fix.jpg", "./gallery/gallery_11_fix.jpg", "./gallery/gallery_12_fix.jpg"]

let num = 0;

function next(){
    let fullImg = document.getElementById("fullImg");
    num++;
    if (num >= imagesDogs.length) {
        num = 0;
    }
    fullImg.src = imagesDogs[num];
}

function prev(){
    let fullImg = document.getElementById("fullImg");
    num--;
    if (num < 0) {
        num = imagesDogs.length -1;
    }
    fullImg.src = imagesDogs[num];
}

function openFullImg (pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}