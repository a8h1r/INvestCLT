import { useState } from 'react';
import { EXERCISES } from '../data';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export default function ExercisesPage({ topicId, activeView, markCategoryComplete }) {
  const exercises = EXERCISES[topicId] || [];

  // RUNNER VIEW ONLY - bypassed grid view
  const categoryId = activeView.id;
  const category = exercises.find(e => e.id === categoryId);
  
  if (!category) return <div>Quiz not found</div>;

  return (
    <ExerciseRunner 
      category={category} 
      onComplete={() => markCategoryComplete(categoryId)}
    />
  );
}

// Internal Runner Component
function ExerciseRunner({ category, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const question = category.questions[currentIndex];

  const handleSelect = (index) => {
    if (showFeedback) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < category.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
      onComplete(); // Award XP and mark done
    }
  };

  // SUMMARY VIEW
  if (isFinished) {
    return (
      <div className="animate-in zoom-in duration-500 bg-investBg rounded-3xl p-10 max-w-lg mx-auto text-center shadow-xl border border-black/5 mt-10">
        <div className="w-20 h-20 bg-investSecondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-investSecondary" />
        </div>
        <h2 className="text-4xl font-black font-serif text-investText mb-2">Quiz Complete!</h2>
        <p className="text-investText/60 mb-8 font-medium">+200 XP Earned. Great job!</p>
        <p className="text-sm font-bold text-investText/40 mb-2">Check the sidebar for your next module.</p>
      </div>
    );
  }

  // ACTIVE QUESTION VIEW
  const isCorrect = selectedOption === question.correctIndex;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 flex justify-between items-end">
        <h2 className="text-sm font-bold text-investText/50 uppercase tracking-wider">{category.title}</h2>
        <span className="text-sm font-black text-investText/50">Question {currentIndex + 1} of {category.questions.length}</span>
      </div>

      <div className="bg-investBg rounded-3xl p-8 shadow-md shadow-black/5 border border-black/5">
        <h3 className="text-3xl font-black font-serif text-investText mb-8 leading-tight">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let buttonClass = "w-full text-left p-4 rounded-xl border-2 font-bold transition-all ";
            
            if (showFeedback) {
              if (idx === question.correctIndex) {
                buttonClass += "bg-green-50 border-investSecondary text-green-900"; 
              } else if (idx === selectedOption) {
                buttonClass += "bg-red-50 border-red-300 text-red-900"; 
              } else {
                buttonClass += "border-black/5 text-investText/40 opacity-50"; 
              }
            } else {
              if (selectedOption === idx) {
                buttonClass += "border-investPrimary bg-investPrimary/10 text-investText";
              } else {
                buttonClass += "border-black/5 hover:border-investPrimary/30 text-investText/80 hover:bg-black/5";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showFeedback}
                className={buttonClass}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* FEEDBACK AREA */}
        {showFeedback && (
          <div className={`mt-6 p-4 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2
            ${isCorrect ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
            {isCorrect ? <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" /> : <XCircle className="w-6 h-6 shrink-0 mt-0.5" />}
            <div>
              <p className="font-bold text-lg">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
              <p className="text-sm mt-1 opacity-90 font-medium">{question.explanation}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="bg-investText text-white font-bold py-3 px-8 rounded-xl disabled:opacity-50 transition-all hover:bg-black/90 shadow-sm"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-investPrimary hover:bg-investPrimaryLight text-investText shadow-lg shadow-investPrimary/20 font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2"
            >
              {currentIndex < category.questions.length - 1 ? 'Next Question' : 'Finish'} 
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
