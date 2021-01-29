var num = 1;

Show(num);

function Slide(input) {
    Show(num += input);
}

function ImgNum(input) {
    Show(num = input);
}

function Show(input) {
    var images = document.getElementsByTagName("img");
    var number = document.getElementsByClassName("numbers");
    if (input > images.length) {
        num = 1;
    }
    if (input < 1) {
        num = images.length;
    }
    for (let index = 0; index < images.length; index++) {
        images[index].style.display = "none";
        images[num - 1].style.display = "block";
    }
}