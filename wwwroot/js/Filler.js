﻿
function getPost() {
    
    $.getJSON("/feed/Json/" + posts++, function (data) {
        var doc = "";
        if (data.id == -1 & !bottom) {
            bottom = true;
            doc = "<div class=' lastp shadow-sm p-3 mb-2 bg-white rounded'><hr><div class='d-flex justify-content-center align-items-baseline'><h3 class:'mt-5 mb-5'>You've seen it all! 🙂 </h3></div><hr></div>";
            $(doc).appendTo(".end");

        }
        else if (data.type == 0) {//instagram
            var heart = "/Images/heart.png";
            if (data.liked) heart = "/Images/heart_full.png";
            doc = "<div id='ii" + data.id + "'class='post shadow-sm p-3 mb-2 bg-white rounded'><div class='row d-inline-block'><img src='" +
                data.profilePhoto + "' class='rounded-circle d-inline-block align-top mr-3 ml-3 ' alt = 'Avatar' width = '50' height = '50' > <div class='d-inline-block'><div><h6>" +
                data.username + "<img src='/Images/insta.png' width='20' height='20' class='d-inline-block ml-1 ' alt=''></h6 ></div > <div class='pt-0'><small>" +
                data.time + "</small ></div></div ></div ><div class='d-inline-block float-right'><a class='backBG p-1 pr-2' target='_blank' href='" +
                data.source + "'><i class=''>source</i><img src='Images/arrow_r.png' width='20' height='20' class='d-inline-block' alt=''></a></div><hr> <p>" +
                data.content + "</p><div class='row'><img src='" +
                data.photo + "' alt='Photo' width='100%'></div><hr class:'mt-0'></p><div class='row'></div><div class='d-flex justify-content-center align-items-baseline'><div class='hh'><div onclick='like(" +
                data.id + ")' class='transparentButton  d-inline-block align-bottom '><img data-on='" +
                data.liked + "' id='heart" +
                data.id + "' src='" +
                heart + "' width='40' height='40' class=' mr-1'></div></div><div id='Count" +
                data.id + "'>" +
                data.likes + "</div></div></div>";
            
        }

        else if (data.type == 1) {//blogspot without photo
            var heart = "/Images/heart.png";
            if (data.liked) heart = "/Images/heart_full.png";
            doc = "<div id='bb" + data.id + "'class='post shadow-sm p-3 mb-2 bg-white rounded'><div class='row d-inline-block'><img src='" +
                data.profilePhoto + "' class='rounded-circle d-inline-block align-top mr-3 ml-3 ' alt = 'Avatar' width = '50' height = '50' > <div class='d-inline-block'><div><h6>" +
                data.username + "<img src='/Images/blogspot.png' width='20' height='20' class='d-inline-block ml-1 ' alt=''></h6 ></div > <div class='pt-0'><small>" +
                data.time + "</small ></div></div ></div ><div class='d-inline-block float-right'><a class='backBG p-1 pr-2' target='_blank' href='" +
                data.source + "'><i class=''>source</i><img src='Images/arrow_r.png' width='20' height='20' class='d-inline-block' alt=''></a></div><hr> <p>" +
                data.content + "</p><div class='row'></div><hr class:'mt-0'></p><div class='row'></div><div class='d-flex justify-content-center align-items-baseline'><div class='hh'><div onclick='like(" +
                data.id + ")' class='transparentButton  d-inline-block align-bottom '><img data-on='" +
                data.liked + "' id='heart" +
                data.id + "' src='" +
                heart + "' width='40' height='40' class=' mr-1'></div></div><div id='Count" +
                data.id + "'>" +
                data.likes + "</div></div></div>";
            
        }
        else if (data.type == 2) {//twitter without photo
            var heart = "/Images/heart.png";
            if (data.liked) heart = "/Images/heart_full.png";
            doc = "<div id='tt" + data.id + "'class='post shadow-sm p-3 mb-2 bg-white rounded'><div class='row d-inline-block'><img src='" +
                data.profilePhoto + "' class='rounded-circle d-inline-block align-top mr-3 ml-3 ' alt = 'Avatar' width = '50' height = '50' > <div class='d-inline-block'><div><h6>" +
                data.username + "<img src='/Images/tw.png' width='20' height='20' class='d-inline-block ml-1 ' alt=''></h6 ></div > <div class='pt-0'><small>" +
                data.time + "</small ></div></div ></div ><div class='d-inline-block float-right'><a class='backBG p-1 pr-2' target='_blank' href='" +
                data.source + "'><i class=''>source</i><img src='Images/arrow_r.png' width='20' height='20' class='d-inline-block' alt=''></a></div><hr> <p>" +
                data.content + "</p><div class='row'></div><hr class:'mt-0'></p><div class='row'></div><div class='d-flex justify-content-center align-items-baseline'><div class='hh'><div onclick='like(" +
                data.id + ")' class='transparentButton  d-inline-block align-bottom '><img data-on='" +
                data.liked + "' id='heart" +
                data.id + "' src='" +
                heart + "' width='40' height='40' class=' mr-1'></div></div><div id='Count" +
                data.id + "'>" +
                data.likes + "</div></div></div>";
                
        }
        if (data.type != -1) {



            var wrapper = $('.posts'),
            items = wrapper.children();
            //keeping the number of divs bigger by 5 than the number of posts  
            if (items.length < data.ol + 5) {
                
                for (var i = 0; i < ((data.ol + 5) - items.length); i++) {
                    wrapper.append($("<div class='container" + divs++ + " col-lg-12'><div/>"));
                }
            }
            $(doc).appendTo(".container" + data.ol);//appending to the predefined div
        }
        Filtering_endtask();

    }
    );
    
}


function howMuchOverflow() {
    var div = document.getElementById('frame').clientHeight;
    var view = window.innerHeight;
    var y = (100 + div - (window.scrollY + view));
    return y;
}
function CauseOverflow() {
    for (var i = 0; i < 5; i++) {
        if (howMuchOverflow() < 0 & !bottom) {
           getPost();
        }
    }
}
window.addEventListener('scroll', event => {
    if (howMuchOverflow() < 50 & !bottom) { getPost(); }
});

//preloading images for like/dislike action
var pics = ["/Images/heart_full.png","/Images/heart.gif","/Images/heart.png","/Images/heartR.gif"];
var img = new Array();
for (var j = 0; j < pics.length; j++) {img[j] = new Image();}

var signed = 0;
var posts = 1;
var divs = 5;
var bottom = false;
CauseOverflow();



//toastr options (position of notifications)
toastr.options = {
    timeOut: 2000,
    extendedTimeOut: 3,
    tapToDismiss: false,
    debug: false,
    fadeOut: 3,
    positionClass: "toast-bottom"
};
//resolving authentication
$.getJSON("/feed/Issignedin/", function (data) {
    if (data.signed == 1) signed = 1;
    else signed = 0;
});




