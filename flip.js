
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
        document.getElementById(mark).setAttribute('name', '阴(2)')
    }
    else {
        document.getElementById(mark).setAttribute('src', 'images/yang.png')
        document.getElementById(mark).setAttribute('name', '阳(3)')
    }
}

function getFullMark() {
    one = document.getElementById('one').getAttribute('name')
    two = document.getElementById('two').getAttribute('name')
    three = document.getElementById('three').getAttribute('name')
    four = document.getElementById('four').getAttribute('name')
    five = document.getElementById('five').getAttribute('name')
    six = document.getElementById('six').getAttribute('name')

    result = []
    result.push(one, two, three, four, five, six)
    return result
}

function showResult() {
    getFullMark()

    content = fetch('text/1.txt')
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


