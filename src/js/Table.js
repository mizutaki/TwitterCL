var tableHeader = {
  created_at : "ツイート時間",
  name : "名前",
  screen_name : "id",
  text : "ツイート内容"
}

function createTableHeader() {
  var ul = document.createElement("ul");
  ul.setAttribute("id","list");
  var li = document.createElement("li");
  li.setAttribute("class", "tableHeader");
  for (key in tableHeader) {
    var span = createSpan(key,tableHeader[key]);
    li.appendChild(span);
    ul.appendChild(li);
  }
  var div = document.getElementById("tweetList");
  div.appendChild(ul);
}

/**
 * spanタグを作成します
 * @param {string} name spanタグに設定するname属性の値
 * @param {string} data spanタグに設定するinnerHTMLの値
 */
function createSpan(name,data) {
  var span = document.createElement("span");
  span.setAttribute("data-name",name);
  span.setAttribute("class","cell");
  span.innerHTML = data;
  return span;
}

function createTable(element,data) {
  var li = document.createElement("li");
  li.setAttribute("class", "tweet");
  var span = createSpan("created_at",parseDate(data.created_at));
  var span1 = createSpan("name",data.user.name);
  var span2 = createSpan("screen_name",data.user.screen_name);
  var span3 = createSpan("text",data.text);
  var img = document.createElement("img");
  img.setAttribute("src", data.user.profile_image_url_https);
  li.appendChild(span);
  li.appendChild(span1);
  span1.appendChild(img);
  li.appendChild(span2);
  li.appendChild(span3);
  element.appendChild(li);
  var div = document.getElementById("tweetList");
  div.appendChild(element);
}

function parseDate(str) {
  var d = new Date(str);
  var dateString = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  return dateString;
}