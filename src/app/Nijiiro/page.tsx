"use client";

import Image from "next/image";
import Cheader from "../../component/header";
import Cfooter from "../../component/footer";
import LyricLink from "../../component/LyricLink";



const MainPage = () => {
  return (
    <>
    <Cheader />
      <br /><br /><br /><br /><br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">
        群馬大学作曲部オリジナルアルバム1作目「虹色memory」
      </h1>
      <div className="relative w-[80%] pb-[45%] mx-auto mt-10">
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
    src="https://www.youtube.com/embed/arK-hOelO2M?si=qp--S5O4iyjLFHxU"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

      <br /><br /><br /><br />
      <hr className="w-[80%] mx-auto" />
      <br /><br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">「虹色memory」曲リスト</h1>
      <br /><br />
      <Image
            src="/cover31.png"
            alt="ジャケット画像"
            width={2160}
            height={2160}
            style={{
              width: "30%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              display: "block", 
              margin: "0 auto"
            }}
          />

          <br /><br />
          <br />

          <p className="text-[18px] px-[10%] font-serif text-center">1. 曇りのち晴れ feat. 音街ウナ</p>
          <LyricLink href="/Nijiiro/kumori" />
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">2. 僕らの夏 feat. 可不</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">3. Cloud Border</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">4. ArcTech</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">5. ギュっと！バーチャルどり～む！！ feat. 可不&花隈千冬</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">6. School Addiction</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">7. 青春MIXブレンディング feat. No.7&ナクモ</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">8. Hopen Campus</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">9. レッツゴー青春</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">10. 水平線上の在処</p>
          <br />
          <p className="text-[18px] px-[10%] font-serif text-center">11. 軌跡</p>

      
      <br /><br /><br />
      <Cfooter />
    </>
  );
};

export default MainPage;
