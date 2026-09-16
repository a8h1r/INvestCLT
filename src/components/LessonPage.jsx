import { useState, useEffect } from 'react';
import { CURRICULUM, EXERCISES } from '../data';

// Simple Savings Calculator for the Interactive Element
function SavingsCalculator() {
  const [savePerWeek, setSavePerWeek] = useState(10);
  
  const totalYearly = savePerWeek * 52;

  return (
    <div className="bg-investSidebar rounded-xl border border-black/5 p-6 shadow-sm my-8">
      <h3 className="text-xl font-bold font-serif text-investText mb-2">Try it out: Savings Calculator</h3>
      <p className="text-sm text-investText/70 mb-6 font-medium">If you save a little bit each week, how much will you have in a year?</p>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="font-bold text-investText">Save per week:</label>
          <span className="font-black text-investPrimary">${savePerWeek}</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="50" 
          value={savePerWeek}
          onChange={(e) => setSavePerWeek(Number(e.target.value))}
          className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-investPrimary"
        />
        <div className="flex justify-between text-xs font-bold text-investText/40 mt-1">
          <span>$1</span>
          <span>$50</span>
        </div>
      </div>

      <div className="bg-investBg rounded-lg p-4 text-center border border-black/5">
        <p className="text-sm font-bold text-investText/60 mb-1">In one year, you will have:</p>
        <p className="text-4xl font-black text-investPrimary font-serif">${totalYearly}</p>
        <p className="text-xs font-bold text-investText/40 mt-2">({savePerWeek} x 52 weeks)</p>
      </div>
    </div>
  );
}

export default function LessonPage({ topicId, lessonId, markComplete, onNavigate, userProgress }) {
  
  // Find current lesson data
  let currentLesson = null;
  let nextLessonId = null;
  let foundCurrent = false;

  const topicData = CURRICULUM[topicId];
  
  for (const sub of topicData.subtopics) {
    for (const lesson of sub.lessons) {
      if (foundCurrent && !nextLessonId) {
        nextLessonId = lesson.id;
      }
      if (lesson.id === lessonId) {
        currentLesson = lesson;
        foundCurrent = true;
      }
    }
  }

  // Reset scroll on lesson change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!currentLesson) return <div>Lesson not found</div>;

  const isCompleted = userProgress.completedLessons.includes(lessonId);

  const handleComplete = () => {
    markComplete(lessonId);
    
    // Auto advance
    setTimeout(() => {
      if (nextLessonId) {
        onNavigate({ type: 'lesson', id: nextLessonId, topicId });
      } else {
        // Find first quiz of this topic
        const exercises = EXERCISES[topicId] || [];
        if (exercises.length > 0) {
           onNavigate({ type: 'exercise-runner', id: exercises[0].id, topicId });
        }
      }
    }, 1500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
      <div className="mb-2">
        <span className="text-xs font-black uppercase tracking-wider text-investPrimary bg-investPrimary/10 px-2 py-1 rounded">
          Lesson
        </span>
      </div>
      
      <h1 className="text-4xl font-black font-serif text-investText mb-6 tracking-tight">
        {currentLesson.title}
      </h1>
      
      <div className="prose prose-slate prose-lg max-w-none text-investText/80 space-y-4 font-medium">
        {currentLesson.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="leading-relaxed">{paragraph}</p>
        ))}
      </div>

      {currentLesson.interactive === 'calculator' && (
        <SavingsCalculator />
      )}

      <div className="mt-12 pt-8 border-t border-black/10">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex justify-center items-center gap-2
            ${isCompleted 
              ? 'bg-investSecondary text-white cursor-default' 
              : 'bg-investPrimary hover:bg-investPrimaryLight text-investText shadow-lg shadow-investPrimary/20 hover:-translate-y-1'
            }`}
        >
          {isCompleted ? 'Awesome job! Moving on...' : 'Mark as understood'}
        </button>
      </div>
    </div>
  );
}
