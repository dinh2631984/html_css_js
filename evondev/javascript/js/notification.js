// Viết function tạo thông báo
function createNotification(title = 'Welcome to notification') {
    const template = `<div class="container">
    <img src="https://down-vn.img.susercontent.com/file/d24f5c11edcd0f2b30f07c66656ca16c" alt="" class="noti-img">

    <div class="noti-content">
        <h2 class="noti-heading">${title}</h2>
        <p class="noti-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda molestiae atque
            possimus reiciendis id mollitia beatae ipsam ullam rerum omnis, numquam cum aperiam quas libero repudiandae
            laboriosam impedit facilis odit.</p>
    </div>
</div>`;
    // insertAdjatiocHTML
    document.body.insertAdjacentHTML('afterbegin', template);
}

const randomData = ["Welcome you", 'html', 'css', 'datacomunication']

createNotification();
const timer = setInterval(() => {
    const item = document.querySelector('.container');
    if (item) document.body.removeChild(item);
    createNotification(randomData[  Math.floor( Math.random() * randomData.length) ]);
}, 8000)