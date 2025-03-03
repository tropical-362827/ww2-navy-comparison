// sovietDestroyers.js
// ソビエト海軍の駆逐艦データ

const sovietDestroyers = [
    // レーニン級駆逐艦（タシケント型）
    { name: 'タシケント', commissioned: new Date('1939-12-22'), fate: new Date('1942-03-27') },

    // グネフヌイ級駆逐艦（プロジェクト7）
    { name: 'グネフヌイ', commissioned: new Date('1936-11-23'), fate: new Date('1941-06-23') },
    { name: 'グロームキー', commissioned: new Date('1939-07-31'), fate: new Date('1947-06-24') },
    { name: 'グロズヌイ', commissioned: new Date('1938-10-18'), fate: new Date('1956-07-20') },
    { name: 'グロモフ', commissioned: new Date('1937-12-31'), fate: new Date('1958-01-29') },
    { name: 'ブイストルイ', commissioned: new Date('1938-11-27'), fate: new Date('1956-09-04') },
    { name: 'レーニン', commissioned: new Date('1938-11-23'), fate: new Date('1941-06-22') },
    { name: 'モスクワ', commissioned: new Date('1938-06-10'), fate: new Date('1941-06-26') },
    { name: 'ハリコフ', commissioned: new Date('1938-11-19'), fate: new Date('1942-12-06') },
    { name: 'ミンスク', commissioned: new Date('1939-07-15'), fate: new Date('1941-08-23') },
    { name: 'キーエフ', commissioned: new Date('1940-06-19'), fate: new Date('1941-12-13') },

    // ストロギー級駆逐艦（プロジェクト7U）
    { name: 'ストロギー', commissioned: new Date('1938-10-30'), fate: new Date('1960-04-12') },
    { name: 'スメトリーヴィー', commissioned: new Date('1939-09-18'), fate: new Date('1954-12-17') },
    { name: 'スレズヌイ', commissioned: new Date('1940-08-30'), fate: new Date('1956-07-15') },
    { name: 'ストイキー', commissioned: new Date('1939-10-15'), fate: new Date('1958-04-16') },
    { name: 'スクルィトヌイ', commissioned: new Date('1939-11-16'), fate: new Date('1956-08-18') },
    { name: 'スタリン', commissioned: new Date('1940-10-30'), fate: new Date('1941-06-19') },
    { name: 'スヴォボードヌイ', commissioned: new Date('1939-05-27'), fate: new Date('1941-07-28') },
    { name: 'シュクリー', commissioned: new Date('1941-01-15'), fate: new Date('1956-10-17') },
    { name: 'スポソブヌイ', commissioned: new Date('1940-12-28'), fate: new Date('1941-09-20') },
    { name: 'ソヴェルシェンヌイ', commissioned: new Date('1941-12-19'), fate: new Date('1958-07-20') },
    { name: 'スメールィ', commissioned: new Date('1940-08-22'), fate: new Date('1955-12-15') },

    // オゴネヴォイ級駆逐艦（プロジェクト30bis）
    { name: 'オゴネヴォイ', commissioned: new Date('1940-06-30'), fate: new Date('1958-05-02') },
    { name: 'レズキー', commissioned: new Date('1941-07-06'), fate: new Date('1958-09-30') },
    { name: 'ストレミテルヌイ', commissioned: new Date('1941-06-23'), fate: new Date('1956-09-15') },
    { name: 'ラズヤレンヌイ', commissioned: new Date('1941-11-06'), fate: new Date('1945-10-13') },
    { name: 'レヴォリューツィオヌィ', commissioned: new Date('1941-11-30'), fate: new Date('1959-07-05') },
    { name: 'ラリョーシュヌイ', commissioned: new Date('1942-04-10'), fate: new Date('1958-06-15') },
    { name: 'ロストロプヌイ', commissioned: new Date('1942-06-23'), fate: new Date('1960-01-15') },

    // グレミヤーシチー級駆逐艦（プロジェクト38）
    { name: 'グレミヤーシチー', commissioned: new Date('1939-08-28'), fate: new Date('1958-03-27') },
    { name: 'グロムキー', commissioned: new Date('1939-07-31'), fate: new Date('1958-09-20') },

    // ノヴィク級駆逐艦（旧型、1910年代）
    { name: 'ヤコフ・スヴェルドロフ', commissioned: new Date('1928-11-06'), fate: new Date('1941-08-28') },
    { name: 'アルテム', commissioned: new Date('1928-09-06'), fate: new Date('1941-08-06') },
    { name: 'フェリックス・ジェルジンスキー', commissioned: new Date('1928-08-01'), fate: new Date('1941-08-13') },
    { name: 'カール・マルクス', commissioned: new Date('1927-06-12'), fate: new Date('1941-09-08') },
    { name: 'ウラジミール・レーニン', commissioned: new Date('1928-11-06'), fate: new Date('1941-06-22') },
    { name: 'エンゲルス', commissioned: new Date('1926-10-15'), fate: new Date('1941-08-25') },

    // スコリィ級駆逐艦
    { name: 'スコリィ', commissioned: new Date('1940-07-05'), fate: new Date('1945-10-15') },
    { name: 'スラヴヌイ', commissioned: new Date('1940-08-15'), fate: new Date('1960-09-01') },
    { name: 'スプラーヴヌイ', commissioned: new Date('1941-01-10'), fate: new Date('1958-03-16') },
    { name: 'スタノフチヴィ', commissioned: new Date('1941-05-15'), fate: new Date('1959-11-03') },

    // ソブラズィーテルヌイ級駆逐艦
    { name: 'ソブラズィーテルヌイ', commissioned: new Date('1941-02-15'), fate: new Date('1956-12-18') },
    { name: 'ソルネーチヌイ', commissioned: new Date('1940-12-20'), fate: new Date('1960-02-24') },
    { name: 'ソクルシーテルヌイ', commissioned: new Date('1941-06-10'), fate: new Date('1958-07-12') },
    { name: 'スムィシリョーヌイ', commissioned: new Date('1941-03-28'), fate: new Date('1957-08-25') },

    // ウルピョーヌイ級駆逐艦
    { name: 'ウルピョーヌイ', commissioned: new Date('1941-07-07'), fate: new Date('1958-03-15') },
    { name: 'ウダルノイ', commissioned: new Date('1941-08-02'), fate: new Date('1957-11-30') },
    { name: 'ウストイチヴィ', commissioned: new Date('1941-08-12'), fate: new Date('1957-09-16') },
    { name: 'ウニークヌイ', commissioned: new Date('1941-09-20'), fate: new Date('1959-06-10') },

    // エミール・ベルティン級軽巡洋艦（フランスから供与）
    { name: 'ミルマンスク（元フランス海軍 エミール・ベルティン）', commissioned: new Date('1941-07-28'), fate: new Date('1947-03-17') },

    // ノヴィク級駆逐艦（1920年代後期に再建造）
    { name: 'ミコヤン', commissioned: new Date('1927-10-15'), fate: new Date('1941-07-25') },
    { name: 'クイブィシェフ', commissioned: new Date('1927-11-25'), fate: new Date('1941-06-29') },
    { name: 'ボインスキー', commissioned: new Date('1928-03-15'), fate: new Date('1941-09-17') },
    { name: 'ペトロフスキー', commissioned: new Date('1928-06-05'), fate: new Date('1941-12-08') },
    { name: 'スタリン', commissioned: new Date('1928-11-07'), fate: new Date('1941-06-21') },
    { name: 'ヴォロシロフ', commissioned: new Date('1929-01-01'), fate: new Date('1941-08-21') },

    // イングリッシュ型駆逐艦（アメリカから供与）
    { name: 'ジョーズ', commissioned: new Date('1944-07-10'), fate: new Date('1949-03-22') },
    { name: 'ドスコイ', commissioned: new Date('1944-06-15'), fate: new Date('1955-01-15') },
    { name: 'ジェラースキー', commissioned: new Date('1944-03-20'), fate: new Date('1952-11-30') },
    { name: 'デルーズヌイ', commissioned: new Date('1944-09-10'), fate: new Date('1954-12-10') },
    { name: 'デヤテルヌイ', commissioned: new Date('1944-04-12'), fate: new Date('1953-07-05') },
    { name: 'ドブレストヌイ', commissioned: new Date('1944-08-25'), fate: new Date('1955-08-20') },
    { name: 'ドスティーヌイ', commissioned: new Date('1944-05-31'), fate: new Date('1954-06-15') },
    { name: 'ヴィンサルキー', commissioned: new Date('1944-11-15'), fate: new Date('1952-09-15') },

    // タウン級軽巡洋艦（イギリスから供与）
    { name: 'ムルマンスク（元イギリス海軍 HMS ロイヤル・ソブリン）', commissioned: new Date('1944-05-30'), fate: new Date('1949-02-23') },

    // プロジェクト56駆逐艦（冷戦初期）
    { name: 'スプラーヴィドリーヴィ', commissioned: new Date('1955-06-30'), fate: new Date('1975-05-15') },
    { name: 'ナストイチヴィ', commissioned: new Date('1955-09-20'), fate: new Date('1987-09-30') },
    { name: 'スヴェドゥーシチ', commissioned: new Date('1955-12-27'), fate: new Date('1989-07-12') },
    { name: 'スムィシリョーヌイ', commissioned: new Date('1956-02-10'), fate: new Date('1990-03-15') },
    { name: 'スレーディシチ', commissioned: new Date('1956-04-15'), fate: new Date('1991-08-19') },

    // スカリストフ級駆逐艦
    { name: 'スカリストフ', commissioned: new Date('1941-01-15'), fate: new Date('1956-05-17') },
    { name: 'スタロベツキー', commissioned: new Date('1941-03-27'), fate: new Date('1958-01-20') },
    { name: 'ストレラ', commissioned: new Date('1941-02-15'), fate: new Date('1961-06-12') },
    { name: 'ストロムテルヌイ', commissioned: new Date('1941-05-07'), fate: new Date('1959-08-03') }
];

export default sovietDestroyers;