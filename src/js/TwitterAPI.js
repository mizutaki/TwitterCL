var TwitterAPI = function(requestURL, callBack) {
  var twitterAPIKey = new TwitterAPIKey();
  this.method = "GET";
  this.requestURL = requestURL;
  this.callBack = callBack;
  this.consumerKey = twitterAPIKey.consumerKey;
  this.consumerSecret = twitterAPIKey.consumerSecret;
  this.accessToken = twitterAPIKey.accessToken;
  this.tokenSecret = twitterAPIKey.tokenSecret;
  this.accessor = {
    consumerSecret: this.consumerSecret,
    tokenSecret: this.tokenSecret
  },
  
  this.message = {
    method: this.method,
    action: this.requestURL,
    parameters: {
      oauth_version: "1.0",
      oauth_signature_method: "HMAC-SHA1",
      oauth_consumer_key: this.consumerKey,
      oauth_token: this.accessToken,
      callback: this.callBack
    }
  }
};

function createUl() {
  var ul = document.createElement("ul");
  ul.setAttribute("id","list");
  var div = document.getElementById("tweetList");
  div.appendChild(ul);
}

function resultsOutput(data) {
  var statuses = data.statuses;
  console.log(statuses.length + "件");
  createUl();
  var ul = document.getElementById("list");
  for (var i = 0; i < statuses.length; i++) {
    console.log(statuses[i].user.name);
    console.log(statuses[i].user.screen_name);
    console.log(statuses[i].text);
    createTable(ul,statuses[i]);
  }
}

function resultsOutputAccount(data) {
  var statuses = data;
  console.log(statuses.length + "件");
  createUl();
  var ul = document.getElementById("list");
  for (var i = 0; i < statuses.length; i++) {
    console.log(statuses[i].user.name);
    console.log(statuses[i].user.screen_name);
    console.log(statuses[i].text);
    createTable(ul,statuses[i]);
  }
}

function resultsOutputMonitoring(data) {
  var statuses = data;
  console.log(statuses.length + "件");
  var latestDate = new Date(localStorage.latestDate).getTime();
  createUl();
  var ul = document.getElementById("list");
  for (var i = 0; i < statuses.length; i++) {
    var created = new Date(statuses[i].created_at).getTime();
    if (created > latestDate) {
      console.log(statuses[i].user.name);
      console.log(statuses[i].user.screen_name);
      console.log(statuses[i].text);
      var n = new Notification('notify', {
        body: statuses[i].user.screen_name + " new Tweet " + statuses[i].text
      });
      createTable(ul,statuses[i]);
    }
  }
}