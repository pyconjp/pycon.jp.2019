`master` and `dev`レポジトリへの直接の変更禁止！！

必ずプルリクしてください。

基本レビューをしてもらうこと、オブザーバーや急ぎの際はPRをして自分で最終チェックしてください

# 環境
node v10.15.3以上

# インストール
```sh
npm install
```

# 開発

```sh
$ npm run dev
$ open http://localhost:4000/2019/
```


# デプロイ(動的)

本番へ向け、jsやcssをビルドし、サーバー起動

```sh
$ npm run build
$ npm run start
```


静的にHTMLに吐き出します。 distディレクトリが作成されます。

```sh
$ npm run generate
```

# 多言語化
`locales`ディレクトリ に `ja.json` と `en.json`に記載して,vueファイルなどで`this.$t('top.title')`(テンプレートの場合はthisいらない）として使います。

`ja`と`en`の`key`は必ず揃えてください

ページ名をトップキーにしてください。

現在の`locale`はstore`gettre`から取れます。

例
```
  import { mapGetters } from 'vuex'
  export default {
    //..省略
    computed: mapGetters({
      locale: 'locale'
    }),
    //..省略
  }
```

## 多言語化のパス
`ja` -> `/`

`en` -> `/en`

例えばスポンサーなら

`ja` -> `/sponsor`

`en` -> `/en/sponsor`

リンクパスは `nuxt-link(:to="$i18n.path('sponsor')" exact)` のように対応`(HeaderNavi参照

# その他
## 開発環境のPort変更

package.json

```json
"config": {
  "nuxt": {
    "host": "0.0.0.0",
    "port": "4000"
  }
},
