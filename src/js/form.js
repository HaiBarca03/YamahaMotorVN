function validation() {
    const name = document.getElementById('name__frm');
    const email = document.getElementById('email__frm');
    const txtmes = document.getElementById('txtms');
    const numPhone = document.getElementById('numPhone__frm');
    const yourContent = document.getElementById('your-content');

    function validateEmail(email) {
        var characters = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return characters.test(String(email).toLowerCase());
    }
    function validatePhoneNumber(numPhone) {
        // Biểu thức chính quy để kiểm tra số điện thoại (có thể thay đổi tùy theo định dạng cần kiểm tra)
        var characters = /^\d{10}$/; // Ví dụ: kiểm tra số điện thoại có đúng 10 chữ số hay không
        return characters.test(String(numPhone).toLowerCase());
    }
    if (!name.value) {
        alert('Bạn chưa nhập tên')
        return false
    }
    if (!validateEmail(email.value)) {
        alert('Bạn chưa nhập đúng email')
        return false
    }
    if (!validatePhoneNumber(numPhone.value)) {
        alert('Bạn chưa nhập đúng số điện thoại')
        return false
    }
    if (!txtmes.value) {
        alert("Bạn chưa nhập tên tiêu đề")
        return false
    }
    if (!yourContent.value) {
        alert('Bạn chưa nhập nội dung')
        return false
    }
    var checkbox = document.getElementById('myCheckbox');
    if (!checkbox.checked) {
        alert('Xem lại điều khoản.');
        return false
    }
    return (true)
}

document.getElementById("form__book").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validation() === true) {
        var element = document.getElementById('confirmFormm')
        element.classList.add('opFrmBook')
        document.body.classList.add("submitted");
        window.scrollTo(0, 0);

        setTimeout(function () {
            document.body.classList.remove("submitted");
            element.classList.remove('opFrmBook')
        }, 2000); // Thời gian tính bằng mili giây (ở đây là 2 giây)

    }
    else {
        alert('Quý khách vui lòng kiểm tra và nhập lại thông tin <3')
    }
});