console.log("hello world");

// DOMready has fired
// May now use jQuery and Webflow API

var params = new URLSearchParams(window.location.search);
var page = params.get('p');

var pageTitle = document.title;
mixpanel.track("pageview." + page);