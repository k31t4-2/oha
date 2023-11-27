## 勉強になったこと
<!-- テキストがover wrapしたときに使える指定 -->
      // white-space: nowrap;
      // overflow: hidden;
      // text-overflow: ellipsis;

  - そもそも要素の性質を理解しないといけない。
  ブロック要素だと横いっぱいに広がる

## すごい大事
1. calcでのwidthの計算。
2. 

#### 全体
- sp版から作る
- 変数の定義、breakpoint、使い回すモジュール、などは最初に定義しておく

#### header
- calcの使い方

#### mv
- display: block;とwidth: fit-content;の組み合わせでテキストの幅に応じてスタイリングができる。
- 「font-feature-settings: "palt" on;」・・・CSSで文字詰めできる指定。
- 「width: fit-content;」・・・コンテンツの幅に合わせてくれる指定。
- 画像のimgタグにはwidthを絶対値で固定してしまう。
  - 親要素で最大の幅の値をcalcを使って担保させる。
  例：）width: calc(600px / 1040px * 100%);
  によって、600pxは担保される。

#### case
- gridをうまく使う。
  
#### news
- display: flex; でほぼ完成してしまうので、使い方をよく知る
- flex-shrinkの使い方。widthを変更したくない子要素に適応する
- innerのpaddingを可変にしてあげる
  例：） 
  ```
  padding-right: calc(105px / module.$width-inner * 100%);
  padding-left: calc(105px / module.$width-inner * 100%);
  ```

#### about 
- positionを指定したらpxで指定する

#### movie
- 現在の縦横比率を揃えるのはaspect-ration.
- 

#### how-to-use 
    // paddingでテキストを中央寄せしなくても
    // flexで解決できる
    // padding-top: calc(20px - 3px);
    // padding-bottom: calc(20px - 3px);


#### contact 
- padding 6-7-8-9でそれぞれ「px」が自動入力される
- divで囲んで要素を扱いやすくする
- [type="***"]にして指定する
- 親要素と同じスタイリングであればinheritを積極的に使っていく
- flex-shrinkを0にすると「この要素は縮めないでください」と伝えることができます。flex-growを1にすると「余った分だけ伸ばしてください」と伝えることができます

#### Q&A
      display: grid;
      place-items: center;
      // 上の2行で上下中央真ん中寄せになる
