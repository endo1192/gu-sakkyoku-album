"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
      <br /><br /><br /><br /><br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">
        群馬大学作曲部アルバム紹介ページ
      </h1>
      <br />
      <hr className="w-[80%] mx-auto" />
      <br />
      <p className="w-[80%] mx-auto text-center">
        こちらは群馬大学作曲部のアルバムの歌詞掲載サイトです。ご連絡はメール(gusakkyoku[@]gmail.com)または公式X(
        <a href="https://x.com/GUsakkyoku" className="text-blue-600 underline">
          @GUsakkyoku
        </a>
        )のDMまでお願いします。
      </p>

      <br />
      <br />
      <br />
      <br /><br /><br />
      <h1 className="text-[40px] px-[10%] font-serif text-center">作品一覧</h1>
      <br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">作曲部オリジナルアルバム2作目「Horoscope」</h1>
      <br /><br />

      {/* 画像を斜めに重ねるコンテナ */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "60vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 左上の画像（ゆらゆら） */}
        <motion.div
          animate={{
            rotate: [-8, -10, -8, -6, -8],
            y: [0, -4, 0, 4, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "6%",
            left: "20%",
            zIndex: 2,
          }}
        >
          <Image
            src="/cover1.png"
            alt="アルバム1"
            width={1500}
            height={1500}
            style={{
              width: "33vw",
              height: "auto",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
            }}
          />
        </motion.div>

        {/* 右下の画像（ゆらゆら） */}
        <motion.div
          animate={{
            rotate: [8, 10, 8, 6, 8],
            y: [0, 6, 0, -6, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            bottom: "6%",
            right: "20%",
            zIndex: 1,
          }}
        >
          <Image
            src="/cover2.png"
            alt="アルバム2"
            width={1500}
            height={1500}
            style={{
              width: "35vw",
              height: "auto",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
            }}
          />
        </motion.div>
      </div>

      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <Link href="/Horoscope">
          <button
            style={{
              margin: "0 auto",
              padding: "0.2rem 0.5rem",
              cursor: "pointer",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "80px",
            }}
          >
            <p className="text-[30px] px-[10%] font-serif text-center">
              「Horoscope」の歌詞ページはこちら!
            </p>
          </button>
        </Link>
      </div>
      <br /><br /><br /><br />
      <hr className="w-[80%] mx-auto" />
      <br /><br /><br /><br />
      <h1 className="text-[30px] px-[10%] font-serif text-center">作曲部オリジナルアルバム1作目「虹色memory」</h1>
      <br /><br />
      <Image
            src="/cover31.png"
            alt="ジャケット画像"
            width={2160}
            height={2160}
            style={{
              width: "40%",
              height: "auto",
              borderRadius: "12px",
              display: "block", 
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              margin: "0 auto"
            }}
          />

          <br /><br /><br />

      <div style={{ textAlign: "center" }}>
        <Link href="/Nijiiro">
          <button
            style={{
              margin: "0 auto",
              padding: "0.2rem 0.5rem",
              cursor: "pointer",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "80px",
            }}
          >
            <p className="text-[30px] px-[10%] font-serif text-center">
              「虹色memory」の歌詞ページはこちら!
            </p>
          </button>
        </Link>
      </div>
      <br /><br /><br />
    </>
  );
};

export default MainPage;
