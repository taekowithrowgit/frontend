$("#box").text("Hello!");
window.addEventListener("load",() => $("#box").text("画像などの読み込みも完了しました"));

$(".item").text("hello");

$("#parent > div").prepend("子要素の前に付け加えてみた")

// #parent div と指定すると、 .children だけでなく .grand_children も選択
$("#parent div").prepend("これはなにか？")
// $("#pm").text("こんにちわ");

const element = 'p';
$(element).text('こん！');


const url = "pm.html";
$(`[href="${url}"]`).text("yyy");
console.log(`[href="${url}"]`);
// $("[href=pm.html]").text("ok!");




