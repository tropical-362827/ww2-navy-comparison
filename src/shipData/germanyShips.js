// germanyShips.js
// ドイツ海軍の艦艇データ（駆逐艦を除く）（修正版）

// ドイツの艦艇データ - 駆逐艦を除く
const germanyShips = {
  carrier: [],
  lightCarrier: [],
  battleship: [
    { name: 'ビスマルク', commissioned: new Date('1940-08-24'), fate: new Date('1941-05-27') },
    { name: 'ティルピッツ', commissioned: new Date('1941-02-25'), fate: new Date('1944-11-12') }
  ],
  battlecruiser: [
    { name: 'シャルンホルスト', commissioned: new Date('1939-01-07'), fate: new Date('1943-12-26') },
    { name: 'グナイゼナウ', commissioned: new Date('1938-05-21'), fate: new Date('1945-03-23') }
  ],
  heavyCruiser: [
    // ドイッチュランド級装甲艦
    { name: 'ドイッチュラント', commissioned: new Date('1933-04-01'), fate: new Date('1945-05-04') },
    { name: 'アドミラル・シェーア', commissioned: new Date('1934-11-12'), fate: new Date('1945-04-10') },
    { name: 'アドミラル・グラーフ・シュペー', commissioned: new Date('1936-01-06'), fate: new Date('1939-12-17') },
    // アドミラル・ヒッパー級重巡洋艦
    { name: 'アドミラル・ヒッパー', commissioned: new Date('1939-04-29'), fate: new Date('1945-05-02') },
    { name: 'ブリュッヒャー', commissioned: new Date('1939-09-20'), fate: new Date('1940-04-09') },
    { name: 'プリンツ・オイゲン', commissioned: new Date('1940-08-01'), fate: new Date('1946-12-22') }
  ],
  lightCruiser: [
    // エムデン（単艦）
    { name: 'エムデン', commissioned: new Date('1925-10-15'), fate: new Date('1945-05-03') },
    // ケーニヒスベルグ級軽巡洋艦
    { name: 'ケーニヒスベルク', commissioned: new Date('1929-04-17'), fate: new Date('1940-04-10') },
    { name: 'カールスルーエ', commissioned: new Date('1929-11-06'), fate: new Date('1940-04-09') },
    { name: 'ケルン', commissioned: new Date('1930-01-15'), fate: new Date('1945-03-30') },
    // ライプツィヒ級軽巡洋艦
    { name: 'ライプツィヒ', commissioned: new Date('1931-10-08'), fate: new Date('1946-07-20') },
    { name: 'ニュルンベルク', commissioned: new Date('1935-11-02'), fate: new Date('1945-12-05') },
  ]
};

export default germanyShips;