import type { Metadata } from "next";
import ClientWrapper from "../../component/ClientWrapper";
import DownloadAlbumCard from "../../component/DownloadAlbumCard";
import { downloadAlbums } from "../../data/albums";

// 既存ページの検索公開設定は変えず、カード利用者向けのこのページだけをnoindexにします。
export const metadata: Metadata = {
  title: "Music Download | 群馬大学作曲部",
  description: "群馬大学作曲部のアルバムダウンロードページです。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DownloadPage() {
  return (
    // 既存の固定ヘッダーとフッター、およびヘッダー高の調整処理をそのまま再利用します。
    <ClientWrapper>
      <section className="mx-auto w-[min(92%,56rem)] py-12 sm:py-16">
        <header className="text-center">
          <p className="font-serif text-lg text-blue-900 dark:text-blue-200">
            群馬大学作曲部
          </p>
          <h1 className="mt-2 font-serif text-[36px] font-semibold sm:text-[44px]">
            Music Download
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base">
            ダウンロードカードに記載された年度を選択してください。
            現在準備中の作品は、公開後にこのページからダウンロードできるようになります。
          </p>
        </header>

        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14">
          {downloadAlbums.map((album) => (
            <DownloadAlbumCard key={album.year} album={album} />
          ))}
        </div>

        <aside className="mx-auto mt-12 max-w-2xl rounded-xl border border-gray-300 px-5 py-4 text-sm leading-7">
          <h2 className="font-serif text-base font-semibold">ご案内</h2>
          <p className="mt-2">
            ダウンロードに失敗した場合は、時間をおいて再度お試しください。
            解決しない場合は、作曲部公式Xまたはメールまでご連絡ください。
          </p>
        </aside>
      </section>
    </ClientWrapper>
  );
}
