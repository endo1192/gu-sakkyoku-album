"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MouseEvent } from "react";
import type { DownloadAlbum } from "../data/albums";

const DOWNLOAD_ERROR_MESSAGE =
  "ダウンロードに失敗しました。時間をおいて再度お試しください。";

type DownloadAlbumCardProps = {
  album: DownloadAlbum;
};

/**
 * 1年度分のジャケット、曲リスト、ダウンロード状態を表示します。
 * ダウンロード前の疎通確認とエラー表示だけがブラウザ処理を必要とするため、
 * このコンポーネントだけをClient Componentにしています。
 */
export default function DownloadAlbumCard({ album }: DownloadAlbumCardProps) {
  const [downloadError, setDownloadError] = useState("");
  const [isCheckingDownload, setIsCheckingDownload] = useState(false);
  const titleId = `album-${album.year}-title`;
  const trackCount = album.discs.reduce(
    (count, disc) => count + disc.tracks.length,
    0,
  );

  const handleDownload = async (
    event: MouseEvent<HTMLAnchorElement>,
    downloadHref: string,
  ) => {
    event.preventDefault();
    setDownloadError("");
    setIsCheckingDownload(true);

    try {
      const target = new URL(downloadHref, window.location.origin);

      // 静的データの設定ミスによる外部サイトへの意図しない遷移を防ぎます。
      if (target.origin !== window.location.origin) {
        throw new Error("Download URL must use the current origin.");
      }

      // 大容量ZIP本体を二重取得しないよう、HEADで利用可否だけを確認します。
      // 将来Pages Functionを追加する場合は、そのエンドポイントもHEADに対応させます。
      const response = await fetch(target, {
        method: "HEAD",
        cache: "no-store",
        // 別URLへのredirectは許可せず、同一オリジンの配信口を維持します。
        redirect: "error",
      });

      if (!response.ok) {
        throw new Error(`Download check failed with status ${response.status}.`);
      }

      window.location.assign(target.href);
    } catch {
      // 内部URLやHTTP statusを画面へ出さず、利用者向けの固定文言だけを表示します。
      setDownloadError(DOWNLOAD_ERROR_MESSAGE);
    } finally {
      setIsCheckingDownload(false);
    }
  };

  return (
    <article
      aria-labelledby={titleId}
      className="rounded-xl border border-gray-300 bg-background p-5 shadow-lg sm:p-8"
    >
      <p className="text-center font-serif text-[32px] font-bold text-blue-900 dark:text-blue-200">
        {album.year}
      </p>

      <div className="mx-auto mt-5 w-full max-w-[360px]">
        {album.artwork ? (
          <Image
            src={album.artwork.src}
            alt={album.artwork.alt}
            width={album.artwork.width}
            height={album.artwork.height}
            sizes="(max-width: 640px) 84vw, 360px"
            className="h-auto w-full rounded-xl shadow-lg"
          />
        ) : (
          // 未発表年度で既存作品の画像を誤用しないためのプレースホルダーです。
          <div
            role="img"
            aria-label={`${album.year}年度アルバムのアートワークは準備中です`}
            className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-gray-400 bg-gray-50 px-6 text-center font-serif text-lg text-gray-700 dark:bg-gray-900 dark:text-gray-200"
          >
            Album Artwork
            <br />
            Coming Soon
          </div>
        )}
      </div>

      <h2
        id={titleId}
        className="mt-6 text-center font-serif text-[28px] font-semibold"
      >
        {album.title}
      </h2>
      <p className="mt-2 text-center text-sm leading-7 sm:text-base">
        {album.description}
      </p>

      {album.discs.length > 0 ? (
        // 長い曲目でもスマートフォンで年度間を移動しやすいよう折りたたみます。
        <details className="mx-auto mt-6 max-w-2xl rounded-xl border border-gray-300 px-4 py-3">
          <summary className="cursor-pointer rounded font-serif text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
            Track List（{trackCount}曲）
          </summary>
          <div className="mt-4 space-y-5">
            {album.discs.map((disc, discIndex) => (
              <section
                key={`${album.year}-${disc.label ?? discIndex}`}
                aria-label={disc.label ?? `${album.title} Track List`}
              >
                {disc.label ? (
                  <h3 className="mb-2 font-serif text-base font-semibold">
                    {disc.label}
                  </h3>
                ) : null}
                <ol className="list-decimal space-y-2 pl-6 text-sm leading-6 sm:text-base">
                  {disc.tracks.map((track) => (
                    <li key={track}>{track}</li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </details>
      ) : (
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Track Listは後日公開します。
        </p>
      )}

      {album.detailHref ? (
        <p className="mt-5 text-center">
          <Link
            href={album.detailHref}
            className="text-blue-700 underline decoration-1 underline-offset-4 hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:text-blue-300 dark:hover:text-blue-100"
          >
            アルバム詳細・歌詞を見る
          </Link>
        </p>
      ) : null}

      <div className="mt-7 text-center">
        {album.downloadEnabled ? (
          <a
            href={album.downloadHref}
            onClick={(event) => handleDownload(event, album.downloadHref)}
            aria-busy={isCheckingDownload}
            className="inline-flex min-h-12 min-w-48 items-center justify-center rounded-[80px] border-2 border-blue-900 bg-blue-900 px-8 py-3 font-serif text-lg font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            {isCheckingDownload ? "確認中…" : "DOWNLOAD"}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex min-h-12 min-w-48 cursor-not-allowed items-center justify-center rounded-[80px] border-2 border-gray-300 bg-gray-100 px-8 py-3 font-serif text-lg font-semibold text-gray-500 dark:bg-gray-800 dark:text-gray-300"
          >
            DOWNLOAD
          </button>
        )}
        <p className="mt-3 text-sm" role="status">
          {album.availabilityText}
        </p>
        {downloadError ? (
          <p className="mt-3 text-sm font-semibold text-red-700 dark:text-red-300" role="alert">
            {downloadError}
          </p>
        ) : null}
      </div>
    </article>
  );
}
