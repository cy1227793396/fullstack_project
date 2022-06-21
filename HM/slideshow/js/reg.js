window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/ //手机号zhengze
    var tel = document.querySelector('#tel');
    tel.addEventListener('blur', function() {
        if (regtel.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = ''
        } else {

        }
    })
}