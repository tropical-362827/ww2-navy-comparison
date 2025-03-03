// ukDestroyers.js
// イギリス海軍の駆逐艦データ

const ukDestroyers = [
    // A級駆逐艦
    { name: 'アチェロン', commissioned: new Date('1930-03-14'), fate: new Date('1940-07-23') },
    { name: 'アクティブ', commissioned: new Date('1930-02-09'), fate: new Date('1945-07-15') },
    { name: 'アロー', commissioned: new Date('1930-04-14'), fate: new Date('1941-06-05') },
    { name: 'アケイティーズ', commissioned: new Date('1930-02-15'), fate: new Date('1940-05-01') },
    { name: 'アンソニー', commissioned: new Date('1930-02-14'), fate: new Date('1948-03-19') },
    { name: 'アカスタ', commissioned: new Date('1930-01-11'), fate: new Date('1945-12-12') },
    { name: 'アチャレント', commissioned: new Date('1930-10-15'), fate: new Date('1940-01-23') },
    { name: 'アドヒーラント', commissioned: new Date('1930-02-07'), fate: new Date('1947-05-07') },

    // B級駆逐艦
    { name: 'ブレーズ', commissioned: new Date('1931-02-16'), fate: new Date('1942-11-06') },
    { name: 'ブーディカ', commissioned: new Date('1931-04-07'), fate: new Date('1941-05-11') },
    { name: 'ブルドッグ', commissioned: new Date('1931-01-08'), fate: new Date('1946-07-19') },
    { name: 'ブロークン', commissioned: new Date('1931-02-03'), fate: new Date('1942-10-31') },
    { name: 'ブランタム', commissioned: new Date('1931-03-27'), fate: new Date('1945-01-05') },
    { name: 'ビーグル', commissioned: new Date('1931-04-09'), fate: new Date('1939-11-07') },
    { name: 'ブラヴォー', commissioned: new Date('1931-05-13'), fate: new Date('1942-01-11') },
    { name: 'ブリリアント', commissioned: new Date('1931-06-21'), fate: new Date('1943-02-13') },

    // C級駆逐艦
    { name: 'クルセイダー', commissioned: new Date('1932-05-02'), fate: new Date('1942-06-09') },
    { name: 'コメット', commissioned: new Date('1932-06-02'), fate: new Date('1942-01-09') },
    { name: 'クレセント', commissioned: new Date('1932-05-28'), fate: new Date('1947-08-16') },
    { name: 'サイクロプス', commissioned: new Date('1932-05-29'), fate: new Date('1947-07-20') },
    { name: 'クライデ', commissioned: new Date('1932-06-22'), fate: new Date('1942-03-16') },
    { name: 'クゥラカオ', commissioned: new Date('1932-07-19'), fate: new Date('1942-01-13') },
    { name: 'チャリバディス', commissioned: new Date('1932-10-17'), fate: new Date('1944-08-23') },
    { name: 'クレモン', commissioned: new Date('1932-11-02'), fate: new Date('1945-07-25') },

    // D級駆逐艦
    { name: 'ダンカン', commissioned: new Date('1933-04-06'), fate: new Date('1942-12-04') },
    { name: 'ダイアデム', commissioned: new Date('1933-04-29'), fate: new Date('1946-01-28') },
    { name: 'ダイナモウト', commissioned: new Date('1933-04-25'), fate: new Date('1943-04-06') },
    { name: 'ダーウェント', commissioned: new Date('1933-05-17'), fate: new Date('1942-11-19') },
    { name: 'ディーコン', commissioned: new Date('1933-07-31'), fate: new Date('1940-11-29') },
    { name: 'ディアマンド', commissioned: new Date('1933-11-03'), fate: new Date('1941-04-27') },
    { name: 'ディアナ', commissioned: new Date('1933-12-22'), fate: new Date('1940-12-07') },
    { name: 'デューチェス', commissioned: new Date('1933-07-24'), fate: new Date('1943-06-24') },

    // E級駆逐艦
    { name: 'エクスプレス', commissioned: new Date('1934-11-02'), fate: new Date('1943-09-14') },
    { name: 'イーグル', commissioned: new Date('1934-11-18'), fate: new Date('1943-07-14') },
    { name: 'エクセント', commissioned: new Date('1934-11-30'), fate: new Date('1940-04-14') },
    { name: 'エコー', commissioned: new Date('1935-01-31'), fate: new Date('1943-07-04') },
    { name: 'エレクトラ', commissioned: new Date('1935-09-15'), fate: new Date('1942-02-27') },
    { name: 'エンカウンター', commissioned: new Date('1935-10-02'), fate: new Date('1942-03-01') },
    { name: 'エスケイプ', commissioned: new Date('1935-08-02'), fate: new Date('1943-04-11') },
    { name: 'エスコート', commissioned: new Date('1935-10-30'), fate: new Date('1942-07-11') },
    { name: 'エクスマウス', commissioned: new Date('1935-11-28'), fate: new Date('1940-01-21') },

    // F級駆逐艦
    { name: 'フォークナー', commissioned: new Date('1935-05-24'), fate: new Date('1944-09-05') },
    { name: 'フェイム', commissioned: new Date('1935-05-16'), fate: new Date('1944-11-04') },
    { name: 'フェアリー', commissioned: new Date('1935-06-27'), fate: new Date('1942-06-29') },
    { name: 'フィアレス', commissioned: new Date('1935-05-22'), fate: new Date('1940-05-01') },
    { name: 'フォーサイト', commissioned: new Date('1935-07-15'), fate: new Date('1942-12-02') },
    { name: 'フォーチューン', commissioned: new Date('1935-08-27'), fate: new Date('1940-06-02') },
    { name: 'ファイヤードレイク', commissioned: new Date('1935-09-09'), fate: new Date('1945-12-11') },
    { name: 'フォックスハウンド', commissioned: new Date('1935-10-29'), fate: new Date('1944-08-12') },
    { name: 'フォリオット', commissioned: new Date('1935-12-05'), fate: new Date('1941-12-19') },

    // G級駆逐艦
    { name: 'グリフィン', commissioned: new Date('1936-03-06'), fate: new Date('1943-12-13') },
    { name: 'グレナダー', commissioned: new Date('1936-03-28'), fate: new Date('1942-05-22') },
    { name: 'グロウワーム', commissioned: new Date('1936-08-22'), fate: new Date('1940-04-08') },
    { name: 'ガラード', commissioned: new Date('1936-09-03'), fate: new Date('1945-09-15') },
    { name: 'ギャラント', commissioned: new Date('1936-02-25'), fate: new Date('1943-12-11') },
    { name: 'ギプシー', commissioned: new Date('1936-11-22'), fate: new Date('1939-11-12') },
    { name: 'グラフトン', commissioned: new Date('1936-12-20'), fate: new Date('1940-05-29') },
    { name: 'グレイハウンド', commissioned: new Date('1936-02-01'), fate: new Date('1941-05-22') },

    // H級駆逐艦
    { name: 'ハーディー', commissioned: new Date('1936-12-09'), fate: new Date('1940-04-10') },
    { name: 'ハヴォック', commissioned: new Date('1937-01-16'), fate: new Date('1942-04-06') },
    { name: 'ヘイスティ', commissioned: new Date('1937-03-26'), fate: new Date('1942-03-26') },
    { name: 'ヘブ', commissioned: new Date('1937-03-15'), fate: new Date('1942-08-08') },
    { name: 'ハンター', commissioned: new Date('1936-09-30'), fate: new Date('1940-04-10') },
    { name: 'ヒーロー', commissioned: new Date('1936-10-25'), fate: new Date('1940-12-10') },
    { name: 'ホスタイル', commissioned: new Date('1937-08-10'), fate: new Date('1940-08-23') },
    { name: 'ホットスパー', commissioned: new Date('1937-01-29'), fate: new Date('1947-10-26') },
    { name: 'ハリケーン', commissioned: new Date('1937-10-29'), fate: new Date('1943-12-24') },

    // I級駆逐艦
    { name: 'アイコン', commissioned: new Date('1937-05-14'), fate: new Date('1940-07-19') },
    { name: 'アイレックス', commissioned: new Date('1937-05-05'), fate: new Date('1940-05-28') },
    { name: 'インペリアル', commissioned: new Date('1937-01-30'), fate: new Date('1941-09-29') },
    { name: 'インパルシブ', commissioned: new Date('1938-01-20'), fate: new Date('1940-12-19') },
    { name: 'インガドリング', commissioned: new Date('1937-05-25'), fate: new Date('1940-06-19') },
    { name: 'インコンスタント', commissioned: new Date('1937-07-24'), fate: new Date('1942-11-28') },
    { name: 'インタレピッド', commissioned: new Date('1937-07-29'), fate: new Date('1941-05-02') },
    { name: 'アイシス', commissioned: new Date('1937-08-02'), fate: new Date('1944-07-20') },

    // J級駆逐艦
    { name: 'ジャーヴィス', commissioned: new Date('1939-10-08'), fate: new Date('1942-07-26') },
    { name: 'ジャッカル', commissioned: new Date('1939-04-13'), fate: new Date('1941-05-10') },
    { name: 'ジャガー', commissioned: new Date('1939-09-12'), fate: new Date('1942-03-26') },
    { name: 'ジャベリン', commissioned: new Date('1939-06-10'), fate: new Date('1949-01-26') },
    { name: 'ジャーズィー', commissioned: new Date('1939-05-26'), fate: new Date('1941-06-02') },
    { name: 'ジュノー', commissioned: new Date('1939-08-08'), fate: new Date('1941-05-21') },
    { name: 'ジュピター', commissioned: new Date('1939-06-22'), fate: new Date('1942-02-27') },
    { name: 'ジャノス', commissioned: new Date('1939-07-25'), fate: new Date('1940-12-06') },

    // K級駆逐艦
    { name: 'キングストン', commissioned: new Date('1939-02-09'), fate: new Date('1942-04-11') },
    { name: 'キンバリー', commissioned: new Date('1939-04-21'), fate: new Date('1941-06-11') },
    { name: 'キャッシュミア', commissioned: new Date('1939-09-28'), fate: new Date('1944-12-27') },
    { name: 'カーラント', commissioned: new Date('1939-09-27'), fate: new Date('1945-04-15') },
    { name: 'ケリー', commissioned: new Date('1939-08-23'), fate: new Date('1941-05-23') },
    { name: 'カーミン', commissioned: new Date('1939-10-09'), fate: new Date('1943-12-17') },
    { name: 'キップリング', commissioned: new Date('1939-12-21'), fate: new Date('1945-10-07') },
    { name: 'カンダハー', commissioned: new Date('1939-10-10'), fate: new Date('1941-12-20') },

    // L級駆逐艦
    { name: 'リージョン', commissioned: new Date('1940-12-26'), fate: new Date('1942-03-22') },
    { name: 'ライトニング', commissioned: new Date('1941-05-28'), fate: new Date('1943-03-12') },
    { name: 'ラフォーレ', commissioned: new Date('1941-08-26'), fate: new Date('1944-03-23') },
    { name: 'ルック', commissioned: new Date('1940-10-30'), fate: new Date('1942-06-11') },
    { name: 'レアンダー', commissioned: new Date('1941-03-31'), fate: new Date('1941-07-21') },
    { name: 'ランス', commissioned: new Date('1941-02-13'), fate: new Date('1945-05-16') },
    { name: 'ライディング', commissioned: new Date('1942-01-30'), fate: new Date('1943-05-29') },
    { name: 'ラヴェリン', commissioned: new Date('1941-10-10'), fate: new Date('1944-05-06') },

    // M級駆逐艦
    { name: 'マーチレス', commissioned: new Date('1942-01-14'), fate: new Date('1945-12-03') },
    { name: 'ミッドサマーナイト', commissioned: new Date('1942-06-23'), fate: new Date('1944-01-01') },
    { name: 'マーティン', commissioned: new Date('1942-10-12'), fate: new Date('1942-12-10') },
    { name: 'メテオール', commissioned: new Date('1941-11-12'), fate: new Date('1943-01-09') },
    { name: 'ミルン', commissioned: new Date('1942-08-06'), fate: new Date('1947-05-09') },
    { name: 'ミューズ', commissioned: new Date('1942-04-12'), fate: new Date('1946-10-22') },
    { name: 'マンクトン', commissioned: new Date('1942-09-02'), fate: new Date('1945-12-22') },
    { name: 'マスケティア', commissioned: new Date('1942-10-18'), fate: new Date('1944-10-13') },

    // N級駆逐艦
    { name: 'ナバリノ', commissioned: new Date('1943-05-20'), fate: new Date('1956-04-16') },
    { name: 'ナパル', commissioned: new Date('1942-12-10'), fate: new Date('1955-11-07') },
    { name: 'ノンスーチ', commissioned: new Date('1942-08-11'), fate: new Date('1958-06-07') },
    { name: 'ノーマンディ', commissioned: new Date('1942-10-04'), fate: new Date('1945-06-20') },
    { name: 'ネパール', commissioned: new Date('1942-05-20'), fate: new Date('1956-12-21') },
    { name: 'ネッド', commissioned: new Date('1942-04-16'), fate: new Date('1956-10-14') },
    { name: 'ノーブル', commissioned: new Date('1942-11-26'), fate: new Date('1961-03-14') },
    { name: 'ニュービー', commissioned: new Date('1942-12-16'), fate: new Date('1958-10-14') },

    // O級駆逐艦
    { name: 'オクスフォード', commissioned: new Date('1942-10-26'), fate: new Date('1965-03-18') },
    { name: 'オブデュレイト', commissioned: new Date('1942-12-22'), fate: new Date('1962-02-07') },
    { name: 'オグルビー', commissioned: new Date('1943-04-22'), fate: new Date('1965-10-28') },
    { name: 'オーリニー', commissioned: new Date('1943-10-27'), fate: new Date('1961-08-15') },
    { name: 'オーウェル', commissioned: new Date('1943-08-01'), fate: new Date('1965-12-09') },
    { name: 'オリビ', commissioned: new Date('1944-05-21'), fate: new Date('1960-07-20') },
    { name: 'オポチュニティ', commissioned: new Date('1943-08-14'), fate: new Date('1955-11-21') },
    { name: 'オランド', commissioned: new Date('1943-10-20'), fate: new Date('1965-06-30') },

    // P級駆逐艦
    { name: 'パラディン', commissioned: new Date('1942-05-17'), fate: new Date('1946-01-17') },
    { name: 'パススウォート', commissioned: new Date('1944-03-23'), fate: new Date('1946-03-12') },
    { name: 'パサム', commissioned: new Date('1943-11-11'), fate: new Date('1947-09-12') },
    { name: 'パスロス', commissioned: new Date('1942-08-22'), fate: new Date('1944-09-20') },
    { name: 'ペンネファザー', commissioned: new Date('1942-11-12'), fate: new Date('1949-02-10') },
    { name: 'ペタード', commissioned: new Date('1943-06-14'), fate: new Date('1946-08-18') },
    { name: 'パーティザン', commissioned: new Date('1942-10-28'), fate: new Date('1946-03-22') },
    { name: 'ペチュニア', commissioned: new Date('1943-04-15'), fate: new Date('1946-07-30') },

    // トライバル級駆逐艦
    { name: 'アシャンティ', commissioned: new Date('1938-12-05'), fate: new Date('1954-08-12') },
    { name: 'ベドウィン', commissioned: new Date('1939-03-15'), fate: new Date('1942-06-15') },
    { name: 'コサック (初代)', commissioned: new Date('1938-06-07'), fate: new Date('1940-10-27') },
    { name: 'コサック (2代目)', commissioned: new Date('1944-07-05'), fate: new Date('1951-08-15') },
    { name: 'エスキモー', commissioned: new Date('1939-01-31'), fate: new Date('1943-06-14') },
    { name: 'グルカ', commissioned: new Date('1938-10-21'), fate: new Date('1944-11-18') },
    { name: 'マオリ', commissioned: new Date('1939-01-05'), fate: new Date('1942-02-12') },
    { name: 'マタベレ', commissioned: new Date('1939-08-14'), fate: new Date('1942-01-17') },
    { name: 'モホーク', commissioned: new Date('1938-10-07'), fate: new Date('1941-04-16') },
    { name: 'ヌビアン', commissioned: new Date('1939-12-21'), fate: new Date('1940-12-08') },
    { name: 'パンジャビ', commissioned: new Date('1939-03-29'), fate: new Date('1942-05-25') },
    { name: 'ソマリ', commissioned: new Date('1939-05-12'), fate: new Date('1942-12-20') },
    { name: 'タルタル', commissioned: new Date('1939-04-10'), fate: new Date('1942-04-23') },
    { name: 'ズールー', commissioned: new Date('1939-06-07'), fate: new Date('1941-09-08') },

    // 戦時緊急建造駆逐艦
    { name: 'ハント', commissioned: new Date('1940-03-09'), fate: new Date('1946-01-10') },
    { name: 'エクセター', commissioned: new Date('1940-09-14'), fate: new Date('1945-08-30') },
    { name: 'イースター', commissioned: new Date('1940-10-17'), fate: new Date('1946-03-20') },
    { name: 'ノッティンガム', commissioned: new Date('1940-06-27'), fate: new Date('1946-08-12') },
    { name: 'カルバート', commissioned: new Date('1941-10-08'), fate: new Date('1964-11-20') },
    { name: 'ブリッケンデン', commissioned: new Date('1942-02-18'), fate: new Date('1959-09-30') },
    { name: 'タルボット', commissioned: new Date('1942-06-12'), fate: new Date('1965-10-06') },
    { name: 'ラピア', commissioned: new Date('1943-05-30'), fate: new Date('1965-08-13') },
    { name: 'ブラケギルド', commissioned: new Date('1943-11-25'), fate: new Date('1966-07-10') },
    { name: 'メルブレイク', commissioned: new Date('1943-12-30'), fate: new Date('1970-02-14') },
    { name: 'ケンマレ', commissioned: new Date('1944-08-21'), fate: new Date('1971-12-01') }
];

export default ukDestroyers;