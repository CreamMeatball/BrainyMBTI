const url = 'https://brainymbti.netlify.app/';

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '더 브레이니 성향 검사 결과';
    const shareDes = '내 TBTI는 뭘까?';
    // const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareImage = url + 'img/shareImg.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';


    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
                mobileWebUrl: shareURL,
                // mobileWebUrl: 'https://brainymbti.netlify.app',
                webUrl: shareURL,
            },
        },

        buttons: [
            {
                title: '친구의 TBTI 확인하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ],
    });

}