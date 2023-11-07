function verify() {
  console.log('a')
  let a = parseInt(elementA.innerText);
  console.log(a)
  if (a < 10) {
    result = Math.pow(a, 4);
    document.getElementById("result").innerText = result;
  } else if (a > 61) {
    result = a;
    document.getElementById("result").innerText = result;
  } else {
    result = a - Math.sin(Math.pow(a, 2));
    document.getElementById("result").innerText = result;
  }
}
const elementA = document.getElementById("a");
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
