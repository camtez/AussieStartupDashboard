import mixpanel from 'mixpanel-browser';

console.log("hello world");

mixpanel.init("f88e6c156550ad720ed768bb3742664c");
console.log('mixpanel initialized');
mixpanel.track("test");

// DOMready has fired
// May now use jQuery and Webflow API

var params = new URLSearchParams(window.location.search);
var page = params.get('p');

var pageTitle = document.title;
mixpanel.track("pageview." + page);