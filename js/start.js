const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 15;
const select = [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0];
// 0. I(내향적) 1. E(외향적)
// 2. N(강북) 3. S(강남)
// 4. T(진실) 5. F(거짓)
// 6. P(빡겜) 7. J(즐겜)
// 8. A(음주) 9. N(비음주)

function home() {
    location.reload(true);
}

function calResult() {
    console.log(select);
    // var result = select.indexOf(Math.max(...select));
    var result = 0;
    if(select[0]<select[1]) {
        result += 16;
    }
    if(select[2]<select[3]) {
        result += 8;
    }
    if(select[4]<select[5]) {
        result += 4;
    }
    if(select[6]<select[7]) {
        result += 2;
    }
    if(select[8]<select[9]) {
        result += 1;
    }
    return result;
}

function setResult() {
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + point + '.png';
    // var imgURL = 'img/image-0.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 200)
    }, 200)
    setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-4');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for(let i = 0; i < target.length; i++) {
                select[target[i]] += 1;
            }

            for(let i = 0; i < children.length; i++) {
                children[i].style.display = 'none'
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx) {
    if(qIdx == endPoint) {
        goResult();
        return;
    }
    
     var q = document.querySelector('.qBox');
     q.innerHTML = qnaList[qIdx].q;
     for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
     }
     var status = document.querySelector('.statusBar');
     status.style.width = (100/endPoint) * (qIdx+1) + '%';

     let qBoxNum = document.getElementsByClassName("qBoxNum")[0];
     qBoxNum.innerText=qIdx+1
}

function begin() {
    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 200)
        let qIdx = 0;
        goNext(qIdx);
    }, 200)
}

window.onload = function bottomBar() {
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
}