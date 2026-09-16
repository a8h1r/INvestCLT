import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function SignIn({ onSignIn }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      onSignIn();
    }, 1000); // 1-second fake loading
  };

  return (
    <div className="min-h-screen bg-investBg flex flex-col items-center justify-center p-4">
      <div className="bg-investSidebar max-w-md w-full rounded-2xl shadow-xl overflow-hidden p-8 flex flex-col items-center border border-black/5">
        {/* Logo / Branding */}
        <div className="w-16 h-16 bg-investPrimary rounded-xl flex items-center justify-center mb-6 shadow-md shadow-investPrimary/20">
          <span className="text-investText font-serif text-3xl font-bold tracking-tighter">i</span>
        </div>
        
        <h1 className="text-4xl font-black font-serif text-investText mb-2">iNvest CLT</h1>
        <p className="text-investText/60 mb-8 text-center font-medium">Your journey to financial freedom starts here.</p>

        <button
          onClick={handleClick}
          disabled={isLoading}
          className="w-full bg-investPrimary hover:bg-investPrimaryLight text-investText font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center disabled:opacity-70 shadow-sm"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Sign In to Start Learning'
          )}
        </button>
      </div>
    </div>
  );
}
