
import React, { useEffect, useState } from "react";

const MemeCoinsNearEma=()=> {
  const [finalList, setFinalList] = useState([]);
  const [nearEMAInstruments, setNearEMAInstruments] = useState([]);
  const [matchedScripts, setMatchedScripts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch gainers and losers
      const [losersRes, gainersRes] = await Promise.all([
        fetch(
          "https://cdn.india.deltaex.org/v2/market/futures?sort_by=top_losers"
        ),
        fetch(
          "https://cdn.india.deltaex.org/v2/market/futures?sort_by=top_gainers"
        ),
      ]);

      const losersData = await losersRes.json();
      const gainersData = await gainersRes.json();

      const losers = (losersData.result || []).map((item: any) => ({
        ...item,
        type: "Loser",
      }));
      const gainers = (gainersData.result || []).map((item: any) => ({
        ...item,
        type: "Gainer",
      }));

      const combinedList = [...losers, ...gainers];
      setFinalList(combinedList);

      // Fetch near EMA instruments
      const emaRes = await fetch(
        "https://crypto-framework.tradewaar.com/api/strategy/searchInstrument",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            SegmentType: "Assets",
            SearchQuery: "",
          }),
        }
      );

      const emaData = await emaRes.json();

      const emaList = (emaData.Data || [])
        .filter((instr: any) => instr.Recommendation === "Near EMA")
        .map((instr: any) => ({
          name: instr.Name,
          tradingSymbol: instr.TradingSymbol?.toUpperCase(),
        }));

      setNearEMAInstruments(emaList);

      // Match symbols
      const emaSymbols = new Set(
        emaList.map((item: any) => item.tradingSymbol?.toUpperCase())
      );
      console.log(">>", emaSymbols);

      const matches = combinedList.filter((item) =>
        emaSymbols.has(item.symbol?.toUpperCase())
      );
      console.log(">>", matches, combinedList);

      setMatchedScripts(matches);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <div className="App">
      <h1>Matched Scripts (Near EMA + Top Gainers/Losers)</h1>
      <ul>
        {matchedScripts.map((item: any, index: any) => (
          <li key={index}>
            {item.symbol} - {item.type}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => fetchData()}
          style={{ height: "30px", width: "100px" }}
          value={"click to get  near ema Memes"}
        />
      </div>
    </div>
  );
}

export default MemeCoinsNearEma;