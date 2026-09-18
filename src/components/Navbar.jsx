import { useState } from 'react';
import { BookOpen, TrendingUp, User, ChevronDown, Flame, LogOut } from 'lucide-react';
import { AGE_GROUPS } from '../data';

export default function Navbar({ 
  appMode, 
  onModeChange, 
  ageGroup, 
  userProgress, 
  onShowLeaderboard,
  currentUser,
  onSignOut
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const currentGroup = AGE_GROUPS.find(g => g.id === ageGroup);
  const isGamified = currentUser?.isGamified ?? (ageGroup !== 'adult');

  return (
    <header className="h-16 bg-white border-b border-black/10 flex items-center px-6 gap-4 shrink-0 sticky top-0 z-50 shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mr-2 shrink-0">
        <div className="w-8 h-8 bg-investPrimary rounded-lg flex items-center justify-center shadow">
          <span className="text-white font-bold font-serif text-lg leading-none">i</span>
        </div>
        <div className="flex items-center">
          <span className="font-black text-xl font-serif text-investText tracking-tight leading-none">iNvest CLT</span>
        </div>
      </div>

      {/* Mode Toggle Pill (Hidden for K-5 since they only have Learn mode) */}
      {(ageGroup !== 'k2' && ageGroup !== 'elem35') && (
        <div className="flex items-center bg-investBg rounded-xl p-1 gap-1 shrink-0 border border-black/5">
          <button
            id="learn-mode-btn"
            onClick={() => onModeChange('learn')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200
              ${appMode === 'learn'
                ? 'bg-investPrimary text-white shadow-sm'
                : 'text-investText/60 hover:text-investText'}`}
          >
            <BookOpen className="w-4 h-4" />
            {isGamified ? 'Learn' : 'Financial Guides'}
          </button>

          <button
            id="invest-mode-btn"
            onClick={() => onModeChange('invest')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200
              ${appMode === 'invest'
                ? 'bg-investPrimary text-white shadow-sm'
                : 'text-investText/60 hover:text-investText'}`}
          >
            <TrendingUp className="w-4 h-4" />
            Invest
          </button>
        </div>
      )}





      {/* Spacer */}
      <div className="flex-1" />



      {/* User Profile */}
      <div className="relative shrink-0">
        <button
          id="profile-btn"
          onClick={() => setShowProfileMenu(p => !p)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-investPrimary/10 hover:bg-investPrimary/20 transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-investPrimary/30 flex items-center justify-center font-bold text-investPrimary text-xs">
            {currentUser?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
          <span className="text-sm font-semibold text-investText capitalize">{currentUser?.name || 'Alex'}</span>
          <ChevronDown className={`w-3.5 h-3.5 text-investText/50 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
        </button>

        {showProfileMenu && (
          <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-xl shadow-xl border border-black/10 overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-black/5 bg-investBg/50">
              <p className="text-sm font-bold text-investText capitalize">{currentUser?.name || 'Alex Johnson'}</p>
              <p className="text-xs text-investText/60 truncate">{currentUser?.email || 'alex@student.cms.k12.nc.us'}</p>
              
              {currentUser?.schoolName && (
                <p className="text-[11px] font-bold text-investPrimary mt-1">
                  🏫 {currentUser.schoolName}
                </p>
              )}

              <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-investText/70 bg-white px-2 py-1 rounded border border-black/10">
                <span>Tier: {currentGroup?.label}</span>
              </div>
            </div>

            <button 
              onClick={onSignOut}
              className="w-full text-left px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-black/5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        )}
      </div>

    </header>
  );
}

