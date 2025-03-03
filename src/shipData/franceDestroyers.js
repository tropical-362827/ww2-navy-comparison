// franceDestroyers.js
// フランス海軍の駆逐艦データ

const franceDestroyers = [
    // ブルデール級駆逐艦
    { name: 'ブルデール', commissioned: new Date('1927-07-15'), fate: new Date('1942-11-27') },
    { name: 'ブレステイン', commissioned: new Date('1926-08-21'), fate: new Date('1942-11-27') },
    { name: 'ブレゾン', commissioned: new Date('1926-12-10'), fate: new Date('1940-10-18') },
    { name: 'バルミー', commissioned: new Date('1927-02-06'), fate: new Date('1942-11-27') },
    { name: 'シバリエ', commissioned: new Date('1927-05-05'), fate: new Date('1942-11-27') },
    { name: 'シャカル', commissioned: new Date('1926-05-15'), fate: new Date('1940-05-23') },

    // エパルヴィエ級駆逐艦
    { name: 'エパルヴィエ', commissioned: new Date('1927-03-10'), fate: new Date('1942-11-08') },
    { name: 'エペルヴィエ', commissioned: new Date('1928-01-31'), fate: new Date('1942-05-11') },
    { name: 'ミラン', commissioned: new Date('1928-05-15'), fate: new Date('1942-12-08') },
    { name: 'ガフォン', commissioned: new Date('1928-04-10'), fate: new Date('1940-12-13') },
    { name: 'ヴォレール', commissioned: new Date('1927-10-12'), fate: new Date('1942-11-08') },
    { name: 'ヴァントゥール', commissioned: new Date('1928-03-01'), fate: new Date('1941-10-14') },

    // ライオン級駆逐艦
    { name: 'ライオン', commissioned: new Date('1935-09-18'), fate: new Date('1942-11-27') },
    { name: 'リンクス', commissioned: new Date('1935-10-30'), fate: new Date('1942-11-27') },
    { name: 'パンテール', commissioned: new Date('1935-11-15'), fate: new Date('1941-09-08') },
    { name: 'ティグル', commissioned: new Date('1936-01-21'), fate: new Date('1942-11-27') },
    { name: 'ジャガー', commissioned: new Date('1936-04-08'), fate: new Date('1940-06-30') },
    { name: 'シェルヴィル', commissioned: new Date('1936-05-19'), fate: new Date('1941-12-14') },

    // ル・ファンタスク級駆逐艦（超大型駆逐艦）
    { name: 'ル・ファンタスク', commissioned: new Date('1935-05-01'), fate: new Date('1957-12-02') },
    { name: 'ローディン', commissioned: new Date('1934-11-01'), fate: new Date('1942-12-08') },
    { name: 'ル・テリブル', commissioned: new Date('1935-10-15'), fate: new Date('1962-07-01') },
    { name: 'ル・マラン', commissioned: new Date('1936-05-10'), fate: new Date('1954-11-15') },
    { name: 'ヴォルタ', commissioned: new Date('1936-11-06'), fate: new Date('1943-04-03') },
    { name: 'モゴドール', commissioned: new Date('1937-07-29'), fate: new Date('1962-04-02') },

    // ヴァルミー級駆逐艦
    { name: 'ヴァルミー', commissioned: new Date('1929-08-06'), fate: new Date('1942-11-27') },
    { name: 'ヴェルダン', commissioned: new Date('1930-11-01'), fate: new Date('1942-11-27') },

    // エグラ級駆逐艦
    { name: 'エグラ', commissioned: new Date('1936-03-04'), fate: new Date('1940-07-03') },
    { name: 'ゲパール', commissioned: new Date('1936-05-26'), fate: new Date('1940-07-03') },
    { name: 'ボルドゥー', commissioned: new Date('1936-10-15'), fate: new Date('1940-07-03') },
    { name: 'ル・フー', commissioned: new Date('1936-11-10'), fate: new Date('1942-11-11') },
    { name: 'ルミエ', commissioned: new Date('1936-12-05'), fate: new Date('1943-03-16') },
    { name: 'メテオール', commissioned: new Date('1937-01-07'), fate: new Date('1942-12-08') },
    { name: 'イレ', commissioned: new Date('1937-02-20'), fate: new Date('1940-07-03') },
    { name: 'ヴァウトゥール', commissioned: new Date('1937-04-01'), fate: new Date('1942-11-11') },
    { name: 'グレナディエ', commissioned: new Date('1937-06-15'), fate: new Date('1942-11-08') },

    // レパルド級駆逐艦
    { name: 'レパルド', commissioned: new Date('1931-04-03'), fate: new Date('1940-05-28') },
    { name: 'レヴリエ', commissioned: new Date('1931-05-15'), fate: new Date('1941-07-01') },
    { name: 'アダシオ', commissioned: new Date('1931-06-20'), fate: new Date('1944-08-19') },
    { name: 'エペ', commissioned: new Date('1931-11-01'), fate: new Date('1942-11-27') },
    { name: 'ランス', commissioned: new Date('1932-01-15'), fate: new Date('1942-03-25') },
    { name: 'ヴォキュール', commissioned: new Date('1932-03-20'), fate: new Date('1942-11-08') },

    // ル・フィエール級駆逐艦
    { name: 'ル・フィエール', commissioned: new Date('1934-05-25'), fate: new Date('1942-03-28') },
    { name: 'ル・フォードロイヤン', commissioned: new Date('1934-08-10'), fate: new Date('1940-06-01') },
    { name: 'ラレザン', commissioned: new Date('1934-10-05'), fate: new Date('1942-08-27') },
    { name: 'ル・トリオンファン', commissioned: new Date('1934-08-25'), fate: new Date('1950-03-26') },
    { name: 'ル・シュヴァリエ・ポール', commissioned: new Date('1937-05-15'), fate: new Date('1942-02-28') },
    { name: 'カサール', commissioned: new Date('1933-01-10'), fate: new Date('1942-12-08') },

    // ビスカ級駆逐艦
    { name: 'ビスカ', commissioned: new Date('1925-02-10'), fate: new Date('1940-07-03') },
    { name: 'ブレズ', commissioned: new Date('1925-03-05'), fate: new Date('1940-07-03') },
    { name: 'トレンブルモン', commissioned: new Date('1925-05-15'), fate: new Date('1940-06-21') },
    { name: 'シミュン', commissioned: new Date('1925-08-20'), fate: new Date('1942-11-27') },
    { name: 'テンペート', commissioned: new Date('1925-10-05'), fate: new Date('1942-11-27') },
    { name: 'トルナド', commissioned: new Date('1926-01-15'), fate: new Date('1942-11-27') },
    { name: 'ティフォン', commissioned: new Date('1926-03-10'), fate: new Date('1940-05-28') },
    { name: 'ブリゾン', commissioned: new Date('1926-05-20'), fate: new Date('1940-12-14') },
    { name: 'サイクロン', commissioned: new Date('1926-06-15'), fate: new Date('1938-07-15') },
    { name: 'ミストラル', commissioned: new Date('1926-09-12'), fate: new Date('1940-05-21') },
    { name: 'トラモンタン', commissioned: new Date('1927-01-20'), fate: new Date('1942-11-08') },
    { name: 'シロッコ', commissioned: new Date('1927-03-01'), fate: new Date('1940-06-02') },

    // アドリオト級駆逐艦
    { name: 'アドリオト', commissioned: new Date('1929-05-01'), fate: new Date('1942-05-04') },
    { name: 'フルトゥー', commissioned: new Date('1929-07-10'), fate: new Date('1940-12-25') },
    { name: 'ブルギニョン', commissioned: new Date('1929-10-05'), fate: new Date('1941-07-18') },
    { name: 'フラマン', commissioned: new Date('1930-01-20'), fate: new Date('1942-05-25') },
    { name: 'フラッサン', commissioned: new Date('1930-04-01'), fate: new Date('1940-05-27') },
    { name: 'ブレトン', commissioned: new Date('1930-06-15'), fate: new Date('1940-05-21') },
    { name: 'バスク', commissioned: new Date('1930-08-20'), fate: new Date('1940-05-19') },
    { name: 'コルス', commissioned: new Date('1930-10-10'), fate: new Date('1943-03-10') },
    { name: 'ガスコン', commissioned: new Date('1931-01-05'), fate: new Date('1940-05-28') },
    { name: 'アルカディアン', commissioned: new Date('1931-03-15'), fate: new Date('1942-11-27') },
    { name: 'モンカルム', commissioned: new Date('1931-05-10'), fate: new Date('1942-12-18') },
    { name: 'サヴォワヤン', commissioned: new Date('1931-07-25'), fate: new Date('1942-11-08') }
];

export default franceDestroyers;