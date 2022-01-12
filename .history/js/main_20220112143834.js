

/* Get btn tính tiền */
var btn_tinhTien = document.getElementById('btn-tinhTien');

btn_tinhTien.onclick = function () {
    /* Get số km */
    var soKM = document.getElementById('soKM').value;

    /* Get loại xe */
    var loaiXe = document.querySelector('input[name="selector"]:checked').value
    console.log(loaiXe);

}