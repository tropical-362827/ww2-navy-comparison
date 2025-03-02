// franceShips.js
// フランス海軍の艦艇データ（駆逐艦を除く）（修正版）

// フランスの艦艇データ - 駆逐艦を除く
const franceShips = {
  carrier: [
    { name: 'ベアルン', commissioned: new Date('1927-05-01'), fate: new Date('1967-10-01') },
    { name: 'ジョフル', commissioned: new Date('1945-12-01'), fate: new Date('1946-08-01'), notes: '未完成。米国からのインディペンデンス級空母の譲渡として計画されたが実現せず' },
    { name: 'パンテール', commissioned: new Date('1943-03-11'), fate: new Date('1944-08-10'), notes: '護衛空母。元々は英国からの貸与。1944年に喪失' },
    { name: 'ディキシミュード', commissioned: new Date('1945-10-23'), fate: new Date('1951-07-15'), notes: '元英国の護衛空母HMS Biter。戦後フランスに譲渡された' }
  ],
  lightCarrier: [],
  battleship: [
    // ブルターニュ級戦艦
    { name: 'ブルターニュ', commissioned: new Date('1916-02-01'), fate: new Date('1940-07-03') },
    { name: 'プロヴァンス', commissioned: new Date('1916-07-01'), fate: new Date('1949-05-01') },
    { name: 'ロレーヌ', commissioned: new Date('1916-03-01'), fate: new Date('1953-12-17') },
    
    // クールベ級戦艦（古い戦艦）
    { name: 'クールベ', commissioned: new Date('1914-06-19'), fate: new Date('1944-08-09'), notes: '1944年6月、ノルマンディー上陸作戦時に人工防波堤として沈められた' },
    { name: 'パリ', commissioned: new Date('1914-08-01'), fate: new Date('1944-08-24'), notes: '1940年トゥーロンでの自沈後、1943年にイタリアによって浮揚、1944年連合軍の空襲で沈没' },
    
    // リシュリュー級戦艦
    { name: 'リシュリュー', commissioned: new Date('1940-04-15'), fate: new Date('1968-12-16') },
    { name: 'ジャン・バール', commissioned: new Date('1940-06-01'), fate: new Date('1970-01-01'), notes: '未完成のまま大戦を経験。戦後に完成' },
    { name: 'クレマンソー', commissioned: new Date('1942-01-01'), fate: new Date('1942-11-27'), notes: '建造中に中止' },
    { name: 'ガスコーニュ', commissioned: new Date('1942-01-01'), fate: new Date('1942-11-27'), notes: '建造中に中止' }
  ],
  battlecruiser: [
    // ダンケルク級巡洋戦艦
    { name: 'ダンケルク', commissioned: new Date('1936-05-01'), fate: new Date('1942-12-27') },
    { name: 'ストラスブール', commissioned: new Date('1938-10-15'), fate: new Date('1955-05-27') }
  ],
  heavyCruiser: [
    // デュケーヌ級重巡洋艦
    { name: 'デュケーヌ', commissioned: new Date('1928-07-01'), fate: new Date('1955-03-02') },
    { name: 'トゥールヴィル', commissioned: new Date('1928-12-10'), fate: new Date('1962-04-30') },
    
    // シュフラン級重巡洋艦
    { name: 'シュフラン', commissioned: new Date('1930-10-15'), fate: new Date('1963-03-31') },
    { name: 'コルベール', commissioned: new Date('1930-10-04'), fate: new Date('1944-06-30') },
    { name: 'フォーシュ', commissioned: new Date('1931-10-15'), fate: new Date('1959-03-02') },
    { name: 'デュプレクス', commissioned: new Date('1932-04-15'), fate: new Date('1942-11-27'), notes: '1940年より英国管理下、トゥーロン自沈' },
    
    // アルジェリー（単艦）
    { name: 'アルジェリー', commissioned: new Date('1934-09-15'), fate: new Date('1942-11-27') }
  ],
  lightCruiser: [
    // デュゲ・トルアン級軽巡洋艦
    { name: 'デュゲ・トルアン', commissioned: new Date('1926-04-01'), fate: new Date('1952-03-19') },
    { name: 'デュケイ・トルアン', commissioned: new Date('1928-04-01'), fate: new Date('1952-03-19') },
    
    // エミール・ベルタン（単艦）
    { name: 'エミール・ベルタン', commissioned: new Date('1934-01-01'), fate: new Date('1959-06-27') },
    
    // ラ・ガリソニエール級軽巡洋艦
    { name: 'ラ・ガリソニエール', commissioned: new Date('1935-01-01'), fate: new Date('1958-12-17') },
    { name: 'ジャン・ド・ヴィエンヌ', commissioned: new Date('1937-02-10'), fate: new Date('1942-11-27') },
    { name: 'マルセイユ', commissioned: new Date('1937-10-01'), fate: new Date('1942-11-27') },
    { name: 'モンカルム', commissioned: new Date('1938-05-15'), fate: new Date('1969-05-21') },
    { name: 'ジョルジュ・レイゲ', commissioned: new Date('1937-11-15'), fate: new Date('1957-12-01') },
    { name: 'グロワール', commissioned: new Date('1937-11-01'), fate: new Date('1942-11-27') },
    
    // プリマゲ（単艦）
    { name: 'プリマゲ', commissioned: new Date('1927-04-01'), fate: new Date('1942-11-27') },
    
    // ジャンヌ・ダルク（単艦）
    { name: 'ジャンヌ・ダルク', commissioned: new Date('1931-05-01'), fate: new Date('1964-06-30'), notes: '練習巡洋艦' },
    
    // ド・グラッセ（単艦）
    { name: 'ド・グラッセ', commissioned: new Date('1946-09-10'), fate: new Date('1974-05-01'), notes: '1940年に起工するも建造中断。戦後1946年に完成' },
    
    // ギシェン（単艦）
    { name: 'ギシェン', commissioned: new Date('1942-01-01'), fate: new Date('1942-11-27'), notes: '未完成のまま中止' }
  ]
};

export default franceShips;