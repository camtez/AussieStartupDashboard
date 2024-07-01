//import mixpanel from 'mixpanel-browser';


mixpanel.init("f88e6c156550ad720ed768bb3742664c");

var params = new URLSearchParams(window.location.search);
var page = params.get('p');

mixpanel.track("pageview." + page);