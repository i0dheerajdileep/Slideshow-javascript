
var myImg = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
        var currentImage = 0;
        document.getElementById('next').onclick = nextPhoto;
        document.getElementById('previous').onclick = previousPhoto;
        function nextPhoto(){
            currentImage++;
            if(currentImage>myImg.length-1){
                currentImage=0;
            }
            document.getElementById('myimage').src = myImg[currentImage];
        }
        function previousPhoto(){
            currentImage--;
            if(currentImage<0){
                currentImage=myImg.length-1
            }
            document.getElementById('myimage').src = myImg[currentImage];
        }