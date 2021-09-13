function DanhSachNguoiDung(){
    // Lấy danh sách sản phẩm
    this.layDS = function(){
       return axios ({
            method: 'get',
            url: 'https://61348edfbbc9840017de500a.mockapi.io/quanlynguoidung'
        });
    }
    
    this.them = function(sp){
        return axios ({
            method: 'post',
            url: 'https://61348edfbbc9840017de500a.mockapi.io/quanlynguoidung',
            data:sp
        });
    }
    this.layND = function(id){
        return axios ({
            method: 'get',
            url: `https://61348edfbbc9840017de500a.mockapi.io/quanlynguoidung/${id}`
        });
    }
    this.capNhatND = function(sp,id){
        return axios ({
            method: 'put',
            url: `https://61348edfbbc9840017de500a.mockapi.io/quanlynguoidung/${id}`,
            data:sp
        });
    }
    this.xoaND = function(id){
        return axios ({
            method: 'delete',
            url: `https://61348edfbbc9840017de500a.mockapi.io/quanlynguoidung/${id}`
        });
    }
}