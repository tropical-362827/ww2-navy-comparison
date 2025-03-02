// usaDestroyers.js
// アメリカ海軍の駆逐艦データ

const usaDestroyers = [
    // ファラガット級駆逐艦
    { name: 'ファラガット (DD-348)', commissioned: new Date('1934-06-01'), fate: new Date('1945-10-14') },
    { name: 'デューイ (DD-349)', commissioned: new Date('1934-06-04'), fate: new Date('1945-10-16') },
    { name: 'ハル (DD-350)', commissioned: new Date('1934-01-11'), fate: new Date('1945-11-08') },
    { name: 'マクドノー (DD-351)', commissioned: new Date('1934-03-15'), fate: new Date('1945-11-22') },
    { name: 'ウォーデン (DD-352)', commissioned: new Date('1935-01-09'), fate: new Date('1945-01-18') },
    { name: 'デイル (DD-353)', commissioned: new Date('1935-01-17'), fate: new Date('1946-05-16') },
    { name: 'モンアグハン (DD-354)', commissioned: new Date('1935-01-19'), fate: new Date('1945-08-15') },
    { name: 'アレン (DD-355)', commissioned: new Date('1934-04-24'), fate: new Date('1945-10-15') },

    // マハン級駆逐艦
    { name: 'マハン (DD-364)', commissioned: new Date('1936-08-18'), fate: new Date('1944-12-07') },
    { name: 'カミングス (DD-365)', commissioned: new Date('1936-11-25'), fate: new Date('1947-12-17') },
    { name: 'ダンラップ (DD-366)', commissioned: new Date('1937-06-12'), fate: new Date('1947-12-14') },
    { name: 'フラッシャー (DD-367)', commissioned: new Date('1936-10-01'), fate: new Date('1945-08-28') },
    { name: 'カシン (DD-372)', commissioned: new Date('1936-12-28'), fate: new Date('1945-12-02') },
    { name: 'コングリーブ (DD-371)', commissioned: new Date('1936-11-05'), fate: new Date('1946-02-05') },
    { name: 'ダウンズ (DD-375)', commissioned: new Date('1937-04-19'), fate: new Date('1945-11-17') },
    { name: 'クッシング (DD-376)', commissioned: new Date('1937-08-28'), fate: new Date('1942-11-13') },
    { name: 'パーキンス (DD-377)', commissioned: new Date('1937-09-18'), fate: new Date('1943-11-29') },
    { name: 'スミス (DD-378)', commissioned: new Date('1936-09-19'), fate: new Date('1946-03-03') },
    { name: 'プレストン (DD-379)', commissioned: new Date('1936-10-27'), fate: new Date('1942-11-15') },
    { name: 'ショウ (DD-373)', commissioned: new Date('1936-09-18'), fate: new Date('1945-10-02') },
    { name: 'トッケン (DD-374)', commissioned: new Date('1937-01-23'), fate: new Date('1944-12-03') },

    // グリッドレー級駆逐艦
    { name: 'グリッドレー (DD-380)', commissioned: new Date('1937-06-24'), fate: new Date('1945-08-18') },
    { name: 'クライハン (DD-381)', commissioned: new Date('1937-10-19'), fate: new Date('1945-09-05') },
    { name: 'マクコール (DD-400)', commissioned: new Date('1938-06-22'), fate: new Date('1946-11-19') },
    { name: 'モーリー (DD-401)', commissioned: new Date('1938-08-01'), fate: new Date('1946-07-01') },

    // バグレー級駆逐艦
    { name: 'バグレー (DD-386)', commissioned: new Date('1937-08-12'), fate: new Date('1942-03-02') },
    { name: 'ブルー (DD-387)', commissioned: new Date('1937-08-14'), fate: new Date('1942-08-22') },
    { name: 'ヘルム (DD-388)', commissioned: new Date('1937-10-16'), fate: new Date('1945-08-16') },
    { name: 'ムグフォード (DD-389)', commissioned: new Date('1937-08-16'), fate: new Date('1946-08-11') },
    { name: 'ラルフ・タルボット (DD-390)', commissioned: new Date('1937-10-14'), fate: new Date('1945-10-08') },
    { name: 'ヘンリー (DD-391)', commissioned: new Date('1937-01-17'), fate: new Date('1945-10-15') },
    { name: 'ジャーヴィス (DD-393)', commissioned: new Date('1937-10-27'), fate: new Date('1942-08-09') },
    { name: 'パターソン (DD-392)', commissioned: new Date('1937-09-22'), fate: new Date('1945-11-08') },

    // ソマーズ級駆逐艦
    { name: 'ソマーズ (DD-381)', commissioned: new Date('1939-09-01'), fate: new Date('1947-05-28') },
    { name: 'サンプソン (DD-394)', commissioned: new Date('1938-08-03'), fate: new Date('1946-11-01') },
    { name: 'デイヴィス (DD-395)', commissioned: new Date('1938-11-09'), fate: new Date('1945-11-04') },
    { name: 'ジューエット (DD-396)', commissioned: new Date('1938-10-12'), fate: new Date('1945-11-26') },
    { name: 'ウォーリントン (DD-383)', commissioned: new Date('1938-09-15'), fate: new Date('1943-09-13') },

    // ベンソン級駆逐艦
    { name: 'ベンソン (DD-421)', commissioned: new Date('1940-07-25'), fate: new Date('1946-07-01') },
    { name: 'メイヨー (DD-422)', commissioned: new Date('1940-09-18'), fate: new Date('1946-11-18') },
    { name: 'マディソン (DD-425)', commissioned: new Date('1940-08-06'), fate: new Date('1946-12-13') },
    { name: 'ハトフィールド (DD-231)', commissioned: new Date('1940-04-16'), fate: new Date('1946-02-13') },
    { name: 'トリップ (DD-403)', commissioned: new Date('1939-11-01'), fate: new Date('1946-03-18') },
    { name: 'ワイルキ (DD-408)', commissioned: new Date('1940-04-27'), fate: new Date('1946-07-08') },
    { name: 'ウェインライト (DD-419)', commissioned: new Date('1940-04-15'), fate: new Date('1946-05-17') },
    { name: 'ラング (DD-399)', commissioned: new Date('1939-05-30'), fate: new Date('1946-12-16') },
    { name: 'スターック (DD-406)', commissioned: new Date('1939-08-25'), fate: new Date('1946-11-15') },
    { name: 'ステレット (DD-407)', commissioned: new Date('1939-08-15'), fate: new Date('1946-06-21') },
    { name: 'スティーブンソン (DD-503)', commissioned: new Date('1942-12-15'), fate: new Date('1968-10-22') },
    { name: 'ワイク (DD-420)', commissioned: new Date('1940-04-28'), fate: new Date('1946-12-19') },
    { name: 'リバモア (DD-429)', commissioned: new Date('1940-10-07'), fate: new Date('1947-01-17') },
    { name: 'エバハート (DD-430)', commissioned: new Date('1940-12-09'), fate: new Date('1946-12-03') },
    { name: 'プラット (DD-431)', commissioned: new Date('1940-12-18'), fate: new Date('1946-06-18') },

    // グリーブス級駆逐艦
    { name: 'グリーブス (DD-423)', commissioned: new Date('1940-05-01'), fate: new Date('1945-11-01') },
    { name: 'ニブラック (DD-424)', commissioned: new Date('1940-08-01'), fate: new Date('1946-07-25') },
    { name: 'フォレスト (DD-461)', commissioned: new Date('1942-01-13'), fate: new Date('1945-11-16') },
    { name: 'ロブリン (DD-462)', commissioned: new Date('1942-01-07'), fate: new Date('1944-08-01') },
    { name: 'タナー (DD-484)', commissioned: new Date('1942-07-23'), fate: new Date('1946-02-14') },

    // ブリストル級駆逐艦
    { name: 'ブリストル (DD-453)', commissioned: new Date('1941-10-22'), fate: new Date('1943-10-12') },
    { name: 'エルリマン (DD-454)', commissioned: new Date('1941-09-04'), fate: new Date('1943-11-26') },
    { name: 'マーナド (DD-458)', commissioned: new Date('1941-12-15'), fate: new Date('1944-04-06') },
    { name: 'ホブソン (DD-464)', commissioned: new Date('1942-01-22'), fate: new Date('1952-04-26') },
    { name: 'エドソール (DD-457)', commissioned: new Date('1941-11-10'), fate: new Date('1943-11-29') },

    // フレッチャー級駆逐艦 (一部のみ掲載 - 数が多いため)
    { name: 'フレッチャー (DD-445)', commissioned: new Date('1942-06-30'), fate: new Date('1969-08-01') },
    { name: 'ラドフォード (DD-446)', commissioned: new Date('1942-07-22'), fate: new Date('1969-11-10') },
    { name: 'ジェンキンス (DD-447)', commissioned: new Date('1942-07-31'), fate: new Date('1969-08-02') },
    { name: 'ラフェイ (DD-459)', commissioned: new Date('1942-10-31'), fate: new Date('1943-08-07') },
    { name: 'オバノン (DD-450)', commissioned: new Date('1943-06-26'), fate: new Date('1970-07-01') },
    { name: 'ニコラス (DD-449)', commissioned: new Date('1943-06-04'), fate: new Date('1970-01-30') },
    { name: 'テイラー (DD-468)', commissioned: new Date('1942-08-28'), fate: new Date('1969-08-03') },
    { name: 'デ・ヘブン (DD-469)', commissioned: new Date('1942-09-21'), fate: new Date('1969-01-01') },
    { name: 'ブラッチャー (DD-470)', commissioned: new Date('1942-08-16'), fate: new Date('1945-07-25') },
    { name: 'ウィルソン (DD-408)', commissioned: new Date('1942-09-10'), fate: new Date('1960-01-28') },
    { name: 'スタックポール (DD-471)', commissioned: new Date('1942-10-05'), fate: new Date('1973-07-26') },
    { name: 'スティーブンソン (DD-472)', commissioned: new Date('1942-12-15'), fate: new Date('1966-07-29') },
    { name: 'フランク・ノックス (DD-742)', commissioned: new Date('1944-12-11'), fate: new Date('1971-01-30') },
    { name: 'モンセン (DD-448)', commissioned: new Date('1942-03-14'), fate: new Date('1945-03-26') },
    { name: 'メルヴィン (DD-680)', commissioned: new Date('1943-11-24'), fate: new Date('1973-10-15') },
    { name: 'ハズェルウッド (DD-531)', commissioned: new Date('1943-06-31'), fate: new Date('1967-01-01') },
    { name: 'フォレスト・シャーマン (DD-931)', commissioned: new Date('1955-11-09'), fate: new Date('1983-11-05') },
    { name: 'キッド (DD-661)', commissioned: new Date('1943-04-23'), fate: new Date('1964-06-19') },
    { name: 'チャンドラー (DD-717)', commissioned: new Date('1946-03-22'), fate: new Date('1975-04-01') },
    { name: 'ホウェル (DD-482)', commissioned: new Date('1942-09-03'), fate: new Date('1970-11-01') },
    { name: 'ヒューストン (DD-592)', commissioned: new Date('1944-06-11'), fate: new Date('1947-12-04') },
    { name: 'グレゴリー (DD-802)', commissioned: new Date('1944-07-29'), fate: new Date('1970-01-01') },
    { name: 'リトル (DD-803)', commissioned: new Date('1944-08-19'), fate: new Date('1970-12-01') },
    { name: 'レニー (DD-728)', commissioned: new Date('1944-02-23'), fate: new Date('1974-10-30') },

    // アレン・M・サムナー級駆逐艦
    { name: 'アレン・M・サムナー (DD-692)', commissioned: new Date('1944-01-26'), fate: new Date('1973-08-15') },
    { name: 'モール (DD-693)', commissioned: new Date('1944-02-10'), fate: new Date('1982-08-27') },
    { name: 'インガソル (DD-652)', commissioned: new Date('1943-08-31'), fate: new Date('1970-05-19') },
    { name: 'ノーマン・スコット (DD-690)', commissioned: new Date('1943-11-05'), fate: new Date('1973-04-27') },
    { name: 'マードン (DD-726)', commissioned: new Date('1944-04-17'), fate: new Date('1971-01-02') },
    { name: 'ブルー (DD-744)', commissioned: new Date('1944-03-20'), fate: new Date('1971-02-01') },
    { name: 'ブッシュ (DD-529)', commissioned: new Date('1943-05-10'), fate: new Date('1945-04-06') },
    { name: 'ベンサム (DD-796)', commissioned: new Date('1944-03-20'), fate: new Date('1973-04-30') },
    { name: 'オルウェン (DD-886)', commissioned: new Date('1945-07-23'), fate: new Date('1983-10-04') },
    { name: 'デ・ヘブン (DD-727)', commissioned: new Date('1944-03-31'), fate: new Date('1973-09-27') },

    // ギアリング級駆逐艦
    { name: 'ギアリング (DD-710)', commissioned: new Date('1945-05-03'), fate: new Date('1973-01-01') },
    { name: 'コンペンス (DD-883)', commissioned: new Date('1945-05-22'), fate: new Date('1974-12-02') },
    { name: 'ピッカリング (DD-685)', commissioned: new Date('1945-06-30'), fate: new Date('1960-08-28') },
    { name: 'ローランド (DD-805)', commissioned: new Date('1945-03-01'), fate: new Date('1993-04-09') },
    { name: 'マケンジー (DD-836)', commissioned: new Date('1945-07-31'), fate: new Date('1985-10-30') },
    { name: 'スモール (DD-838)', commissioned: new Date('1945-04-07'), fate: new Date('1970-12-01') },
    { name: 'ウィリアム・R・ラッシュ (DD-714)', commissioned: new Date('1945-09-21'), fate: new Date('1981-02-01') },
    { name: 'ウィルツィー (DD-716)', commissioned: new Date('1945-01-12'), fate: new Date('1991-03-29') },
    { name: 'セオドア・E・チャンドラー (DD-717)', commissioned: new Date('1945-03-22'), fate: new Date('1979-12-01') },
    { name: 'ハモン (DD-832)', commissioned: new Date('1945-03-27'), fate: new Date('1967-01-02') },
    { name: 'スキャンランド (DD-784)', commissioned: new Date('1945-09-10'), fate: new Date('1970-06-09') },
    { name: 'ハンスン (DD-832)', commissioned: new Date('1944-05-11'), fate: new Date('1990-01-01') },
    { name: 'ハーバート・J・トーマス (DD-833)', commissioned: new Date('1945-05-29'), fate: new Date('1979-10-04') },
    { name: 'ターナー (DD-834)', commissioned: new Date('1945-08-12'), fate: new Date('1969-09-26') },
    { name: 'メレディス (DD-890)', commissioned: new Date('1945-03-31'), fate: new Date('1979-06-29') },
    { name: 'マクゴーン (DD-678)', commissioned: new Date('1943-12-20'), fate: new Date('1973-12-30') },
    { name: 'ジョン・R・ピアース (DD-753)', commissioned: new Date('1944-12-30'), fate: new Date('1973-07-02') },
    { name: 'フランク・E・エバンス (DD-754)', commissioned: new Date('1945-02-03'), fate: new Date('1969-06-03') },
    { name: 'キャスティリア (DD-773)', commissioned: new Date('1944-05-11'), fate: new Date('1973-12-19') },
    { name: 'クーパー (DD-883)', commissioned: new Date('1944-12-27'), fate: new Date('1982-12-03') },

    // その他の駆逐艦
    { name: 'バトラー (DD-636)', commissioned: new Date('1942-08-15'), fate: new Date('1946-05-08') },
    { name: 'エメルソン (DD-457)', commissioned: new Date('1942-12-04'), fate: new Date('1946-07-01') },
    { name: 'キーオフィン (DD-445)', commissioned: new Date('1942-02-23'), fate: new Date('1946-07-19') },
    { name: 'ベンハム (DD-397)', commissioned: new Date('1939-02-02'), fate: new Date('1945-04-24') },
    { name: 'エルレット (DD-398)', commissioned: new Date('1939-03-17'), fate: new Date('1946-06-21') },
    { name: 'チャナー (DD-430)', commissioned: new Date('1940-12-09'), fate: new Date('1946-12-03') },
    { name: 'エドソール (DD-219)', commissioned: new Date('1920-11-26'), fate: new Date('1946-05-18') },
    { name: 'バレット (DD-385)', commissioned: new Date('1941-02-19'), fate: new Date('1945-11-03') },
    { name: 'ダンロップ (DD-336)', commissioned: new Date('1935-12-12'), fate: new Date('1945-10-05') },
    { name: 'フィッチ (DD-462)', commissioned: new Date('1942-02-03'), fate: new Date('1944-10-12') },
    { name: 'バード (DD-463)', commissioned: new Date('1942-03-17'), fate: new Date('1945-09-15') },
    { name: 'ゴウィン (DD-433)', commissioned: new Date('1941-01-18'), fate: new Date('1945-03-10') },
    { name: 'バウチ (DD-489)', commissioned: new Date('1942-07-21'), fate: new Date('1945-08-15') },
    { name: 'ダベンポート (DD-487)', commissioned: new Date('1942-09-15'), fate: new Date('1945-12-24') },
    { name: 'ヘイル (DD-642)', commissioned: new Date('1943-09-15'), fate: new Date('1946-08-15') },
    { name: 'ハグレー (DD-748)', commissioned: new Date('1944-01-31'), fate: new Date('1975-01-15') },
    { name: 'ジョンストン (DD-557)', commissioned: new Date('1943-10-27'), fate: new Date('1944-10-25') },
    { name: 'ホエル (DD-556)', commissioned: new Date('1943-07-30'), fate: new Date('1944-10-25') },
    { name: 'サミュエル・B・ロバーツ (DE-413)', commissioned: new Date('1944-04-28'), fate: new Date('1944-10-25') },
    { name: 'リューク (DD-244)', commissioned: new Date('1921-01-02'), fate: new Date('1946-02-26') },
    { name: 'ウォーター (DD-416)', commissioned: new Date('1940-04-14'), fate: new Date('1944-06-15') },
    { name: 'ジョン・D・フォード (DD-228)', commissioned: new Date('1920-12-30'), fate: new Date('1945-07-18') },
    { name: 'ポープ (DD-225)', commissioned: new Date('1920-10-27'), fate: new Date('1942-03-01') },
    { name: 'ペリー (DD-226)', commissioned: new Date('1920-10-07'), fate: new Date('1942-02-28') },
    { name: 'ヒルバート (DD-231)', commissioned: new Date('1920-12-31'), fate: new Date('1946-03-15') },
    { name: 'ベインブリッジ (DD-246)', commissioned: new Date('1921-01-09'), fate: new Date('1945-07-21') },
    { name: 'オーグリック (DD-421)', commissioned: new Date('1940-10-14'), fate: new Date('1945-01-10') },
    { name: 'ゲイブルソン (DD-361)', commissioned: new Date('1935-10-23'), fate: new Date('1945-08-15') },
    { name: 'ドレクスラー (DD-741)', commissioned: new Date('1944-09-14'), fate: new Date('1945-05-28') },
    { name: 'ブロンソン (DD-668)', commissioned: new Date('1943-06-27'), fate: new Date('1944-07-28') }
];

export default usaDestroyers;