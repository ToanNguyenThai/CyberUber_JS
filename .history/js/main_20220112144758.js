

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

    if (soKM < 10)
        console.log(true);
    else console.log(false);

}