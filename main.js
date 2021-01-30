/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/
const ffbBtn = document.querySelector(".facebook-btn");
const ftwBtn = document.querySelector(".twitter-btn");
const fpiBtn = document.querySelector(".pinterest-btn");
const fliBtn = document.querySelector(".linkedin-btn");
const fpoBtn = document.querySelector(".pocket-btn")
const fwaBtn = document.querySelector(".whatsapp-btn")


function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
    let via = encodeURI("itsmepronay");


    ffbBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    ftwBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}&via=${via}`
    );

    fpiBtn.setAttribute(
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?url=${postUrl}&description=${postTitle}`
    );

    fliBtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    fpoBtn.setAttribute(
        "href",
        `https://getpocket.com/save?url=${postUrl}&title=${postTitle}`
    );
    fwaBtn.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );
}

init();