import { useState } from 'react';
import { BookOpen, TrendingUp, Trophy, User, ChevronDown, Flame, Lock } from 'lucide-react';
import { AGE_GROUPS } from '../data';

export default function Navbar({ 
  appMode, 
  onModeChange, 
  ageGroup, 
  userProgress, 
  onShowLeaderboard 
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const currentGroup = AGE_GROUPS.find(g => g.id === ageGroup);

  return (
    <header className="h-16 bg-investBg border-b border-investSidebar/80 flex items-center px-6 gap-6 shrink-0 sticky top-0 z-50 shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mr-2 shrink-0">
        <div className="w-8 h-8 bg-investPrimary rounded flex items-center justify-center shadow">
          <span className="text-white font-bold font-serif text-lg leading-none">i</span>
        </div>
        <span className="font-black text-xl font-serif text-investText tracking-tight">iNvest CLT</span>
      </div>

      {/* Mode Toggle Pill */}
      <div className="flex items-center bg-investSidebar rounded-xl p-1 gap-1 shrink-0">
        <button
          id="learn-mode-btn"
          onClick={() => onModeChange('learn')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200
            ${appMode === 'learn'
              ? 'bg-investPrimary text-white shadow-sm'
              : 'text-investText/60 hover:text-investText'}`}
        >
          <BookOpen className="w-4 h-4" />
          Learn
        </button>
        <button
          id="invest-mode-btn"
          onClick={() => onModeChange('invest')}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200
            ${appMode === 'invest'
              ? 'bg-investPrimary text-white shadow-sm'
              : 'text-investText/60 hover:text-investText'}`}
        >
          <TrendingUp className="w-4 h-4" />
          Invest
        </button>
      </div>

      {/* Age Group — Read-only locked badge */}
      <div
        id="age-group-badge"
        title="Your course level is set by your school account and cannot be changed manually."
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-investSidebar/80 bg-investBg text-sm font-semibold text-investText cursor-default select-none shrink-0"
      >
        <span>{currentGroup?.label}</span>
        <Lock className="w-3 h-3 text-investText/30" />
      </div>

      {/* Leaderboard Button — only visible in Invest mode for students */}
      {appMode === 'invest' && ageGroup !== 'adult' && (
        <button
          id="leaderboard-btn"
          onClick={onShowLeaderboard}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-amber-200 bg-amber-50 text-sm font-semibold text-amber-700 hover:bg-amber-100 transition-colors shrink-0"
        >
          <Trophy className="w-4 h-4" />
          School Leaderboard
        </button>
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
          <div className="w-7 h-7 rounded-full bg-investPrimary/30 flex items-center justify-center">
            <User className="w-4 h-4 text-investPrimary" />
          </div>
          <span className="text-sm font-semibold text-investText">Alex</span>
          <ChevronDown className={`w-3.5 h-3.5 text-investText/50 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
        </button>

        {showProfileMenu && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-xl border border-black/10 overflow-hidden z-50">
            <div className="px-4 py-3 border-b border-black/5">
              <p className="text-sm font-bold text-investText">Alex Johnson</p>
              <p className="text-xs text-investText/50">West Charlotte High School</p>
            </div>
            <button className="w-full text-left px-4 py-2.5 text-sm text-investText/70 hover:bg-investBg transition-colors">
              My Profile
            </button>
            <button className="w-full text-left px-4 py-2.5 text-sm text-investText/70 hover:bg-investBg transition-colors">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-black/5">
              Sign Out
            </button>
          </div>
        )}
      </div>

    </header>
  );
}
