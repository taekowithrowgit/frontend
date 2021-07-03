const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const buttonadd = document.getElementById("button-add");
const buttonsub = document.getElementById("button-sub");
const buttonmul = document.getElementById("button-mul");
const buttondiv = document.getElementById("button-div");
const box = document.getElementById('box');

const getNum1 = () => {
    const num1 = Number.parseFloat(input1.value)
    return num1;
};

const getNum2 = () => {
    const num2 = Number.parseFloat(input2.value)
    return num2;
};

buttonadd.addEventListener('click', () => {
    const result = getNum1() + getNum2();
    showResult(result);
});

buttonsub.addEventListener('click', () => {
    const result = getNum1() - getNum2();
    showResult(result);
});

buttonmul.addEventListener('click', () => {
    const result = getNum1() * getNum2();
    showResult(result);
});

buttondiv.addEventListener('click', () => {
    const result = getNum1() / getNum2();
    showResult(result);
});
// 外側からはこのresultはみえない・・・　
// 引数で値をうけとる　呼び出し側で、値を渡してあげる　resultの変数に入っている値を、numに代入される　numという変数に値が入った時点で起動される

const showResult = (num) => {
    box.textContent = `${num}`;
};
// 同じような処理を省く。関数としてまとめる必要がある
