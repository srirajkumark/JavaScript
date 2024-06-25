// Image Upload
let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function(){
    let imageFile = document.querySelector('#formFileMultiple').files[0];
    let imageName = imageFile.name;

    let reader = new FileReader(); //FileReader is pre-defined object
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', function(){
        if(this.result && localStorage){
            let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imagesList.push(this.result);
            localStorage.setItem('images', JSON.stringify(imagesList));
        }
    });
    displayImage();
});


// display Image
let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if(imagesList.length !== 0){
        let cardImages = '';
        for(let image of imagesList){
            cardImages += `<div class="col-md-5 mt-4">
                                <div class="card img-card">
                                    <img src="${image}" alt="" class="img-fluid">
                                    <div class="card-body">
                                        <h3 class="card-title">Image Card</h3>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi nesciunt quam praesentium maxime odio</p>
                                    </div>
                                </div>
                            </div>`;
        }
        document.querySelector('#card-row').innerHTML = cardImages;
    }
};
displayImage();


// remove All Images
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', function(){
    localStorage.removeItem('images');
    displayImage();
});

