// italyDestroyers.js
// イタリア海軍の駆逐艦データ

const italyDestroyers = [
    // ナヴィガトリ級駆逐艦
    { name: 'アルヴィーゼ・ダ・モスト', commissioned: new Date('1930-02-06'), fate: new Date('1943-09-18') },
    { name: 'アントニオ・ダ・ノリ', commissioned: new Date('1931-03-15'), fate: new Date('1941-12-09') },
    { name: 'ウゴリーノ・ヴィヴァルディ', commissioned: new Date('1930-01-09'), fate: new Date('1941-06-08') },
    { name: 'ニコロソ・ダ・レッコ', commissioned: new Date('1930-03-15'), fate: new Date('1942-06-13') },
    { name: 'レオナルド・サノド', commissioned: new Date('1930-05-12'), fate: new Date('1941-04-01') },
    { name: 'レオン・パンカルド', commissioned: new Date('1929-09-20'), fate: new Date('1942-06-30') },
    { name: 'ランゼロット・マロチェッロ', commissioned: new Date('1929-10-11'), fate: new Date('1940-10-05') },
    { name: 'エマヌエーレ・ペッサーニョ', commissioned: new Date('1930-08-06'), fate: new Date('1942-05-29') },
    { name: 'アントニオ・ピガフェッタ', commissioned: new Date('1931-01-19'), fate: new Date('1941-04-01') },
    { name: 'ニコロ・ザーラ', commissioned: new Date('1930-07-12'), fate: new Date('1941-09-21') },
    { name: 'アントニオ・ウソディマーレ', commissioned: new Date('1929-12-16'), fate: new Date('1942-03-08') },
    { name: 'プレミュダ', commissioned: new Date('1932-11-19'), fate: new Date('1941-04-16') },

    // オルィアーニ級駆逐艦
    { name: 'アルフレード・オルィアーニ', commissioned: new Date('1937-01-15'), fate: new Date('1943-09-09') },
    { name: 'ジョルバノ・ブルーノ', commissioned: new Date('1938-04-01'), fate: new Date('1941-04-01') },
    { name: 'ヴィンチェンツォ・ジョベルティ', commissioned: new Date('1937-11-16'), fate: new Date('1940-07-19') },
    { name: 'ヴィットリオ・アルフィエーリ', commissioned: new Date('1937-08-15'), fate: new Date('1941-03-28') },

    // ソルダティ級駆逐艦
    { name: 'アスカリ', commissioned: new Date('1938-09-05'), fate: new Date('1940-09-02') },
    { name: 'アルピーノ', commissioned: new Date('1938-07-20'), fate: new Date('1943-09-09') },
    { name: 'アルティリエーレ', commissioned: new Date('1938-04-15'), fate: new Date('1940-10-12') },
    { name: 'アヴィエーレ', commissioned: new Date('1938-12-31'), fate: new Date('1942-12-17') },
    { name: 'バースグリエーリ', commissioned: new Date('1939-05-12'), fate: new Date('1943-07-05') },
    { name: 'カミーチョ・ベンソ', commissioned: new Date('1938-04-23'), fate: new Date('1941-03-28') },
    { name: 'カラビニエーレ', commissioned: new Date('1938-12-20'), fate: new Date('1943-09-09') },
    { name: 'コルアッツィエーレ', commissioned: new Date('1938-03-16'), fate: new Date('1942-11-09') },
    { name: 'フォルゴーレ', commissioned: new Date('1932-09-01'), fate: new Date('1942-11-09') },
    { name: 'フルゴーレ', commissioned: new Date('1932-10-01'), fate: new Date('1942-11-09') },
    { name: 'グラナティエーレ', commissioned: new Date('1939-02-15'), fate: new Date('1943-09-09') },
    { name: 'ランチエーレ', commissioned: new Date('1939-04-12'), fate: new Date('1943-09-10') },
    { name: 'レジオナーリオ', commissioned: new Date('1939-06-30'), fate: new Date('1943-05-22') },
    { name: 'ミトラリエーレ', commissioned: new Date('1938-07-30'), fate: new Date('1941-05-16') },
    { name: 'ジョゼップ・ミシェリ', commissioned: new Date('1937-09-20'), fate: new Date('1943-09-09') },
    { name: 'シモーネ・スキアフィーノ', commissioned: new Date('1939-02-06'), fate: new Date('1942-03-19') },
    { name: 'ソルダート', commissioned: new Date('1938-06-15'), fate: new Date('1941-12-13') },
    { name: 'ベルサリエーリ', commissioned: new Date('1939-09-01'), fate: new Date('1943-09-09') },
    { name: 'フリゴリフェロ', commissioned: new Date('1939-01-05'), fate: new Date('1943-09-09') },

    // ダルド級駆逐艦
    { name: 'ダルド', commissioned: new Date('1932-07-05'), fate: new Date('1942-03-01') },
    { name: 'ストラーレ', commissioned: new Date('1932-04-05'), fate: new Date('1941-04-15') },
    { name: 'フレッチャ', commissioned: new Date('1931-12-10'), fate: new Date('1943-09-09') },
    { name: 'サエッタ', commissioned: new Date('1932-05-15'), fate: new Date('1941-02-03') },

    // マエストラーレ級駆逐艦
    { name: 'マエストラーレ', commissioned: new Date('1934-11-22'), fate: new Date('1943-09-09') },
    { name: 'グレカーレ', commissioned: new Date('1934-07-15'), fate: new Date('1943-09-09') },
    { name: 'リベッチョ', commissioned: new Date('1934-09-20'), fate: new Date('1943-09-09') },
    { name: 'シロッコ', commissioned: new Date('1934-10-03'), fate: new Date('1942-03-22') },

    // フォルゴーレ級駆逐艦
    { name: 'フォルゴーレ', commissioned: new Date('1932-10-01'), fate: new Date('1942-11-09') },
    { name: 'フルゴーレ', commissioned: new Date('1932-10-01'), fate: new Date('1942-11-09') },
    { name: 'ラムポ', commissioned: new Date('1932-08-06'), fate: new Date('1941-11-30') },
    { name: 'バレーノ', commissioned: new Date('1932-07-05'), fate: new Date('1942-06-15') },

    // トゥルビーネ級駆逐艦
    { name: 'トゥルビーネ', commissioned: new Date('1927-08-10'), fate: new Date('1940-06-15') },
    { name: 'アクィローネ', commissioned: new Date('1927-09-03'), fate: new Date('1942-07-17') },
    { name: 'ボーレア', commissioned: new Date('1927-10-06'), fate: new Date('1941-11-30') },
    { name: 'エスペロ', commissioned: new Date('1927-07-15'), fate: new Date('1940-06-28') },
    { name: 'オストロ', commissioned: new Date('1928-02-06'), fate: new Date('1940-10-12') },
    { name: 'ゼッフィーロ', commissioned: new Date('1927-11-20'), fate: new Date('1943-04-05') },
    { name: 'エーロ', commissioned: new Date('1928-04-12'), fate: new Date('1940-07-10') },
    { name: 'ネンボ', commissioned: new Date('1928-07-15'), fate: new Date('1941-06-16') },

    // セラ級駆逐艦
    { name: 'セラ', commissioned: new Date('1937-10-04'), fate: new Date('1942-02-18') },
    { name: 'リチェ', commissioned: new Date('1937-10-15'), fate: new Date('1940-11-12') },
    { name: 'セッラ・グイディチェ', commissioned: new Date('1937-12-20'), fate: new Date('1942-10-07') },
    { name: 'チーターレ', commissioned: new Date('1938-03-15'), fate: new Date('1943-09-09') },

    // クルタトーネ級駆逐艦
    { name: 'クルタトーネ', commissioned: new Date('1923-06-10'), fate: new Date('1941-08-19') },
    { name: 'カステルフィダルド', commissioned: new Date('1923-05-20'), fate: new Date('1941-08-11') },
    { name: 'モンテヴェルデ', commissioned: new Date('1924-02-05'), fate: new Date('1940-07-10') },
    { name: 'カラトフィーミ', commissioned: new Date('1924-03-15'), fate: new Date('1943-09-09') },

    // パロンバロ級駆逐艦
    { name: 'パロンバロ', commissioned: new Date('1921-10-12'), fate: new Date('1943-07-16') },
    { name: 'パンテーラ', commissioned: new Date('1923-05-01'), fate: new Date('1943-07-28') },
    { name: 'アンティローペ', commissioned: new Date('1922-07-06'), fate: new Date('1938-09-15') },
    { name: 'ティグレ', commissioned: new Date('1920-12-30'), fate: new Date('1942-05-04') },

    // セッラ級駆逐艦
    { name: 'フランチェスコ・クリスポ', commissioned: new Date('1939-07-21'), fate: new Date('1943-09-09') },
    { name: 'リベルテ・セッラ', commissioned: new Date('1938-07-19'), fate: new Date('1943-09-09') },
    { name: 'ウグリアーノ・ヴィヴァルディ', commissioned: new Date('1938-12-09'), fate: new Date('1943-06-09') },
    { name: 'アントニオ・マントロ', commissioned: new Date('1939-04-20'), fate: new Date('1943-09-09') },

    // アルフィエーリ級駆逐艦
    { name: 'ヴィットリオ・アルフィエーリ', commissioned: new Date('1937-08-15'), fate: new Date('1941-03-28') },
    { name: 'ジェノーヴァ・ダ・レネニョ', commissioned: new Date('1937-11-27'), fate: new Date('1943-04-01') },
    { name: 'ヴィンチェンツォ・ジョベルティ', commissioned: new Date('1937-11-16'), fate: new Date('1940-07-19') },
    { name: 'オラツィオ・オルファーニ', commissioned: new Date('1938-01-15'), fate: new Date('1943-04-01') },

    // コスタンツォ・チアーノ級駆逐艦
    { name: 'コスタンツォ・チアーノ', commissioned: new Date('1942-12-01'), fate: new Date('1943-09-09') },
    { name: 'レガ・ズムバリーリョ', commissioned: new Date('1941-03-28'), fate: new Date('1942-12-01') },
    { name: 'アントニオ・ピニャテッリ', commissioned: new Date('1941-07-23'), fate: new Date('1943-09-09') },
    { name: 'ファズィオ・マリッツァーニ', commissioned: new Date('1941-04-12'), fate: new Date('1943-03-21') },

    // その他
    { name: 'アンドレア・ドーリア', commissioned: new Date('1916-03-13'), fate: new Date('1940-10-14') },
    { name: 'ナザリオ・サウロ', commissioned: new Date('1926-12-15'), fate: new Date('1941-08-10') },
    { name: 'チェーザレ・バッティスティ', commissioned: new Date('1926-08-10'), fate: new Date('1941-12-19') },
    { name: 'フランチェスコ・ヌッロ', commissioned: new Date('1926-03-15'), fate: new Date('1942-10-10') },
    { name: 'アスコーリ', commissioned: new Date('1940-02-20'), fate: new Date('1943-09-10') },
    { name: 'フルミーネ', commissioned: new Date('1932-09-19'), fate: new Date('1941-05-19') },
    { name: 'アテンドロ', commissioned: new Date('1938-11-11'), fate: new Date('1942-11-22') },
    { name: 'ファジョ・ブルーノ', commissioned: new Date('1939-04-14'), fate: new Date('1943-09-09') },
    { name: 'ニコラ・ファブリジ', commissioned: new Date('1939-01-31'), fate: new Date('1943-09-09') },
    { name: 'アルジェーロ・ガッツォーニ', commissioned: new Date('1942-08-15'), fate: new Date('1943-09-09') },
    { name: 'ファブリツィオ・ガローニ', commissioned: new Date('1942-09-27'), fate: new Date('1943-05-22') }
];

export default italyDestroyers;