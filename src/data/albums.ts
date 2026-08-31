/** 1枚のCD（Disc）と、その収録順どおりの曲名を表します。 */
export type AlbumDisc = {
  label?: string;
  tracks: readonly string[];
};

/** next/imageで必要な画像情報を年度データと一緒に管理します。 */
type AlbumArtwork = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AlbumBase = {
  year: number;
  title: string;
  description: string;
  artwork: AlbumArtwork | null;
  discs: readonly AlbumDisc[];
  detailHref?: string;
  availabilityText: string;
};

/**
 * downloadEnabledをtrueにしたとき、downloadHrefの設定漏れを
 * TypeScriptの型エラーとして検出するための判別可能なUnion型です。
 */
export type DownloadAlbum = AlbumBase &
  (
    | {
        downloadEnabled: false;
        downloadHref?: never;
      }
    | {
        downloadEnabled: true;
        /**
         * 同一オリジンのURLだけを設定します。コード認証を導入するときは
         * R2の直接URLではなく、Pages Functionなどのサーバー側URLを指定します。
         */
        downloadHref: string;
      }
  );

/**
 * /downloadで使う年度データの唯一の管理場所です。
 * 画面ではこの配列順に表示されるため、最新年度を先頭へ追加してください。
 * 2024・2025の曲情報は既存アルバムページに合わせ、未発表の2026は
 * 推測で内容を補わず、明示的な準備中データにしています。
 */
export const downloadAlbums = [
  {
    year: 2026,
    title: "2026年度アルバム",
    description: "作品情報を準備中です。公開までしばらくお待ちください。",
    artwork: null,
    discs: [],
    downloadEnabled: false,
    availabilityText: "準備中",
  },
  {
    year: 2025,
    title: "Horoscope",
    description: "群馬大学作曲部オリジナルアルバム2作目",
    artwork: {
      src: "/cover1.png",
      alt: "アルバム「Horoscope」のジャケット",
      width: 1500,
      height: 1500,
    },
    discs: [
      {
        label: "Disc 1",
        tracks: [
          "フワっと！スペースえすけ～ぷ！！ feat. 知声, 花隈千冬",
          "流星を詠む",
          "テザー feat. 花隈千冬",
          "ブラックホール、午後ティーを添えて",
          "Lift Off!",
          "Into the Horoscope",
          "Negative Infinite Space",
          "Starlight",
          "c89de",
          "Assault Star",
          "沈黙の衛星と虚構における記憶の硝子",
          "フェード feat. 音街ウナ",
          "星くずの小瓶",
          "Amairo Trail",
        ],
      },
      {
        label: "Disc 2",
        tracks: [
          "The signal in the noise",
          "can't ESCAPE!!! feat. 雨歌エル",
          "招雷降神、CUCUMBER",
          "弦楽四重奏曲第1番ホ長調-入学祝い-",
          "青空",
          "もしもあなたと",
          "０３：３９",
          "ため息は空に溶けた feat. 花隈千冬",
          "クチグルマジャーニー",
        ],
      },
    ],
    detailHref: "/Horoscope",
    downloadEnabled: false,
    availabilityText: "ダウンロード準備中",
  },
  {
    year: 2024,
    title: "虹色memory",
    description: "群馬大学作曲部オリジナルアルバム1作目",
    artwork: {
      src: "/cover31.png",
      alt: "アルバム「虹色memory」のジャケット",
      width: 2160,
      height: 2160,
    },
    discs: [
      {
        tracks: [
          "曇りのち晴れ feat. 音街ウナ",
          "僕らの夏 feat. 可不",
          "Cloud Border",
          "ArcTech",
          "ギュっと！バーチャルどり～む！！ feat. 可不&花隈千冬",
          "School Addiction",
          "青春MIXブレンディング feat. No.7&ナクモ",
          "Hopen Campus",
          "レッツゴー青春",
          "水平線上の在処",
          "軌跡",
        ],
      },
    ],
    detailHref: "/Nijiiro",
    downloadEnabled: false,
    availabilityText: "ダウンロード準備中",
  },
] satisfies readonly DownloadAlbum[];
