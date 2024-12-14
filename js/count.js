function setCookie(name, value, days = 30) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].trim().split("=");
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
}

function updateVisitorCount() {
    let visitorCount = localStorage.getItem("visitorCount");

    if (!getCookie("visited")) {
        visitorCount = visitorCount ? parseInt(visitorCount) + 1 : 1;
        localStorage.setItem("visitorCount", visitorCount);
        document.getElementById("visitor-count").innerText = visitorCount;

        setCookie("visited", "true", 30); 
    } else {
        visitorCount = visitorCount || 1;
        document.getElementById("visitor-count").innerText = visitorCount;
    }
}

updateVisitorCount();