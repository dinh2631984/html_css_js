//  1 . Viêt hàm so sánh 2 số tìm ra số lớn hơn
function CompareNumber(x = 0, y = 1) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log('1 trong 2 không phải số');
    return;
  }

  return Math.max(x, y);
  // if ( x >= y ) return x;
  // return y;
}

console.log(CompareNumber(-10, 9));

// 2. In hoa chứ cái đầu trong chữ
console.log(Capitainlize("YOU ARE THE ONE"));

function Capitainlize(message) {
  // if (typeof)
  return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}

// 3.Viết hàm là có sử dụng callback ( function là parameter của funtion khác)  in ra kết quả của hàm compare đã viết ở trên
function useCompare(x = 0, y = 0, fn) {
  console.log(fn(x, y));
}

useCompare(-10, 9, CompareNumber);