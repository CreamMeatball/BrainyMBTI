window.onload = function showResult() {
    var resultOrder = parseInt(document.getElementById("resultOrder").value);

    let point = resultOrder;
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = '../img/image-' + point + '.png';
    // var imgURL = 'img/image-0.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

window.addEventListener('load', function bottomBar() {
    var clock = 0;
    const bottomBar1 = document.querySelector('#bottomBar1');
    const bottomBar2 = document.querySelector('#bottomBar2');
    bottomBar2.style.display = "block";
    bottomBar2.style.display = "none";
    setInterval(() => {
        if(clock == 0) {
            bottomBar1.style.WebkitAnimation = "fadeOut 1s";
            setTimeout(() => {
                bottomBar1.style.display = "none";
                bottomBar2.style.display = "block";
                bottomBar2.style.WebkitAnimation = "fadeIn 1s";
            }, 500);
            clock = 1;
        }
        else if(clock == 1) {
            bottomBar2.style.WebkitAnimation = "fadeOut 1s";
            setTimeout(() => {
                bottomBar2.style.display = "none";
                bottomBar1.style.display = "block";
                bottomBar1.style.WebkitAnimation = "fadeIn 1s";
            }, 500);
            clock = 0;
        }
    }, 7000);
});