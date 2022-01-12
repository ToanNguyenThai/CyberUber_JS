

/* Get btn tính tiền */
var btn_tinhTien = document.getElementById('btn-tinhTien');

btn_tinhTien.onclick = function () {
    /* Get số km */
    var soKM = document.getElementById('soKM').value;
    /* Get tg chờ */
    var wait = document.getElementById('thoiGianCho').value;

    /* Get loại xe */
    var loaiXe;
    if (document.getElementById('uberX').checked) {
        loaiXe = document.getElementById('uberX').value;
    }
    else if (document.getElementById('uberSUV').checked) {
        loaiXe = document.getElementById('uberSUV').value;
    }
    else if (document.getElementById('uberBlack').checked) {
        loaiXe = document.getElementById('uberBlack').value;
    }

    var total = 0;
    if (loaiXe === "uberX") {
        if (soKM > 0 && soKM <= 1)
            total = 8000 * soKM + 2000 * wait
        else if (soKM > 1 && soKM <= 20)
            total = 8000 + 12000 * (soKM - 1) + 2000 * wait
        else if (soKM > 20)
            total = 8000 + 12000 * (soKM - 1) + 10000 * (soKM - 20) + 2000 * wait
    }



}