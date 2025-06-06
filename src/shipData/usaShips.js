// usaShips.js
// アメリカ海軍の艦艇データ（駆逐艦を除く）（修正版）

// アメリカの艦艇データ - 駆逐艦を除く
const usaShips = {
  carrier: [
    { name: 'ワスプ', commissioned: new Date('1940-04-25'), fate: new Date('1942-09-15') },
    // レキシントン級
    { name: 'レキシントン', commissioned: new Date('1927-12-14'), fate: new Date('1942-05-24') },
    { name: 'サラトガ', commissioned: new Date('1927-11-16'), fate: new Date('1946-07-25') },
    // ヨークタウン級
    { name: 'ヨークタウン', commissioned: new Date('1937-09-30'), fate: new Date('1942-06-07') },
    { name: 'エンタープライズ', commissioned: new Date('1938-05-12'), fate: new Date('1947-02-17') },
    { name: 'ホーネット', commissioned: new Date('1941-10-20'), fate: new Date('1942-10-27') },
    // エセックス級
    { name: 'エセックス', commissioned: new Date('1942-12-31'), fate: new Date('1969-06-30') },
    { name: 'レキシントン(2代目)', commissioned: new Date('1943-02-17'), fate: new Date('1991-11-08') },
    { name: 'ヨークタウン(2代目)', commissioned: new Date('1943-04-15'), fate: new Date('1970-06-27') },
    { name: 'バンカー・ヒル', commissioned: new Date('1943-05-25'), fate: new Date('1947-01-09') },
    { name: 'イントレピッド', commissioned: new Date('1943-08-16'), fate: new Date('1974-03-15') },
    { name: 'ワスプ(2代目)', commissioned: new Date('1943-11-24'), fate: new Date('1972-07-01') },
    { name: 'ホーネット(2代目)', commissioned: new Date('1943-11-29'), fate: new Date('1970-06-26') },
    { name: 'フランクリン', commissioned: new Date('1944-01-31'), fate: new Date('1964-10-01') },
    { name: 'ハンコック', commissioned: new Date('1944-04-15'), fate: new Date('1976-01-31') },
    { name: 'タイコンデロガ', commissioned: new Date('1944-05-08'), fate: new Date('1973-09-01') },
    { name: 'レイク・シャンプレーン', commissioned: new Date('1945-06-03'), fate: new Date('1966-05-02') },
    { name: 'ベニントン', commissioned: new Date('1944-08-06'), fate: new Date('1970-01-15') },
    { name: 'シャングリラ', commissioned: new Date('1944-09-15'), fate: new Date('1971-07-30') },
    { name: 'ランドルフ', commissioned: new Date('1944-10-09'), fate: new Date('1969-02-13') },
    { name: 'ボノム・リシャール', commissioned: new Date('1944-11-26'), fate: new Date('1971-07-03') },
    { name: 'アンティータム', commissioned: new Date('1945-01-28'), fate: new Date('1963-05-08') },
    { name: 'ボクサー', commissioned: new Date('1945-04-16'), fate: new Date('1969-12-01') },
    { name: 'レイク・シャンプレイン', commissioned: new Date('1945-06-03'), fate: new Date('1966-05-02') },
    { name: 'プリンストン(2代目)', commissioned: new Date('1945-11-18'), fate: new Date('1970-01-30') },
    { name: 'タラワ', commissioned: new Date('1945-12-08'), fate: new Date('1960-05-13') },
    // ミッドウェー級
    { name: 'ミッドウェー', commissioned: new Date('1945-09-10'), fate: new Date('1992-04-11') }
  ],
  lightCarrier: [
    { name: 'レンジャー', commissioned: new Date('1934-06-04'), fate: new Date('1946-10-18') },
    { name: 'ラングレー', commissioned: new Date('1922-03-20'), fate: new Date('1942-02-27') },
    // インディペンデンス級
    { name: 'インディペンデンス', commissioned: new Date('1943-01-14'), fate: new Date('1946-08-28') },
    { name: 'プリンストン', commissioned: new Date('1943-02-25'), fate: new Date('1944-10-24') },
    { name: 'ベロー・ウッド', commissioned: new Date('1943-03-31'), fate: new Date('1947-01-13') },
    { name: 'カウペンス', commissioned: new Date('1943-05-28'), fate: new Date('1947-01-13') },
    { name: 'モンテレー', commissioned: new Date('1943-06-11'), fate: new Date('1956-01-16') },
    { name: 'ラングレー(2代目)', commissioned: new Date('1943-08-31'), fate: new Date('1947-02-11') },
    { name: 'カボット', commissioned: new Date('1943-07-24'), fate: new Date('1955-01-21') },
    { name: 'バターン', commissioned: new Date('1943-11-17'), fate: new Date('1954-04-09') },
    { name: 'サン・ジャシント', commissioned: new Date('1943-11-15'), fate: new Date('1970-06-01') },
    // 護衛空母
    // ロング・アイランド級
    { name: 'ロング・アイランド', commissioned: new Date('1941-06-02'), fate: new Date('1946-03-26') },
    { name: 'アーチャー', commissioned: new Date('1941-11-17'), fate: new Date('1946-02-26') },
    // アヴェンジャー級
    { name: 'チャージャー', commissioned: new Date('1942-03-03'), fate: new Date('1946-03-15') },
    // ボーグ級
    { name: 'ボーグ', commissioned: new Date('1942-09-26'), fate: new Date('1946-11-30') },
    { name: 'カード', commissioned: new Date('1942-11-08'), fate: new Date('1970-03-10') },
    { name: 'コパヒー', commissioned: new Date('1942-06-15'), fate: new Date('1946-07-05') },
    { name: 'コア', commissioned: new Date('1942-12-10'), fate: new Date('1946-10-04') },
    { name: 'ナッソー', commissioned: new Date('1942-08-20'), fate: new Date('1946-10-28') },
    { name: 'オルタマハ', commissioned: new Date('1942-09-15'), fate: new Date('1946-09-27') },
    { name: 'バーンズ', commissioned: new Date('1943-02-20'), fate: new Date('1946-08-29') },
    { name: 'ブロック・アイランド', commissioned: new Date('1942-05-01'), fate: new Date('1943-03-08') },
    { name: 'ブレトン', commissioned: new Date('1943-04-12'), fate: new Date('1946-08-20') },
    { name: 'クロアタン', commissioned: new Date('1943-04-28'), fate: new Date('1946-05-20') },
    { name: 'プリンス・ウィリアム', commissioned: new Date('1943-04-09'), fate: new Date('1946-08-29') },
    // サンガモン級
    { name: 'サンガモン', commissioned: new Date('1942-08-25'), fate: new Date('1945-10-24') },
    { name: 'スワニー', commissioned: new Date('1942-09-24'), fate: new Date('1947-01-08') },
    { name: 'シェナンゴ', commissioned: new Date('1942-09-19'), fate: new Date('1946-08-14') },
    { name: 'サンティー', commissioned: new Date('1942-08-24'), fate: new Date('1946-10-21') },
    // カサブランカ級
    { name: 'カサブランカ', commissioned: new Date('1943-04-05'), fate: new Date('1946-06-10') },
    { name: 'リスカム・ベイ', commissioned: new Date('1943-08-07'), fate: new Date('1943-11-24') },
    { name: 'コーラル・シー', commissioned: new Date('1943-08-27'), fate: new Date('1946-08-05') },
    { name: 'コレヒドール', commissioned: new Date('1943-08-31'), fate: new Date('1958-09-04') },
    { name: 'ミッション・ベイ', commissioned: new Date('1943-09-13'), fate: new Date('1947-02-21') },
    { name: 'ガダルカナル', commissioned: new Date('1943-09-25'), fate: new Date('1946-07-15') },
    { name: 'マニラ・ベイ', commissioned: new Date('1943-10-05'), fate: new Date('1946-07-31') },
    { name: 'ナトマ・ベイ', commissioned: new Date('1943-10-14'), fate: new Date('1946-05-20') },
    { name: 'セント・ロー', commissioned: new Date('1943-10-23'), fate: new Date('1944-10-25') },
    { name: 'トリポリ', commissioned: new Date('1943-10-31'), fate: new Date('1958-11-25') },
    { name: 'ウェイク・アイランド', commissioned: new Date('1943-11-07'), fate: new Date('1946-04-05') },
    { name: 'ホワイト・プレインズ', commissioned: new Date('1943-11-15'), fate: new Date('1946-07-10') },
    { name: 'ソロモンズ', commissioned: new Date('1943-11-21'), fate: new Date('1946-05-15') },
    { name: 'カリニン・ベイ', commissioned: new Date('1943-11-27'), fate: new Date('1946-05-15') },
    { name: 'カサーン・ベイ', commissioned: new Date('1943-12-04'), fate: new Date('1946-07-06') },
    { name: 'ファンショー・ベイ', commissioned: new Date('1943-12-06'), fate: new Date('1946-08-14') },
    { name: 'キトカン・ベイ', commissioned: new Date('1943-12-15'), fate: new Date('1946-04-19') },
    { name: 'ツラギ', commissioned: new Date('1943-12-21'), fate: new Date('1946-04-30') },
    { name: 'ガンビア・ベイ', commissioned: new Date('1943-12-28'), fate: new Date('1944-10-25') },
    { name: 'ネヘンタ・ベイ', commissioned: new Date('1944-01-03'), fate: new Date('1945-05-15') },
    { name: 'ホガット・ベイ', commissioned: new Date('1943-12-04'), fate: new Date('1944-01-11') },
    { name: 'カダシャン・ベイ', commissioned: new Date('1944-01-18'), fate: new Date('1946-06-14') },
    { name: 'マーカス・アイランド', commissioned: new Date('1944-01-26'), fate: new Date('1946-12-12') },
    { name: 'サボ・アイランド', commissioned: new Date('1944-02-03'), fate: new Date('1946-12-12') },
    { name: 'オマニー・ベイ', commissioned: new Date('1943-12-29'), fate: new Date('1944-02-11') },
    { name: 'ペトロフ・ベイ', commissioned: new Date('1944-02-18'), fate: new Date('1946-07-31') },
    { name: 'ルディヤード・ベイ', commissioned: new Date('1944-02-25'), fate: new Date('1946-06-11') },
    { name: 'サギノー・ベイ', commissioned: new Date('1944-03-02'), fate: new Date('1946-06-06') },
    { name: 'サージャント・ベイ', commissioned: new Date('1944-03-09'), fate: new Date('1946-03-23') },
    { name: 'シャムロック・ベイ', commissioned: new Date('1944-03-15'), fate: new Date('1946-07-06') },
    { name: 'シップレイ・ベイ', commissioned: new Date('1944-03-21'), fate: new Date('1946-06-28') },
    { name: 'シットコー・ベイ', commissioned: new Date('1944-03-28'), fate: new Date('1954-07-27') },
    { name: 'スティーマー・ベイ', commissioned: new Date('1944-04-04'), fate: new Date('1946-02-04') },
    { name: 'ケープ・エスペランス', commissioned: new Date('1944-04-09'), fate: new Date('1959-01-15') },
    { name: 'タカニス・ベイ', commissioned: new Date('1944-04-15'), fate: new Date('1946-05-01') },
    { name: 'セティス・ベイ', commissioned: new Date('1944-04-12'), fate: new Date('1964-03-01') },
    { name: 'マカッサル・ストレイト', commissioned: new Date('1944-04-27'), fate: new Date('1946-08-09') },
    { name: 'ウィンダム・ベイ', commissioned: new Date('1944-05-03'), fate: new Date('1959-02-01') },
    { name: 'マキン・アイランド', commissioned: new Date('1944-05-09'), fate: new Date('1946-04-19') },
    { name: 'ルンガ・ポイント', commissioned: new Date('1944-05-14'), fate: new Date('1946-10-24') },
    { name: 'ビスマルク・シー', commissioned: new Date('1944-05-30'), fate: new Date('1945-02-21') },
    { name: 'サラマウワ', commissioned: new Date('1944-05-26'), fate: new Date('1946-05-09') },
    { name: 'ホーランディア', commissioned: new Date('1944-06-01'), fate: new Date('1947-01-17') },
    { name: 'クェゼリン', commissioned: new Date('1944-06-07'), fate: new Date('1946-08-16') },
    { name: 'アドミラルティ・アイランズ', commissioned: new Date('1944-06-13'), fate: new Date('1946-04-24') },
    { name: 'ブーゲンビル', commissioned: new Date('1944-06-18'), fate: new Date('1946-11-03') },
    { name: 'マタニカウ', commissioned: new Date('1944-06-24'), fate: new Date('1946-10-11') },
    { name: 'アッツ', commissioned: new Date('1944-06-30'), fate: new Date('1946-06-08') },
    { name: 'ロイ', commissioned: new Date('1944-07-06'), fate: new Date('1946-05-09') },
    { name: 'ムンダ', commissioned: new Date('1944-07-08'), fate: new Date('1946-04-24') },
    // コンスメント・ベイ級
    { name: 'コンスメント・ベイ', commissioned: new Date('1944-11-27'), fate: new Date('1946-11-30') },
    { name: 'ブロック・アイランド', commissioned: new Date('1944-12-30'), fate: new Date('1954-08-27') },
    { name: 'ギルバート・アイランズ', commissioned: new Date('1945-02-05'), fate: new Date('1955-01-15') },
    { name: 'クラ・ガルフ', commissioned: new Date('1945-05-12'), fate: new Date('1955-12-15') },
    { name: 'ケープ・グロスター', commissioned: new Date('1945-03-05'), fate: new Date('1946-11-05') },
    { name: 'サレルノ・ベイ', commissioned: new Date('1945-05-19'), fate: new Date('1954-02-16') },
    { name: 'ヴェラ・ガルフ', commissioned: new Date('1945-04-09'), fate: new Date('1970-12-01') },
    { name: 'シボニー', commissioned: new Date('1945-05-14'), fate: new Date('1956-07-31') },
    { name: 'ピュージェット・サウンド', commissioned: new Date('1945-06-18'), fate: new Date('1960-06-01') },
    { name: 'レンドヴァ', commissioned: new Date('1945-10-22'), fate: new Date('1955-06-30') },
    { name: 'バイロコ', commissioned: new Date('1945-07-16'), fate: new Date('1955-02-18') },
    { name: 'バドエン・ストレイト', commissioned: new Date('1945-11-14'), fate: new Date('1957-05-17') },
    { name: 'セイダー', commissioned: new Date('1945-09-04'), fate: new Date('1947-09-12') },
    { name: 'シシリー', commissioned: new Date('1946-02-27'), fate: new Date('1954-02-25') },
    { name: 'ポイント・クルーズ', commissioned: new Date('1945-10-16'), fate: new Date('1969-10-16') },
    { name: 'ミンドロ', commissioned: new Date('1945-12-04'), fate: new Date('1955-08-04') }
  ],
  battleship: [
    // フロリダ級
    { name: 'ユタ', commissioned: new Date('1911-08-31'), fate: new Date('1941-12-07') },
    // ワイオミング級
    { name: 'ワイオミング', commissioned: new Date('1912-09-25'), fate: new Date('1947-08-01') },
    { name: 'アーカンソー', commissioned: new Date('1912-09-17'), fate: new Date('1946-07-29') },
    // ニューヨーク級
    { name: 'ニューヨーク', commissioned: new Date('1914-04-15'), fate: new Date('1946-08-29') },
    { name: 'テキサス', commissioned: new Date('1914-03-12'), fate: new Date('1948-04-21') },
    // ネバダ級
    { name: 'ネバダ', commissioned: new Date('1916-03-11'), fate: new Date('1946-08-29') },
    { name: 'オクラホマ', commissioned: new Date('1916-05-02'), fate: new Date('1941-12-07') },
    // ペンシルベニア級
    { name: 'ペンシルベニア', commissioned: new Date('1916-06-12'), fate: new Date('1946-08-29') },
    { name: 'アリゾナ', commissioned: new Date('1916-10-17'), fate: new Date('1941-12-07') },
    // ニューメキシコ級
    { name: 'ニューメキシコ', commissioned: new Date('1918-05-20'), fate: new Date('1946-07-19') },
    { name: 'ミシシッピ', commissioned: new Date('1917-12-18'), fate: new Date('1956-09-17') },
    { name: 'アイダホ', commissioned: new Date('1919-03-24'), fate: new Date('1946-07-03') },
    // テネシー級
    { name: 'テネシー', commissioned: new Date('1920-06-03'), fate: new Date('1947-02-14') },
    { name: 'カリフォルニア', commissioned: new Date('1921-08-10'), fate: new Date('1947-02-14') },
    // コロラド級
    { name: 'コロラド', commissioned: new Date('1923-08-30'), fate: new Date('1947-01-27') },
    { name: 'メリーランド', commissioned: new Date('1921-07-21'), fate: new Date('1947-04-03') },
    { name: 'ウェストバージニア', commissioned: new Date('1923-12-01'), fate: new Date('1947-01-09') },
    // ノースカロライナ級
    { name: 'ノースカロライナ', commissioned: new Date('1941-04-09'), fate: new Date('1947-06-27') },
    { name: 'ワシントン', commissioned: new Date('1941-05-15'), fate: new Date('1947-06-27') },
    // サウスダコタ級
    { name: 'サウスダコタ', commissioned: new Date('1942-03-20'), fate: new Date('1947-01-31') },
    { name: 'インディアナ', commissioned: new Date('1942-04-30'), fate: new Date('1947-09-11') },
    { name: 'マサチューセッツ', commissioned: new Date('1942-05-12'), fate: new Date('1947-03-27') },
    { name: 'アラバマ', commissioned: new Date('1942-08-16'), fate: new Date('1947-01-09') },
    // アイオワ級
    { name: 'アイオワ', commissioned: new Date('1943-02-22'), fate: new Date('1990-10-26') },
    { name: 'ニュージャージー', commissioned: new Date('1943-05-23'), fate: new Date('1991-02-08') },
    { name: 'ミズーリ', commissioned: new Date('1944-06-11'), fate: new Date('1992-03-31') },
    { name: 'ウィスコンシン', commissioned: new Date('1944-04-16'), fate: new Date('1991-09-30') }
  ],
  battlecruiser: [],
  heavyCruiser: [
    // ペンサコーラ級
    { name: 'ペンサコーラ', commissioned: new Date('1930-02-09'), fate: new Date('1946-08-26') },
    { name: 'ソルトレイクシティ', commissioned: new Date('1929-12-11'), fate: new Date('1948-08-29') },
    // ノーサンプトン級
    { name: 'ノーサンプトン', commissioned: new Date('1930-05-17'), fate: new Date('1942-11-30') },
    { name: 'チェスター', commissioned: new Date('1930-06-24'), fate: new Date('1946-07-10') },
    { name: 'ルイビル', commissioned: new Date('1931-01-15'), fate: new Date('1946-06-17') },
    { name: 'シカゴ', commissioned: new Date('1931-03-09'), fate: new Date('1943-01-30') },
    { name: 'ヒューストン', commissioned: new Date('1930-06-17'), fate: new Date('1942-03-01') },
    { name: 'オーガスタ', commissioned: new Date('1931-01-30'), fate: new Date('1946-07-16') },
    // ポートランド級
    { name: 'ポートランド', commissioned: new Date('1933-02-23'), fate: new Date('1946-07-12') },
    { name: 'インディアナポリス', commissioned: new Date('1932-11-15'), fate: new Date('1945-07-30') },
    // ニューオーリンズ級
    { name: 'ニューオーリンズ', commissioned: new Date('1934-02-15'), fate: new Date('1947-02-10') },
    { name: 'アストリア', commissioned: new Date('1934-04-28'), fate: new Date('1942-08-09') },
    { name: 'ミネアポリス', commissioned: new Date('1934-05-19'), fate: new Date('1947-02-10') },
    { name: 'タスカルーサ', commissioned: new Date('1934-08-17'), fate: new Date('1946-02-13') },
    { name: 'サンフランシスコ', commissioned: new Date('1934-02-10'), fate: new Date('1946-02-10') },
    { name: 'クインシー', commissioned: new Date('1936-06-09'), fate: new Date('1942-08-09') },
    { name: 'ヴィンセンス', commissioned: new Date('1937-02-24'), fate: new Date('1942-08-09') },
    // ウィチタ級
    { name: 'ウィチタ', commissioned: new Date('1939-02-16'), fate: new Date('1947-02-03') },
    // ボルチモア級
    { name: 'ボルチモア', commissioned: new Date('1943-04-15'), fate: new Date('1956-05-31') },
    { name: 'ボストン', commissioned: new Date('1943-06-30'), fate: new Date('1970-05-05') },
    { name: 'キャンベラ', commissioned: new Date('1943-10-14'), fate: new Date('1970-02-02') },
    { name: 'クインシー（2代目）', commissioned: new Date('1943-12-15'), fate: new Date('1954-07-02') },
    { name: 'ピッツバーグ', commissioned: new Date('1944-10-10'), fate: new Date('1956-08-28') },
    { name: 'セント・ポール', commissioned: new Date('1945-02-17'), fate: new Date('1971-04-30') },
    { name: 'コロンバス', commissioned: new Date('1945-06-08'), fate: new Date('1975-01-31') },
    { name: 'ヘレナ（2代目）', commissioned: new Date('1945-09-04'), fate: new Date('1963-06-29') },
    { name: 'ブレマートン', commissioned: new Date('1945-04-29'), fate: new Date('1960-07-29') },
    { name: 'フォール・リバー', commissioned: new Date('1945-07-01'), fate: new Date('1947-10-31') },
    { name: 'メイコン', commissioned: new Date('1945-08-26'), fate: new Date('1961-03-10') },
    { name: 'ロサンゼルス', commissioned: new Date('1945-07-22'), fate: new Date('1963-11-15') },
    { name: 'シカゴ（2代目）', commissioned: new Date('1945-01-10'), fate: new Date('1980-03-01') }
  ],
  lightCruiser: [
    // オマハ級
    { name: 'オマハ', commissioned: new Date('1923-02-24'), fate: new Date('1945-11-01') },
    { name: 'ミルウォーキー', commissioned: new Date('1923-06-20'), fate: new Date('1949-03-06') },
    { name: 'シンシナティ', commissioned: new Date('1924-01-01'), fate: new Date('1945-11-01') },
    { name: 'ローリー', commissioned: new Date('1924-02-06'), fate: new Date('1945-11-02') },
    { name: 'デトロイト', commissioned: new Date('1923-07-31'), fate: new Date('1946-01-11') },
    { name: 'リッチモンド', commissioned: new Date('1923-07-02'), fate: new Date('1945-12-21') },
    { name: 'コンコード', commissioned: new Date('1923-11-03'), fate: new Date('1945-12-12') },
    { name: 'トレントン', commissioned: new Date('1924-04-19'), fate: new Date('1945-12-20') },
    { name: 'マーブルヘッド', commissioned: new Date('1924-09-08'), fate: new Date('1945-11-01') },
    { name: 'メンフィス', commissioned: new Date('1925-02-04'), fate: new Date('1945-12-17') },
    // ブルックリン級
    { name: 'ブルックリン', commissioned: new Date('1937-09-30'), fate: new Date('1947-01-03') },
    { name: 'フィラデルフィア', commissioned: new Date('1937-09-23'), fate: new Date('1947-02-03') },
    { name: 'サバンナ', commissioned: new Date('1938-03-10'), fate: new Date('1947-02-03') },
    { name: 'ナッシュビル', commissioned: new Date('1938-06-06'), fate: new Date('1946-06-24') },
    { name: 'フェニックス', commissioned: new Date('1938-10-03'), fate: new Date('1946-07-03') },
    { name: 'ボイシ', commissioned: new Date('1938-08-02'), fate: new Date('1946-07-01') },
    { name: 'ホノルル', commissioned: new Date('1938-06-15'), fate: new Date('1947-02-03') },
    { name: 'セントルイス', commissioned: new Date('1939-05-19'), fate: new Date('1946-06-20') },
    { name: 'ヘレナ', commissioned: new Date('1939-09-18'), fate: new Date('1943-07-06') },
    // アトランタ級
    { name: 'アトランタ', commissioned: new Date('1941-12-24'), fate: new Date('1942-11-13') },
    { name: 'ジュノー', commissioned: new Date('1942-02-14'), fate: new Date('1942-11-13') },
    { name: 'サンディエゴ', commissioned: new Date('1942-01-10'), fate: new Date('1946-11-04') },
    { name: 'サンフアン', commissioned: new Date('1942-02-28'), fate: new Date('1946-11-09') },
    { name: 'オークランド', commissioned: new Date('1943-07-17'), fate: new Date('1949-07-01') },
    { name: 'リノ', commissioned: new Date('1943-12-28'), fate: new Date('1946-11-04') },
    { name: 'フリント', commissioned: new Date('1944-08-31'), fate: new Date('1947-05-06') },
    { name: 'ツーソン', commissioned: new Date('1945-02-03'), fate: new Date('1949-06-11') },
    // クリーブランド級
    { name: 'クリーブランド', commissioned: new Date('1942-06-15'), fate: new Date('1947-02-07') },
    { name: 'コロンビア', commissioned: new Date('1942-07-09'), fate: new Date('1946-11-30') },
    { name: 'モントピリア', commissioned: new Date('1942-09-09'), fate: new Date('1947-01-24') },
    { name: 'デンバー', commissioned: new Date('1942-10-15'), fate: new Date('1947-02-07') },
    { name: 'サンタフェ', commissioned: new Date('1942-11-24'), fate: new Date('1946-10-19') },
    { name: 'バーミンガム', commissioned: new Date('1943-01-29'), fate: new Date('1947-01-02') },
    { name: 'モービル', commissioned: new Date('1943-03-24'), fate: new Date('1947-05-09') },
    { name: 'ヴィンセンス', commissioned: new Date('1944-01-21'), fate: new Date('1946-09-10') },
    { name: 'パサデナ', commissioned: new Date('1944-06-08'), fate: new Date('1950-01-12') },
    { name: 'スプリングフィールド', commissioned: new Date('1944-09-09'), fate: new Date('1974-05-15') },
    { name: 'トピカ', commissioned: new Date('1944-12-23'), fate: new Date('1969-06-05') },
    { name: 'ビロクシ', commissioned: new Date('1943-08-31'), fate: new Date('1946-08-29') },
    { name: 'ヒューストン（2代目）', commissioned: new Date('1943-12-20'), fate: new Date('1947-12-15') },
    { name: 'プロビデンス', commissioned: new Date('1945-05-15'), fate: new Date('1973-08-31') },
    { name: 'ヴィックスバーグ', commissioned: new Date('1944-06-12'), fate: new Date('1947-06-30') },
    { name: 'ダルース', commissioned: new Date('1944-09-18'), fate: new Date('1949-06-25') },
    { name: 'マイアミ', commissioned: new Date('1943-12-28'), fate: new Date('1947-06-30') },
    { name: 'アストリア（2代目）', commissioned: new Date('1944-05-17'), fate: new Date('1949-07-01') },
    { name: 'オクラホマシティ', commissioned: new Date('1944-12-22'), fate: new Date('1979-12-15') },
    { name: 'リトルロック', commissioned: new Date('1945-06-17'), fate: new Date('1976-11-22') },
    { name: 'アムステルダム', commissioned: new Date('1945-01-08'), fate: new Date('1947-06-30') },
    { name: 'ポーツマス', commissioned: new Date('1945-06-25'), fate: new Date('1949-06-15') },
    { name: 'ウィルクスバリ', commissioned: new Date('1944-07-01'), fate: new Date('1947-10-09') },
    { name: 'アトランタ', commissioned: new Date('1944-12-03'), fate: new Date('1949-07-01') },
    { name: 'デイトン', commissioned: new Date('1945-01-07'), fate: new Date('1949-03-01') }
  ]
};

export default usaShips;