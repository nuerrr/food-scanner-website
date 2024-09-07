const fileUpload = document.getElementById("fileUpload");
const uploadBtn = document.getElementById("uploadBtn");
const insideBox = document.getElementById("insideBox");
const submitBtn = document.getElementById("submitBtn");
const uploadedImage = document.getElementById("uploadedImage");
const dropArea = document.getElementById("dropArea");
const scannerContainer = document.getElementById("scannerContainer");
const container2 = document.querySelector(".container2");
const imageDisplay = document.getElementById("imageDisplay");
const finalImage = document.getElementById("finalImage");
const goBackBtn = document.getElementById("goBackBtn"); 
const cancelBtn = document.getElementById("cancelBtn"); 

uploadBtn.addEventListener("click",function(){
    fileUpload.click();
});

fileUpload.addEventListener("change",function(){
    if(fileUpload.value){
        insideBox.innerHTML = fileUpload.files[0].name;
    }
    else{
        insideBox.innerHTML = "No file chosen, yet";
    }
});

submitBtn.addEventListener("click", uploadImage);

function uploadImage(){
   
    if (fileUpload.files.length > 0) {
        let imgLink = URL.createObjectURL(fileUpload.files[0]);
        uploadedImage.src = imgLink; 
        scannerContainer.style.display = "block"; 
        imageDisplay.style.display = "none";

          
           scannerContainer.style.position = 'relative'; 
           const scannerEffect = document.createElement('div');
           scannerContainer.className = 'scanner';
           scannerContainer.appendChild(scannerEffect);
           
           
            container2.innerHTML = ''; // Remove all content
            container2.appendChild(scannerContainer); // Show the image

            setTimeout(function() {
                // Remove scanning effect after scanning is complete
                scannerEffect.remove();

                imageDisplay.style.position = 'relative'; 
                

                scannerContainer.style.display = "none";
                imageDisplay.style.display = "block";
                finalImage.src = imgLink; 

                container2.appendChild(imageDisplay); 
    
            }, 5000);
      
    } else {
        alert("Please upload an image first.");
    }
}

dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
    dropArea.classList.add("hover"); 

});

dropArea.addEventListener("dragleave", function(e){
    e.preventDefault();
    dropArea.classList.remove("hover"); 
});

dropArea.addEventListener("drop",function(e){
    e.preventDefault();
    dropArea.classList.remove("hover");

    fileUpload.files = e.dataTransfer.files;
    if(fileUpload.value){
        insideBox.innerHTML = fileUpload.files[0].name;
    }
    else{
        insideBox.innerHTML = "No file chosen, yet";
    }
    
});

goBackBtn.addEventListener("click", function() {
    window.location.reload();
  });

cancelBtn.addEventListener("click", function() {
    window.location.reload();
  });