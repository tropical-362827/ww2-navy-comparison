// japanShips.js
// 日本海軍の艦艇データ（駆逐艦を除く）（修正版）

// 日本の艦艇データ - 駆逐艦を除く
const japanShips = {
  carrier: [
    { name: '赤城', commissioned: new Date('1927-03-25'), fate: new Date('1942-06-06') },
    { name: '加賀', commissioned: new Date('1928-03-31'), fate: new Date('1942-06-05') },
    { name: '蒼龍', commissioned: new Date('1937-12-29'), fate: new Date('1942-06-05') },
    { name: '飛龍', commissioned: new Date('1939-07-05'), fate: new Date('1942-06-06') },
    { name: '翔鶴', commissioned: new Date('1941-08-08'), fate: new Date('1944-06-19') },
    { name: '瑞鶴', commissioned: new Date('1941-09-25'), fate: new Date('1944-10-25') },
    { name: '大鳳', commissioned: new Date('1944-03-07'), fate: new Date('1944-06-19') },
    { name: '信濃', commissioned: new Date('1944-11-19'), fate: new Date('1944-11-29') },
    { name: '雲龍', commissioned: new Date('1944-08-06'), fate: new Date('1944-12-19') },
    { name: '天城', commissioned: new Date('1944-08-10'), fate: new Date('1945-11-20') },
    { name: '葛城', commissioned: new Date('1944-10-15'), fate: new Date('1945-10-20') }
  ],
  lightCarrier: [
    { name: '鳳翔', commissioned: new Date('1922-12-27'), fate: new Date('1945-10-05') },
    { name: '龍驤', commissioned: new Date('1933-05-09'), fate: new Date('1942-08-24') },
    { name: '瑞鳳', commissioned: new Date('1940-12-27'), fate: new Date('1944-10-25') },
    { name: '祥鳳', commissioned: new Date('1941-12-22'), fate: new Date('1942-05-08') },
    { name: '龍鳳', commissioned: new Date('1934-03-31'), fate: new Date('1945-11-30') },
    { name: '隼鷹', commissioned: new Date('1942-05-03'), fate: new Date('1945-11-30') },
    { name: '飛鷹', commissioned: new Date('1942-07-31'), fate: new Date('1944-06-20') },
    { name: '千歳', commissioned: new Date('1943-12-15'), fate: new Date('1944-10-25') },
    { name: '千代田', commissioned: new Date('1943-12-15'), fate: new Date('1944-10-25') },
    { name: '大鷹', commissioned: new Date('1942-08-31'), fate: new Date('1944-08-18') },
    { name: '雲鷹', commissioned: new Date('1942-05-31'), fate: new Date('1944-09-17') },
    { name: '沖鷹', commissioned: new Date('1942-11-25'), fate: new Date('1943-12-04') },
    { name: '神鷹', commissioned: new Date('1943-12-15'), fate: new Date('1944-11-17') },
    { name: '海鷹', commissioned: new Date('1943-11-23'), fate: new Date('1945-11-20') }
  ],
  battleship: [
    { name: '長門', commissioned: new Date('1920-11-25'), fate: new Date('1946-07-29') },
    { name: '陸奥', commissioned: new Date('1921-10-24'), fate: new Date('1943-06-08') },
    { name: '扶桑', commissioned: new Date('1915-11-08'), fate: new Date('1944-10-25') },
    { name: '山城', commissioned: new Date('1917-03-31'), fate: new Date('1944-10-25') },
    { name: '伊勢', commissioned: new Date('1917-12-15'), fate: new Date('1945-07-28') },
    { name: '日向', commissioned: new Date('1918-04-30'), fate: new Date('1945-07-24') },
    { name: '大和', commissioned: new Date('1941-12-16'), fate: new Date('1945-04-07') },
    { name: '武蔵', commissioned: new Date('1942-08-05'), fate: new Date('1944-10-24') }
  ],
  battlecruiser: [
    { name: '金剛', commissioned: new Date('1913-08-16'), fate: new Date('1944-11-21') },
    { name: '比叡', commissioned: new Date('1914-08-04'), fate: new Date('1942-11-13') },
    { name: '榛名', commissioned: new Date('1915-04-19'), fate: new Date('1945-07-28') },
    { name: '霧島', commissioned: new Date('1915-04-19'), fate: new Date('1942-11-15') }
  ],
  heavyCruiser: [
    // 古鷹型
    { name: '古鷹', commissioned: new Date('1926-03-31'), fate: new Date('1942-10-12') },
    { name: '加古', commissioned: new Date('1926-07-20'), fate: new Date('1942-08-10') },
    // 青葉型
    { name: '青葉', commissioned: new Date('1927-09-20'), fate: new Date('1945-07-28') },
    { name: '衣笠', commissioned: new Date('1927-09-30'), fate: new Date('1942-11-14') },
    // 妙高型
    { name: '妙高', commissioned: new Date('1929-07-31'), fate: new Date('1946-07-08') },
    { name: '那智', commissioned: new Date('1928-11-26'), fate: new Date('1944-11-05') },
    { name: '足柄', commissioned: new Date('1929-08-20'), fate: new Date('1945-06-08') },
    { name: '羽黒', commissioned: new Date('1929-04-25'), fate: new Date('1945-05-16') },
    // 高雄型
    { name: '高雄', commissioned: new Date('1932-05-31'), fate: new Date('1946-10-29') },
    { name: '愛宕', commissioned: new Date('1932-03-30'), fate: new Date('1944-10-23') },
    { name: '摩耶', commissioned: new Date('1932-06-30'), fate: new Date('1944-10-23') },
    { name: '鳥海', commissioned: new Date('1932-06-30'), fate: new Date('1944-10-25') },
    // 最上型
    { name: '最上', commissioned: new Date('1935-07-28'), fate: new Date('1944-10-25') },
    { name: '三隈', commissioned: new Date('1935-08-29'), fate: new Date('1942-06-07') },
    { name: '鈴谷', commissioned: new Date('1937-10-31'), fate: new Date('1944-10-25') },
    { name: '熊野', commissioned: new Date('1937-10-31'), fate: new Date('1944-11-25') },
    // 利根型
    { name: '利根', commissioned: new Date('1938-11-20'), fate: new Date('1945-07-28') },
    { name: '筑摩', commissioned: new Date('1939-05-20'), fate: new Date('1944-10-25') }
  ],
  lightCruiser: [
    // 天龍型
    { name: '天龍', commissioned: new Date('1919-11-20'), fate: new Date('1942-12-18') },
    { name: '龍田', commissioned: new Date('1919-03-31'), fate: new Date('1944-03-13') },
    // 球磨型
    { name: '球磨', commissioned: new Date('1920-08-31'), fate: new Date('1944-01-11') },
    { name: '多摩', commissioned: new Date('1921-01-29'), fate: new Date('1944-10-25') },
    { name: '北上', commissioned: new Date('1921-04-15'), fate: new Date('1945-11-30') },
    { name: '大井', commissioned: new Date('1921-10-03'), fate: new Date('1944-07-19') },
    { name: '木曾', commissioned: new Date('1921-05-04'), fate: new Date('1944-11-13') },
    // 長良型
    { name: '長良', commissioned: new Date('1922-04-21'), fate: new Date('1944-08-07') },
    { name: '五十鈴', commissioned: new Date('1923-08-15'), fate: new Date('1945-04-07') },
    { name: '名取', commissioned: new Date('1922-09-15'), fate: new Date('1944-08-18') },
    { name: '由良', commissioned: new Date('1923-03-20'), fate: new Date('1942-10-25') },
    { name: '鬼怒', commissioned: new Date('1922-11-10'), fate: new Date('1944-10-26') },
    { name: '阿武隈', commissioned: new Date('1925-05-26'), fate: new Date('1944-10-26') },
    // 川内型
    { name: '川内', commissioned: new Date('1924-04-29'), fate: new Date('1943-11-02') },
    { name: '神通', commissioned: new Date('1925-07-31'), fate: new Date('1943-07-13') },
    { name: '那珂', commissioned: new Date('1925-11-30'), fate: new Date('1944-02-17') },
    // 夕張型（実験艦）
    { name: '夕張', commissioned: new Date('1923-07-31'), fate: new Date('1944-04-28') },
    // 阿賀野型
    { name: '能代', commissioned: new Date('1943-06-30'), fate: new Date('1944-10-26') },
    { name: '矢矧', commissioned: new Date('1943-12-29'), fate: new Date('1945-04-07') },
    { name: '酒匂', commissioned: new Date('1944-11-30'), fate: new Date('1945-10-05') },
    { name: '阿賀野', commissioned: new Date('1942-10-31'), fate: new Date('1944-02-17') },
    // 大淀型
    { name: '大淀', commissioned: new Date('1943-02-28'), fate: new Date('1945-07-28') }
  ]
};

export default japanShips;