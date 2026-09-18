import { useState } from 'react';
import { Loader2, GraduationCap, User, School, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SignIn({ onSignIn }) {
  const [authMode, setAuthMode] = useState('sso'); // 'sso' | 'personal'
  const [isLoading, setIsLoading] = useState(false);

  // Simulated student SSO states
  const [studentEmail, setStudentEmail] = useState('alex@student.cms.k12.nc.us');
  const [gradeLevel, setGradeLevel] = useState('8'); // '2', '5', '8', '11'
  const [schoolName, setSchoolName] = useState('Alexander Graham Middle School');

  // Simulated personal email state
  const [personalEmail, setPersonalEmail] = useState('alex.johnson@gmail.com');

  // Handle grade change and auto-update school name for demo
  const handleGradeChange = (newGrade) => {
    setGradeLevel(newGrade);
    const g = parseInt(newGrade, 10);
    if (g <= 2) setSchoolName('Dilworth Elementary School');
    else if (g <= 5) setSchoolName('Selwyn Elementary School');
    else if (g <= 8) setSchoolName('Alexander Graham Middle School');
    else setSchoolName('Myers Park High School');
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (authMode === 'sso') {
        const gradeNum = parseInt(gradeLevel, 10);
        let group = 'high';
        if (gradeNum <= 2) group = 'k2';
        else if (gradeNum <= 5) group = 'elem35';
        else if (gradeNum <= 8) group = 'middle';

        onSignIn({
          authType: 'sso',
          email: studentEmail,
          name: studentEmail.split('@')[0] || 'Alex',
          schoolName,
          gradeLevel: parseInt(gradeLevel, 10),
          ageGroup: group,
          isGamified: true,
        });
      } else {
        // Personal Email -> Adult User, Utility Mode
        onSignIn({
          authType: 'personal',
          email: personalEmail,
          name: personalEmail.split('@')[0] || 'Alex',
          schoolName: null,
          gradeLevel: null,
          ageGroup: 'adult',
          isGamified: false,
        });
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-investBg flex flex-col items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden border border-black/10 p-8">
        
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-14 h-14 bg-investPrimary rounded-xl flex items-center justify-center mb-3 shadow-md shadow-investPrimary/20">
            <span className="text-white font-serif text-3xl font-bold tracking-tighter">i</span>
          </div>
          <h1 className="text-3xl font-black font-serif text-investText tracking-tight">iNvest CLT</h1>
          <p className="text-xs font-semibold text-investPrimary tracking-widest uppercase mt-1">Mecklenburg County Financial Literacy</p>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div className="grid grid-cols-2 gap-2 bg-investBg p-1.5 rounded-xl mb-6 border border-investSidebar/80">
          <button
            type="button"
            onClick={() => setAuthMode('sso')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${
              authMode === 'sso'
                ? 'bg-white text-investPrimary shadow-sm border border-black/5'
                : 'text-investText/60 hover:text-investText'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            School District SSO (K-12)
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('personal')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-bold text-xs transition-all ${
              authMode === 'personal'
                ? 'bg-white text-investPrimary shadow-sm border border-black/5'
                : 'text-investText/60 hover:text-investText'
            }`}
          >
            <User className="w-4 h-4" />
            Personal Email (Adults)
          </button>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSignInSubmit} className="space-y-4">
          {authMode === 'sso' ? (
            /* School District SSO Mode */
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800 font-medium">
                  <span className="font-bold">District SSO Active:</span> Logging in with your school email unlocks full gamification, XP rewards, level progression, and your school's leaderboard.
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-investText/70 uppercase mb-1">
                  School District Email
                </label>
                <input
                  type="email"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-investPrimary/40 text-sm font-semibold"
                  placeholder="student@cms.k12.nc.us"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-investText/70 uppercase mb-1">
                    Grade Level
                  </label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => handleGradeChange(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-black/15 bg-white text-sm font-bold text-investText focus:outline-none focus:ring-2 focus:ring-investPrimary/40"
                  >
                    <option value="2">Grade 2 (Elem Level 1)</option>
                    <option value="5">Grade 5 (Elem Level 2)</option>
                    <option value="8">Grade 8 (Middle Level 3)</option>
                    <option value="11">Grade 11 (High Level 4)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-investText/70 uppercase mb-1">
                    Assigned School
                  </label>
                  <div className="px-3 py-2.5 rounded-xl bg-investBg border border-black/10 text-xs font-bold text-investText truncate flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-investPrimary shrink-0" />
                    <span className="truncate">{schoolName}</span>
                  </div>
                </div>
              </div>

              {/* Demo Grade Transition Simulation Button */}
              {gradeLevel === '8' && (
                <button
                  type="button"
                  onClick={() => handleGradeChange('9')}
                  className="w-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Simulate SSO Transition: Middle School (8th) $\rightarrow$ High School (9th)
                </button>
              )}
            </div>
          ) : (
            /* Personal Email Mode (Adults) */
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200/80 flex items-start gap-3">
                <User className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-800 font-medium">
                  <span className="font-bold">Adult Utility Account:</span> Logging in with a personal email routes directly to the clean financial & investment tool dashboard (Level 5). No school competitions or XP gamification.
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-investText/70 uppercase mb-1">
                  Personal Email Address
                </label>
                <input
                  type="email"
                  value={personalEmail}
                  onChange={(e) => setPersonalEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-investPrimary/40 text-sm font-semibold"
                  placeholder="alex.johnson@gmail.com"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 bg-investPrimary hover:bg-investPrimaryLight text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Sign In ({authMode === 'sso' ? 'K-12 SSO' : 'Adult'})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}

