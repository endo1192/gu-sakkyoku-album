"use client"

import React, { useState } from 'react';
import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image';

function Cheader() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu((current) => !current);
  };

  const handleMenuClose = () => setOpenMenu(false);

    return (
        <Sheader>
          <Sleft>
            <Link href="/"><Image src="/sakkyokukyara.png" alt="群馬大学作曲部のロゴキャラクター" width={1280} height={1280} style={{ width: "30%", height: "auto" }}/></Link>
          </Sleft>

          <SImage>
          <Link href="/"><Image src="/sakkyokukyara.png" alt="群馬大学作曲部のロゴキャラクター" width={1280} height={1280} style={{ width: "50%", height: "auto" }}/></Link>
          <h1 className="text-blue-900">群馬大学作曲部</h1>
          </SImage>
          

          

            <Snav>
                <Link href="/Horoscope">Horoscope</Link>
                <span>|</span>
                <Link href="/Nijiiro">虹色memory</Link>
                <span>|</span>
                <Link href="/download">Download</Link>
                <span>|</span>
                <Link href="/">トップページ</Link>
            </Snav>
            <Sbutton
              onClick={handleMenuOpen}
              type="button"
              className="z-10 space-y-2"
              aria-label={openMenu ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={openMenu}
              aria-controls="mobile-navigation"
            >
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'opacity-0 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
          </Sbutton>

          {/*
            閉じて画面外にあるリンクへTabキーで移動しないよう、
            見た目の移動に加えてaria-hiddenとinertも同期させます。
          */}
          <nav
            id="mobile-navigation"
            aria-label="モバイルメニュー"
            aria-hidden={!openMenu}
            inert={!openMenu}
            className={
              openMenu
                ? 'text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
                : 'fixed right-[-100%] ease-linear duration-300'
            }
          >
            <ul className="mt-6">
              <li className="">
                <Link href="/Horoscope" className="py-2 inline-block" onClick={handleMenuClose}>
                  Horoscope
                </Link>
              </li>
              <li className="">
                <Link href="/Nijiiro" className="py-2 inline-block" onClick={handleMenuClose}>
                  虹色memory
                </Link>
              </li>
              <li className="">
                <Link href="/download" className="py-2 inline-block" onClick={handleMenuClose}>
                  Download
                </Link>
              </li>
              <li className="">
                <Link href="/" className="py-2 inline-block" onClick={handleMenuClose}>
                  トップページ
                </Link>
              </li>
            </ul>
          </nav>
        </Sheader>
    );
}

export default Cheader;

const Sleft = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 821px) {
    display: none; /* 完全に非表示 */
  }
`;

const SImage = styled.div`
  width: 25%;
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  justify-content: flex-start; /* 左詰め（自然な横並び） */
  gap: 1rem; /* 画像と文字の間のスペース */
  @media (max-width: 821px) {
    display: none; /* 完全に非表示 */
  }

  h1 {
    font-size: 1.5rem; /* 見やすい大きさに調整 */
    font-weight: bold;
    color: #1e3a8a; /* Tailwind の text-blue-900 相当 */
    white-space: nowrap; /* 改行を防ぐ */
  }

  img {
    display: block;
  }
`;



const Sheader = styled.header`
  background-color: white;
  color: black;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;


const Snav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem; /* 要素間の間隔を調整 */
  @media (max-width: 821px) {
    display: none; /* 完全に非表示 */
  }
  span {
    color: black; /* 区切り線の色を変更 */
  }
`;

const Sbutton = styled.button`
  @media (min-width: 822px) {
    display: none; /* 完全に非表示 */
  }
`;
