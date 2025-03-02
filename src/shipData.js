// shipData.js
// 第二次世界大戦の各国艦船データ

export const countries = [
  { id: 'japan', name: '日本' },
  { id: 'usa', name: 'アメリカ' },
  { id: 'uk', name: 'イギリス' },
  { id: 'germany', name: 'ドイツ' },
  { id: 'france', name: 'フランス' },
  { id: 'italy', name: 'イタリア' },
  { id: 'soviet', name: 'ソビエト' }
];

export const shipTypes = [
  { id: 'carrier', name: '正規空母', icon: '🛫' },
  { id: 'lightCarrier', name: '軽空母', icon: '✈️' },
  { id: 'battleship', name: '戦艦', icon: '🚢' },
  { id: 'battlecruiser', name: '巡洋戦艦', icon: '⚓' },
  { id: 'heavyCruiser', name: '重巡洋艦', icon: '⛴️' },
  { id: 'lightCruiser', name: '軽巡洋艦', icon: '🛥️' },
  { id: 'destroyer', name: '駆逐艦', icon: '🚤' }
];

export const shipData = {
  japan: {
    carrier: [
      { name: '赤城', commissioned: new Date('1927-03-25'), fate: new Date('1942-06-05') },
      { name: '加賀', commissioned: new Date('1928-03-31'), fate: new Date('1942-06-04') },
      { name: '蒼龍', commissioned: new Date('1937-04-25'), fate: new Date('1942-06-04') },
      { name: '飛龍', commissioned: new Date('1939-07-05'), fate: new Date('1942-06-05') },
      { name: '翔鶴', commissioned: new Date('1941-08-08'), fate: new Date('1944-06-19') },
      { name: '瑞鶴', commissioned: new Date('1941-09-25'), fate: new Date('1944-10-25') },
      { name: '大鳳', commissioned: new Date('1944-03-27'), fate: new Date('1944-06-19') },
      { name: '信濃', commissioned: new Date('1944-11-19'), fate: new Date('1944-11-29') }
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
      { name: '雲龍', commissioned: new Date('1944-08-06'), fate: new Date('1946-09-12') },
      { name: '天城', commissioned: new Date('1944-08-10'), fate: new Date('1946-09-12') }
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
      { name: '筑摩', commissioned: new Date('1939-05-20'), fate: new Date('1944-10-25') }
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
      { name: '夕張', commissioned: new Date('1923-07-31'), fate: new Date('1944-04-28') },
      { name: '能代', commissioned: new Date('1943-06-30'), fate: new Date('1944-11-15') },
      { name: '矢矧', commissioned: new Date('1943-12-29'), fate: new Date('1945-04-07') },
      { name: '酒匂', commissioned: new Date('1944-10-30'), fate: new Date('1945-07-30') },
      { name: '大淀', commissioned: new Date('1943-01-28'), fate: new Date('1945-07-28') }
    ],
    destroyer: [
      { name: '吹雪', commissioned: new Date('1928-08-10'), fate: new Date('1942-10-11') },
      { name: '白雪', commissioned: new Date('1929-02-05'), fate: new Date('1944-11-11') },
      { name: '初雪', commissioned: new Date('1929-04-27'), fate: new Date('1945-07-25') },
      { name: '叢雲', commissioned: new Date('1931-06-25'), fate: new Date('1944-02-16') },
      { name: '薄雲', commissioned: new Date('1930-11-25'), fate: new Date('1945-04-07') },
      { name: '暁', commissioned: new Date('1932-05-08'), fate: new Date('1943-08-11') },
      { name: '響', commissioned: new Date('1932-08-10'), fate: new Date('1945-07-28') },
      { name: '雷', commissioned: new Date('1932-11-22'), fate: new Date('1943-11-27') },
      { name: '電', commissioned: new Date('1933-02-03'), fate: new Date('1944-11-25') },
      { name: '初春', commissioned: new Date('1933-02-27'), fate: new Date('1944-11-29') },
      { name: '子日', commissioned: new Date('1933-03-31'), fate: new Date('1944-01-17') },
      { name: '若葉', commissioned: new Date('1935-05-31'), fate: new Date('1942-06-05') },
      { name: '初霜', commissioned: new Date('1935-09-30'), fate: new Date('1944-11-25') },
      { name: '白露', commissioned: new Date('1935-08-31'), fate: new Date('1942-10-25') },
      { name: '時雨', commissioned: new Date('1936-05-07'), fate: new Date('1944-11-11') },
      { name: '村雨', commissioned: new Date('1935-10-25'), fate: new Date('1943-12-02') },
      { name: '夕立', commissioned: new Date('1937-01-11'), fate: new Date('1942-11-13') },
      { name: '春雨', commissioned: new Date('1937-01-25'), fate: new Date('1944-11-11') },
      { name: '五月雨', commissioned: new Date('1937-03-29'), fate: new Date('1943-08-09') },
      { name: '海風', commissioned: new Date('1937-03-31'), fate: new Date('1945-04-07') },
      { name: '山風', commissioned: new Date('1937-06-30'), fate: new Date('1942-09-05') },
      { name: '江風', commissioned: new Date('1937-08-30'), fate: new Date('1944-11-21') },
      { name: '朝潮', commissioned: new Date('1937-08-31'), fate: new Date('1944-11-13') },
      { name: '大潮', commissioned: new Date('1937-09-15'), fate: new Date('1944-10-31') },
      { name: '満潮', commissioned: new Date('1937-10-15'), fate: new Date('1944-05-26') },
      { name: '荒潮', commissioned: new Date('1937-11-15'), fate: new Date('1943-11-25') },
      { name: '陽炎', commissioned: new Date('1940-01-15'), fate: new Date('1943-12-21') },
      { name: '不知火', commissioned: new Date('1939-11-10'), fate: new Date('1944-11-25') },
      { name: '黒潮', commissioned: new Date('1939-11-27'), fate: new Date('1943-10-06') },
      { name: '雪風', commissioned: new Date('1940-08-20'), fate: new Date('1948-08-12') }
    ]
  },
  usa: {
    carrier: [
      { name: 'レキシントン', commissioned: new Date('1927-12-14'), fate: new Date('1942-05-08') },
      { name: 'サラトガ', commissioned: new Date('1927-11-16'), fate: new Date('1946-07-25') },
      { name: 'エンタープライズ', commissioned: new Date('1938-05-12'), fate: new Date('1947-02-17') },
      { name: 'ヨークタウン', commissioned: new Date('1937-09-30'), fate: new Date('1942-06-07') },
      { name: 'ワスプ', commissioned: new Date('1940-04-25'), fate: new Date('1942-09-15') },
      { name: 'ホーネット', commissioned: new Date('1941-10-20'), fate: new Date('1942-10-27') },
      { name: 'エセックス', commissioned: new Date('1942-12-31'), fate: new Date('1973-06-30') },
      { name: 'インテレピッド', commissioned: new Date('1943-08-16'), fate: new Date('1974-03-15') },
      { name: 'ホーネット（2代目）', commissioned: new Date('1943-11-29'), fate: new Date('1970-01-26') },
      { name: 'ヨークタウン（2代目）', commissioned: new Date('1943-04-15'), fate: new Date('1970-06-27') },
      { name: 'バンカー・ヒル', commissioned: new Date('1943-05-25'), fate: new Date('1973-09-09') },
      { name: 'ワスプ（2代目）', commissioned: new Date('1943-11-24'), fate: new Date('1972-07-01') },
      { name: 'フランクリン', commissioned: new Date('1944-01-31'), fate: new Date('1964-10-01') }
    ],
    lightCarrier: [
      { name: 'レンジャー', commissioned: new Date('1934-06-04'), fate: new Date('1947-07-18') },
      { name: 'インディペンデンス', commissioned: new Date('1943-01-14'), fate: new Date('1951-01-29') },
      { name: 'プリンストン', commissioned: new Date('1943-02-25'), fate: new Date('1944-10-24') },
      { name: 'ベロー・ウッド', commissioned: new Date('1943-03-31'), fate: new Date('1947-11-13') },
      { name: 'カウペンス', commissioned: new Date('1943-05-15'), fate: new Date('1947-05-13') },
      { name: 'モントレー', commissioned: new Date('1943-06-17'), fate: new Date('1956-01-16') },
      { name: 'ラングレー', commissioned: new Date('1943-08-31'), fate: new Date('1963-02-15') },
      { name: 'ケイボット', commissioned: new Date('1943-07-24'), fate: new Date('1955-11-21') },
      { name: 'バターン', commissioned: new Date('1943-11-17'), fate: new Date('1954-05-09') },
      { name: 'サンジャシント', commissioned: new Date('1943-12-15'), fate: new Date('1970-06-01') }
    ],
    battleship: [
      { name: 'ニューヨーク', commissioned: new Date('1914-04-15'), fate: new Date('1946-08-29') },
      { name: 'テキサス', commissioned: new Date('1914-03-12'), fate: new Date('1948-04-21') },
      { name: 'ネバダ', commissioned: new Date('1916-03-11'), fate: new Date('1946-08-29') },
      { name: 'オクラホマ', commissioned: new Date('1916-05-02'), fate: new Date('1941-12-07') },
      { name: 'ペンシルベニア', commissioned: new Date('1916-06-12'), fate: new Date('1948-02-29') },
      { name: 'アリゾナ', commissioned: new Date('1916-10-17'), fate: new Date('1941-12-07') },
      { name: 'テネシー', commissioned: new Date('1920-06-03'), fate: new Date('1959-03-01') },
      { name: 'カリフォルニア', commissioned: new Date('1921-08-10'), fate: new Date('1959-02-01') },
      { name: 'コロラド', commissioned: new Date('1923-08-30'), fate: new Date('1959-01-07') },
      { name: 'メリーランド', commissioned: new Date('1921-07-21'), fate: new Date('1959-04-10') },
      { name: 'ウェストバージニア', commissioned: new Date('1923-12-01'), fate: new Date('1959-01-09') },
      { name: 'ノースカロライナ', commissioned: new Date('1941-04-09'), fate: new Date('1961-06-01') },
      { name: 'ワシントン', commissioned: new Date('1941-05-15'), fate: new Date('1960-06-01') },
      { name: 'サウスダコタ', commissioned: new Date('1942-03-20'), fate: new Date('1962-06-01') },
      { name: 'インディアナ', commissioned: new Date('1942-04-30'), fate: new Date('1963-09-01') },
      { name: 'マサチューセッツ', commissioned: new Date('1942-05-12'), fate: new Date('1965-03-01') },
      { name: 'アラバマ', commissioned: new Date('1942-08-16'), fate: new Date('1962-01-09') },
      { name: 'アイオワ', commissioned: new Date('1943-02-22'), fate: new Date('1990-10-26') },
      { name: 'ニュージャージー', commissioned: new Date('1943-05-23'), fate: new Date('1991-02-08') },
      { name: 'ミズーリ', commissioned: new Date('1944-06-11'), fate: new Date('1992-03-31') },
      { name: 'ウィスコンシン', commissioned: new Date('1944-04-16'), fate: new Date('1991-09-30') }
    ],
    battlecruiser: [],
    heavyCruiser: [
      { name: 'ペンサコーラ', commissioned: new Date('1929-02-06'), fate: new Date('1948-08-29') },
      { name: 'ソルトレイクシティ', commissioned: new Date('1929-12-11'), fate: new Date('1948-06-29') },
      { name: 'ノーサンプトン', commissioned: new Date('1930-05-17'), fate: new Date('1942-12-01') },
      { name: 'チェスター', commissioned: new Date('1930-06-24'), fate: new Date('1950-06-10') },
      { name: 'ポートランド', commissioned: new Date('1933-02-23'), fate: new Date('1959-07-20') },
      { name: 'インディアナポリス', commissioned: new Date('1932-11-15'), fate: new Date('1945-07-30') },
      { name: 'アストリア', commissioned: new Date('1934-04-28'), fate: new Date('1942-08-09') },
      { name: 'ミネアポリス', commissioned: new Date('1934-05-19'), fate: new Date('1946-05-10') },
      { name: 'ニューオーリンズ', commissioned: new Date('1934-02-15'), fate: new Date('1947-02-10') },
      { name: 'クインシー', commissioned: new Date('1936-06-09'), fate: new Date('1942-08-09') },
      { name: 'ヴィンセンス', commissioned: new Date('1937-02-24'), fate: new Date('1942-08-09') },
      { name: 'ワイチタ', commissioned: new Date('1939-02-16'), fate: new Date('1959-08-14') },
      { name: 'ボルチモア', commissioned: new Date('1943-04-15'), fate: new Date('1971-01-31') },
      { name: 'ボストン', commissioned: new Date('1943-06-30'), fate: new Date('1946-03-12') },
      { name: 'キャンベラ', commissioned: new Date('1943-10-14'), fate: new Date('1970-02-31') }
    ],
    lightCruiser: [
      { name: 'オマハ', commissioned: new Date('1923-02-24'), fate: new Date('1946-11-01') },
      { name: 'ミルウォーキー', commissioned: new Date('1923-06-20'), fate: new Date('1949-03-01') },
      { name: 'シンシナティ', commissioned: new Date('1924-01-01'), fate: new Date('1946-11-01') },
      { name: 'レイリー', commissioned: new Date('1924-02-06'), fate: new Date('1946-11-30') },
      { name: 'デトロイト', commissioned: new Date('1923-07-31'), fate: new Date('1946-01-11') },
      { name: 'リッチモンド', commissioned: new Date('1923-07-02'), fate: new Date('1945-12-21') },
      { name: 'コンコード', commissioned: new Date('1923-11-03'), fate: new Date('1947-01-12') },
      { name: 'トレントン', commissioned: new Date('1924-04-19'), fate: new Date('1945-12-20') },
      { name: 'マーブルヘッド', commissioned: new Date('1924-09-08'), fate: new Date('1945-11-01') },
      { name: 'メンフィス', commissioned: new Date('1925-02-04'), fate: new Date('1947-12-17') },
      { name: 'ブルックリン', commissioned: new Date('1937-09-30'), fate: new Date('1947-01-03') },
      { name: 'フィラデルフィア', commissioned: new Date('1937-09-23'), fate: new Date('1951-02-09') },
      { name: 'サバンナ', commissioned: new Date('1938-03-10'), fate: new Date('1947-02-17') },
      { name: 'ナッシュビル', commissioned: new Date('1938-06-17'), fate: new Date('1945-12-09') },
      { name: 'フェニックス', commissioned: new Date('1938-10-03'), fate: new Date('1946-07-09') },
      { name: 'クリーブランド', commissioned: new Date('1942-06-15'), fate: new Date('1947-01-07') },
      { name: 'コロンビア', commissioned: new Date('1942-07-29'), fate: new Date('1946-11-30') },
      { name: 'モントペリエ', commissioned: new Date('1942-09-09'), fate: new Date('1960-01-16') },
      { name: 'デンバー', commissioned: new Date('1942-10-15'), fate: new Date('1947-02-07') },
      { name: 'サンタフェ', commissioned: new Date('1942-11-24'), fate: new Date('1946-10-03') }
    ],
    destroyer: [
      { name: 'ファラガット', commissioned: new Date('1934-06-01'), fate: new Date('1945-04-23') },
      { name: 'ウォーデン', commissioned: new Date('1935-01-09'), fate: new Date('1945-01-18') },
      { name: 'マハン', commissioned: new Date('1936-08-18'), fate: new Date('1944-12-07') },
      { name: 'カミングス', commissioned: new Date('1936-11-25'), fate: new Date('1944-11-10') },
      { name: 'ダンラップ', commissioned: new Date('1937-06-12'), fate: new Date('1944-07-09') },
      { name: 'グリッドレー', commissioned: new Date('1937-06-24'), fate: new Date('1945-08-18') },
      { name: 'ベンハム', commissioned: new Date('1939-02-02'), fate: new Date('1943-11-15') },
      { name: 'ラング', commissioned: new Date('1939-05-30'), fate: new Date('1946-12-16') },
      { name: 'ソマーズ', commissioned: new Date('1939-09-01'), fate: new Date('1945-11-28') },
      { name: 'フレッチャー', commissioned: new Date('1942-06-30'), fate: new Date('1969-08-01') },
      { name: 'ラドフォード', commissioned: new Date('1942-07-22'), fate: new Date('1960-09-08') },
      { name: 'ジェンキンス', commissioned: new Date('1942-07-31'), fate: new Date('1969-12-02') },
      { name: 'ラフェイ', commissioned: new Date('1942-10-31'), fate: new Date('1943-08-07') },
      { name: 'オバノン', commissioned: new Date('1943-06-26'), fate: new Date('1970-09-18') },
      { name: 'ニコラス', commissioned: new Date('1943-06-04'), fate: new Date('1970-01-31') }
    ]
  },
  uk: {
    carrier: [
      { name: 'アークロイヤル', commissioned: new Date('1938-11-16'), fate: new Date('1941-11-14') },
      { name: 'イラストリアス', commissioned: new Date('1940-05-25'), fate: new Date('1956-11-01') },
      { name: 'フォーミダブル', commissioned: new Date('1940-11-24'), fate: new Date('1953-03-12') },
      { name: 'ヴィクトリアス', commissioned: new Date('1941-05-14'), fate: new Date('1969-10-01') },
      { name: 'インドミタブル', commissioned: new Date('1941-10-10'), fate: new Date('1955-12-30') },
      { name: 'インプラカブル', commissioned: new Date('1944-08-22'), fate: new Date('1955-10-01') },
      { name: 'インディファティガブル', commissioned: new Date('1944-05-08'), fate: new Date('1954-12-01') }
    ],
    lightCarrier: [
      { name: 'ハーミーズ', commissioned: new Date('1924-02-18'), fate: new Date('1942-04-09') },
      { name: 'イーグル', commissioned: new Date('1924-02-26'), fate: new Date('1942-08-11') },
      { name: 'ファーリアス', commissioned: new Date('1939-09-15'), fate: new Date('1944-09-01') },
      { name: 'ユニコーン', commissioned: new Date('1943-03-12'), fate: new Date('1959-12-30') },
      { name: 'アクティビティ', commissioned: new Date('1942-09-29'), fate: new Date('1946-01-22') },
      { name: 'アーガス', commissioned: new Date('1918-09-16'), fate: new Date('1944-12-05') },
      { name: 'ブィッター', commissioned: new Date('1942-08-15'), fate: new Date('1950-04-19') }
    ],
    battleship: [
      { name: 'クイーン・エリザベス', commissioned: new Date('1915-01-22'), fate: new Date('1948-07-07') },
      { name: 'ウォースパイト', commissioned: new Date('1915-03-08'), fate: new Date('1947-05-01') },
      { name: 'ヴァリアント', commissioned: new Date('1916-02-28'), fate: new Date('1948-08-04') },
      { name: 'バーラム', commissioned: new Date('1916-10-19'), fate: new Date('1941-11-25') },
      { name: 'マレーヤ', commissioned: new Date('1916-02-18'), fate: new Date('1945-05-16') },
      { name: 'レヴェンジ', commissioned: new Date('1916-03-01'), fate: new Date('1948-05-05') },
      { name: 'ロイヤル・ソブリン', commissioned: new Date('1916-05-01'), fate: new Date('1949-05-05') },
      { name: 'ラミリーズ', commissioned: new Date('1917-09-01'), fate: new Date('1948-02-26') },
      { name: 'レゾリューション', commissioned: new Date('1916-12-30'), fate: new Date('1948-05-05') },
      { name: 'ロイヤル・オーク', commissioned: new Date('1916-05-01'), fate: new Date('1939-10-14') },
      { name: 'ネルソン', commissioned: new Date('1927-08-15'), fate: new Date('1949-03-19') },
      { name: 'ロドニー', commissioned: new Date('1927-11-10'), fate: new Date('1948-03-30') },
      { name: 'キング・ジョージ5世', commissioned: new Date('1940-12-11'), fate: new Date('1957-07-01') },
      { name: 'プリンス・オブ・ウェールズ', commissioned: new Date('1941-01-19'), fate: new Date('1941-12-10') },
      { name: 'デューク・オブ・ヨーク', commissioned: new Date('1941-11-04'), fate: new Date('1957-11-18') },
      { name: 'アンソン', commissioned: new Date('1942-06-22'), fate: new Date('1957-12-30') },
      { name: 'ホウ', commissioned: new Date('1942-08-28'), fate: new Date('1958-05-05') }
    ],
    battlecruiser: [
      { name: 'レナウン', commissioned: new Date('1916-09-20'), fate: new Date('1948-08-26') },
      { name: 'リパルス', commissioned: new Date('1916-08-18'), fate: new Date('1941-12-10') },
      { name: 'フッド', commissioned: new Date('1920-05-15'), fate: new Date('1941-05-24') }
    ],
    heavyCruiser: [
      { name: 'ベルウィック', commissioned: new Date('1927-07-15'), fate: new Date('1940-12-25') },
      { name: 'サフォーク', commissioned: new Date('1928-05-31'), fate: new Date('1948-03-25') },
      { name: 'コーンウォール', commissioned: new Date('1928-05-28'), fate: new Date('1942-04-05') },
      { name: 'カンバーランド', commissioned: new Date('1928-02-16'), fate: new Date('1959-10-01') },
      { name: 'ケント', commissioned: new Date('1928-06-25'), fate: new Date('1948-06-22') },
      { name: 'ロンドン', commissioned: new Date('1929-01-31'), fate: new Date('1949-01-04') },
      { name: 'ドーセットシャー', commissioned: new Date('1930-09-30'), fate: new Date('1942-04-05') },
      { name: 'デヴォンシャー', commissioned: new Date('1929-03-18'), fate: new Date('1954-06-04') },
      { name: 'シュロップシャー', commissioned: new Date('1929-09-24'), fate: new Date('1949-05-20') },
      { name: 'サセックス', commissioned: new Date('1929-03-19'), fate: new Date('1949-03-03') },
      { name: 'ノーフォーク', commissioned: new Date('1930-12-30'), fate: new Date('1950-02-28') },
      { name: 'エクセター', commissioned: new Date('1931-07-27'), fate: new Date('1942-03-01') },
      { name: 'ヨーク', commissioned: new Date('1930-05-01'), fate: new Date('1941-05-22') }
    ],
    lightCruiser: [
      { name: 'エメラルド', commissioned: new Date('1926-01-15'), fate: new Date('1948-11-23') },
      { name: 'エンタープライズ', commissioned: new Date('1926-07-07'), fate: new Date('1946-04-22') },
      { name: 'リアンダー', commissioned: new Date('1933-07-24'), fate: new Date('1950-12-15') },
      { name: 'オライオン', commissioned: new Date('1934-01-18'), fate: new Date('1949-10-19') },
      { name: 'アキリーズ', commissioned: new Date('1933-08-16'), fate: new Date('1946-01-15') },
      { name: 'アジャックス', commissioned: new Date('1935-04-12'), fate: new Date('1949-02-18') },
      { name: 'ネプチューン', commissioned: new Date('1934-02-23'), fate: new Date('1941-12-19') },
      { name: 'アンフィオン', commissioned: new Date('1934-06-25'), fate: new Date('1939-08-06') },
      { name: 'アレシューザ', commissioned: new Date('1935-05-06'), fate: new Date('1942-10-11') },
      { name: 'ペネロープ', commissioned: new Date('1936-11-13'), fate: new Date('1944-02-18') },
      { name: 'ガラテア', commissioned: new Date('1934-08-09'), fate: new Date('1941-12-14') },
      { name: 'オーロラ', commissioned: new Date('1937-11-12'), fate: new Date('1940-10-20') },
      { name: 'シリウス', commissioned: new Date('1942-05-06'), fate: new Date('1966-10-15') },
      { name: 'クレオパトラ', commissioned: new Date('1941-01-05'), fate: new Date('1958-12-15') },
      { name: 'ディド', commissioned: new Date('1940-09-30'), fate: new Date('1957-05-05') }
    ],
    destroyer: [
      { name: 'エレクトラ', commissioned: new Date('1935-09-15'), fate: new Date('1942-02-27') },
      { name: 'エンカウンター', commissioned: new Date('1935-10-02'), fate: new Date('1942-03-01') },
      { name: 'エクスプレス', commissioned: new Date('1934-11-02'), fate: new Date('1943-09-10') },
      { name: 'エスキモー', commissioned: new Date('1938-01-30'), fate: new Date('1943-06-14') },
      { name: 'コサック', commissioned: new Date('1938-06-07'), fate: new Date('1940-10-27') },
      { name: 'ジプシー', commissioned: new Date('1936-11-22'), fate: new Date('1939-11-12') },
      { name: 'ハーディ', commissioned: new Date('1936-12-09'), fate: new Date('1940-04-10') },
      { name: 'ホスタイル', commissioned: new Date('1937-08-10'), fate: new Date('1940-08-23') },
      { name: 'アイレックス', commissioned: new Date('1937-05-05'), fate: new Date('1940-05-28') },
      { name: 'インピリアル', commissioned: new Date('1937-01-30'), fate: new Date('1941-09-29') },
      { name: 'インパルシブ', commissioned: new Date('1938-01-20'), fate: new Date('1940-12-19') },
      { name: 'インタレピッド', commissioned: new Date('1937-07-29'), fate: new Date('1941-05-02') },
      { name: 'ジャベリン', commissioned: new Date('1939-06-10'), fate: new Date('1941-11-20') },
      { name: 'ジャーヴィス', commissioned: new Date('1939-10-08'), fate: new Date('1942-07-26') },
      { name: 'ジェルシー', commissioned: new Date('1939-05-26'), fate: new Date('1941-06-02') }
    ]
  },
  germany: {
    carrier: [
      { name: 'グラーフ・ツェッペリン', commissioned: new Date('1943-08-01'), fate: new Date('1945-05-02') }
    ],
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
      { name: 'ドイッチュラント（ルッツォウ）', commissioned: new Date('1933-04-01'), fate: new Date('1945-05-03') },
      { name: 'アドミラル・シェーア', commissioned: new Date('1934-11-12'), fate: new Date('1945-04-10') },
      { name: 'アドミラル・グラーフ・シュペー', commissioned: new Date('1936-01-06'), fate: new Date('1939-12-17') },
      { name: 'ヒッパー', commissioned: new Date('1939-04-29'), fate: new Date('1945-05-03') },
      { name: 'ブリュッヒャー', commissioned: new Date('1939-09-20'), fate: new Date('1940-04-09') },
      { name: 'プリンツ・オイゲン', commissioned: new Date('1940-08-01'), fate: new Date('1946-12-22') }
    ],
    lightCruiser: [
      { name: 'エムデン', commissioned: new Date('1925-10-15'), fate: new Date('1945-05-03') },
      { name: 'ケルン', commissioned: new Date('1930-01-15'), fate: new Date('1945-04-14') },
      { name: 'ケーニヒスベルク', commissioned: new Date('1929-04-17'), fate: new Date('1940-04-10') },
      { name: 'カールスルーエ', commissioned: new Date('1929-11-06'), fate: new Date('1940-04-09') },
      { name: 'ニュルンベルク', commissioned: new Date('1935-11-02'), fate: new Date('1945-12-05') },
      { name: 'ライプツィヒ', commissioned: new Date('1931-10-08'), fate: new Date('1946-02-02') }
    ],
    destroyer: [
      { name: 'Z1 レーベ', commissioned: new Date('1936-01-14'), fate: new Date('1940-04-10') },
      { name: 'Z2 ゲオルク・ティーレ', commissioned: new Date('1935-11-27'), fate: new Date('1940-04-13') },
      { name: 'Z3 マックス・シュルツ', commissioned: new Date('1937-09-08'), fate: new Date('1940-04-10') },
      { name: 'Z4 リヒャルト・バイツェン', commissioned: new Date('1937-11-30'), fate: new Date('1940-04-10') },
      { name: 'Z5 パウル・ヤコビ', commissioned: new Date('1937-06-29'), fate: new Date('1940-04-10') },
      { name: 'Z7 ヘルマン・シェーマン', commissioned: new Date('1938-07-12'), fate: new Date('1942-12-09') },
      { name: 'Z10 ハンス・ローディ', commissioned: new Date('1938-10-08'), fate: new Date('1942-12-13') },
      { name: 'Z12 エーリヒ・ギーゼ', commissioned: new Date('1938-05-04'), fate: new Date('1940-04-10') },
      { name: 'Z13 エーリヒ・ケルナー', commissioned: new Date('1938-08-28'), fate: new Date('1942-01-13') },
      { name: 'Z15 エッホルト', commissioned: new Date('1939-01-02'), fate: new Date('1942-09-13') },
      { name: 'Z17 ディーター・フォン・レーダー', commissioned: new Date('1939-04-29'), fate: new Date('1940-06-08') },
      { name: 'Z18 ハンス・リューデマン', commissioned: new Date('1939-08-08'), fate: new Date('1940-06-08') },
      { name: 'Z19 ヘルマン・キューネ', commissioned: new Date('1939-12-12'), fate: new Date('1940-06-08') },
      { name: 'Z20 カール・ギャリスター', commissioned: new Date('1939-08-15'), fate: new Date('1940-04-09') },
      { name: 'Z21 ヴィルヘルム・ハイドカンプ', commissioned: new Date('1940-03-26'), fate: new Date('1942-11-29') }
    ]
  },
  france: {
    carrier: [
      { name: 'ベアルン', commissioned: new Date('1927-05-01'), fate: new Date('1967-10-01') }
    ],
    lightCarrier: [],
    battleship: [
      { name: 'ブルターニュ', commissioned: new Date('1916-02-01'), fate: new Date('1940-07-03') },
      { name: 'プロヴァンス', commissioned: new Date('1916-07-01'), fate: new Date('1949-05-01') },
      { name: 'ロレーヌ', commissioned: new Date('1916-03-01'), fate: new Date('1953-12-17') },
      { name: 'リシュリュー', commissioned: new Date('1940-04-15'), fate: new Date('1968-12-16') },
      { name: 'ジャン・バール', commissioned: new Date('1940-06-01'), fate: new Date('1970-01-01') }
    ],
    battlecruiser: [
      { name: 'ダンケルク', commissioned: new Date('1936-05-01'), fate: new Date('1942-12-27') },
      { name: 'ストラスブール', commissioned: new Date('1938-10-15'), fate: new Date('1955-05-27') }
    ],
    heavyCruiser: [
      { name: 'デュケーヌ', commissioned: new Date('1928-07-01'), fate: new Date('1955-03-02') },
      { name: 'トゥールヴィル', commissioned: new Date('1928-12-10'), fate: new Date('1962-04-30') },
      { name: 'シュフラン', commissioned: new Date('1930-10-15'), fate: new Date('1963-03-31') },
      { name: 'コルベール', commissioned: new Date('1930-10-04'), fate: new Date('1944-06-30') },
      { name: 'フォーシュ', commissioned: new Date('1931-10-15'), fate: new Date('1959-03-02') },
      { name: 'アルジェリー', commissioned: new Date('1934-09-15'), fate: new Date('1942-11-27') }
    ],
    lightCruiser: [
      { name: 'エミール・ベルタン', commissioned: new Date('1934-01-01'), fate: new Date('1959-06-27') },
      { name: 'プリマゲ', commissioned: new Date('1927-04-01'), fate: new Date('1942-11-27') },
      { name: 'ラ・ガリソニエール', commissioned: new Date('1935-01-01'), fate: new Date('1958-12-17') },
      { name: 'ジャン・ド・ヴィエンヌ', commissioned: new Date('1937-02-10'), fate: new Date('1942-11-27') },
      { name: 'マルセイユ', commissioned: new Date('1937-10-01'), fate: new Date('1942-11-27') },
      { name: 'モンカルム', commissioned: new Date('1938-05-15'), fate: new Date('1969-05-21') },
      { name: 'ジョルジュ・レイゲ', commissioned: new Date('1937-11-15'), fate: new Date('1957-12-01') }
    ],
    destroyer: [
      { name: 'ル・ファンタスク', commissioned: new Date('1935-05-01'), fate: new Date('1957-12-02') },
      { name: 'ローデイン', commissioned: new Date('1934-11-01'), fate: new Date('1942-12-08') },
      { name: 'ル・テリブル', commissioned: new Date('1935-10-15'), fate: new Date('1962-07-01') },
      { name: 'ル・マラン', commissioned: new Date('1936-05-10'), fate: new Date('1954-11-15') },
      { name: 'ヴォルタ', commissioned: new Date('1936-11-06'), fate: new Date('1943-04-03') },
      { name: 'モゴドール', commissioned: new Date('1937-07-29'), fate: new Date('1962-04-02') },
      { name: 'ル・トリオンファン', commissioned: new Date('1934-08-25'), fate: new Date('1950-03-26') },
      { name: 'ル・シュヴァリエ・ポール', commissioned: new Date('1937-05-15'), fate: new Date('1942-02-28') },
      { name: 'カサール', commissioned: new Date('1933-01-10'), fate: new Date('1942-12-08') },
      { name: 'リオン', commissioned: new Date('1935-09-18'), fate: new Date('1942-11-27') },
      { name: 'ヴァルミー', commissioned: new Date('1929-08-06'), fate: new Date('1942-11-27') },
      { name: 'ヴェルダン', commissioned: new Date('1930-11-01'), fate: new Date('1942-11-27') }
    ]
  },
  italy: {
    carrier: [],
    lightCarrier: [],
    battleship: [
      { name: 'コンテ・ディ・カブール', commissioned: new Date('1915-06-01'), fate: new Date('1945-06-01') },
      { name: 'カイオ・ドゥイリオ', commissioned: new Date('1916-05-24'), fate: new Date('1956-09-01') },
      { name: 'アンドレア・ドーリア', commissioned: new Date('1916-03-13'), fate: new Date('1956-11-01') },
      { name: 'ジュリオ・チェザレ', commissioned: new Date('1914-06-15'), fate: new Date('1949-08-28') },
      { name: 'リットリオ', commissioned: new Date('1940-05-06'), fate: new Date('1952-05-01') },
      { name: 'ヴィットリオ・ヴェネト', commissioned: new Date('1940-05-01'), fate: new Date('1948-10-01') },
      { name: 'ローマ', commissioned: new Date('1942-06-14'), fate: new Date('1943-09-09') },
      { name: 'インペロ', commissioned: new Date('1942-05-14'), fate: new Date('1943-09-19') }
    ],
    battlecruiser: [],
    heavyCruiser: [
      { name: 'トレント', commissioned: new Date('1929-04-03'), fate: new Date('1942-11-12') },
      { name: 'トリエステ', commissioned: new Date('1929-12-21'), fate: new Date('1943-04-10') },
      { name: 'ボルツァーノ', commissioned: new Date('1932-08-19'), fate: new Date('1943-09-09') },
      { name: 'フィウメ', commissioned: new Date('1931-11-23'), fate: new Date('1941-07-28') },
      { name: 'ゴリツィア', commissioned: new Date('1933-12-23'), fate: new Date('1944-06-18') },
      { name: 'ザラ', commissioned: new Date('1931-10-20'), fate: new Date('1941-03-29') },
      { name: 'フィウメ', commissioned: new Date('1931-11-23'), fate: new Date('1941-03-29') },
      { name: 'ポーラ', commissioned: new Date('1932-12-21'), fate: new Date('1941-03-29') }
    ],
    lightCruiser: [
      { name: 'アルベルト・ダ・ジュッサーノ', commissioned: new Date('1931-02-01'), fate: new Date('1941-12-13') },
      { name: 'バルトロメオ・コレオーニ', commissioned: new Date('1931-08-21'), fate: new Date('1940-07-19') },
      { name: 'アルマンド・ディアツ', commissioned: new Date('1932-04-29'), fate: new Date('1941-02-25') },
      { name: 'アルバリコ・ダ・バルビアーノ', commissioned: new Date('1931-04-09'), fate: new Date('1941-12-13') },
      { name: 'ルイジ・カドルナ', commissioned: new Date('1933-06-13'), fate: new Date('1943-09-09') },
      { name: 'ジョヴァンニ・デッレ・バンデ・ネーレ', commissioned: new Date('1930-11-01'), fate: new Date('1942-04-01') },
      { name: 'エマヌエーレ・フィリベルト・ドゥーカ・ダオスタ', commissioned: new Date('1935-01-16'), fate: new Date('1943-09-10') },
      { name: 'エウジェニオ・ディ・サヴォイア', commissioned: new Date('1935-06-16'), fate: new Date('1943-09-10') },
      { name: 'ライモンド・モンテクッコリ', commissioned: new Date('1934-06-30'), fate: new Date('1943-09-10') },
      { name: 'ムツィオ・アッテンドロ', commissioned: new Date('1935-07-05'), fate: new Date('1942-11-22') }
    ],
    destroyer: [
      { name: 'アルフレード・オリアーニ', commissioned: new Date('1937-01-15'), fate: new Date('1943-09-09') },
      { name: 'ヴィンチェンツォ・ジョベルティ', commissioned: new Date('1937-11-16'), fate: new Date('1940-07-19') },
      { name: 'カミーチョ・ベンソ', commissioned: new Date('1938-04-23'), fate: new Date('1941-03-28') },
      { name: 'シモーネ・スキアフィーノ', commissioned: new Date('1939-02-06'), fate: new Date('1942-03-19') },
      { name: 'エマヌエーレ・ペッサーニョ', commissioned: new Date('1938-08-30'), fate: new Date('1940-12-29') },
      { name: 'ニコロソ・ダ・レッコ', commissioned: new Date('1939-03-15'), fate: new Date('1943-09-11') },
      { name: 'ウゴリーノ・ヴィヴァルディ', commissioned: new Date('1930-01-09'), fate: new Date('1941-06-08') },
      { name: 'レオン・パンカルド', commissioned: new Date('1929-09-20'), fate: new Date('1942-06-30') },
      { name: 'フルゴル', commissioned: new Date('1932-10-01'), fate: new Date('1944-08-28') },
      { name: 'アルティエレ', commissioned: new Date('1938-12-12'), fate: new Date('1943-04-20') },
      { name: 'カラビニエレ', commissioned: new Date('1939-04-20'), fate: new Date('1943-09-09') },
      { name: 'コルアツィエレ', commissioned: new Date('1939-10-29'), fate: new Date('1942-11-09') },
      { name: 'アスコーリ', commissioned: new Date('1940-02-20'), fate: new Date('1943-09-10') },
      { name: 'ファズィオ・マリッツァーニ', commissioned: new Date('1941-04-12'), fate: new Date('1943-03-21') },
      { name: 'レガー・ツンバリリョ', commissioned: new Date('1941-03-28'), fate: new Date('1942-12-01') }
    ]
  },
  soviet: {
    carrier: [],
    lightCarrier: [],
    battleship: [
      { name: 'マラト', commissioned: new Date('1914-12-23'), fate: new Date('1953-02-04') },
      { name: 'オクチャブリスカヤ・レヴォリューツィヤ', commissioned: new Date('1914-10-15'), fate: new Date('1959-04-17') },
      { name: 'パリシュスカヤ・コミューナ', commissioned: new Date('1914-12-18'), fate: new Date('1956-10-28') }
    ],
    battlecruiser: [],
    heavyCruiser: [
      { name: 'キーロフ', commissioned: new Date('1938-09-26'), fate: new Date('1974-05-22') },
      { name: 'マクシム・ゴーリキー', commissioned: new Date('1940-12-12'), fate: new Date('1959-04-03') },
      { name: 'モロトフ', commissioned: new Date('1941-06-14'), fate: new Date('1972-02-03') },
      { name: 'カリーニン', commissioned: new Date('1942-05-31'), fate: new Date('1963-02-12') },
      { name: 'カガノヴィチ', commissioned: new Date('1944-01-06'), fate: new Date('1960-01-06') }
    ],
    lightCruiser: [
      { name: 'チェルヴォナ・ウクライナ', commissioned: new Date('1927-03-21'), fate: new Date('1941-11-13') },
      { name: 'クラースニー・カフカーズ', commissioned: new Date('1932-01-25'), fate: new Date('1957-02-06') },
      { name: 'クラースニー・クリム', commissioned: new Date('1928-10-01'), fate: new Date('1960-04-20') },
      { name: 'チェルヴォナ・モルダヴィア', commissioned: new Date('1928-06-01'), fate: new Date('1941-06-26') },
      { name: 'ヴォロシロフ', commissioned: new Date('1940-06-20'), fate: new Date('1961-11-06') },
      { name: 'オルジョニキーゼ', commissioned: new Date('1941-09-18'), fate: new Date('1963-12-20') }
    ],
    destroyer: [
      { name: 'レーニン', commissioned: new Date('1928-11-06'), fate: new Date('1941-06-22') },
      { name: 'モスクワ', commissioned: new Date('1938-06-10'), fate: new Date('1941-06-26') },
      { name: 'ハリコフ', commissioned: new Date('1938-11-19'), fate: new Date('1942-12-06') },
      { name: 'ミンスク', commissioned: new Date('1939-07-15'), fate: new Date('1941-08-23') },
      { name: 'キーエフ', commissioned: new Date('1940-06-19'), fate: new Date('1941-12-13') },
      { name: 'グロームキー', commissioned: new Date('1939-07-31'), fate: new Date('1947-06-24') },
      { name: 'スメトリーヴィー', commissioned: new Date('1939-09-18'), fate: new Date('1954-12-17') },
      { name: 'ストイキー', commissioned: new Date('1940-09-15'), fate: new Date('1958-04-16') },
      { name: 'スターリン', commissioned: new Date('1940-10-30'), fate: new Date('1955-01-07') },
      { name: 'シュクリー', commissioned: new Date('1941-01-15'), fate: new Date('1956-10-17') },
      { name: 'オゴネヴォイ', commissioned: new Date('1940-06-30'), fate: new Date('1958-05-02') },
      { name: 'レズキー', commissioned: new Date('1941-07-06'), fate: new Date('1958-09-30') },
      { name: 'ストロギー', commissioned: new Date('1941-10-17'), fate: new Date('1960-01-25') },
      { name: 'ラズヤレンヌイ', commissioned: new Date('1941-11-06'), fate: new Date('1945-10-13') },
      { name: 'グレミヤーシチー', commissioned: new Date('1939-08-28'), fate: new Date('1958-03-27') }
    ]
  }
};
