const affection = 98.0;

const coment =""しゅき",

// ===============================
// 
//怒られてへこんでるほのかちゃんへ  
// とても自業自得です
// ざまあないです。
// さて、内見はいつでもできるそうですが、    
// いつがいいですか？
// ===============================

const reasons = [

"声がすき",
"顔が好き",
"美味しいお菓子が作れる",
"いつも楽しそうに笑ってて可愛い",
"人の気持ちをちゃんと汲もうとするところ",
"素直に甘えてくれるところ",
"表情がころころ変わって可愛い",
"何考えてるのかわかりやすくてかわいい",
"付き合って少し経つのに、いまだに照れ照れしてるところ",
"優しさがちゃんと行動に出るところ",
"私の好みをよく覚えてるところ",
"感じたことをよく言葉にして伝えてくれる",
"けっこう真面目だし、しっかりしてるところ",
"私と電話する時だけ声が変わるところ",
"嘘をつこうとしても隠しきれないところ",
"白々しい時の顔と声が好き",
"たまに自信がなくなるところ。よしよし",
"ぎゅーした時の大型犬みたいなところ",
"歌ったり踊ったり、たまに5歳くらいになる。にぎやか。うるさい。",
"私のことずっと好きで可愛いね。ありがとう",
"頭が切れるときと、鈍いときがある。同一人物とは思えん",
"意外とこだわりがあるところ。感心する",
"なんか筋が通ってるところ。けっこう常識とかうるさいよね。でも出会ったのは2丁目のバーでしたね。あなたはその時19歳でしたね。",
"いつも私の代わりメニューを注文してくれたり、お店の人と話してくれる。助かってます。だいすきです。",
"私のおかげでおいしいものが更新されてて可愛かった",
"私に関することの記憶力がいい。私が忘れていることもほのかちゃんは覚えていたりするよね。",
"マンネリ防止特化女！！！",
"たまに出る変態",
"すきだよってちゃんと言葉で伝えてくれるところ",
"似てきたのか、思考がシンクロするとき",
"手がすき",
"黒髪が似合う",
"ほのかちゃんのにおい",
"けんかしても歩み寄ってくれる",
"ノリがいい",
"いつでも手はつなぎたいところ。たまに厄介だけど、すきだよ",
"話題がいっぱいある。すごい",
"隣で寝ると、ぎゅーってしてくるとこ",
"うがいすると、南国の鳥なとこ",
"パックすると無表情でおもしろい",
"たまに辛辣",
"拗ねた面倒な私にも対応してくれる",
"計算得意なのきゅんとする",
"いやなことは伝えたら、どうにかしようとしてくれる",
"背が高い",
"日常の出来事を報告してくれるとこ",
"自然とか私のすきなことに付き合ってくれる",
"私のことを見てるときの顔が好き。本当に好きなんだなってなる",
"ほのかちゃんだいすき",
"私の好みをいまだに知りたがるのが、なんかいいなって思う。そんなに重要かってくらいちゃんと聞くよね。", 
"触るとさらさらしててすき",
"してるとき、すきすきっていうのかわいい",
"レスについて気にしてるの面白い。",
"なんか寝起きからきもくて面白いとこ。おっぱいの代わりについてるんだね…",
"この世に心を許せるのが私しかいないところ。増えたらそれはそれでうれしい",
"可愛くない時がない。いつでも可愛い。ほのかちゃんは気に入らないらしいけど",
"礼儀を大切にしてる堅物くそ野郎みたいなことをたまに言う",
"鼻が高いとこ。鼻が高い女は、やっぱりプライドが高いんだなってわかったよん",
"おいしいもの食べたときと、そうじゃない時のリアクションが高低差ありすぎ",
"背高いのに一緒に歩いてくれるとこ。歩きづらくないのかなって思う",
"ほのかちゃんがツボってるとうれしい。あんまり爆笑はしないらしいから",
"はははー！って笑うの好き。変な笑い方してるとき面白い",
"素直すぎて嘘つけないとこ。ほんっっっっっっとにわかりやすい",
"嬉しいときは本当に嬉しいんだなあってのがにじみ出てて、おかげで私も笑顔になります",
"けっこう私中心で過ごしてて可愛い",
"おいでって言うとわんこみたいに走ってくる",
"年齢のことも、振られる可能性を考えながらちゃんと伝えてくれたところ。信頼ですな",
"浮気に対する考えとか、わりと一緒？だよね",
"たまに起こす謎のメンヘラ",
"うるせー！とか、であー！",
"めっちゃ褒めてくれるしいっぱい好きとか可愛いって伝えてくれる。よくそれだけ気づくなあって感じ。天才",
"私以外に対する解像度はなんだか低い。とりあえず「いい人だよ」「いいやつだよ」って言ってる", 
"私の一挙手一投足に一喜一憂するのがほのかちゃんくらいなんだけど、それがかわいい。かわいくてちょっとかわいそう。ほのかちゃんにとって私は重要なんだなってなるけど、あまり健全じゃない気がするから、控えます。",
//"",



];

let remainingReasons = [...reasons];

const specialMessages = [
"ほのかちゃんって出会った頃は０時くらいに寝てたよね。いや、２３時か",
"もしかして全部見ようとしてる？",
"そろそろねんねだよ",
"絶対タップし続けると思った",
"ちゃんとお水飲んでね",
"うがいできるようになった？",
"続きはまた明日見ようね",
"たまにきもい",
"セクハラやめてください",
  "好きだから一緒にいるよ",
  "私から振ることはないと思う",
  "わんわん",
  "どぱがきくそやろう",
"だいすき", 
"しゅき",
"すきすき",
"トマトのリコピンが日焼けに効くそうなので,最近はトマトを加熱して食べています。",
"私の中でニンジンがまた流行っています。",
"２れっさーぱんだ！がー！",
];

let tapCount = 0;

function showPopup(message){

const popup=document.getElementById("popup");

popup.innerText=message;

popup.classList.add("show");

setTimeout(()=>{
popup.classList.remove("show");
},3000);

}

function heart(){

const heart=document.createElement("div");
  
const stars = ["⭐","✨","🌟"];

heart.innerHTML =
stars[Math.floor(Math.random()*stars.length)];

heart.style.position="fixed";
heart.style.left=Math.random()*90+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.pointerEvents="none";
heart.style.transition="all 3s linear";
heart.style.opacity="1";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.bottom="110vh";
heart.style.opacity="0";
},50);

setTimeout(()=>{
heart.remove();
},3200);

}

function showReason(){

tapCount++;

if(remainingReasons.length===0){

document.getElementById("number").innerText="🎉 COMPLETE";

document.getElementById("reason").innerHTML=`

<h2>読んでくれてありがとう。</h2>

これからも増え続けるんだろうなって思っているお。

`;

document.querySelector(".card").classList.add("complete");

for(let i=0;i<20;i++){

setTimeout(heart,i*120);

}

return;

}

const randomIndex=Math.floor(Math.random()*remainingReasons.length);

const selectedReason=remainingReasons[randomIndex];

remainingReasons.splice(randomIndex,1);

document.getElementById("reason").innerText=selectedReason;

document.getElementById("number").innerText=
`💜 ${reasons.length-remainingReasons.length} / ${reasons.length}`;

heart();

if(tapCount%10===0){

const randomMessage=
specialMessages[
Math.floor(Math.random()*specialMessages.length)
];

showPopup(randomMessage);

}

}

// ===============================
// チェックボックス保存
// ===============================

window.onload=function(){

const checks=document.querySelectorAll("input[type='checkbox']");

checks.forEach((check,index)=>{

const saved=localStorage.getItem("check"+index);

if(saved==="true"){

check.checked=true;

}

check.addEventListener("change",()=>{

localStorage.setItem("check"+index,check.checked);

});

});

};

const fill = document.getElementById("meterFill");

document.getElementById("lovePercent").innerText =
affection + "%";

document.getElementById("loveComment").innerText =
comment;

fill.style.width =
Math.min(affection,100) + "%";

fill.innerText =
affection + "%";

// ===============================
// 星空
// ===============================

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.animationDelay=Math.random()*3+"s";

stars.appendChild(star);

}

// Albireo（2つの星）
const albireo1=document.createElement("div");
albireo1.className="star";
albireo1.style.width="7px";
albireo1.style.height="7px";
albireo1.style.left="72vw";
albireo1.style.top="18vh";
albireo1.style.background="#ffd54f";
albireo1.style.opacity="1";

const albireo2=document.createElement("div");
albireo2.className="star";
albireo2.style.width="5px";
albireo2.style.height="5px";
albireo2.style.left="73vw";
albireo2.style.top="19vh";
albireo2.style.background="#8fd3ff";
albireo2.style.opacity="1";

stars.appendChild(albireo1);
stars.appendChild(albireo2);

}
