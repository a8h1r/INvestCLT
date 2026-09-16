import { useState } from 'react';
import { CheckCircle, Flame, User, Bookmark, HelpCircle, Activity, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { TOPICS, CURRICULUM, EXERCISES } from '../data';

export default function Layout({ children, activeView, onNavigate, userProgress }) {
  
  // Track expanded topics in the accordion, initialize with current topic
  const [expandedTopics, setExpandedTopics] = useState({
    [activeView.topicId]: true
  });

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  return (
    <div className="flex flex-col h-full bg-investBg">
      {/* TOP BAR */}
      <header className="bg-investBg border-b border-investSidebar h-16 flex items-center px-6 shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-investPrimary rounded flex items-center justify-center">
            <span className="text-white font-bold font-serif text-lg leading-none">i</span>
          </div>
          <span className="font-black text-xl font-serif text-investText tracking-tight">iNvest CLT</span>
        </div>
      </header>

      {/* THREE COLUMN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT SIDEBAR: Accordion Navigation */}
        <aside className="w-72 bg-investSidebar border-r border-investSidebar/80 overflow-y-auto flex flex-col shrink-0 z-0">
          
          <div className="p-4 space-y-1">
            {TOPICS.map(topic => {
              const isExpanded = expandedTopics[topic.id];
              const topicData = CURRICULUM[topic.id];
              const exercisesData = EXERCISES[topic.id] || [];
              
              return (
                <div key={topic.id} className="mb-2">
                  {/* Section Header */}
                  <button 
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full flex items-center gap-2 px-3 py-2 text-investText font-bold text-left hover:bg-black/5 rounded-lg transition-colors font-serif"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    {topic.title}
                  </button>

                  {/* Section Content */}
                  {isExpanded && (
                    <div className="ml-5 pl-3 border-l-2 border-black/10 mt-1 space-y-1">
                      {/* Lessons */}
                      {topicData.subtopics.map(subtopic => (
                        <div key={subtopic.id} className="mb-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-1 px-3">{subtopic.title}</h4>
                          <ul className="space-y-1">
                            {subtopic.lessons.map(lesson => {
                              const isCompleted = userProgress.completedLessons.includes(lesson.id);
                              const isActive = activeView.type === 'lesson' && activeView.id === lesson.id;
                              
                              return (
                                <li key={lesson.id}>
                                  <button
                                    onClick={() => onNavigate({ type: 'lesson', id: lesson.id, topicId: topic.id })}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-start gap-2 transition-colors
                                      ${isActive ? 'bg-investPrimary/10 text-investPrimary font-bold' : 'text-investText/80 hover:bg-black/5 hover:text-investText font-medium'}`}
                                  >
                                    <div className="mt-0.5 shrink-0">
                                      {isCompleted ? (
                                        <CheckCircle className="w-4 h-4 text-investSecondary" />
                                      ) : (
                                        <div className="w-4 h-4 rounded-full border-2 border-investText/30" />
                                      )}
                                    </div>
                                    <span className="leading-tight">{lesson.title}</span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}

                      {/* Quizzes */}
                      {exercisesData.map(quiz => {
                        const isCompleted = userProgress.completedCategories.includes(quiz.id);
                        const isActive = activeView.type === 'exercise-runner' && activeView.id === quiz.id;
                        
                        return (
                          <button
                            key={quiz.id}
                            onClick={() => onNavigate({ type: 'exercise-runner', id: quiz.id, topicId: topic.id })}
                            disabled={!quiz.isAvailable}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-start gap-2 transition-colors mt-2
                              ${isActive ? 'bg-investPrimary/10 text-investPrimary font-bold' : 'text-investText/80 hover:bg-black/5 hover:text-investText font-medium'}
                              ${!quiz.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            <div className="mt-0.5 shrink-0 flex items-center justify-center">
                               {isCompleted ? (
                                  <CheckCircle className="w-4 h-4 text-investSecondary" />
                               ) : (
                                  <Zap className="w-4 h-4 text-investPrimary" />
                               )}
                            </div>
                            <span className="leading-tight flex-1">{quiz.title}</span>
                            {quiz.isAvailable && !isCompleted && (
                              <span className="text-[10px] font-bold opacity-50">0/{quiz.questionCount}</span>
                            )}
                          </button>
                        );
                      })}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto bg-investBg relative">
          <div className="max-w-3xl mx-auto py-8 px-6">
             {children}
          </div>
        </main>

        {/* RIGHT SIDEBAR: Gamification Panel */}
        <aside className="w-80 bg-investSidebar border-l border-investSidebar/80 overflow-y-auto p-5 shrink-0 flex flex-col gap-6 z-0">
          
          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-investPrimary/20 flex items-center justify-center text-investPrimary shadow-inner">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-investText font-serif text-lg">Alex</p>
              <p className="text-xs text-investText/60 font-medium uppercase tracking-wider">Explorer Track</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-investBg rounded-xl p-3 border border-black/5 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-investPrimary">{userProgress.xp}</span>
              <span className="text-[10px] uppercase font-bold text-investText/50 tracking-wider">XP Earned</span>
            </div>
            <div className="bg-orange-50 rounded-xl p-3 border border-orange-100 flex flex-col items-center justify-center relative overflow-hidden">
              <Flame className="w-10 h-10 text-orange-500 absolute -right-2 -bottom-2 opacity-10" />
              <span className="text-2xl font-black text-orange-600 flex items-center gap-1 z-10">
                {userProgress.streak} <Flame className="w-4 h-4" />
              </span>
              <span className="text-[10px] uppercase font-bold text-orange-500 tracking-wider z-10">Day Streak</span>
            </div>
          </div>

          {/* Progress Section (All Topics) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-4 font-sans">Module Progress</h3>
            <div className="space-y-4">
              {TOPICS.map(topic => {
                const topicData = CURRICULUM[topic.id];
                let total = 0;
                let completed = 0;
                
                topicData.subtopics.forEach(sub => {
                  sub.lessons.forEach(l => {
                    total++;
                    if (userProgress.completedLessons.includes(l.id)) completed++;
                  });
                });
                
                const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

                return (
                  <div key={topic.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-investText">{topic.title}</span>
                      <span className="text-investText/60 font-bold">{percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-investText/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-investPrimary rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50 mb-3 font-sans">Quick Tools</h3>
            <div className="space-y-2">
              <button disabled className="w-full flex items-center gap-3 p-2 rounded-lg text-left text-sm text-investText/40 hover:bg-black/5 transition-colors cursor-not-allowed group font-medium">
                <Bookmark className="w-4 h-4" />
                <span>Bookmarks</span>
              </button>
              <button disabled className="w-full flex items-center gap-3 p-2 rounded-lg text-left text-sm text-investText/40 hover:bg-black/5 transition-colors cursor-not-allowed group font-medium">
                <HelpCircle className="w-4 h-4" />
                <span>Test Your Knowledge</span>
              </button>
              
              <div className="mt-4 relative group">
                <button disabled className="w-full bg-investText/5 text-investText/40 font-semibold py-3 px-4 rounded-xl text-sm flex flex-col items-center justify-center cursor-not-allowed border border-investText/5">
                  <span>Trading Simulator</span>
                </button>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-investText text-investBg text-xs font-bold px-2 py-1 rounded shadow-lg pointer-events-none">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
