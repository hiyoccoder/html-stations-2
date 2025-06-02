function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const text = document.querySelector("#text");
  text.style.backgroundColor = e.target.checked ? "red" : "white";
}
