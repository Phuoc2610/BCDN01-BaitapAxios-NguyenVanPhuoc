var dsnd = new DanhSachNguoiDung();
var validation = new Validation();

function layDSND() {
    dsnd.layDS()
        .then(function (response) {
            hienThiTable(response.data);
        })
        .catch(function (error) {
            // console.log(error);
        })
}
layDSND();

document.querySelector("#btnThemNguoiDung").addEventListener("click", function () {
    document.querySelector(".modal-footer").innerHTML = `
    <button class="btn btn-success" onclick="themND();">Thêm</button>
    `
});

function themND() {
    var taiKhoan = document.querySelector("#TaiKhoan").value;
    var hoTen = document.querySelector("#HoTen").value;
    var matKhau = document.querySelector("#MatKhau").value;
    var email = document.querySelector("#Email").value;
    var hinhAnh = document.querySelector("#HinhAnh").value;
    var loaiND = document.querySelector("#loaiNguoiDung").value;
    var ngonNgu = document.querySelector("#loaiNgonNgu").value;
    var moTa = document.querySelector("#MoTa").value;

    // console.log(taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);
    var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);
    // console.table(nd);


    dsnd.layDS()
        .then(function (response) {
            var isValid = true;

            isValid &= validation.checkEmpty(taiKhoan, "tbTaiKhoan", "Tài khoản không được để trống") && validation.checkTK(taiKhoan, "tbTaiKhoan", "Tài khoản đã được xử dụng", response.data);
            isValid &= validation.checkEmpty(hoTen, "tbTen", "Họ tên không được để trống") && validation.checkName(hoTen, "tbTen", "Tên nhân viên phải là ký tự chữ");
            isValid &= validation.checkEmpty(matKhau, "tbMatKhau", "Mật khẩu không được để trống") && validation.checkPass(matKhau, "tbMatKhau", "Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
            isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không đúng định dạng");
            isValid &= validation.checkEmpty(hinhAnh, "tbHinhAnh", "Hình ảnh không được để trống");
            isValid &= validation.checkDropdown("loaiNguoiDung", "tbLoaiND", "Xin vui lòng chọn loại người dùng");
            isValid &= validation.checkDropdown("loaiNgonNgu", "tbNgonNgu", "Xin vui lòng chọn ngôn ngữ");
            isValid &= validation.checkEmpty(moTa, "tbMoTa", "Mô tả không được để trống") && validation.checkDesc(moTa, "tbMoTa", "Mô tả không được vượt quá 60 ký tự");
            
            if (isValid) {
                dsnd.them(nd)
                    .then(function (response) {
                        console.log(response.data);
                        layDSND();
                        document.querySelector("#myModal .close").click();
                    })
                    .catch(function (error) {
                        // console.log(error);
                    })
            }
        })

        .catch(function (error) {
            // console.log(error);
        });


};

function hienThiTable(mangSP) {
    var content = "";
    mangSP.map(function (item, index) {
        content += `
            <tr>
            <td>${index + 1}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.hoTen}</td>
            <td>${item.matKhau}</td>
            <td>${item.email}</td>
            <td>${item.hinhAnh}</td>
            <td>${item.loaiND}</td>
            <td>${item.ngonNgu}</td>
            <td>${item.moTa}</td>
            <td>
            <button class="btn btn-danger" onclick="xoa('${item.id}')">Xóa</button>
            <button class="btn btn-info" onclick="layChiTiet('${item.id}')" data-toggle="modal" data-target="#myModal">Xem</button>
            </td>
            </tr>
            `;
    })
    document.querySelector("#tblDanhSachNguoiDung").innerHTML = content;
}

function layChiTiet(id) {
    dsnd.layND(id)
        .then(function (response) {
            // console.log(response.data);
            document.querySelector("#TaiKhoan").value = response.data.taiKhoan;
            document.querySelector("#HoTen").value = response.data.hoTen;
            document.querySelector("#MatKhau").value = response.data.matKhau;
            document.querySelector("#Email").value = response.data.email;
            document.querySelector("#HinhAnh").value = response.data.hinhAnh;
            document.querySelector("#loaiNguoiDung").value = response.data.loaiND;
            document.querySelector("#loaiNgonNgu").value = response.data.ngonNgu;
            document.querySelector("#MoTa").value = response.data.moTa;
            document.querySelector(".modal-footer").innerHTML = `
            <button class="btn btn-success" onclick="capNhat('${response.data.id}');">Cập nhật</button>
            `
        })
        .catch(function (error) {
            // console.log(error);
        })
}

function capNhat(id) {
    var taiKhoan = document.querySelector("#TaiKhoan").value;
    var hoTen = document.querySelector("#HoTen").value;
    var matKhau = document.querySelector("#MatKhau").value;
    var email = document.querySelector("#Email").value;
    var hinhAnh = document.querySelector("#HinhAnh").value;
    var loaiND = document.querySelector("#loaiNguoiDung").value;
    var ngonNgu = document.querySelector("#loaiNgonNgu").value;
    var moTa = document.querySelector("#MoTa").value;

    // console.log(taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);
    var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, hinhAnh, loaiND, ngonNgu, moTa);
    // console.table(nd);
    dsnd.capNhatND(nd, id)
        .then(function (response) {
            // console.log(response.data);
            layDSND();
            document.querySelector(".modal-header .close").click();
        })
        .catch(function (error) {
            // console.log(error);
        })
}

function xoa(id) {
    dsnd.xoaND(id)
        .then(function (response) {
            // console.log(response.data);
            layDSND();
        })
        .catch(function (error) {
            // console.log(error);
        })
}