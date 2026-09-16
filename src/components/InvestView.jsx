import { useState } from 'react';
import { TrendingUp, TrendingDown, Trophy, Medal, Award, ShoppingCart, X, ChevronUp, ChevronDown, Users } from 'lucide-react';
import { MOCK_STOCKS, SCHOOL_LEADERBOARD, CURRENT_STUDENT } from '../data';

// ─── PORTFOLIO STATE ──────────────────────────────────────────────────────────
const INITIAL_CASH = 10000;

function formatCurrency(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}
function formatPct(n) {
  return `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;
}

// ─── LEADERBOARD PANEL ────────────────────────────────────────────────────────
function LeaderboardPanel({ ageGroup }) {
  const podium = SCHOOL_LEADERBOARD.slice(0, 3);
  const rest   = SCHOOL_LEADERBOARD.slice(3);
  const medals = ['🥇', '🥈', '🥉'];
  const podiumColors = [
    'from-amber-50 to-amber-100 border-amber-300',
    'from-slate-50 to-slate-100 border-slate-300',
    'from-orange-50 to-orange-100 border-orange-300',
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <div>
        <h2 className="font-black text-2xl font-serif text-investText mb-1">🏆 School Leaderboard</h2>
        <p className="text-sm text-investText/60">Ranked by average student portfolio return · Class of 2025</p>
      </div>

      {/* Your School Stats */}
      <div className="bg-investPrimary/10 border border-investPrimary/30 rounded-2xl p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-investPrimary mb-2">Your School</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-investText">{CURRENT_STUDENT.school}</p>
            <p className="text-sm text-investText/60">
              You are ranked <span className="font-bold text-investPrimary">#{CURRENT_STUDENT.classRank}</span> out of {CURRENT_STUDENT.classTotal} students
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-investPrimary">{medals[CURRENT_STUDENT.schoolRank - 1]} #{CURRENT_STUDENT.schoolRank}</p>
            <p className="text-xs text-investText/50">School Rank</p>
          </div>
        </div>
      </div>

      {/* Podium Top 3 */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-3">Podium Schools</h3>
        <div className="grid grid-cols-3 gap-3">
          {podium.map((s, i) => (
            <div key={s.rank} className={`bg-gradient-to-b ${podiumColors[i]} border rounded-2xl p-4 text-center`}>
              <div className="text-3xl mb-1">{medals[i]}</div>
              <p className="text-xs font-bold text-investText leading-tight">{s.school.replace(' High School', '').replace(' High', '')}</p>
              <p className="text-lg font-black text-investPrimary mt-1">{formatPct(s.avgReturn)}</p>
              <p className="text-xs text-investText/50">{s.students} students</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full Rankings */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-3">Full Rankings</h3>
        <div className="space-y-2">
          {SCHOOL_LEADERBOARD.map(s => (
            <div
              key={s.rank}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl border transition-colors
                ${s.school === CURRENT_STUDENT.school ? 'bg-investPrimary/10 border-investPrimary/30' : 'bg-white border-black/5 hover:bg-investBg'}`}
            >
              <span className="w-6 text-sm font-black text-investText/40 text-center">{s.rank <= 3 ? medals[s.rank - 1] : `#${s.rank}`}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-investText">{s.school}</p>
                <div className="flex items-center gap-1 text-xs text-investText/50">
                  <Users className="w-3 h-3" />
                  {s.students} students
                </div>
              </div>
              <span className={`text-sm font-black ${s.avgReturn >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {formatPct(s.avgReturn)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── STOCK ROW ────────────────────────────────────────────────────────────────
function StockRow({ stock, onBuy }) {
  const isUp = stock.change >= 0;
  return (
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-investBg rounded-xl transition-colors group">
      <div className="w-10 h-10 rounded-xl bg-investSidebar flex items-center justify-center shrink-0">
        <span className="text-xs font-black text-investText">{stock.ticker.slice(0, 3)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-investText">{stock.ticker}</p>
        <p className="text-xs text-investText/50 truncate">{stock.name}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-bold text-investText">{formatCurrency(stock.price)}</p>
        <p className={`text-xs font-semibold flex items-center justify-end gap-0.5 ${isUp ? 'text-emerald-600' : 'text-red-500'}`}>
          {isUp ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {formatPct(stock.changePct)}
        </p>
      </div>
      <button
        onClick={() => onBuy(stock)}
        className="opacity-0 group-hover:opacity-100 ml-2 p-2 rounded-lg bg-investPrimary text-white hover:bg-investPrimaryLight transition-all shrink-0"
      >
        <ShoppingCart className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

// ─── BUY MODAL ────────────────────────────────────────────────────────────────
function BuyModal({ stock, cashBalance, onConfirm, onClose }) {
  const [shares, setShares] = useState(1);
  const cost = shares * stock.price;
  const canAfford = cost <= cashBalance;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-black font-serif text-xl text-investText">Buy {stock.ticker}</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-investBg"><X className="w-5 h-5 text-investText/50" /></button>
        </div>
        <p className="text-sm text-investText/60">{stock.name}</p>
        <div className="bg-investBg rounded-xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-investText/60">Current Price</span>
            <span className="font-bold text-investText">{formatCurrency(stock.price)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-investText/60">Available Cash</span>
            <span className="font-bold text-investText">{formatCurrency(cashBalance)}</span>
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-investText/50">Number of Shares</label>
          <input
            type="number"
            min={1}
            max={Math.floor(cashBalance / stock.price)}
            value={shares}
            onChange={e => setShares(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full border border-investSidebar rounded-xl px-4 py-2.5 text-investText font-bold focus:outline-none focus:border-investPrimary"
          />
        </div>
        <div className="bg-investPrimary/10 rounded-xl p-4 flex justify-between items-center">
          <span className="text-sm font-bold text-investText">Total Cost</span>
          <span className={`text-lg font-black ${canAfford ? 'text-investPrimary' : 'text-red-500'}`}>{formatCurrency(cost)}</span>
        </div>
        {!canAfford && <p className="text-xs text-red-500 font-semibold text-center">Insufficient cash balance</p>}
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-xl border border-investSidebar text-investText font-semibold text-sm hover:bg-investBg transition-colors">Cancel</button>
          <button
            onClick={() => canAfford && onConfirm(stock, shares)}
            disabled={!canAfford}
            className="flex-1 py-2.5 rounded-xl bg-investPrimary text-white font-bold text-sm hover:bg-investPrimaryLight transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Confirm Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN INVEST VIEW ─────────────────────────────────────────────────────────
export default function InvestView({ ageGroup, showLeaderboard }) {
  const [cashBalance, setCashBalance] = useState(INITIAL_CASH);
  const [holdings, setHoldings] = useState([]);
  const [buyTarget, setBuyTarget] = useState(null);
  const [activeTab, setActiveTab] = useState(showLeaderboard ? 'leaderboard' : 'market');

  // Keep leaderboard tab in sync if triggered from Navbar
  if (showLeaderboard && activeTab !== 'leaderboard') {
    setActiveTab('leaderboard');
  }

  const handleBuy = (stock, shares) => {
    const cost = stock.price * shares;
    setCashBalance(prev => prev - cost);
    setHoldings(prev => {
      const existing = prev.find(h => h.ticker === stock.ticker);
      if (existing) {
        return prev.map(h =>
          h.ticker === stock.ticker
            ? { ...h, shares: h.shares + shares, avgCost: (h.avgCost * h.shares + cost) / (h.shares + shares) }
            : h
        );
      }
      return [...prev, { ...stock, shares, avgCost: stock.price }];
    });
    setBuyTarget(null);
  };

  const portfolioValue = holdings.reduce((sum, h) => {
    const current = MOCK_STOCKS.find(s => s.ticker === h.ticker)?.price ?? h.avgCost;
    return sum + current * h.shares;
  }, 0);
  const totalValue = cashBalance + portfolioValue;
  const totalReturn = ((totalValue - INITIAL_CASH) / INITIAL_CASH) * 100;

  const tabs = [
    { id: 'market',      label: '📈 Market' },
    { id: 'portfolio',   label: '💼 Portfolio' },
    ...(ageGroup !== 'adult' ? [{ id: 'leaderboard', label: '🏆 Leaderboard' }] : []),
  ];

  return (
    <div className="flex flex-col h-full">

      {/* Top Stats Bar */}
      <div className="bg-investSidebar border-b border-investSidebar/80 px-6 py-3 flex items-center gap-8 shrink-0">
        <div>
          <p className="text-xs uppercase font-bold tracking-wider text-investText/50">Total Value</p>
          <p className="text-xl font-black text-investText">{formatCurrency(totalValue)}</p>
        </div>
        <div>
          <p className="text-xs uppercase font-bold tracking-wider text-investText/50">Cash Balance</p>
          <p className="text-xl font-black text-investText">{formatCurrency(cashBalance)}</p>
        </div>
        <div>
          <p className="text-xs uppercase font-bold tracking-wider text-investText/50">Portfolio Return</p>
          <p className={`text-xl font-black ${totalReturn >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>{formatPct(totalReturn)}</p>
        </div>
        {ageGroup !== 'adult' && (
          <div>
            <p className="text-xs uppercase font-bold tracking-wider text-investText/50">Your School Rank</p>
            <p className="text-xl font-black text-amber-600">🥈 #{CURRENT_STUDENT.schoolRank}</p>
          </div>
        )}
        <div className="flex-1" />
        <div className="text-right">
          <p className="text-xs text-investText/50 font-medium">Starting Cash</p>
          <p className="text-sm font-bold text-investText">{formatCurrency(INITIAL_CASH)}</p>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="bg-investBg border-b border-investSidebar/80 px-6 flex items-center gap-1 shrink-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors
              ${activeTab === tab.id
                ? 'border-investPrimary text-investPrimary'
                : 'border-transparent text-investText/50 hover:text-investText'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">

        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="h-full flex">
            {/* Stock List */}
            <div className="flex-1 overflow-y-auto p-4">
              <h2 className="font-black text-lg font-serif text-investText mb-4 px-2">
                {ageGroup === 'adult' ? 'Market Watchlist' : '📊 Mock Market — Practice Trades'}
              </h2>
              <div className="space-y-1">
                {MOCK_STOCKS.map(stock => (
                  <StockRow key={stock.ticker} stock={stock} onBuy={setBuyTarget} />
                ))}
              </div>
            </div>

            {/* Info Panel */}
            <div className="w-72 border-l border-investSidebar/80 bg-investSidebar p-5 overflow-y-auto shrink-0 space-y-5">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-2">How to Trade</h3>
                <ol className="space-y-2 text-sm text-investText/70">
                  <li className="flex gap-2"><span className="font-bold text-investPrimary shrink-0">1.</span>Hover a stock and click the 🛒 button to buy.</li>
                  <li className="flex gap-2"><span className="font-bold text-investPrimary shrink-0">2.</span>Enter the number of shares you want.</li>
                  <li className="flex gap-2"><span className="font-bold text-investPrimary shrink-0">3.</span>Confirm the purchase — your cash balance updates.</li>
                  <li className="flex gap-2"><span className="font-bold text-investPrimary shrink-0">4.</span>Check your portfolio tab to track gains & losses.</li>
                </ol>
              </div>
              {ageGroup !== 'adult' && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">💡 Pro Tip</p>
                  <p className="text-xs text-amber-800">Diversify your portfolio! Putting all your money in one stock is risky. Try holding at least 3 different stocks or an index fund like SPY.</p>
                </div>
              )}
              <div className="bg-investBg rounded-xl p-4 border border-investSidebar">
                <p className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-2">Market Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-investText">Simulated · Real-time prices</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="h-full overflow-y-auto p-6 space-y-6 max-w-3xl mx-auto">
            <h2 className="font-black text-2xl font-serif text-investText">💼 My Portfolio</h2>
            {holdings.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <TrendingUp className="w-12 h-12 text-investText/20 mx-auto" />
                <p className="text-investText/40 font-medium">No holdings yet. Go to the Market tab to make your first trade!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {holdings.map(h => {
                  const currentPrice = MOCK_STOCKS.find(s => s.ticker === h.ticker)?.price ?? h.avgCost;
                  const gainLoss = (currentPrice - h.avgCost) * h.shares;
                  const gainPct = ((currentPrice - h.avgCost) / h.avgCost) * 100;
                  const isUp = gainLoss >= 0;
                  return (
                    <div key={h.ticker} className="bg-white rounded-2xl border border-black/5 p-5 flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-investSidebar flex items-center justify-center shrink-0">
                        <span className="text-sm font-black text-investText">{h.ticker.slice(0,3)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-investText">{h.ticker}</p>
                        <p className="text-sm text-investText/50">{h.shares} share{h.shares !== 1 ? 's' : ''} · Avg cost {formatCurrency(h.avgCost)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-investText">{formatCurrency(currentPrice * h.shares)}</p>
                        <p className={`text-sm font-semibold ${isUp ? 'text-emerald-600' : 'text-red-500'}`}>
                          {isUp ? '+' : ''}{formatCurrency(gainLoss)} ({formatPct(gainPct)})
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="bg-investSidebar rounded-2xl p-4 flex justify-between items-center border border-investSidebar">
                  <span className="font-bold text-investText/70 text-sm">Cash Remaining</span>
                  <span className="font-black text-investText">{formatCurrency(cashBalance)}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && ageGroup !== 'adult' && (
          <LeaderboardPanel ageGroup={ageGroup} />
        )}

      </div>

      {/* Buy Modal */}
      {buyTarget && (
        <BuyModal
          stock={buyTarget}
          cashBalance={cashBalance}
          onConfirm={handleBuy}
          onClose={() => setBuyTarget(null)}
        />
      )}
    </div>
  );
}
