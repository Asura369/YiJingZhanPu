
var yin = 2
var yang = 3


function randomNum() {
    num1 = Math.floor(Math.random() * (2)) + 2
    setCoin('coin1', 'text1', num1)
    num2 = Math.floor(Math.random() * (2)) + 2
    setCoin('coin2', 'text2', num2)
    num3 = Math.floor(Math.random() * (2)) + 2
    setCoin('coin3', 'text3', num3)
    return num1 + num2 + num3
}

function setCoin(coinNum, coinText, num) {
    if (num == 2) {
        document.getElementById(coinNum).setAttribute('src', 'images/head.jpeg')
        document.getElementById(coinText).innerHTML = '阴(2)'
    }
    else {
        document.getElementById(coinNum).setAttribute('src', 'images/tail.jpeg')
        document.getElementById(coinText).innerHTML = '阳(3)'
    }
}

function setMark(mark) {
    total = randomNum()
    if (total == 6 || total == 8) {
        document.getElementById(mark).setAttribute('src', 'images/yin.png')
        document.getElementById(mark).setAttribute('name', '2')
    }
    else {
        document.getElementById(mark).setAttribute('src', 'images/yang.png')
        document.getElementById(mark).setAttribute('name', '3')
    }
}

function getFullMark() {
    one = document.getElementById('one').getAttribute('name')
    two = document.getElementById('two').getAttribute('name')
    three = document.getElementById('three').getAttribute('name')
    four = document.getElementById('four').getAttribute('name')
    five = document.getElementById('five').getAttribute('name')
    six = document.getElementById('six').getAttribute('name')

    result = one +  two + three + four + five + six
    return result
}

function getRightTxt() {
    code = getFullMark()
    console.log(code)

    if (code == "333333") {
        return "1乾"
    }
    else if (code == "222222") {
        return "2坤"
    }
    else if (code == "322232") {
        return "3屯"
    }
    else if (code == "232223") {
        return "4蒙"
    }
    else if (code == "333232") {
        return "5需"
    }
    else if (code == "232333") {
        return "6讼"
    }
    else if (code == "232222") {
        return "7师"
    }
    else if (code == "222232") {
        return "8比"
    }
    else if (code == "333233") {
        return "9小畜"
    }
    else if (code == "332333") {
        return "10履"
    }
    else if (code == "333222") {
        return "11泰"
    }
    else if (code == "222333") {
        return "12否"
    }
    else if (code == "222222") {
        return "13"
    }
    else if (code == "222222") {
        return "14"
    }
    else if (code == "222222") {
        return "15"
    }
    else if (code == "222222") {
        return "16"
    }
    else if (code == "222222") {
        return "17"
    }
    else if (code == "222222") {
        return "18"
    }
    else if (code == "222222") {
        return "19"
    }
    else if (code == "222222") {
        return "20"
    }
    else if (code == "222222") {
        return "21"
    }
    else if (code == "222222") {
        return "22"
    }
    else if (code == "222222") {
        return "23"
    }
    else if (code == "222222") {
        return "24"
    }
    else if (code == "222222") {
        return "25"
    }
    else if (code == "222222") {
        return "26"
    }
    else if (code == "222222") {
        return "27"
    }
    else if (code == "222222") {
        return "28"
    }
    else if (code == "222222") {
        return "29"
    }
    else if (code == "222222") {
        return "30"
    }
    else if (code == "222222") {
        return "31"
    }
    else if (code == "222222") {
        return "32"
    }
    else if (code == "222222") {
        return "33"
    }
    else if (code == "222222") {
        return "34"
    }
    else if (code == "222222") {
        return "35"
    }
    else if (code == "222222") {
        return "36"
    }
    else if (code == "222222") {
        return "37"
    }
    else if (code == "222222") {
        return "38"
    }
    else if (code == "222222") {
        return "39"
    }
    else if (code == "222222") {
        return "40"
    }
    else if (code == "222222") {
        return "41"
    }
    else if (code == "222222") {
        return "42"
    }
    else if (code == "222222") {
        return "43"
    }
    else if (code == "222222") {
        return "44"
    }
    else if (code == "222222") {
        return "45"
    }
    else if (code == "222222") {
        return "46"
    }
    else if (code == "222222") {
        return "47"
    }
    else if (code == "222222") {
        return "48"
    }
    else if (code == "222222") {
        return "49"
    }
    else if (code == "222222") {
        return "50"
    }
    else if (code == "222222") {
        return "51"
    }
    else if (code == "222222") {
        return "52"
    }
    else if (code == "222222") {
        return "53"
    }
    else if (code == "222222") {
        return "54"
    }
    else if (code == "222222") {
        return "55"
    }
    else if (code == "222222") {
        return "56"
    }
    else if (code == "222222") {
        return "57"
    }
    else if (code == "222222") {
        return "58"
    }
    else if (code == "222222") {
        return "59"
    }
    else if (code == "222222") {
        return "60"
    }
    else if (code == "222222") {
        return "61"
    }
    else if (code == "222222") {
        return "62"
    }
    else if (code == "222222") {
        return "63"
    }
    else if (code == "222222") {
        return "64"
    }
    else {
        return "1乾"
    }

}



function showResult() {
    fileName = getRightTxt()

    content = fetch('text/'+fileName+'.txt')
        .then(response => response.text())
        .then(text => {
            console.log(text)
            document.getElementById('result_content').innerHTML = text
        })

}

function flipcoin() {

    one = document.getElementById('one').getAttribute('src')
    two = document.getElementById('two').getAttribute('src')
    three = document.getElementById('three').getAttribute('src')
    four = document.getElementById('four').getAttribute('src')
    five = document.getElementById('five').getAttribute('src')
    six = document.getElementById('six').getAttribute('src')

    if (one == "images/blank.png") {
        setMark("one")
    }
    else if (two == "images/blank.png") {
        setMark("two")
    }
    else if (three == "images/blank.png") {
        setMark("three")
    }
    else if (four == "images/blank.png") {
        setMark("four")
    }
    else if (five == "images/blank.png") {
        setMark("five")
    }
    else if (six == "images/blank.png") {
        setMark("six")
        document.getElementById('flip_button').innerHTML = 'Show Result'
    }
    else {
        document.getElementById('default_link').setAttribute('class', 'hiddenContent')
        showResult()
    }







}


