import { X, Award, Download } from 'lucide-react';

export default function CertificateModal({ topicTitle, onClose }) {
  
  const handleDownload = () => {
    // Fake download interaction for MVP
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-investText/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      <div className="bg-investBg rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden animate-in zoom-in-95 duration-500 delay-100">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-investText/60 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Content */}
        <div className="p-12 text-center relative border-8 border-investPrimary/30 m-2 rounded-2xl bg-gradient-to-b from-white to-investBg">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-xl">
             {/* Decorative circles */}
             <div className="absolute -top-16 -left-16 w-32 h-32 bg-investPrimary/10 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-investPrimary/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <Award className="w-24 h-24 text-investPrimary mx-auto mb-6 drop-shadow-lg" />
            
            <h4 className="text-xs font-black text-investText/40 uppercase tracking-[0.2em] mb-4">Certificate of Completion</h4>
            
            <h2 className="text-5xl font-black text-investText mb-8 font-serif">
              {topicTitle} Master
            </h2>
            
            <p className="text-investText/80 mb-8 max-w-md mx-auto leading-relaxed font-medium text-lg">
              This certifies that <strong className="text-investText font-bold">Alex</strong> has successfully completed all lessons and exercises in the <strong className="text-investText font-bold">{topicTitle}</strong> module of the Explorer Track.
            </p>

            <div className="flex items-center justify-center gap-4 pt-8 border-t border-black/10 mt-8">
               <div className="text-center px-6">
                 <p className="font-bold text-investText font-serif text-xl border-b border-black/20 pb-1 mb-1">iNvest CLT</p>
                 <p className="text-[10px] font-black text-investText/40 uppercase tracking-widest">Organization</p>
               </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-investSidebar p-4 border-t border-black/5 flex justify-end gap-3 rounded-b-3xl">
          <button 
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-bold text-investText/70 hover:bg-black/5 transition-colors"
          >
            Close
          </button>
          <button 
            onClick={handleDownload}
            className="px-6 py-3 rounded-xl font-bold bg-investPrimary hover:bg-investPrimaryLight text-investText transition-colors flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>

      </div>
    </div>
  );
}
