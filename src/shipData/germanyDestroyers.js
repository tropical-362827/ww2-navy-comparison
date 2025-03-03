// germanyDestroyers.js
// ドイツ海軍の駆逐艦データ

const germanyDestroyers = [
    // 1934型駆逐艦
    { name: 'Z1 レーベ', commissioned: new Date('1935-09-14'), fate: new Date('1940-04-10') },
    { name: 'Z2 ゲオルク・ティーレ', commissioned: new Date('1935-11-27'), fate: new Date('1940-04-13') },
    { name: 'Z3 マックス・シュルツ', commissioned: new Date('1937-09-08'), fate: new Date('1940-04-10') },
    { name: 'Z4 リヒャルト・バイツェン', commissioned: new Date('1937-05-13'), fate: new Date('1940-04-10') },

    // 1934A型駆逐艦
    { name: 'Z5 パウル・ヤコビ', commissioned: new Date('1937-06-29'), fate: new Date('1940-04-10') },
    { name: 'Z6 テオドール・リードル', commissioned: new Date('1937-07-02'), fate: new Date('1940-04-13') },
    { name: 'Z7 ヘルマン・シェーマン', commissioned: new Date('1937-09-12'), fate: new Date('1942-12-02') },
    { name: 'Z8 ブルーノ・ハインマン', commissioned: new Date('1938-01-08'), fate: new Date('1940-04-10') },
    { name: 'Z9 ヴォルフガング・ツェンカー', commissioned: new Date('1938-02-02'), fate: new Date('1940-02-19') },
    { name: 'Z10 ハンス・ローディ', commissioned: new Date('1938-06-09'), fate: new Date('1942-12-13') },
    { name: 'Z11 ベルント・フォン・アルニム', commissioned: new Date('1938-07-06'), fate: new Date('1940-04-13') },
    { name: 'Z12 エーリヒ・ギーゼ', commissioned: new Date('1938-05-04'), fate: new Date('1940-04-10') },
    { name: 'Z13 エーリヒ・ケルナー', commissioned: new Date('1939-05-28'), fate: new Date('1942-01-13') },
    { name: 'Z14 フリードリヒ・イーン', commissioned: new Date('1938-12-07'), fate: new Date('1945-01-08') },
    { name: 'Z15 エーリヒ・シュタインブリンク', commissioned: new Date('1939-01-31'), fate: new Date('1942-09-13') },
    { name: 'Z16 フリードリヒ・エッコルト', commissioned: new Date('1938-07-28'), fate: new Date('1942-05-02') },

    // 1936型駆逐艦
    { name: 'Z17 ディーター・フォン・レーダー', commissioned: new Date('1938-10-29'), fate: new Date('1940-06-08') },
    { name: 'Z18 ハンス・リューデマン', commissioned: new Date('1938-12-08'), fate: new Date('1940-06-08') },
    { name: 'Z19 ヘルマン・キューネ', commissioned: new Date('1938-12-12'), fate: new Date('1940-06-08') },
    { name: 'Z20 カール・ギャリスター', commissioned: new Date('1939-08-15'), fate: new Date('1940-04-09') },
    { name: 'Z21 ヴィルヘルム・ハイドカンプ', commissioned: new Date('1940-03-26'), fate: new Date('1942-11-29') },
    { name: 'Z22 アントン・シュミット', commissioned: new Date('1938-09-24'), fate: new Date('1940-02-22') },

    // 1936A型駆逐艦 (モーブ/Mob型)
    { name: 'Z23 (T23) カール・ガルスター', commissioned: new Date('1940-09-15'), fate: new Date('1969-12-20') },
    { name: 'Z24', commissioned: new Date('1940-10-31'), fate: new Date('1944-08-25') },
    { name: 'Z25', commissioned: new Date('1940-11-30'), fate: new Date('1954-04-29') },
    { name: 'Z26', commissioned: new Date('1941-06-11'), fate: new Date('1942-03-29') },
    { name: 'Z27', commissioned: new Date('1941-07-26'), fate: new Date('1943-12-28') },
    { name: 'Z28', commissioned: new Date('1941-08-09'), fate: new Date('1945-03-06') },
    { name: 'Z29', commissioned: new Date('1941-10-25'), fate: new Date('1946-12-16') },
    { name: 'Z30', commissioned: new Date('1941-12-15'), fate: new Date('1944-01-09') },

    // 1936A(Mob)型駆逐艦
    { name: 'Z31', commissioned: new Date('1942-02-11'), fate: new Date('1972-06-15') },
    { name: 'Z32', commissioned: new Date('1942-02-15'), fate: new Date('1944-06-09') },
    { name: 'Z33', commissioned: new Date('1942-09-06'), fate: new Date('1946-12-16') },
    { name: 'Z34', commissioned: new Date('1943-06-05'), fate: new Date('1959-12-15') },
    { name: 'Z35', commissioned: new Date('1943-01-22'), fate: new Date('1944-12-12') },
    { name: 'Z36', commissioned: new Date('1942-07-15'), fate: new Date('1944-12-12') },
    { name: 'Z37', commissioned: new Date('1942-07-16'), fate: new Date('1945-01-24') },
    { name: 'Z38', commissioned: new Date('1943-03-20'), fate: new Date('1958-06-30') },
    { name: 'Z39 (D18)', commissioned: new Date('1943-08-21'), fate: new Date('1969-06-16') },

    // 1936B型駆逐艦
    { name: 'Z43', commissioned: new Date('1944-09-30'), fate: new Date('1945-03-10') },
    { name: 'Z44', commissioned: new Date('1944-10-28'), fate: new Date('1945-03-30') },
    { name: 'Z45', commissioned: new Date('1944-12-30'), fate: new Date('1945-03-30') },
    { name: 'Z46', commissioned: new Date('1945-01-28'), fate: new Date('1945-03-30') },

    // 旧駆逐艦 (元オランダ艦)
    { name: 'ZH1 (元オランダ海軍 Gerard Callenburgh)', commissioned: new Date('1942-10-11'), fate: new Date('1944-08-09') },
    { name: 'ZG3 (元ギリシャ海軍 Vasilefs Georgios)', commissioned: new Date('1942-03-21'), fate: new Date('1944-10-16') },

    // 魚雷艇 (大型)
    { name: 'T1', commissioned: new Date('1940-03-15'), fate: new Date('1942-05-23') },
    { name: 'T2', commissioned: new Date('1940-05-16'), fate: new Date('1942-04-10') },
    { name: 'T3', commissioned: new Date('1940-07-15'), fate: new Date('1944-10-18') },
    { name: 'T4', commissioned: new Date('1940-08-21'), fate: new Date('1943-10-10') },
    { name: 'T5', commissioned: new Date('1941-04-01'), fate: new Date('1944-09-20') },
    { name: 'T6', commissioned: new Date('1941-09-21'), fate: new Date('1942-09-15') },
    { name: 'T7', commissioned: new Date('1941-10-18'), fate: new Date('1944-08-09') },
    { name: 'T8', commissioned: new Date('1941-11-09'), fate: new Date('1942-03-13') },
    { name: 'T9', commissioned: new Date('1942-01-16'), fate: new Date('1944-05-28') },
    { name: 'T10', commissioned: new Date('1942-03-14'), fate: new Date('1943-08-25') },
    { name: 'T11', commissioned: new Date('1942-03-31'), fate: new Date('1943-08-19') },
    { name: 'T12', commissioned: new Date('1942-05-09'), fate: new Date('1944-09-04') },
    { name: 'T13', commissioned: new Date('1942-06-20'), fate: new Date('1944-02-23') },
    { name: 'T14', commissioned: new Date('1942-07-25'), fate: new Date('1943-10-09') },
    { name: 'T15', commissioned: new Date('1942-08-22'), fate: new Date('1943-08-06') },
    { name: 'T16', commissioned: new Date('1942-09-12'), fate: new Date('1945-03-10') },
    { name: 'T17', commissioned: new Date('1942-10-17'), fate: new Date('1944-08-20') },
    { name: 'T18', commissioned: new Date('1942-11-14'), fate: new Date('1944-08-18') },
    { name: 'T19', commissioned: new Date('1943-01-30'), fate: new Date('1944-08-20') },
    { name: 'T20', commissioned: new Date('1943-03-13'), fate: new Date('1944-08-20') },
    { name: 'T21', commissioned: new Date('1943-06-12'), fate: new Date('1944-05-14') },
    { name: 'T22', commissioned: new Date('1943-05-15'), fate: new Date('1944-12-05') },
    { name: 'T23', commissioned: new Date('1943-05-29'), fate: new Date('1944-10-24') },
    { name: 'T24', commissioned: new Date('1943-06-30'), fate: new Date('1944-08-24') },
    { name: 'T25', commissioned: new Date('1943-08-21'), fate: new Date('1944-05-20') },
    { name: 'T26', commissioned: new Date('1943-09-18'), fate: new Date('1944-06-18') },
    { name: 'T27', commissioned: new Date('1943-11-20'), fate: new Date('1944-08-02') },
    { name: 'T28', commissioned: new Date('1943-12-29'), fate: new Date('1944-08-26') },
    { name: 'T29', commissioned: new Date('1944-02-19'), fate: new Date('1944-04-20') },
    { name: 'T30', commissioned: new Date('1944-03-18'), fate: new Date('1944-06-04') },
    { name: 'T31', commissioned: new Date('1944-04-29'), fate: new Date('1945-05-30') },
    { name: 'T32', commissioned: new Date('1944-07-15'), fate: new Date('1945-04-12') },
    { name: 'T33', commissioned: new Date('1944-08-12'), fate: new Date('1944-10-12') },
    { name: 'T34', commissioned: new Date('1944-09-23'), fate: new Date('1945-03-31') },
    { name: 'T35', commissioned: new Date('1944-10-22'), fate: new Date('1945-04-30') },
    { name: 'T36', commissioned: new Date('1944-11-25'), fate: new Date('1945-04-02') },

    // 旧式駆逐艦 (第一次世界大戦時代)
    { name: 'レオパルト', commissioned: new Date('1927-09-15'), fate: new Date('1943-05-30') },
    { name: 'ティーガー', commissioned: new Date('1928-02-15'), fate: new Date('1939-12-01') },
    { name: 'イルティス', commissioned: new Date('1927-05-24'), fate: new Date('1942-09-14') },
    { name: 'ルックス', commissioned: new Date('1927-01-15'), fate: new Date('1940-07-05') },
    { name: 'ヤグアー', commissioned: new Date('1928-04-15'), fate: new Date('1943-07-14') },
    { name: 'シーゲフリート', commissioned: new Date('1930-09-24'), fate: new Date('1944-03-21') },
    { name: 'シュタイニガー・リヒャルド', commissioned: new Date('1928-07-15'), fate: new Date('1944-12-30') },
    { name: 'ベルンハルド・フォン・アルニム', commissioned: new Date('1927-08-17'), fate: new Date('1941-10-15') },
    { name: 'フォン・デア・グレーベン', commissioned: new Date('1931-06-10'), fate: new Date('1944-05-24') },
    { name: 'マックス・シュルツ', commissioned: new Date('1927-12-08'), fate: new Date('1939-11-30') },
    { name: 'フリードリヒ・エッコルト', commissioned: new Date('1929-01-15'), fate: new Date('1942-02-20') },
    { name: 'カール・ギャリスター', commissioned: new Date('1928-10-15'), fate: new Date('1943-04-13') }
];

export default germanyDestroyers;