//bot token
var telegram_bot_id = "5973472447:AAH4gPGVL0clYTw7A5s1O8bJNQ3Q1g2kZbs"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001896736698; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var ready = function() {
    u_name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    email = document.getElementById("email").value;
    address = document.getElementById("address").value;
    message = "Username: " + u_name + "\nPhone Number: " + number + "\nEmaili: " + email + "\nYashash joyi " + address + "\n Sotib olgan mahsulotlari: " + telegramSendInfo;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
    return false;
};
