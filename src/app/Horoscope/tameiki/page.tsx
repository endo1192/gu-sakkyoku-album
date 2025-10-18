"use client";


import Cheader from "../../../component/header";
import Cfooter from "../../../component/footer";



const MainPage = () => {
  return (
    <>
    <Cheader />
      <br /><br /><br /><br /><br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">
        ため息は空に溶けた feat. 花隈千冬
      </h1>
      
      <br /><br /><br />
      <p className="text-[18px] px-[10%] font-serif text-center">星の帰る朝<br />
空に迷うボクら<br />
<br />
乾いた時間に　きっと<br />
名前はないけど<br />
<br />
時計の針　追いかけて　みても<br />
ぐるり　同じ場所<br />
<br />
考えるふりして　ころんで　どしちゃいたいんだ<br />
雲に乗れたらなって　想いだけ残して<br />
<br />
眠ってないでさ　ねぇ　気付いて<br />
しおりはさんだ　言葉だけの　夢から<br />
ゆらめいた　おとぎばなしだ<br />
<br />
いつかの雨も　泣き止んだの<br />
上から　幸せが　降ってこないかな</p>
      <br /><br />
      <Cfooter />
    </>
  );
};

export default MainPage;
