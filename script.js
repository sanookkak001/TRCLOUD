function CountImages() {
    const image = document.querySelectorAll('.card-image img');
    const imageborder = document.querySelector('.carousel-images');

    for (let i = 0; i < image.length; i++) {
        const div = document.createElement('div');
        div.classList.add('carousel-borber');
        imageborder.appendChild(div);

        div.addEventListener('click', () => {
            ChangeImageTo(i); 
        });
    }

    const imageborderElements = document.querySelectorAll('.carousel-borber');
    if (imageborderElements.length > 0) {
        imageborderElements[0].classList.add('active');
    }
}

CountImages();

let CurrentIndex = 0;

function ChangeImageTo(index) {
    const images = document.querySelectorAll('.card-image img');
    const imageborder = document.querySelectorAll('.carousel-borber');


    images[CurrentIndex].classList.remove('active');
    imageborder[CurrentIndex].classList.remove('active');


    CurrentIndex = index;


    images[CurrentIndex].classList.add('active');
    imageborder[CurrentIndex].classList.add('active');
}

function ChangeImage(Count) {
    const images = document.querySelectorAll('.card-image img');
    const imageborder = document.querySelectorAll('.carousel-borber');

    images[CurrentIndex].classList.remove('active');
    imageborder[CurrentIndex].classList.remove('active');

    CurrentIndex += Count;


    if (CurrentIndex < 0) {
        CurrentIndex = images.length - 1; 
    } else if (CurrentIndex >= images.length) {
        CurrentIndex = 0; 
    }


    images[CurrentIndex].classList.add('active');
    imageborder[CurrentIndex].classList.add('active');
}
