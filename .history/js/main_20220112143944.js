

/* Get btn tính tiền */
var btn_tinhTien = document.getElementById('btn-tinhTien');

btn_tinhTien.onclick = function () {
    /* Get số km */
    var soKM = document.getElementById('soKM').value;

    /* Get loại xe */
    var loaiXe;
    if (document.getElementById('uberX').checked) {
        loaiXe = document.getElementById('uberX').value;
    }
    console.log(loaiXe);

}