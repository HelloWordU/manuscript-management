var domainUrl = "http://127.0.0.1:9105";
//var domainUrl = "http://182.61.26.201:9105";
var fileUrl = "http://182.61.26.201:9090";

function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function getQuery(key) {
	var query = window.location.search.substring(1);
	var map = query.split("&");
	for (var i = 0; i < map.length; i++) {
	  var pair = map[i].split("=");
	  if (pair[0] == key) {
		return pair[1];
	  }
	}
  }

  function postMessage(url, data,contentType) {
    var contentType = contentType ? contentType : "application/json"
    return $.ajax({
      url: url,
      type: "POST",
      datType: "JSON",
      cache: false,
      contentType: contentType,
      beforeSend: function(request) {
              request.setRequestHeader("accessToken",getCookie("accessToken"));
           },
      data: JSON.stringify(data)
    })
  }
  
  function getMessage(url) {
    return $.ajax({
      url: url,
      type: "GET",
      cache: false,
      beforeSend: function(request) {
              request.setRequestHeader("accessToken",getCookie("accessToken"));
           },
      datType: "JSON"
    })
  }

  function getDateTimeShow(timeTick)
  {
    

      var date = new Date(timeTick);

      var YY = date.getFullYear() + '-';

      var MM =(date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';

      var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ':';

      var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

      return  YY + MM + DD + ' ' + hh + mm + ss;
  }