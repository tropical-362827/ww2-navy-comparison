// germanyShips.js
// ドイツ海軍の艦艇データ（駆逐艦を除く）（修正版）

// ドイツの艦艇データ - 駆逐艦を除く
const germanyShips = {
  carrier: [
    // グラーフ・ツェッペリンは実際には完成したが就役しなかった
    { name: 'グラーフ・ツェッペリン', commissioned: new Date('1943-08-01'), fate: new Date('1947-08-16'), notes: '実質的には就役せず、完成後は試験航海のみ。戦後ソ連に接収され、標的艦として沈められた。' }
  ],
  lightCarrier: [],
  battleship: [
    { name: 'ビスマルク', commissioned: new Date('1940-08-24'), fate: new Date('1941-05-27') },
    { name: 'ティルピッツ', commissioned: new Date('1941-02-25'), fate: new Date('1944-11-12') },
    { name: 'シャルンホルスト', commissioned: new Date('1939-01-07'), fate: new Date('1943-12-26') },
    { name: 'グナイゼナウ', commissioned: new Date('1938-05-21'), fate: new Date('1945-03-23') }
  ],
  battlecruiser: [
    // ドイツではシャルンホルストとグナイゼナウを戦艦に分類していたが、
    // 国際的には巡洋戦艦として扱われることが多い
    // 重複して両カテゴリに記載
    { name: 'シャルンホルスト', commissioned: new Date('1939-01-07'), fate: new Date('1943-12-26') },
    { name: 'グナイゼナウ', commissioned: new Date('1938-05-21'), fate: new Date('1945-03-23') }
  ],
  heavyCruiser: [
    // ドイッチュランド級装甲艦（ポケット戦艦とも呼ばれる）
    { name: 'ドイッチュランド（後にルッツォウ改名）', commissioned: new Date('1933-04-01'), fate: new Date('1945-05-03') },
    { name: 'アドミラル・シェーア', commissioned: new Date('1934-11-12'), fate: new Date('1945-04-10') },
    { name: 'アドミラル・グラーフ・シュペー', commissioned: new Date('1936-01-06'), fate: new Date('1939-12-17') },
    
    // ヒッパー級重巡洋艦
    { name: 'ヒッパー', commissioned: new Date('1939-04-29'), fate: new Date('1945-05-03') },
    { name: 'ブリュッヒャー', commissioned: new Date('1939-09-20'), fate: new Date('1940-04-09') },
    { name: 'プリンツ・オイゲン', commissioned: new Date('1940-08-01'), fate: new Date('1946-12-22') },
    { name: 'リュッツォウ（元シーアG）', commissioned: new Date('1939-11-01'), fate: new Date('1945-03-28'), notes: '建造中に予定を変更し、巡洋艦として完成。未完成のまま1940年に売却される予定だったがソ連への引き渡しは行われなかった。' },
    { name: 'ザイドリッツ', commissioned: new Date('1939-03-01'), fate: new Date('1945-03-10'), notes: '未完成のまま終戦。巡洋艦建造計画途上で空母への改造が計画されるが、完成せず。' }
  ],
  lightCruiser: [
    // ケーニヒスベルグ級軽巡洋艦
    { name: 'ケーニヒスベルク', commissioned: new Date('1929-04-17'), fate: new Date('1940-04-10') },
    { name: 'カールスルーエ', commissioned: new Date('1929-11-06'), fate: new Date('1940-04-09') },
    { name: 'ケルン', commissioned: new Date('1930-01-15'), fate: new Date('1945-04-14') },
    
    // ライプツィヒ級軽巡洋艦
    { name: 'ライプツィヒ', commissioned: new Date('1931-10-08'), fate: new Date('1946-02-02') },
    { name: 'ニュルンベルク', commissioned: new Date('1935-11-02'), fate: new Date('1945-12-05') },
    
    // エムデン（単艦）
    { name: 'エムデン', commissioned: new Date('1925-10-15'), fate: new Date('1945-05-03') },
    
    // M級軽巡洋艦
    { name: 'M級軽巡洋艦', commissioned: new Date('1942-01-01'), fate: new Date('1945-05-03'), notes: '計画のみで建造されず' }
  ]
};

export default germanyShips;