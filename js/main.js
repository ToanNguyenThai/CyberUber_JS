

/* Get btn tính tiền */
var btn_tinhTien = document.getElementById('btn-tinhTien');

function tinhTien() {
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
        else if (soKM >= 21)
            total = 8000 + 12000 * (soKM - 1) + 10000 * (soKM - 21) + 2000 * wait
    }
    else if (loaiXe === "uberSUV") {
        if (soKM > 0 && soKM <= 1)
            total = 9000 * soKM + 3000 * wait
        else if (soKM > 1 && soKM <= 20)
            total = 9000 + 14000 * (soKM - 1) + 3000 * wait
        else if (soKM >= 21)
            total = 8000 + 14000 * (soKM - 1) + 12000 * (soKM - 21) + 3000 * wait
    }

    else if (loaiXe === "uberBlack") {
        if (soKM > 0 && soKM <= 1)
            total = 10000 * soKM + 4000 * wait
        else if (soKM > 1 && soKM <= 20)
            total = 10000 + 16000 * (soKM - 1) + 4000 * wait
        else if (soKM >= 21)
            total = 8000 + 16000 * (soKM - 1) + 14000 * (soKM - 21) + 4000 * wait
    }
    return total;
}

btn_tinhTien.onclick = function () {
    var xuatTien = document.getElementById('xuatTien');
    var thanhTien = tinhTien();
    xuatTien.innerHTML = thanhTien;
}

/* Get btn tính tiền */
var btn_Bill = document.getElementById('btn-Bill');

btn_Bill.onclick = function () {

    var bill = document.querySelector('.overlay');
    bill.classList.add('overlay-active');

    var loaiXe;
    if (document.getElementById('uberX').checked)
        loaiXe = document.getElementById('uberX').value;

    else if (document.getElementById('uberSUV').checked)
        loaiXe = document.getElementById('uberSUV').value;

    else if (document.getElementById('uberBlack').checked)
        loaiXe = document.getElementById('uberBlack').value;
    document.getElementById("tenXe_bill").innerHTML = loaiXe;
    document.getElementById("soKM_bill").innerHTML = document.getElementById('soKM').value;
    document.getElementById("wait_bill").innerHTML = document.getElementById('thoiGianCho').value;
    document.getElementById("total_bill").innerHTML = tinhTien();
}

var exit = document.getElementById('exit-bill');
exit.onclick = function () {
    var bill = document.querySelector('.overlay');
    bill.classList.remove('overlay-active')
}
