// WW2NavyComparison.js
// 第二次世界大戦 各国海軍艦艇比較アプリケーションのメインコンポーネント

import React, { useEffect, useState } from 'react';
import { navalBattles } from './navalBattles';
import { countries, shipData as initialShipData, shipTypes } from './shipData';

const WW2NavyComparison = () => {
  // 状態管理
  const [date, setDate] = useState(new Date('1936-01-01'));
  const [shipData, setShipData] = useState({});
  const [loading, setLoading] = useState(true);
  const [leftCountry, setLeftCountry] = useState('japan');
  const [rightCountry, setRightCountry] = useState('usa');
  const [monthEvents, setMonthEvents] = useState([]);
  const [visibleShipTypes, setVisibleShipTypes] = useState({
    carrier: true,
    lightCarrier: true,
    battleship: true,
    battlecruiser: true,
    heavyCruiser: true,
    lightCruiser: true,
    destroyer: false // 駆逐艦はデフォルトで非表示
  });

  // 初期データのロード
  useEffect(() => {
    setShipData(initialShipData);
    setLoading(false);
  }, []);

  // 月ごとの艦船の進水・喪失イベントと海戦を取得
  useEffect(() => {
    if (loading) return;

    const events = [];
    const year = date.getFullYear();
    const month = date.getMonth();

    // すべての国とすべての艦種についてチェック
    Object.keys(shipData).forEach(countryId => {
      const country = countries.find(c => c.id === countryId);
      if (!country) return;

      Object.keys(shipData[countryId]).forEach(typeId => {
        const type = shipTypes.find(t => t.id === typeId);
        if (!type) return;

        shipData[countryId][typeId].forEach(ship => {
          // 進水した艦船をチェック
          if (ship.commissioned.getFullYear() === year && ship.commissioned.getMonth() === month) {
            events.push({
              type: 'commissioned',
              ship: ship.name,
              shipType: type.name,
              country: country.name,
              date: new Date(ship.commissioned)
            });
          }

          // 沈没した艦船をチェック
          if (ship.fate && ship.fate.getFullYear() === year && ship.fate.getMonth() === month) {
            events.push({
              type: 'fate',
              ship: ship.name,
              shipType: type.name,
              country: country.name,
              date: new Date(ship.fate)
            });
          }
        });
      });
    });

    // 海戦イベントをチェック
    navalBattles.forEach(battle => {
      if (battle.date.getFullYear() === year && battle.date.getMonth() === month) {
        events.push({
          type: 'battle',
          name: battle.name,
          description: battle.description,
          date: new Date(battle.date)
        });
      }
    });

    // 日付順にソート
    events.sort((a, b) => a.date - b.date);
    setMonthEvents(events);
  }, [date, shipData, loading]);

  // 日付を文字列にフォーマット
  const formatDate = (date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  // 詳細な日付フォーマット
  const formatFullDate = (date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  // イベント日付のフォーマット
  const formatEventDate = (date) => {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };

  // スライダーの値を変更する
  const handleSliderChange = (e) => {
    const value = e.target.value;
    const year = Math.floor(value / 12) + 1936;
    const month = value % 12;
    setDate(new Date(year, month, 1));
  };

  // スライダーの最小値と最大値
  const minSliderValue = 0; // 1936年1月
  const maxSliderValue = (1945 - 1936 + 1) * 12 - 1; // 1945年12月

  if (loading) {
    return <div className="flex justify-center items-center h-screen">読み込み中...</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-4">第二次世界大戦 各国海軍艦艇比較</h1>

      {/* アプリ説明 */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">このアプリについて</h2>
        <p className="mb-2">このウェブアプリでは、第二次世界大戦期間中(1936年〜1945年)の主要国の海軍艦艇を比較することができます。タイムラインスライダーを動かすことで、各時点での各国の保有艦艇数の推移を確認できます。</p>
        <p className="mb-2">以下の機能が利用できます：</p>
        <ul className="list-disc pl-6 mb-3">
          <li>タイムライン(1936年〜1945年)での各国艦艇保有数の変化を確認</li>
          <li>任意の2カ国間で艦艇保有状況を比較</li>
          <li>表示する艦種をカスタマイズ</li>
          <li>各艦艇にマウスを合わせると詳細情報を表示</li>
          <li>各月で起きた艦艇の就役・撃沈/退役イベントを確認</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-2">
          <h3 className="font-bold">データの正確性に関する注意</h3>
          <ul className="list-disc pl-6">
            <li>駆逐艦データは数が非常に多いため、実際の史実と比べて不正確・不完全な場合があります。</li>
            <li>その他の艦種についても、完全な史実再現を保証するものではなく、一部データに誤りが含まれている可能性があります。</li>
            <li>このアプリは教育・娯楽目的であり、正確な史実研究のためには専門文献を参照してください。</li>
          </ul>
        </div>
      </div>

      {/* 日付スライダー */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span>1936年1月</span>
          <span className="font-bold">{formatDate(date)}</span>
          <span>1945年12月</span>
        </div>
        <input
          type="range"
          min={minSliderValue}
          max={maxSliderValue}
          value={(date.getFullYear() - 1936) * 12 + date.getMonth()}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>

      {/* 艦種フィルター */}
      <div className="mb-4 bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-2">表示する艦種:</h3>
        <div className="flex flex-wrap gap-3">
          {shipTypes.map(shipType => (
            <div key={shipType.id} className="flex items-center">
              <input
                type="checkbox"
                id={`filter-${shipType.id}`}
                checked={visibleShipTypes[shipType.id]}
                onChange={() => setVisibleShipTypes({
                  ...visibleShipTypes,
                  [shipType.id]: !visibleShipTypes[shipType.id]
                })}
                className="mr-1"
              />
              <label htmlFor={`filter-${shipType.id}`} className="flex items-center">
                <span>{shipType.name}</span>
                {shipType.id === 'destroyer' && (
                  <span className="text-xs text-gray-500 ml-1">（捕捉可能なもののみ）</span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* 国選択 */}
      <div className="mb-4 bg-white p-4 rounded shadow">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="leftCountry" className="block mb-2 font-bold">左側の国:</label>
            <select
              id="leftCountry"
              value={leftCountry}
              onChange={(e) => setLeftCountry(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="rightCountry" className="block mb-2 font-bold">右側の国:</label>
            <select
              id="rightCountry"
              value={rightCountry}
              onChange={(e) => setRightCountry(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>


      {/* 艦船比較 */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* 左側の国 */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{countries.find(c => c.id === leftCountry)?.name}</h2>

          <div className="bg-gray-100 p-3 rounded min-h-64">
            {shipTypes
              .filter(shipType => visibleShipTypes[shipType.id])
              .map((shipType, index) => {
                const ships = shipData[leftCountry][shipType.id]
                  .filter(ship => ship.commissioned <= date && (!ship.fate || ship.fate > date));
                return (
                  <div key={shipType.id} className={index > 0 ? 'mt-2' : ''}>
                    <div className="flex items-center mb-1">
                      <div className="w-28 font-bold">
                        <span className="mr-1 text-xl">{shipType.icon}</span>
                        <span>{shipType.name}</span>
                      </div>
                      <div className="ml-2">{ships.length}隻</div>
                    </div>
                    <div className="flex flex-wrap">
                      {ships.map((ship, i) => (
                        <div
                          key={i}
                          className="mr-1 mb-1 cursor-help relative group"
                          title={`${ship.name}: 就役 ${formatFullDate(ship.commissioned)} - ${ship.fate ? `退役/沈没 ${formatFullDate(ship.fate)}` : '現役'}`}
                        >
                          {shipType.icon}
                          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 w-56 z-10 shadow-lg">
                            <p className="font-bold">{ship.name}</p>
                            <p>就役: {formatFullDate(ship.commissioned)}</p>
                            <p>{ship.fate ? `退役/沈没: ${formatFullDate(ship.fate)}` : '現役'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>

        {/* 右側の国 */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{countries.find(c => c.id === rightCountry)?.name}</h2>

          <div className="bg-gray-100 p-3 rounded min-h-64">
            {shipTypes
              .filter(shipType => visibleShipTypes[shipType.id])
              .map((shipType, index) => {
                const ships = shipData[rightCountry][shipType.id]
                  .filter(ship => ship.commissioned <= date && (!ship.fate || ship.fate > date));
                return (
                  <div key={shipType.id} className={index > 0 ? 'mt-2' : ''}>
                    <div className="flex items-center mb-1">
                      <div className="w-28 font-bold">
                        <span className="mr-1 text-xl">{shipType.icon}</span>
                        <span>{shipType.name}</span>
                      </div>
                      <div className="ml-2">{ships.length}隻</div>
                    </div>
                    <div className="flex flex-wrap">
                      {ships.map((ship, i) => (
                        <div
                          key={i}
                          className="mr-1 mb-1 cursor-help relative group"
                          title={`${ship.name}: 就役 ${formatFullDate(ship.commissioned)} - ${ship.fate ? `退役/沈没 ${formatFullDate(ship.fate)}` : '現役'}`}
                        >
                          {shipType.icon}
                          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 w-56 z-10 shadow-lg">
                            <p className="font-bold">{ship.name}</p>
                            <p>就役: {formatFullDate(ship.commissioned)}</p>
                            <p>{ship.fate ? `退役/沈没: ${formatFullDate(ship.fate)}` : '現役'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      {/* 月間イベント */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-3">{formatDate(date)}の出来事</h2>

        {/* 海戦イベント（あれば最初に表示） */}
        {monthEvents.filter(event => event.type === 'battle').length > 0 && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300">著名な海戦</h3>
            <ul className="list-disc pl-5 space-y-2">
              {monthEvents.filter(event => event.type === 'battle').map((event, index) => (
                <li key={index} className="pb-2">
                  <div className="font-bold">{formatEventDate(event.date)} - {event.name}</div>
                  <div className="text-sm text-gray-700">{event.description}</div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 艦船イベント */}
        {monthEvents.filter(event => event.type !== 'battle').length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1 border-gray-300">艦船の動き</h3>
            <ul className="list-disc pl-5 space-y-1">
              {monthEvents.filter(event => event.type !== 'battle').map((event, index) => (
                <li key={index}>
                  {formatEventDate(event.date)} - {event.country}の{event.shipType}「{event.ship}」が
                  {event.type === 'commissioned' ? '就役' : '沈没/退役'}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          monthEvents.filter(event => event.type === 'battle').length === 0 && (
            <p>この月に記録されたイベントはありません。</p>
          )
        )}
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p className="text-center">※このアプリは史実をベースにしていますが、完全な正確性は保証しません。特に駆逐艦データは不完全です。</p>
      </div>
    </div>
  );
};

export default WW2NavyComparison;
