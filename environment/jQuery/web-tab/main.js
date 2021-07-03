// selectorに該当するタブを表示というのはどういうことか？
// どのタブをクリックしたのかというのを関数に与える　ここは呼ばれるまで実行されない
// selectorには、show tab a が代入
const showTab = (selector) => {
    $(".tabs-menu > div").removeClass("active");
    $(".tabs-content > div").hide();
    
// tabs-menuのうち、selectorに該当するもののみ、activeクラスをつける.``ってなにをあらわしているのか
// #だけを描くか、IDで指定。属性　テンプレート文字列　JSの機能　バッククオート　この変数の値が展開
//$('.tabs-menu #' + selector)
// テンプレート文字列を使う方法
    // $(`.tabs-menu #${selector}`)
    $(`.tabs-menu div[id="${selector}"]`)
    // .parent("div")→これはいらない。tabs-menuという親に戻ってしまう。
      .addClass("active");
      
      if (selector == "tab-menu-a"){
      $("#tabs-a").show();
    } else if (selector == "tab-menu-b"){
      $("#tabs-b").show();
    } else {
      $("#tabs-c").show();  
    }
};
// タブがクリックされたらコンテンツを表示　イベントが発生されるまで実行しない
$(".tabs-menu div").on("click", (e) => {
  const selector = $(e.target).attr('id');
  showTab(selector);
});


// 最初に、一番最初のタブを示しておく（これが一番最初にうごく）
showTab("tab-menu-a");
