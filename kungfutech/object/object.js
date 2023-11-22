let myComputer = {
    type: "laptop",
    brand: "Sony",
    os: "Windows",
    graphicCard: "NVIDIA",
};

console.log(myComputer);
console.log(myComputer.brand);
console.log(myComputer["os"]);

 // chỉ dùng . khi không có ký tự đặc biệt ngoại trừ $ và _

/***** Add thêm thuộc tính *****/
myComputer.type = "Desktop";
myComputer.architect = "x64";
console.log(myComputer);

/***** Xóa thuộc tính *****/
delete myComputer.architect;
console.log(myComputer);

// Dùng ngoặc vuông có thể cho phép truyền key từ variable

let mType = "type";
console.log(myComputer.mType);
console.log(myComputer[mType + '']);
console.log(myComputer[mType]);

// Kiểm tra xem thuộc tính có tồn tại hay không
console.log("brand" in myComputer);
console.log("brand2" in myComputer);

// Duyệt các thuộc tính của object với for...in
console.log('----Duyệt thuộc tính----')
for (let key in myComputer) {
    console.log(key);
}

/***** Thứ tự các thuộc tính *****/
console.log('----Thứ tự các thuộc tính----')
//  Nếu toàn số nguyên sẽ sắp xếp tăng dần,  còn lại sẽ theo thứ tự thêm vào
let myComputer2 = {
    type: "laptop",
    "-2": "nms",
    brand: "Sony",
    os: "Windows",
    graphicCard: "NVIDIA",
    10: 12345,
    0: "abc",
    "-1": "nms"
};

console.log(myComputer2);

/***** Các đối tượng có sẵn của object trong JS *****/
//  Arguments  được tạo sẵn khi call function và có thuộc tính length chứa số lượng tham số truyền vào. Không dùng được với arrow function

function maxOf() {
    console.log(arguments);
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) max = arguments[i];
    }
    return max;
}


console.log(maxOf(1,2,3,4));
console.log(maxOf(1,2,3,4,9));
console.log(maxOf(1,2,3,4,16,89));

/***** Đối tượng Global *****/
// Trên trình duyệt, object lớn nhất chính là window. Mọi biến global đều thuộc đối tượng này
console.log('***** Đối tượng Global *****');

/***** So sánh 2 object  *****/
// Object lưu trữ dữ liệu theo kiểu tham chiếu (Lưu địa chỉ vùng nhớ của object đó)
console.log('***** So sánh 2 object  *****');
let a = {};
let b = {};
console.log( a === b);
console.log(JSON.stringify(a) === JSON.stringify(b));

