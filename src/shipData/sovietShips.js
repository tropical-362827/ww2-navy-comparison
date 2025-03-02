// sovietShips.js
// ソビエト海軍の艦艇データ（駆逐艦を除く）（修正版）

// ソビエトの艦艇データ - 駆逐艦を除く
const sovietShips = {
  carrier: [
    { name: 'プロジェクト71（計画空母）', commissioned: new Date('1944-01-01'), fate: new Date('1944-12-31'), notes: '計画段階で中止' },
    { name: 'プロジェクト72（計画空母）', commissioned: new Date('1945-01-01'), fate: new Date('1945-12-31'), notes: '計画段階で中止' }
  ],
  lightCarrier: [],
  battleship: [
    // ガングート級戦艦（後にオクチャブリスカヤ・レヴォリューツィヤ級）
    { name: 'ガングート（後のオクチャブリスカヤ・レヴォリューツィヤ）', commissioned: new Date('1914-10-15'), fate: new Date('1959-04-17') },
    { name: 'ペトロパブロフスク（後のマラト）', commissioned: new Date('1914-12-23'), fate: new Date('1953-02-04') },
    { name: 'セヴァストポリ（後のパリシュスカヤ・コミューナ）', commissioned: new Date('1914-12-18'), fate: new Date('1956-10-28') },
    { name: 'ポルタヴァ', commissioned: new Date('1915-12-30'), fate: new Date('1922-11-25'), notes: '1919年の火災で大きな被害を受け、修理されず。1940年に修復作業開始も第二次世界大戦で中断' },
    
    // ソヴェツキー・ソユーズ級戦艦
    { name: 'ソヴェツキー・ソユーズ', commissioned: new Date('1940-01-01'), fate: new Date('1945-05-01'), notes: '建造中に第二次世界大戦により中断' },
    { name: 'ソヴェツカヤ・ウクライナ', commissioned: new Date('1939-01-01'), fate: new Date('1941-08-01'), notes: '建造中にドイツ軍によって占領され、損傷' },
    { name: 'ソヴェツカヤ・ロシア', commissioned: new Date('1940-01-01'), fate: new Date('1940-12-01'), notes: '建造開始直後に中断' },
    { name: 'ソヴェツカヤ・ベラルーシア', commissioned: new Date('1940-01-01'), fate: new Date('1940-12-01'), notes: '起工されず' },
    
    // クロンシュタット級巡洋戦艦
    { name: 'クロンシュタット', commissioned: new Date('1941-01-01'), fate: new Date('1945-05-01'), notes: '建造中に第二次世界大戦により中断' },
    { name: 'セヴァストポリ', commissioned: new Date('1940-01-01'), fate: new Date('1945-05-01'), notes: '建造中に第二次世界大戦により中断' },
    
    // スターリングラード級巡洋戦艦
    { name: 'スターリングラード', commissioned: new Date('1951-01-01'), fate: new Date('1953-05-01'), notes: '1950年代初頭に起工するもスターリン死後に中止' },
    { name: 'モスクヴァ', commissioned: new Date('1952-01-01'), fate: new Date('1953-05-01'), notes: '起工されず' }
  ],
  battlecruiser: [],
  heavyCruiser: [
    // キーロフ級巡洋艦
    { name: 'キーロフ', commissioned: new Date('1938-09-26'), fate: new Date('1974-05-22') },
    { name: 'マクシム・ゴーリキー', commissioned: new Date('1940-12-12'), fate: new Date('1959-04-03') },
    { name: 'モロトフ（後のスラヴァ）', commissioned: new Date('1941-06-14'), fate: new Date('1972-02-03') },
    { name: 'カリーニン（後のアドミラル・ウシャコフ）', commissioned: new Date('1942-05-31'), fate: new Date('1963-02-12') },
    { name: 'カガノヴィチ（後のペトロパブロフスク）', commissioned: new Date('1944-01-06'), fate: new Date('1960-01-06') },
    { name: 'フルンゼ', commissioned: new Date('1950-12-15'), fate: new Date('1990-07-24'), notes: 'キーロフ級として計画されたが、戦後に完成。チャパエフ級として建造' },
    
    // チャパエフ級巡洋艦
    { name: 'チャパエフ', commissioned: new Date('1950-05-18'), fate: new Date('1981-02-07'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'ジェルジンスキー', commissioned: new Date('1952-06-18'), fate: new Date('1988-07-12'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'オルジョニキーゼ（後のカスピアン海でのスヴェルドロフ）', commissioned: new Date('1952-09-30'), fate: new Date('1972-12-04'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'ジェレズニャコフ', commissioned: new Date('1941-01-01'), fate: new Date('1945-05-01'), notes: '建造中に第二次世界大戦により中断。戦後取り壊し' },
    { name: 'クイビシェフ', commissioned: new Date('1941-01-01'), fate: new Date('1945-05-01'), notes: '建造中に第二次世界大戦により中断。戦後取り壊し' },
    
    // P-82（クレムリン）級重巡洋艦
    { name: 'モスクヴァ（プロジェクト82）', commissioned: new Date('1953-01-01'), fate: new Date('1955-05-01'), notes: '建造中に中止' },
    { name: 'スターリングラード（プロジェクト82）', commissioned: new Date('1954-01-01'), fate: new Date('1955-05-01'), notes: '計画段階で中止' },
    
    // クロンシュタット級巡洋戦艦
    { name: 'クロンシュタット', commissioned: new Date('1939-11-30'), fate: new Date('1945-05-01'), notes: '巡洋戦艦として建造開始。重巡洋艦として再分類されることもあるが、実際には完成せず' },
    { name: 'セヴァストポリ', commissioned: new Date('1939-11-05'), fate: new Date('1945-05-01'), notes: '巡洋戦艦として建造開始。重巡洋艦として再分類されることもあるが、実際には完成せず' }
  ],
  lightCruiser: [
    // スヴェルドロフ級軽巡洋艦（第二次世界大戦中に計画されたが、ほとんどは戦後の完成）
    { name: 'スヴェルドロフ', commissioned: new Date('1952-05-15'), fate: new Date('1989-06-30'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'アドミラル・ウシャコフ', commissioned: new Date('1953-09-08'), fate: new Date('1987-01-30'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'アドミラル・ラザレフ', commissioned: new Date('1953-07-30'), fate: new Date('1986-11-12'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'アレクサンドル・ネフスキー', commissioned: new Date('1952-06-31'), fate: new Date('1989-01-15'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'アドミラル・ナヒモフ', commissioned: new Date('1953-03-27'), fate: new Date('1961-04-29'), notes: '戦時中に建造開始も中断。戦後完成' },
    
    // クラスヌイ・カフカーズ級軽巡洋艦（元帝政ロシア/スヴェトラーナ級）
    { name: 'クラスヌイ・カフカーズ（元アドミラル・ラザレフ）', commissioned: new Date('1932-01-25'), fate: new Date('1957-02-06') },
    { name: 'クラスヌイ・クリム（元プロフィンテルン/スヴェトラーナ）', commissioned: new Date('1928-10-01'), fate: new Date('1960-04-20') },
    { name: 'チェルヴォナ・ウクライナ（元アドミラル・ナヒモフ）', commissioned: new Date('1927-03-21'), fate: new Date('1941-11-13') },
    { name: 'チェルヴォナ・モルダヴィア（元カーリン/ミクルヒョ・マクライ）', commissioned: new Date('1929-06-01'), fate: new Date('1941-06-26') },
    
    // ボガトゥイリ級軽巡洋艦
    { name: 'ヴォロシロフ', commissioned: new Date('1940-06-20'), fate: new Date('1961-11-06') },
    { name: 'オルジョニキーゼ', commissioned: new Date('1941-09-18'), fate: new Date('1963-12-20') },
    
    // オマハ級軽巡洋艦（米国から譲渡）
    { name: 'ムルマンスク（元USS Milwaukee）', commissioned: new Date('1944-04-20'), fate: new Date('1947-03-16'), notes: '米国からの貸与として供給。1947年に返還' },
    
    // キーロフ級巡洋艦
    { name: 'キーロフ', commissioned: new Date('1938-09-26'), fate: new Date('1974-05-22') },
    { name: 'マクシム・ゴーリキー', commissioned: new Date('1940-12-12'), fate: new Date('1959-04-03') },
    { name: 'モロトフ', commissioned: new Date('1941-06-14'), fate: new Date('1972-02-03') },
    
    // プロジェクト68-K/チャパエフ級軽巡洋艦
    { name: 'チャパエフ', commissioned: new Date('1950-05-18'), fate: new Date('1981-02-07'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'ジェルジンスキー', commissioned: new Date('1952-06-18'), fate: new Date('1988-07-12'), notes: '戦時中に建造開始も中断。戦後完成' },
    { name: 'ジェレズニャコフ', commissioned: new Date('1953-08-19'), fate: new Date('1988-04-15'), notes: '戦時中に建造開始も中断。戦後完成' }
  ]
};

export default sovietShips;