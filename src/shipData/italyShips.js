// italyShips.js
// イタリア海軍の艦艇データ（駆逐艦を除く）（修正版）

// イタリアの艦艇データ - 駆逐艦を除く
const italyShips = {
  carrier: [
    { name: 'アクイラ', commissioned: new Date('1943-05-15'), fate: new Date('1945-02-19'), notes: '旅客船ローマを改装した空母。完成直前に休戦。実際には正式就役せず。1944年ジェノヴァ港で連合軍の空襲により沈没。' },
    { name: 'スペルヴィア', commissioned: new Date('1943-01-01'), fate: new Date('1946-02-01'), notes: '旅客船アウグストゥスを改装した空母。完成前に休戦。完成せず。' }
  ],
  lightCarrier: [],
  battleship: [
    // コンテ・ディ・カブール級戦艦
    { name: 'コンテ・ディ・カブール', commissioned: new Date('1915-06-01'), fate: new Date('1945-06-01') },
    { name: 'ジュリオ・チェザレ', commissioned: new Date('1914-06-15'), fate: new Date('1949-08-28'), notes: '戦後ソ連に引き渡され、ノヴォロシースク（Novorossiysk）と改名' },
    { name: 'レオナルド・ダ・ヴィンチ', commissioned: new Date('1914-05-17'), fate: new Date('1916-08-02'), notes: '誤爆または事故で沈没' },
    { name: 'ダンテ・アリギエリ', commissioned: new Date('1913-01-15'), fate: new Date('1923-12-16'), notes: '老朽化により除籍' },
    
    // アンドレア・ドリア級戦艦
    { name: 'アンドレア・ドリア', commissioned: new Date('1916-03-13'), fate: new Date('1956-11-01') },
    { name: 'カイオ・ドゥイリオ', commissioned: new Date('1916-05-24'), fate: new Date('1956-09-01') },
    
    // リットリオ級戦艦
    { name: 'リットリオ', commissioned: new Date('1940-05-06'), fate: new Date('1952-05-01'), notes: '降伏後イタリアのため息（Italia）と改名' },
    { name: 'ヴィットリオ・ヴェネト', commissioned: new Date('1940-05-01'), fate: new Date('1948-10-01') },
    { name: 'ローマ', commissioned: new Date('1942-06-14'), fate: new Date('1943-09-09') },
    { name: 'インペロ', commissioned: new Date('1943-05-14'), fate: new Date('1947-02-15'), notes: '未完成のまま休戦。実際には就役せず。ドイツに奪取され、後に連合軍の空襲により損傷' }
  ],
  battlecruiser: [],
  heavyCruiser: [
    // トレント級重巡洋艦
    { name: 'トレント', commissioned: new Date('1929-04-03'), fate: new Date('1942-11-12') },
    { name: 'トリエステ', commissioned: new Date('1929-12-21'), fate: new Date('1943-04-10') },
    { name: 'ボルツァーノ', commissioned: new Date('1932-08-19'), fate: new Date('1943-09-09') },
    
    // ザラ級重巡洋艦
    { name: 'ザラ', commissioned: new Date('1931-10-20'), fate: new Date('1941-03-29') },
    { name: 'フィウメ', commissioned: new Date('1931-11-23'), fate: new Date('1941-03-29') },
    { name: 'ゴリツィア', commissioned: new Date('1933-12-23'), fate: new Date('1944-06-18') },
    { name: 'ポーラ', commissioned: new Date('1932-12-21'), fate: new Date('1941-03-29') },
    
    // サン・ジョルジョ級（計画のみ）
    { name: 'サン・ジョルジョ', commissioned: new Date('1941-01-01'), fate: new Date('1943-09-08'), notes: '計画段階で中止' },
    { name: 'サン・マルコ', commissioned: new Date('1941-01-01'), fate: new Date('1943-09-08'), notes: '計画段階で中止' }
  ],
  lightCruiser: [
    // ジュッサーノ/アルベルト・ダ・ジュッサーノ級軽巡洋艦（コンドッティエリ級Aグループ）
    { name: 'アルベルト・ダ・ジュッサーノ', commissioned: new Date('1931-02-01'), fate: new Date('1941-12-13') },
    { name: 'バルトロメオ・コレオーニ', commissioned: new Date('1931-08-21'), fate: new Date('1940-07-19') },
    { name: 'アルマンド・ディアツ', commissioned: new Date('1932-04-29'), fate: new Date('1941-02-25') },
    { name: 'アルバリコ・ダ・バルビアーノ', commissioned: new Date('1931-04-09'), fate: new Date('1941-12-13') },
    
    // カドルナ/ルイジ・カドルナ級軽巡洋艦（コンドッティエリ級Bグループ）
    { name: 'ルイジ・カドルナ', commissioned: new Date('1933-06-13'), fate: new Date('1951-01-01') },
    { name: 'アルマンド・ディアツ（2代目）', commissioned: new Date('1933-04-29'), fate: new Date('1957-11-01') },
    
    // バンデ・ネーレ/ジョヴァンニ・デッレ・バンデ・ネーレ級軽巡洋艦（コンドッティエリ級Cグループ）
    { name: 'ジョヴァンニ・デッレ・バンデ・ネーレ', commissioned: new Date('1930-11-01'), fate: new Date('1942-04-01') },
    { name: 'バルトロメオ・コロンボ', commissioned: new Date('1933-08-13'), fate: new Date('1943-09-09'), notes: '建造中に中止' },
    
    // アオスタ/エマヌエーレ・フィリベルト・ドゥーカ・ダオスタ級軽巡洋艦（コンドッティエリ級Dグループ）
    { name: 'エマヌエーレ・フィリベルト・ドゥーカ・ダオスタ', commissioned: new Date('1935-01-16'), fate: new Date('1956-11-16') },
    { name: 'エウジェニオ・ディ・サヴォイア', commissioned: new Date('1935-06-16'), fate: new Date('1951-12-01'), notes: '戦後ソ連に引き渡され、スタリングラード（Stalingrad）と改名' },
    
    // モンテクッコリ/ライモンド・モンテクッコリ級軽巡洋艦（コンドッティエリ級Eグループ）
    { name: 'ライモンド・モンテクッコリ', commissioned: new Date('1935-06-30'), fate: new Date('1964-06-01') },
    { name: 'ムツィオ・アッテンドロ', commissioned: new Date('1935-08-05'), fate: new Date('1964-09-15') },
    
    // アブルッツィ/ルイジ・ディ・サヴォイア・ドゥーカ・デリ・アブルッツィ級軽巡洋艦（コンドッティエリ級Fグループ）
    { name: 'ルイジ・ディ・サヴォイア・ドゥーカ・デリ・アブルッツィ', commissioned: new Date('1937-12-01'), fate: new Date('1961-03-01') },
    { name: 'ジュゼッペ・ガリバルディ', commissioned: new Date('1937-12-26'), fate: new Date('1972-02-16') },
    
    // カピターニ・ロマーニ級軽巡洋艦
    { name: 'アッティリオ・レゴロ', commissioned: new Date('1942-05-15'), fate: new Date('1948-01-15'), notes: '1943年にドイツに押収され、FR11と改名。1945年終戦後にフランスに引き渡され、シャテールノー（Chateaurenault）と改名' },
    { name: 'ポンペオ・マーニョ', commissioned: new Date('1943-06-01'), fate: new Date('1943-09-10'), notes: '完成直前に休戦。1947年にイタリアに戻り、サン・マルコと改名、後にサン・ジョルジョへ改名' },
    { name: 'シピオーネ・アフリカーノ', commissioned: new Date('1943-04-23'), fate: new Date('1943-10-02') },
    { name: 'ウルピアーノ・ファツィオ', commissioned: new Date('1943-05-01'), fate: new Date('1943-09-09'), notes: '建造中に休戦' },
    { name: 'コルネリオ・シッラ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に休戦' },
    { name: 'カイオ・マリオ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に休戦' },
    { name: 'クラウディオ・ドルーソ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に休戦' },
    { name: 'オットヴィアーノ・アウグスト', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に休戦' },
    { name: 'クラウディオ・ティベリオ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に中止' },
    { name: 'ヴェスパシアーノ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造中に中止' },
    
    // エトナ級軽巡洋艦
    { name: 'エトナ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造途中で空母に改造する計画があったが実現せず' },
    { name: 'ヴェスヴィオ', commissioned: new Date('1942-01-01'), fate: new Date('1943-09-09'), notes: '建造途中で空母に改造する計画があったが実現せず' },
    
    // タラント級軽巡洋艦（計画のみ）
    { name: 'タラント', commissioned: new Date('1943-01-01'), fate: new Date('1943-09-09'), notes: '計画段階で中止' },
    
    // 訓練巡洋艦
    { name: 'クリストフォロ・コロンボ', commissioned: new Date('1928-04-19'), fate: new Date('1943-09-08'), notes: '練習巡洋艦' },
    { name: 'アメリゴ・ヴェスプッチ', commissioned: new Date('1931-10-15'), fate: new Date('1943-09-08'), notes: '練習巡洋艦' }
  ]
};

export default italyShips;