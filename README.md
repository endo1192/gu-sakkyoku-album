群馬大学作曲部のオリジナルアルバムの歌詞掲載サイト
不明点はj261a007@gunma-u.ac.jpまで

## Download Card

ダウンロードカードの共通QRコードは、次のURLを使用します。

```text
https://gu-sakkyoku-album.pages.dev/download
```

QRコードは年度ごとに変更せず、今後も `/download` を維持してください。ページは通常検索からの流入を目的としないため、ページ単位で `noindex, nofollow` を設定しています。

### アルバムの追加方法

年度別の表示情報は `src/data/albums.ts` で一元管理しています。新しい年度を追加するときは、次の作業を行います。

1. `downloadAlbums` の先頭に年度、タイトル、説明、アートワーク、曲リストを追加する
2. アートワーク画像を `public/` に追加する
3. `npm run lint` と `npm run build` を実行する
4. ダウンロードの配信準備が完了してから `downloadEnabled` を `true` にする

`downloadEnabled: true` にする場合は、同一オリジンの `downloadHref` も必須です。認証を利用する場合、ここにはR2の直接URLではなく、Pages Functionなどのサーバー側エンドポイントを指定してください。

### 音源ファイルとCloudflare R2

ZIP、WAVなどの大容量ファイルはGitHubへcommitしません。Cloudflare R2の非公開bucketへ、次のようなobject keyで保存する構成を推奨します。

```text
albums/
  2024.zip
  2025.zip
  2026.zip
```

コード認証を導入する場合は、Cloudflare Pages FunctionへR2 bindingを設定し、Functionが年度の許可リストからobject keyを選択して配信します。利用者が送信した文字列からobject keyを直接組み立てないでください。

### セキュリティ上の注意

- ダウンロードコード、R2 API token、署名鍵をClient ComponentやGitへ保存しない
- 年度コードはCloudflareの暗号化されたSecretとして設定し、サーバー側だけで検証する
- 認証付き配信ではR2 bucketと`r2.dev` URLを公開しない
- エラー応答にstack trace、bucket名、object key、内部例外を含めない
- 年度共通コードへの総当たりを抑えるため、認証導入時にレート制限を設定する
- 期限付きURLを発行する場合は、有効時間を必要最小限にする

### 2027年以降の運用

2027年を追加する場合は、`src/data/albums.ts` への1件追加、アートワーク追加、R2への `albums/2027.zip` アップロード、必要に応じたCloudflare Secret追加だけで済む構成を維持します。認証UI、認証処理、R2 object keyの対応表は分離し、既存年度のページやURLを変更しないでください。
