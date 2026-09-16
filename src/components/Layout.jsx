import { useState } from 'react';
import { CheckCircle, Bookmark, HelpCircle, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import { TOPICS_BY_GROUP, CURRICULUM, EXERCISES } from '../data';

export default function Layout({ children, activeView, onNavigate, userProgress, ageGroup = 'middle' }) {
  const topics = TOPICS_BY_GROUP[ageGroup] || TOPICS_BY_GROUP.middle;

  // Track expanded topics in the accordion, initialize with current topic open
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
    <div className="flex flex-1 overflow-hidden bg-investBg">
      
      {/* LEFT SIDEBAR: Age-group-filtered Accordion Navigation */}
      <aside className="w-72 bg-investSidebar border-r border-investSidebar/80 overflow-y-auto flex flex-col shrink-0 z-0">
        <div className="p-4 space-y-1">
          {topics.map(topic => {
            const isExpanded = expandedTopics[topic.id];
            const topicData = CURRICULUM[topic.id];
            const exercisesData = EXERCISES[topic.id] || [];

            if (!topicData) return null;

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
                                    {isCompleted
                                      ? <CheckCircle className="w-4 h-4 text-investSecondary" />
                                      : <div className="w-4 h-4 rounded-full border-2 border-investText/30" />}
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
                            {isCompleted
                              ? <CheckCircle className="w-4 h-4 text-investSecondary" />
                              : <Zap className="w-4 h-4 text-investPrimary" />}
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

        {/* Module Progress at bottom of sidebar */}
        <div className="mt-auto p-4 border-t border-investSidebar/80 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-investText/50">Module Progress</h3>
          {topics.map(topic => {
            const topicData = CURRICULUM[topic.id];
            if (!topicData) return null;
            let total = 0, completed = 0;
            topicData.subtopics.forEach(sub => {
              sub.lessons.forEach(l => {
                total++;
                if (userProgress.completedLessons.includes(l.id)) completed++;
              });
            });
            const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
            return (
              <div key={topic.id}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-investText/70">{topic.title}</span>
                  <span className="font-bold text-investText/50">{percent}%</span>
                </div>
                <div className="h-1.5 w-full bg-investText/10 rounded-full overflow-hidden">
                  <div className="h-full bg-investPrimary rounded-full transition-all duration-500 ease-out" style={{ width: `${percent}%` }} />
                </div>
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

    </div>
  );
}
