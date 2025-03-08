// franceShips.js
// フランス海軍の艦艇データ（駆逐艦を除く）（修正版）

// フランスの艦艇データ - 駆逐艦を除く
const franceShips = {
  carrier: [
    { name: 'ベアルン', commissioned: new Date('1927-05-01'), fate: new Date('1967-10-01') },
  ],
  lightCarrier: [],
  battleship: [
    // ブルターニュ級戦艦
    { name: 'ブルターニュ', commissioned: new Date('1915-09-01'), fate: new Date('1940-07-03') },
    { name: 'プロヴァンス', commissioned: new Date('1915-06-01'), fate: new Date('1942-11-27') },
    { name: 'ロレーヌ', commissioned: new Date('1916-07-27'), fate: new Date('1947-02-01') },
    // クールベ級戦艦（古い戦艦）
    { name: 'クールベ', commissioned: new Date('1913-11-19'), fate: new Date('1944-06-09') },
    { name: 'パリ', commissioned: new Date('1914-08-01'), fate: new Date('1955-12-21') },
    // リシュリュー級戦艦
    { name: 'リシュリュー', commissioned: new Date('1940-04-01'), fate: new Date('1968-12-16') },
    { name: 'ジャン・バール', commissioned: new Date('1940-06-19'), fate: new Date('1970-01-01'), notes: '未完成のまま大戦を経験。戦後に完成' },
  ],
  battlecruiser: [
    // ダンケルク級巡洋戦艦
    { name: 'ダンケルク', commissioned: new Date('1937-05-01'), fate: new Date('1942-11-27') },
    { name: 'ストラスブール', commissioned: new Date('1938-12-01'), fate: new Date('1942-11-27') }
  ],
  heavyCruiser: [
    // デュケーヌ級重巡洋艦
    { name: 'デュケーヌ', commissioned: new Date('1928-12-06'), fate: new Date('1947-09-01') },
    { name: 'トゥールヴィル', commissioned: new Date('1929-03-12'), fate: new Date('1962-03-08') },
    // シュフラン級重巡洋艦
    { name: 'シュフラン', commissioned: new Date('1930-01-01'), fate: new Date('1962-12-01') },
    { name: 'コルベール', commissioned: new Date('1931-03-04'), fate: new Date('1942-11-27') },
    { name: 'フォーシュ', commissioned: new Date('1931-09-15'), fate: new Date('1942-11-27') },
    { name: 'デュプレクス', commissioned: new Date('1932-07-07'), fate: new Date('1942-11-27') },
    // アルジェリー（単艦）
    { name: 'アルジェリー', commissioned: new Date('1934-09-15'), fate: new Date('1942-11-27') }
  ],
  lightCruiser: [
    // デュゲイ・トルーアン級軽巡洋艦
    { name: 'デュゲイ・トルーアン', commissioned: new Date('1926-11-02'), fate: new Date('1952-03-19') },
    { name: 'ラモット・ピケ', commissioned: new Date('1927-03-05'), fate: new Date('1945-01-01') },
    { name: 'プリモゲ', commissioned: new Date('1926-09-01'), fate: new Date('1942-11-08') },
    // エミール・ベルタン（単艦）
    { name: 'エミール・ベルタン', commissioned: new Date('1934-01-01'), fate: new Date('1959-06-27') },
    // ラ・ガリソニエール級軽巡洋艦
    { name: 'ラ・ガリソニエール', commissioned: new Date('1936-01-01'), fate: new Date('1942-11-27') },
    { name: 'ジャン・ド・ヴィエンヌ', commissioned: new Date('1937-02-10'), fate: new Date('1942-11-27') },
    { name: 'グロワール', commissioned: new Date('1937-11-15'), fate: new Date('1955-02-01') },
    { name: 'マルセイエーズ', commissioned: new Date('1937-10-25'), fate: new Date('1942-11-27') },
    { name: 'モンカルム', commissioned: new Date('1937-11-15'), fate: new Date('1957-05-01') },
    { name: 'ジョルジュ・レイグ', commissioned: new Date('1937-11-15'), fate: new Date('1957-12-01') },
    // ジャンヌ・ダルク（単艦）
    { name: 'ジャンヌ・ダルク', commissioned: new Date('1931-10-01'), fate: new Date('1959-11-01') }
  ]
};

export default franceShips;