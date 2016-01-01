function createTable(element,data) {
  var li = document.createElement("li");
  li.setAttribute("class", "tweet");
  var iconDiv = document.createElement('div');
  var img = document.createElement("img");
  img.setAttribute("src", data.user.profile_image_url_https);
  iconDiv.setAttribute('class', 'iconImg');
  iconDiv.appendChild(img);
  li.appendChild(iconDiv);

  var textBlock = document.createElement("div");
  textBlock.setAttribute('class', 'textBlock');
  var strong = document.createElement("strong");
  strong.setAttribute('class', 'fullName');
  strong.innerHTML = data.user.name;
  textBlock.appendChild(strong);
  var s = document.createElement('span');
  s.setAttribute('class', 'userName');
  s.innerHTML = '@';
  textBlock.appendChild(s);
  var b = document.createElement('b');
  b.setAttribute('class', 'userName');
  b.innerHTML = data.user.screen_name;
  textBlock.appendChild(b);
  var span = document.createElement('span');
  span.setAttribute('class', 'dateTime');
  span.innerHTML = parseDate(data.created_at);
  textBlock.appendChild(span);
  var p = document.createElement('p');
  p.setAttribute('class', 'text');
  p.innerHTML = data.text;
  textBlock.appendChild(p);
  li.appendChild(textBlock);
  element.appendChild(li);
  var tweetList = document.getElementById("tweetList");
  tweetList.appendChild(element);
}

function parseDate(str) {
  var d = new Date(str);
  var dateString = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return dateString;
}