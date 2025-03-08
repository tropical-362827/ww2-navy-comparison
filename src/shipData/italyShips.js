const italyShips = {
  carrier: [],
  lightCarrier: [],
  battleship: [
    // コンテ・ディ・カブール級戦艦
    { name: 'コンテ・ディ・カブール', commissioned: new Date('1915-04-01'), fate: new Date('1945-02-15') },
    { name: 'ジュリオ・チェザレ', commissioned: new Date('1914-06-15'), fate: new Date('1955-10-29') },
    // アンドレア・ドリア級戦艦
    { name: 'アンドレア・ドリア', commissioned: new Date('1916-03-13'), fate: new Date('1956-09-16') },
    { name: 'カイオ・ドゥイリオ', commissioned: new Date('1916-06-13'), fate: new Date('1956-09-01') },
    // リットリオ級戦艦
    { name: 'リットリオ', commissioned: new Date('1940-05-06'), fate: new Date('1948-01-01') },
    { name: 'ヴィットリオ・ヴェネト', commissioned: new Date('1940-05-01'), fate: new Date('1948-10-01') },
    { name: 'ローマ', commissioned: new Date('1942-06-14'), fate: new Date('1943-09-09') }
  ],
  battlecruiser: [],
  heavyCruiser: [
    // トレント級重巡洋艦
    { name: 'トレント', commissioned: new Date('1929-04-03'), fate: new Date('1942-06-15') },
    { name: 'トリエステ', commissioned: new Date('1928-12-21'), fate: new Date('1943-04-10') },
    { name: 'ボルツァーノ', commissioned: new Date('1933-08-19'), fate: new Date('1944-06-22') },
    // ザラ級重巡洋艦
    { name: 'ザラ', commissioned: new Date('1931-10-20'), fate: new Date('1941-03-29') },
    { name: 'フィウメ', commissioned: new Date('1931-11-23'), fate: new Date('1941-03-29') },
    { name: 'ゴリツィア', commissioned: new Date('1931-12-23'), fate: new Date('1946-01-01') },
    { name: 'ポーラ', commissioned: new Date('1932-12-21'), fate: new Date('1941-03-29') }
  ],
  lightCruiser: [
    // アルベルト・ダ・ジュッサーノ級軽巡洋艦
    { name: 'アルベルト・ダ・ジュッサーノ', commissioned: new Date('1931-02-05'), fate: new Date('1941-12-13') },
    { name: 'バルトロメオ・コレオーニ', commissioned: new Date('1932-02-10'), fate: new Date('1940-07-19') },
    { name: 'アルバリコ・ダ・バルビアーノ', commissioned: new Date('1931-06-09'), fate: new Date('1941-12-13') },
    { name: 'ジョヴァンニ・デッレ・バンデ・ネーレ', commissioned: new Date('1931-04-27'), fate: new Date('1942-04-01') },
    // ルイージ・カドルナ級軽巡洋艦
    { name: 'ルイージ・カドルナ', commissioned: new Date('1933-08-11'), fate: new Date('1951-01-01') },
    { name: 'アルマンド・ディアス', commissioned: new Date('1932-04-29'), fate: new Date('1941-02-25') },
    // ライモンド・モンテクッコリ級軽巡洋艦
    { name: 'ライモンド・モンテクッコリ', commissioned: new Date('1935-06-30'), fate: new Date('1964-06-01') },
    { name: 'ムツィオ・アッテンドロ', commissioned: new Date('1935-08-07'), fate: new Date('1942-12-04') },
    // エマヌエーレ・フィリベルト・ドゥーカ・ダオスタ級軽巡洋艦
    { name: 'エマヌエーレ・フィリベルト・ドゥーカ・ダオスタ', commissioned: new Date('1935-07-13'), fate: new Date('1956-11-16') },
    { name: 'エウジェニオ・ディ・サヴォイア', commissioned: new Date('1936-01-16'), fate: new Date('1951-12-01') },
    // ルイージ・ディ・サヴォイア・ドゥーカ・デッリ・アブルッツィ級軽巡洋艦
    { name: 'ルイジ・ディ・サヴォイア・ドゥーカ・デッリ・アブルッツィ', commissioned: new Date('1937-12-01'), fate: new Date('1961-0-01') },
    { name: 'ジュゼッペ・ガリバルディ', commissioned: new Date('1937-12-01'), fate: new Date('1971-02-20') },
    // カピターニ・ロマーニ級軽巡洋艦
    { name: 'アッティリオ・レゴロ', commissioned: new Date('1942-05-14'), fate: new Date('1969-06-02') },
    { name: 'シピオーネ・アフリカーノ', commissioned: new Date('1943-04-23'), fate: new Date('1976-01-01') },
    { name: 'ポンペオ・マーニョ', commissioned: new Date('1943-06-24'), fate: new Date('1948-06-01') },
  ]
};

export default italyShips;