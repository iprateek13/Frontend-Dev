console.log("helllo")
let images=document.getElementsByClassName("oldImg")
for(let i=0;i<images.length;i++){
    images[i].src="spiderman_img.png"
    console.log(images[i].src)
}