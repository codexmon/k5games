function correctHREFurl() {
    $("body *[href]").attr("href", function () {
        return ($(this).attr("href").startsWith("https://") || $(this).attr("href").startsWith("http://") || $(this).attr("href").startsWith("../") ? "" : "../") + $(this).attr("href")
    })
    $("body *[src]").attr("src", function () {
        return ($(this).attr("src").startsWith("https://") || $(this).attr("src").startsWith("http://") || $(this).attr("src").startsWith("../") ? "" : "../") + $(this).attr("src")
    })
}
$(document).ready(function () {
    if (location.href.includes("pages")) {
        $('#header-placeholder').load("../includes/header.html", correctHREFurl).addClass("sticky-top");
        $('#footer-placeholder').load("../includes/footer.html", correctHREFurl);
    }
    else {
        $('#header-placeholder').load("includes/header.html").addClass("sticky-top");
        $('#footer-placeholder').load("includes/footer.html");
    }
});