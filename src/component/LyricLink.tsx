import Link from "next/link";

type LyricLinkProps = {
  href: string;
};

/**
 * アルバム曲リストから個別の歌詞ページへ移動する共通リンクです。
 * 通常の曲名やクレジットと見分けやすいよう、青色・下線・太字を統一し、
 * マウス操作だけでなくキーボード操作時にもフォーカス位置を表示します。
 */
export default function LyricLink({ href }: LyricLinkProps) {
  return (
    <p className="px-[10%] text-center">
      <Link
        href={href}
        className="inline-block rounded font-serif text-[18px] font-semibold text-blue-700 underline decoration-1 underline-offset-4 transition-colors hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:text-blue-300 dark:hover:text-blue-100"
      >
        歌詞はこちら
      </Link>
    </p>
  );
}
