import { MOCK_STOCKS } from '../data';

/**
 * Stock Data Service
 * Integrates with Finnhub Free API (https://finnhub.io) when VITE_FINNHUB_API_KEY is present.
 * Falls back to mock data if no key is supplied or when rate limits/errors occur.
 */

const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY || '';

/**
 * Fetch latest quote for a single stock symbol
 * @param {string} symbol - e.g. 'AAPL'
 */
export async function fetchStockQuote(symbol) {
  if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'your_finnhub_api_key_here') {
    const mock = MOCK_STOCKS.find((s) => s.ticker === symbol);
    return mock || null;
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${FINNHUB_API_KEY}`
    );
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();

    // Finnhub return fields:
    // c: Current price, d: Change, dp: Percent change, h: High, l: Low, o: Open, pc: Previous close
    if (data && data.c !== 0) {
      const mockInfo = MOCK_STOCKS.find((s) => s.ticker === symbol) || {};
      return {
        ticker: symbol,
        name: mockInfo.name || symbol,
        price: data.c,
        change: Number(data.d?.toFixed(2) || 0),
        changePct: Number(data.dp?.toFixed(2) || 0),
        high: data.h,
        low: data.l,
        open: data.o,
        prevClose: data.pc,
        sector: mockInfo.sector || 'Equities',
      };
    }
  } catch (err) {
    console.warn(`[stockService] Failed to fetch live data for ${symbol}, falling back to static data:`, err);
  }

  // Fallback
  return MOCK_STOCKS.find((s) => s.ticker === symbol) || null;
}

/**
 * Fetch quotes for multiple stock symbols
 * @param {Array<string>} symbols
 */
export async function fetchMultipleQuotes(symbols = []) {
  if (!symbols.length) return MOCK_STOCKS;
  
  const results = await Promise.all(
    symbols.map((sym) => fetchStockQuote(sym))
  );

  return results.filter(Boolean);
}

/**
 * Helper to check if live API integration is active
 */
export function isLiveApiConfigured() {
  return Boolean(FINNHUB_API_KEY && FINNHUB_API_KEY !== 'your_finnhub_api_key_here');
}
