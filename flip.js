const yin = 2;
const yang = 3;

function randomNum() {
    const num1 = getRandomNumber();
    setCoin('coin1', 'text1', num1);

    const num2 = getRandomNumber();
    setCoin('coin2', 'text2', num2);

    const num3 = getRandomNumber();
    setCoin('coin3', 'text3', num3);

    return num1 + num2 + num3;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 2;
}

function setCoin(coinNum, coinText, num) {
    const coinElement = document.getElementById(coinNum);
    const textElement = document.getElementById(coinText);

    if (num === yin) {
        coinElement.setAttribute('src', 'images/head.jpeg');
        textElement.innerHTML = '阴(' + yin + ')';
    } else {
        coinElement.setAttribute('src', 'images/tail.jpeg');
        textElement.innerHTML = '阳(' + yang + ')';
    }
}

function setMark(mark) {
    const total = randomNum();
    const markElement = document.getElementById(mark);

    if (total === 6 || total === 8) {
        markElement.setAttribute('src', 'images/yin.png');
        markElement.setAttribute('name', String(yin));
    } else {
        markElement.setAttribute('src', 'images/yang.png');
        markElement.setAttribute('name', String(yang));
    }
}


function getRightTxt() {
    var one = document.getElementById('one').getAttribute('name');
    var two = document.getElementById('two').getAttribute('name');
    var three = document.getElementById('three').getAttribute('name');
    var four = document.getElementById('four').getAttribute('name');
    var five = document.getElementById('five').getAttribute('name');
    var six = document.getElementById('six').getAttribute('name');

    var code = one + two + three + four + five + six;

    switch (code) {
        case "333333":
            return "1乾";
        case "222222":
            return "2坤";
        case "322232":
            return "3屯";
        case "232223":
            return "4蒙";
        case "333232":
            return "5需";
        case "232333":
            return "6讼";
        case "232222":
            return "7师";
        case "222232":
            return "8比";
        case "333233":
            return "9小畜";
        case "332333":
            return "10履";
        case "333222":
            return "11泰";
        case "222333":
            return "12否";
        case "323333":
            return "13同人";
        case "333323":
            return "14大有";
        case "223222":
            return "15谦";
        case "222322":
            return "16豫";
        case "322332":
            return "17随";
        case "233223":
            return "18蛊";
        case "332222":
            return "19临";
        case "222233":
            return "20观";
        case "322323":
            return "21噬嗑";
        case "323223":
            return "22贲";
        case "222223":
            return "23剥";
        case "322222":
            return "24复";
        case "322333":
            return "25无妄";
        case "333223":
            return "26大畜";
        case "322223":
            return "27颐";
        case "233332":
            return "28大过";
        case "232232":
            return "29坎";
        case "323323":
            return "30离";
        case "223332":
            return "31咸";
        case "233322":
            return "32恒";
        case "223333":
            return "33遁";
        case "333322":
            return "34大壮";
        case "222323":
            return "35晋";
        case "323222":
            return "36明夷";
        case "323233":
            return "37家人";
        case "332323":
            return "38睽";
        case "223232":
            return "39蹇";
        case "232322":
            return "40解";
        case "332223":
            return "41损";
        case "322233":
            return "42益";
        case "333332":
            return "43夬";
        case "233333":
            return "44姤";
        case "222332":
            return "45萃";
        case "233222":
            return "46升";
        case "232332":
            return "47困";
        case "233232":
            return "48井";
        case "323332":
            return "49革";
        case "233323":
            return "50鼎";
        case "322322":
            return "51震";
        case "223223":
            return "52艮";
        case "223233":
            return "53渐";
        case "332322":
            return "54归妹";
        case "323322":
            return "55丰";
        case "223323":
            return "56旅";
        case "233233":
            return "57巽";
        case "332332":
            return "58兑";
        case "232233":
            return "59涣";
        case "332232":
            return "60节";
        case "332233":
            return "61中孚";
        case "223322":
            return "62小过";
        case "323232":
            return "63既济";
        case "232323":
            return "64未济";
        default:
            return "1乾";
    }
}


function showResult() {
    const fileName = getRightTxt();
    fetch('text/' + fileName + '.txt')
        .then(response => response.text())
        .then(text => {
            console.log(text);
            document.getElementById('result_content').innerHTML = text;
        });
}

function flipcoin() {
    const one = document.getElementById('one').getAttribute('src');

    if (one === 'images/blank.png') {
        setMarks(["one", "two", "three", "four", "five", "six"]);
        document.getElementById('default_link').classList.add('hiddenContent');
        showResult();
    }
}

function setMarks(markIds) {
    markIds.forEach(markId => setMark(markId));
}
