var result = document.getElementById("result");
var mang = document.getElementById("mang");
var array = [];
function addSo() {
  var so = +document.getElementById("so").value;
  array.push(so);
  mang.innerHTML = "Mảng hiện tại : " + array.join(" , ");
}
function xoaSo() {
  array = [];
  mang.innerHTML = "Mảng hiện tại không có giá trị";
}
function tinhTongSoDuong() {
  var sumSoDuong = 0;
  newArray = array.filter(soDuong);
  newArray.forEach(function (value, index) {
    sumSoDuong += value;
  });
  return (result.innerHTML = `Tổng các số dương trong mảng là: ${sumSoDuong}`);
}
function demSoDuong() {
  newArray = array.filter(soDuong);
  return (result.innerHTML = `Có ${newArray.length} số dương trong mảng`);
}
function soNhoNhat() {
  var min = Math.min.apply(Math, array);
  return (result.innerHTML = `Số nhỏ nhất trong mảng ${min}`);
}
function soDuongNhoNhat() {
  newArray = array.filter(soDuong);
  min = Math.min.apply(Math, newArray);
  return (result.innerHTML = `Số dương nhỏ nhất trong mảng ${min}`);
}
function timChanCuoi() {
  var i = array.length - 1;
  for (i; i >= 0; i--) {
    if (array[i] % 2 == 0) {
      return (result.innerHTML = ` số chẵn cuối cùng trong mảng ${array[i]}`);
    }
  }
  return (result.innerHTML = `-1`);
}
function doiViTri() {
  var x = +document.getElementById("x").value;
  var y = +document.getElementById("y").value;
  var tmp = array[x];
  array[x] = array[y];
  array[y] = tmp;
  // array[x-1] = array.splice(y-1, 1, array[x-1])[0];
  return (result.innerHTML = `Mảng sau khi đổi vị trí ${array.join(" , ")}`);
}

function soDuong(value) {
  return value >= 0;
}
function soAm(value) {
  return value < 0;
}
function sortTang() {
  array.sort(function (a, b) {
    return a - b;
  });
  return (result.innerHTML = `Mảng sắp xếp theo thứ tự tăng dần ${array.join(
    " , "
  )}`);
}
function timSoNguyenToDauTien() {
  for (var i = 0; i < array.length; i += 1) {
    if (timSoNguyenTo(array[i])) {
      return (result.innerHTML = `Số nguyên tố đầu tiên trong mảng: ${array[i]}`);
    }
  }
  return (result.innerHTML = `-1`);
}

function soNguyen(value) {
  return value % 1 === 0;
}
function demSoNguyen() {
  newArray = array.filter(soNguyen);
  return (result.innerHTML = `Có ${newArray.length} số nguyên trong mảng`);
}
function soSanhAmDuong() {
  arrayAm = array.filter(soAm);
  arrayDuong = array.filter(soDuong);
  if (arrayAm.length > arrayDuong.length) {
    return (result.innerHTML = `có ${arrayAm.length} số âm > ${arrayDuong.length} số dương`);
  }
  if (arrayAm.length < arrayDuong.length) {
    return (result.innerHTML = `có ${arrayAm.length} số âm <  ${arrayDuong.length} số dương`);
  }
  return (result.innerHTML = `có ${arrayAm.length} số âm =  ${arrayDuong.length} số dương`);
}
function timSoNguyenTo(n) {
  var flag = true;
  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (var i = 3; i < n - 1; i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    return true;
  } else {
    return false;
  }
}
