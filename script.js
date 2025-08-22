fetch("/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
});

//cookie関係の定義
// 名前: value, 有効期限7日, path=/（サイト全体）
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000)); // ミリ秒に変換
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// 使い方
//setCookie("username", "banana", 7);

//読み込み
function getCookie(name) {
  const cookies = document.cookie.split("; "); // Cookieを ; で分割
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null; // 無ければ null
}

// 使い方
//console.log(getCookie("username"));

//削除
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// 使い方
//deleteCookie("username");

console.log(parts[parts.length - 2]);

if  (parts[parts.length - 2] === "stage"){
  pog = parts[parts.length - 1];
  setCookie("ongoing", pog.split(".")[0], 7)
}
