# 作るもの

- ユーザ登録
- ログイン機能
- ユーザがトピックを立てて、そのトピックについてTwitterのように会話ができる
- 文字数制限はないが会話は7日で消える
- トピックに対してのPull Requestを送ることが出来る
- トピックに対してのPull Requestはトピックを立てた人が許可すれば取り込める
- トピックに対しての+1,-1の機能がある
- トピックランキングがある
- トピックトレンドがある
- トピックには画像と動画を埋め込める

# 利用ツールについて

- [browserlist](https://qiita.com/takeshisakuma/items/0bc1c39ee976bd1f52d7)
- jest
- react-scripts
- typescript
- prettier
- storybook
- [material-ui](https://qiita.com/Ouvill/items/c6761c32d31ffb11e114)
- styled-component

# react導入手順

## samplesns

https://create-react-app.dev/docs/adding-typescript/

```bash
npm install -g create-react-app
npx create-react-app samplesns --template typescript
cd samplesns
npm start
```

## linter

```bash
cd samplesns
npm install -D husky lint-staged prettier
```

## debug

.vscode/launch.jsonを追加

## storybook

```bash
npx -p @storybook/cli sb init
npm run storybook
```

## analyzer

```bash
npm install --save source-map-explorer
```

## styled-component

```bash
npm install --save styled-components
npm install @types/styled-components
```

## パフォーマンス測定

https://ja.reactjs.org/docs/perf.html  
https://ja.reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab

## お役立ちリンク
[チートシート](https://devhints.io/react)
[React Patterns](https://reactpatterns.com/)
[React Hooksチートシート](https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/)
[majestic](https://github.com/Raathigesh/majestic)
