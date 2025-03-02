// japanShips.js
// 日本海軍の艦艇データ（駆逐艦を除く）（修正版）

// 日本の艦艇データ - 駆逐艦を除く
const japanShips = {
  carrier: [
    { name: '赤城', commissioned: new Date('1927-03-25'), fate: new Date('1942-06-05') },
    { name: '加賀', commissioned: new Date('1928-03-31'), fate: new Date('1942-06-04') },
    { name: '蒼龍', commissioned: new Date('1937-04-25'), fate: new Date('1942-06-04') },
    { name: '飛龍', commissioned: new Date('1939-07-05'), fate: new Date('1942-06-05') },
    { name: '翔鶴', commissioned: new Date('1941-08-08'), fate: new Date('1944-06-19') },
    { name: '瑞鶴', commissioned: new Date('1941-09-25'), fate: new Date('1944-10-25') },
    { name: '大鳳', commissioned: new Date('1944-03-27'), fate: new Date('1944-06-19') },
    { name: '信濃', commissioned: new Date('1944-11-19'), fate: new Date('1944-11-29') },
    { name: '雲龍', commissioned: new Date('1944-08-06'), fate: new Date('1946-09-12') },
    { name: '天城', commissioned: new Date('1944-08-10'), fate: new Date('1946-09-12') },
    { name: '葛城', commissioned: new Date('1944-10-15'), fate: new Date('1947-11-22') }
  ],
  lightCarrier: [
    { name: '鳳翔', commissioned: new Date('1922-12-27'), fate: new Date('1945-07-28') },
    { name: '龍驤', commissioned: new Date('1933-05-09'), fate: new Date('1942-11-04') },
    { name: '祥鳳', commissioned: new Date('1937-06-15'), fate: new Date('1942-05-08') },
    { name: '瑞鳳', commissioned: new Date('1936-12-27'), fate: new Date('1944-06-20') },
    { name: '隼鷹', commissioned: new Date('1942-08-31'), fate: new Date('1945-07-28') },
    { name: '飛鷹', commissioned: new Date('1942-01-31'), fate: new Date('1944-06-13') },
    { name: '千歳', commissioned: new Date('1944-01-01'), fate: new Date('1944-10-25') },
    { name: '千代田', commissioned: new Date('1944-01-01'), fate: new Date('1944-10-25') },
    { name: '龍鳳', commissioned: new Date('1942-11-30'), fate: new Date('1945-07-28') },
    { name: '大鷹', commissioned: new Date('1944-01-31'), fate: new Date('1945-07-18') },
    { name: '神鷹', commissioned: new Date('1944-07-15'), fate: new Date('1947-03-05') },
    { name: '春日丸', commissioned: new Date('1942-05-31'), fate: new Date('1942-09-15') },
    { name: '鹿島丸', commissioned: new Date('1942-11-30'), fate: new Date('1944-10-25') },
    { name: '大鷹', commissioned: new Date('1942-08-31'), fate: new Date('1944-08-09') }
  ],
  battleship: [
    { name: '長門', commissioned: new Date('1920-11-25'), fate: new Date('1946-07-25') },
    { name: '陸奥', commissioned: new Date('1921-10-22'), fate: new Date('1943-06-08') },
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
    { name: '榛名', commissioned: new Date('1915-04-19'), fate: new Date('1945-07-29') },
    { name: '霧島', commissioned: new Date('1915-04-19'), fate: new Date('1942-11-15') }
  ],
  heavyCruiser: [
    { name: '古鷹', commissioned: new Date('1926-07-25'), fate: new Date('1942-10-25') },
    { name: '加古', commissioned: new Date('1926-07-20'), fate: new Date('1942-08-10') },
    { name: '青葉', commissioned: new Date('1927-09-20'), fate: new Date('1945-07-28') },
    { name: '衣笠', commissioned: new Date('1927-09-30'), fate: new Date('1944-05-07') },
    { name: '妙高', commissioned: new Date('1929-07-31'), fate: new Date('1945-07-24') },
    { name: '那智', commissioned: new Date('1929-11-26'), fate: new Date('1944-11-05') },
    { name: '足柄', commissioned: new Date('1929-08-20'), fate: new Date('1945-07-24') },
    { name: '羽黒', commissioned: new Date('1930-04-10'), fate: new Date('1943-07-06') },
    { name: '高雄', commissioned: new Date('1932-05-31'), fate: new Date('1945-07-24') },
    { name: '愛宕', commissioned: new Date('1932-03-30'), fate: new Date('1944-10-23') },
    { name: '摩耶', commissioned: new Date('1932-06-30'), fate: new Date('1944-10-23') },
    { name: '鳥海', commissioned: new Date('1932-05-31'), fate: new Date('1944-10-25') },
    { name: '最上', commissioned: new Date('1935-07-31'), fate: new Date('1944-10-24') },
    { name: '三隈', commissioned: new Date('1935-08-31'), fate: new Date('1944-11-25') },
    { name: '鈴谷', commissioned: new Date('1937-10-31'), fate: new Date('1944-11-25') },
    { name: '熊野', commissioned: new Date('1937-10-31'), fate: new Date('1944-11-25') },
    { name: '利根', commissioned: new Date('1938-11-20'), fate: new Date('1945-07-24') },
    { name: '筑摩', commissioned: new Date('1939-05-20'), fate: new Date('1944-10-25') },
    { name: '伊吹', commissioned: new Date('1943-01-10'), fate: new Date('1945-07-28') }
  ],
  lightCruiser: [
    { name: '天龍', commissioned: new Date('1919-11-10'), fate: new Date('1942-12-02') },
    { name: '龍田', commissioned: new Date('1921-07-23'), fate: new Date('1944-09-08') },
    { name: '球磨', commissioned: new Date('1920-08-31'), fate: new Date('1944-03-10') },
    { name: '多摩', commissioned: new Date('1921-01-29'), fate: new Date('1944-10-25') },
    { name: '北上', commissioned: new Date('1921-04-15'), fate: new Date('1945-07-28') },
    { name: '大井', commissioned: new Date('1921-07-15'), fate: new Date('1944-07-19') },
    { name: '木曾', commissioned: new Date('1921-05-15'), fate: new Date('1944-11-21') },
    { name: '長良', commissioned: new Date('1922-07-20'), fate: new Date('1944-08-07') },
    { name: '五十鈴', commissioned: new Date('1923-08-15'), fate: new Date('1944-04-07') },
    { name: '名取', commissioned: new Date('1922-12-15'), fate: new Date('1944-08-18') },
    { name: '由良', commissioned: new Date('1923-03-20'), fate: new Date('1942-12-25') },
    { name: '川内', commissioned: new Date('1924-10-20'), fate: new Date('1944-10-11') },
    { name: '神通', commissioned: new Date('1924-11-15'), fate: new Date('1942-08-09') },
    { name: '那珂', commissioned: new Date('1925-11-30'), fate: new Date('1944-11-18') },
    { name: '阿武隈', commissioned: new Date('1925-05-25'), fate: new Date('1944-10-26') },
    { name: '鬼怒', commissioned: new Date('1923-05-10'), fate: new Date('1944-11-25') },
    { name: '夕張', commissioned: new Date('1923-07-31'), fate: new Date('1944-04-28') },
    { name: '能代', commissioned: new Date('1943-06-30'), fate: new Date('1944-11-15') },
    { name: '矢矧', commissioned: new Date('1943-12-29'), fate: new Date('1945-04-07') },
    { name: '酒匂', commissioned: new Date('1944-10-30'), fate: new Date('1945-07-30') },
    { name: '大淀', commissioned: new Date('1943-01-28'), fate: new Date('1945-07-28') },
    { name: '阿賀野', commissioned: new Date('1942-10-31'), fate: new Date('1945-07-28') },
    { name: '香取', commissioned: new Date('1940-04-20'), fate: new Date('1945-07-28') },
    { name: '鹿島', commissioned: new Date('1941-05-31'), fate: new Date('1945-07-30') }
  ]
};

export default japanShips;