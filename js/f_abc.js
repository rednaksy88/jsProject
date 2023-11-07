function verify() {
    console.log('a')
    let a = parseInt(SeatNumber.value);
    console.log(a)
    if (a < 10) {
        result = Math.pow(a, 4);
        document.getElementsByTagName('span')[1].innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true
      } else if (a > 61) {
        result = a;
        document.getElementsByTagName('span')[1].innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true
      } else {
        result = a - Math.sin(Math.pow(a, 2));
        document.getElementsByTagName('span')[1].innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true
      }
    }

function send(){
    let a = parseInt(SeatNumber.value);
    console.log(a)
    if (check) {
    document.getElementsByName('result')[0].value = result;
    document.getElementById('UserEnter').submit();
    }else{
    alert("Есть недостатки. Повторите ввод")
    }
}
function verify_send(){
    verify();
    send();
}

let messageText = document.getElementById('result').innerText
console.log(messageText)
let result;
let check = false;

const SeatNumber = document.getElementById('a');
SeatNumber.addEventListener('input', verify)

const ElementVerify = document.getElementById('verify');
ElementVerify.addEventListener('click', verify)

const ElementSend = document.getElementById('send');
ElementSend.addEventListener('click',send)