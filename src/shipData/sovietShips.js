// sovietShips.js
// ソビエト海軍の艦艇データ（駆逐艦を除く）（修正版）

// ソビエトの艦艇データ - 駆逐艦を除く
const sovietShips = {
  carrier: [],
  lightCarrier: [],
  battleship: [
    // ガングート級戦艦
    { name: 'ガングート', commissioned: new Date('1914-10-21'), fate: new Date('1956-01-01') },
    { name: 'ペトロパブロフスク', commissioned: new Date('1914-12-04'), fate: new Date('1953-09-04') },
    { name: 'ポルタヴァ', commissioned: new Date('1914-12-30'), fate: new Date('1940-12-01') },
    { name: 'セヴァストポリ', commissioned: new Date('1914-11-17'), fate: new Date('1956-02-17') }
  ],
  battlecruiser: [],
  heavyCruiser: [
  ],
  lightCruiser: [
    // オマハ級軽巡洋艦（米国から譲渡）
    { name: 'ムルマンスク', commissioned: new Date('1944-04-20'), fate: new Date('1947-03-16'), notes: '米国からの貸与として供給。1947年に返還' },

    // キーロフ級巡洋艦
    { name: 'キーロフ', commissioned: new Date('1938-09-23'), fate: new Date('1974-02-22') },
    { name: 'ヴォロシーロフ', commissioned: new Date('1940-06-20'), fate: new Date('1973-03-02') },

    // マクシム・ゴーリキー級巡洋艦
    { name: 'マクシム・ゴーリキー', commissioned: new Date('1940-10-25'), fate: new Date('1956-02-17') },
    { name: 'モロトフ', commissioned: new Date('1941-01-14'), fate: new Date('1972-04-04') },
    { name: 'ラーザリ・カガノーヴィチ', commissioned: new Date('1944-12-06'), fate: new Date('1960-01-01') }
  ]
};

export default sovietShips;