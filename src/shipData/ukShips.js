// ukShips.js
// イギリス海軍の艦艇データ（駆逐艦を除く）（修正版）

// イギリスの艦艇データ - 駆逐艦を除く
// 退役日がwikipediaになく曖昧になっているものがある(01日退役のもの)
const ukShips = {
  carrier: [
    // グローリアス級
    { name: 'グローリアス', commissioned: new Date('1917-01-01'), fate: new Date('1940-06-08') },
    { name: 'カレイジャス', commissioned: new Date('1916-11-04'), fate: new Date('1939-09-17') },
    // アークロイヤル級
    { name: 'アークロイヤル', commissioned: new Date('1938-11-16'), fate: new Date('1941-11-14') },
    // イラストリアス級
    { name: 'イラストリアス', commissioned: new Date('1940-05-25'), fate: new Date('1956-11-01') },
    { name: 'ヴィクトリアス', commissioned: new Date('1941-03-29'), fate: new Date('1968-03-13') },
    { name: 'フォーミダブル', commissioned: new Date('1940-10-31'), fate: new Date('1947-01-01') },
    { name: 'インドミタブル', commissioned: new Date('1941-08-26'), fate: new Date('1953-10-01') },
    // インプラカブル級
    { name: 'インプラカブル', commissioned: new Date('1944-03-22'), fate: new Date('1954-09-01') },
    { name: 'インディファティガブル', commissioned: new Date('1943-12-08'), fate: new Date('1954-09-01') },
    // コロッサス級
    { name: 'コロッサス', commissioned: new Date('1944-12-16'), fate: new Date('1974-01-22') },
    { name: 'グローリー', commissioned: new Date('1945-04-02'), fate: new Date('1956-01-01') },
    { name: 'オーシャン', commissioned: new Date('1945-08-08'), fate: new Date('1960-01-01') },
    { name: 'パーシュース', commissioned: new Date('1945-10-19'), fate: new Date('1957-01-01') },
    { name: 'パイオニア', commissioned: new Date('1945-02-08'), fate: new Date('1954-01-01') },
    { name: 'ヴェネラブル', commissioned: new Date('1945-01-17'), fate: new Date('1997-01-01') },
    { name: 'ヴェンジャンス', commissioned: new Date('1945-01-15'), fate: new Date('2001-01-01') }
  ],
  lightCarrier: [
    { name: 'アーガス', commissioned: new Date('1918-09-16'), fate: new Date('1943-05-01') },
    { name: 'フューリアス', commissioned: new Date('1917-06-26'), fate: new Date('1944-09-15') },
    { name: 'ハーミーズ', commissioned: new Date('1924-02-18'), fate: new Date('1942-04-09') },
    { name: 'イーグル', commissioned: new Date('1924-02-20'), fate: new Date('1942-08-11') },
    { name: 'ユニコーン', commissioned: new Date('1943-03-12'), fate: new Date('1953-11-17') },
    { name: 'アクティビティ', commissioned: new Date('1942-09-29'), fate: new Date('1945-10-20') },
    { name: 'オーダシティ', commissioned: new Date('1941-06-20'), fate: new Date('1941-12-21') },
    { name: 'カンパニア', commissioned: new Date('1944-02-09'), fate: new Date('1952-12-01') },
    { name: 'プレトリア・キャッスル', commissioned: new Date('1939-11-28'), fate: new Date('1946-01-26') },
    // ナイラナ級
    { name: 'ナイラナ', commissioned: new Date('1943-12-12'), fate: new Date('1946-01-01') },
    { name: 'ヴィンデックス', commissioned: new Date('1943-11-15'), fate: new Date('1947-10-02') },
    // ロングアイランド級
    { name: 'アーチャー', commissioned: new Date('1941-11-17'), fate: new Date('1946-02-26') },
    // アヴェンジャー級
    { name: 'アヴェンジャー', commissioned: new Date('1942-05-02'), fate: new Date('1942-11-15') },
    { name: 'バイター', commissioned: new Date('1942-05-01'), fate: new Date('1966-01-01') },
    { name: 'チャージャー', commissioned: new Date('1942-03-03'), fate: new Date('1946-03-15') },
    { name: 'ダッシャー', commissioned: new Date('1942-07-02'), fate: new Date('1943-03-27') },
    // ボーグ級
    { name: 'トラッカー', commissioned: new Date('1943-01-31'), fate: new Date('1946-11-2') },
    { name: 'バトラー', commissioned: new Date('1942-10-31'), fate: new Date('1946-02-12') },
    { name: 'アタッカー', commissioned: new Date('1942-09-30'), fate: new Date('1946-01-05') },
    { name: 'ハンター', commissioned: new Date('1943-01-11'), fate: new Date('1945-12-29') },
    { name: 'チェイサー', commissioned: new Date('1943-04-09'), fate: new Date('1946-05-12') },
    { name: 'フェンサー', commissioned: new Date('1943-02-27'), fate: new Date('1945-12-21') },
    { name: 'ストーカー', commissioned: new Date('1942-12-21'), fate: new Date('1945-12-29') },
    { name: 'パーシュアー', commissioned: new Date('1943-06-14'), fate: new Date('1946-02-12') },
    { name: 'ストライカー', commissioned: new Date('1943-04-28'), fate: new Date('1946-02-12') },
    { name: 'サーチャー', commissioned: new Date('1942-10-31'), fate: new Date('1946-02-12') },
    { name: 'レバイジャー', commissioned: new Date('1943-04-25'), fate: new Date('1946-01-01') },
    { name: 'スリンガー', commissioned: new Date('1943-09-19'), fate: new Date('1946-04-12') },
    { name: 'アスリング', commissioned: new Date('1943-08-01'), fate: new Date('1947-02-07') },
    { name: 'エンペラー', commissioned: new Date('1943-08-06'), fate: new Date('1946-03-28') },
    { name: 'アミール', commissioned: new Date('1943-07-20'), fate: new Date('1946-03-20') },
    { name: 'ベガム', commissioned: new Date('1943-01-09'), fate: new Date('1946-02-26') },
    { name: 'トランペッター', commissioned: new Date('1943-08-04'), fate: new Date('1946-06-19') },
    { name: 'エンプレス', commissioned: new Date('1943-08-12'), fate: new Date('1946-03-28') },
    { name: 'ケディーヴ', commissioned: new Date('1943-08-25'), fate: new Date('1946-07-19') },
    { name: 'スピーカー', commissioned: new Date('1943-11-20'), fate: new Date('1946-09-25') },
    { name: 'ネイボブ', commissioned: new Date('1943-09-07'), fate: new Date('1944-09-30') },
    { name: 'プレミア', commissioned: new Date('1943-11-03'), fate: new Date('1946-05-21') },
    { name: 'シャー', commissioned: new Date('1943-09-27'), fate: new Date('1946-02-07') },
    { name: 'パトローラー', commissioned: new Date('1943-10-22'), fate: new Date('1947-02-07') },
    { name: 'ラージャ', commissioned: new Date('1944-01-17'), fate: new Date('1947-02-07') },
    { name: 'ラーニー', commissioned: new Date('1943-11-08'), fate: new Date('1947-01-22') },
    { name: 'トゥランサー', commissioned: new Date('1944-01-31'), fate: new Date('1946-04-12') },
    { name: 'セイン', commissioned: new Date('1943-11-19'), fate: new Date('1945-10-01') },
    { name: 'クイーン', commissioned: new Date('1943-12-07'), fate: new Date('1947-07-01') },
    { name: 'ルーラー', commissioned: new Date('1943-12-22'), fate: new Date('1946-01-29') },
    { name: 'アービター', commissioned: new Date('1943-12-31'), fate: new Date('1946-04-12') },
    { name: 'スマイター', commissioned: new Date('1944-01-20'), fate: new Date('1946-05-06') },
    { name: 'パンチャー', commissioned: new Date('1944-02-05'), fate: new Date('1946-02-16') },
    { name: 'リーパー', commissioned: new Date('1944-02-18'), fate: new Date('1946-07-02') }
  ],
  battleship: [
    // クイーン・エリザベス級
    { name: 'クイーン・エリザベス', commissioned: new Date('1914-01-22'), fate: new Date('1948-07-07') },
    { name: 'ウォースパイト', commissioned: new Date('1915-03-08'), fate: new Date('1945-02-01') },
    { name: 'バーラム', commissioned: new Date('1915-10-19'), fate: new Date('1941-11-25') },
    { name: 'ヴァリアント', commissioned: new Date('1916-02-19'), fate: new Date('1948-03-19') },
    { name: 'マレーヤ', commissioned: new Date('1916-02-01'), fate: new Date('1944-12-01') },
    // リヴェンジ級
    { name: 'リヴェンジ', commissioned: new Date('1916-05-01'), fate: new Date('1943-10-01') },
    { name: 'レゾリューション', commissioned: new Date('1916-12-30'), fate: new Date('1944-01-01') },
    { name: 'ラミリーズ', commissioned: new Date('1917-09-01'), fate: new Date('1945-01-01') },
    { name: 'ロイヤル・サブリン', commissioned: new Date('1916-04-18'), fate: new Date('1949-04-05') },
    { name: 'ロイヤル・オーク', commissioned: new Date('1916-05-01'), fate: new Date('1939-10-14') },
    // ネルソン級
    { name: 'ネルソン', commissioned: new Date('1927-08-15'), fate: new Date('1947-10-20') },
    { name: 'ロドニー', commissioned: new Date('1927-11-10'), fate: new Date('1946-08-01') },
    // キング・ジョージ5世級
    { name: 'キング・ジョージ5世', commissioned: new Date('1940-10-01'), fate: new Date('1949-01-01') },
    { name: 'プリンス・オブ・ウェールズ', commissioned: new Date('1941-01-19'), fate: new Date('1941-12-10') },
    { name: 'デューク・オブ・ヨーク', commissioned: new Date('1941-04-14'), fate: new Date('1951-05-18') },
    { name: 'アンソン', commissioned: new Date('1942-06-22'), fate: new Date('1951-11-01') },
    { name: 'ハウ', commissioned: new Date('1942-08-29'), fate: new Date('1950-01-01') }
  ],
  battlecruiser: [
    { name: 'レナウン', commissioned: new Date('1916-09-20'), fate: new Date('1948-08-26') },
    { name: 'レパルス', commissioned: new Date('1916-08-18'), fate: new Date('1941-12-10') },
    { name: 'フッド', commissioned: new Date('1920-05-15'), fate: new Date('1941-05-24') }
  ],
  heavyCruiser: [
    // カウンティ級（ケント型）
    { name: 'ケント', commissioned: new Date('1928-06-25'), fate: new Date('1948-01-22') },
    { name: 'ベリック', commissioned: new Date('1927-07-12'), fate: new Date('1946-01-01') },
    { name: 'カンバーランド', commissioned: new Date('1928-02-23'), fate: new Date('1959-01-14') },
    { name: 'コーンウォール', commissioned: new Date('1928-05-28'), fate: new Date('1942-04-05') },
    { name: 'サフォーク', commissioned: new Date('1928-05-30'), fate: new Date('1948-03-25') },
    // カウンティ級（ロンドン型）
    { name: 'ロンドン', commissioned: new Date('1929-01-31'), fate: new Date('1949-01-04') },
    { name: 'デヴォンシャー', commissioned: new Date('1929-03-18'), fate: new Date('1954-06-04') },
    { name: 'シュロップシャー', commissioned: new Date('1929-09-24'), fate: new Date('1949-11-10') },
    { name: 'サセックス', commissioned: new Date('1929-03-19'), fate: new Date('1950-01-03') },
    // カウンティ級（ノーフォーク型）
    { name: 'ノーフォーク', commissioned: new Date('1930-04-30'), fate: new Date('1950-02-28') },
    { name: 'ドーセットシャー', commissioned: new Date('1930-09-30'), fate: new Date('1942-04-05') },
    // ヨーク級
    { name: 'ヨーク', commissioned: new Date('1930-05-01'), fate: new Date('1941-05-22') },
    { name: 'エクセター', commissioned: new Date('1931-07-27'), fate: new Date('1942-03-01') }
  ],
  lightCruiser: [
    // エメラルド級
    { name: 'エンタープライズ', commissioned: new Date('1926-04-07'), fate: new Date('1946-01-13') },
    // リアンダー級
    { name: 'リアンダー', commissioned: new Date('1933-07-24'), fate: new Date('1949-01-01') },
    { name: 'オライオン', commissioned: new Date('1934-01-18'), fate: new Date('1947-01-01') },
    { name: 'アキリーズ', commissioned: new Date('1933-10-10'), fate: new Date('1978-01-01') },
    { name: 'エイジャックス', commissioned: new Date('1935-06-03'), fate: new Date('1948-02-01') },
    { name: 'ネプチューン', commissioned: new Date('1934-02-23'), fate: new Date('1941-12-19') },
    // アリシューザ級
    { name: 'アリシューザ', commissioned: new Date('1935-05-23'), fate: new Date('1946-01-01') },
    { name: 'ペネロピ', commissioned: new Date('1936-11-13'), fate: new Date('1944-02-18') },
    { name: 'ガラティア', commissioned: new Date('1935-08-14'), fate: new Date('1941-12-14') },
    { name: 'オーロラ', commissioned: new Date('1937-11-12'), fate: new Date('1948-01-01') },
    // タウン級（サウサンプトン型）
    { name: 'サウサンプトン', commissioned: new Date('1937-03-06'), fate: new Date('1941-01-11') },
    { name: 'バーミンガム', commissioned: new Date('1937-11-18'), fate: new Date('1960-12-02') },
    { name: 'グラスゴー', commissioned: new Date('1937-09-09'), fate: new Date('1956-11-01') },
    { name: 'ニューカッスル', commissioned: new Date('1937-03-05'), fate: new Date('1958-01-09') },
    { name: 'シェフィールド', commissioned: new Date('1937-08-25'), fate: new Date('1967-10-30') },
    // タウン級（グロスター型）
    { name: 'グロスター', commissioned: new Date('1939-01-31'), fate: new Date('1941-05-22') },
    { name: 'リヴァプール', commissioned: new Date('1938-11-02'), fate: new Date('1952-11-01') },
    { name: 'マンチェスター', commissioned: new Date('1938-08-04'), fate: new Date('1942-08-13') },
    // タウン級（エディンバラ型・ベルファスト型）
    { name: 'エディンバラ', commissioned: new Date('1939-07-06'), fate: new Date('1941-05-02') },
    { name: 'ベルファスト', commissioned: new Date('1939-08-05'), fate: new Date('1963-08-24') },
    // ダイドー級
    { name: 'ボナヴェンチャー', commissioned: new Date('1940-05-24'), fate: new Date('1941-03-31') },
    { name: 'ダイドー', commissioned: new Date('1940-09-30'), fate: new Date('1953-10-01') },
    { name: 'ハーマイオニー', commissioned: new Date('1941-03-25'), fate: new Date('1942-06-16') },
    { name: 'ナイアド', commissioned: new Date('1940-07-24'), fate: new Date('1942-03-11') },
    { name: 'フィービ', commissioned: new Date('1940-09-27'), fate: new Date('1953-03-14') },
    { name: 'ユーアライアス', commissioned: new Date('1941-06-30'), fate: new Date('1954-09-19') },
    { name: 'シリアス', commissioned: new Date('1942-05-06'), fate: new Date('1951-03-14') },
    { name: 'カリブディス', commissioned: new Date('1941-12-03'), fate: new Date('1943-10-23') },
    { name: 'クレオパトラ', commissioned: new Date('1941-12-05'), fate: new Date('1953-02-12') },
    { name: 'シラ', commissioned: new Date('1942-06-12'), fate: new Date('1944-06-23') },
    { name: 'アルゴノート', commissioned: new Date('1942-08-08'), fate: new Date('1946-07-06') },
    // ベローナ級
    { name: 'ベローナ', commissioned: new Date('1943-10-29'), fate: new Date('1957-06-01') },
    { name: 'ブラック・プリンス', commissioned: new Date('1943-11-30'), fate: new Date('1962-03-01') },
    { name: 'タイアデム', commissioned: new Date('1944-01-06'), fate: new Date('1950-01-01') },
    { name: 'ロイヤリスト', commissioned: new Date('1943-09-10'), fate: new Date('1967-11-01') },
    { name: 'スパルタン', commissioned: new Date('1943-08-10'), fate: new Date('1944-01-29') },
    // クラウン・コロニー級（フィジー・グループ）
    { name: 'バーミューダ', commissioned: new Date('1942-08-21'), fate: new Date('1962-01-01') },
    { name: 'フィジー', commissioned: new Date('1940-05-05'), fate: new Date('1941-05-22') },
    { name: 'ガンビア', commissioned: new Date('1942-02-21'), fate: new Date('1960-01-01') },
    { name: 'ジャマイカ', commissioned: new Date('1942-06-29'), fate: new Date('1957-11-20') },
    { name: 'ケニア', commissioned: new Date('1940-09-27'), fate: new Date('1962-10-29') },
    { name: 'モーリシャス', commissioned: new Date('1941-01-04'), fate: new Date('1952-07-15') },
    { name: 'ナイジェリア', commissioned: new Date('1940-09-23'), fate: new Date('1957-08-29') },
    { name: 'トリニダード', commissioned: new Date('1941-10-14'), fate: new Date('1942-05-15') },
    // クラウン・コロニー級（セイロン・グループ）
    { name: 'セイロン', commissioned: new Date('1943-07-13'), fate: new Date('1960-02-09') },
    { name: 'ニューファンドランド', commissioned: new Date('1943-01-21'), fate: new Date('1959-12-30') },
    { name: 'ウガンダ', commissioned: new Date('1943-01-03'), fate: new Date('1961-11-22') },
    // スウィフトシュア級
    { name: 'スウィフトシュア', commissioned: new Date('1944-06-22'), fate: new Date('1962-07-04') },
    { name: 'オンタリオ', commissioned: new Date('1945-04-25'), fate: new Date('1958-10-15') },
    { name: 'シュパーブ', commissioned: new Date('1945-11-16'), fate: new Date('1957-01-01') }
  ]
};

export default ukShips;