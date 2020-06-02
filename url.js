function myFunction  URL myURL = new URL("http://look-forward.com/home/");
URL homeURL = new URL(myURL, "index.html");
URL page2URL = new URL(myURL, "page2.html");
URL page3URL = new URL(myURL, "page3.html");