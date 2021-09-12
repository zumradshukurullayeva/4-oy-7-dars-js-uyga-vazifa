const boxes = document.getElementsByClassName('box');
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseover', function(event){
       boxes[i].classList.add('color')
    })
    boxes[i].addEventListener('mouseleave', function(event){
        boxes[i].classList.remove('color')
    })
};






