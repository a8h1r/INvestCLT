import { useState } from 'react';
import SignIn from './components/SignIn';
import Layout from './components/Layout';
import LessonPage from './components/LessonPage';
import ExercisesPage from './components/ExercisesPage';
import CertificateModal from './components/CertificateModal';
import { CURRICULUM, EXERCISES } from './data';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // App State - now activeView inherently knows its topic
  const [activeView, setActiveView] = useState({ 
    type: 'lesson', 
    id: 'what-is-a-budget',
    topicId: 'budgeting'
  });
  
  const [userProgress, setUserProgress] = useState({
    xp: 150,
    streak: 3,
    completedLessons: [],
    completedCategories: []
  });
  const [showCertificate, setShowCertificate] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const markLessonComplete = (lessonId) => {
    setUserProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      
      const newCompletedLessons = [...prev.completedLessons, lessonId];
      const newProgress = {
        ...prev,
        xp: prev.xp + 50,
        completedLessons: newCompletedLessons
      };

      // Check if topic is completed after this lesson
      checkTopicCompletion(activeView.topicId, newCompletedLessons, prev.completedCategories);

      return newProgress;
    });
  };

  const markCategoryComplete = (categoryId) => {
    setUserProgress(prev => {
      if (prev.completedCategories.includes(categoryId)) return prev;
      
      const newCompletedCategories = [...prev.completedCategories, categoryId];
      const newProgress = {
        ...prev,
        xp: prev.xp + 200, // big bonus for exercises
        completedCategories: newCompletedCategories
      };

      // Check if topic is completed after this category
      checkTopicCompletion(activeView.topicId, prev.completedLessons, newCompletedCategories);

      return newProgress;
    });
  };

  const checkTopicCompletion = (topicId, completedLessons, completedCategories) => {
    if (!topicId) return;
    
    const topic = CURRICULUM[topicId];
    if (!topic) return;
    
    let allLessonsDone = true;
    topic.subtopics.forEach(sub => {
      sub.lessons.forEach(l => {
        if (!completedLessons.includes(l.id)) allLessonsDone = false;
      });
    });

    const topicExercises = EXERCISES[topicId];
    let firstExerciseDone = false;
    if (topicExercises && topicExercises.length > 0) {
       firstExerciseDone = completedCategories.includes(topicExercises[0].id);
    } else {
       firstExerciseDone = true; // no exercises
    }

    if (allLessonsDone && firstExerciseDone) {
      setTimeout(() => setShowCertificate(true), 500);
    }
  };

  // Render view
  const renderMainContent = () => {
    if (activeView.type === 'lesson') {
      return (
        <LessonPage 
          topicId={activeView.topicId}
          lessonId={activeView.id}
          markComplete={markLessonComplete}
          onNavigate={(view) => setActiveView(view)}
          userProgress={userProgress}
        />
      );
    }
    
    if (activeView.type === 'exercise-runner') {
      return (
        <ExercisesPage
          topicId={activeView.topicId}
          activeView={activeView}
          onNavigate={(view) => setActiveView(view)}
          userProgress={userProgress}
          markCategoryComplete={markCategoryComplete}
        />
      );
    }

    return <div>View not found</div>;
  };

  if (!isAuthenticated) {
    return <SignIn onSignIn={handleSignIn} />;
  }

  return (
    <div className="min-h-screen flex flex-col h-screen overflow-hidden">
      <Layout 
        activeView={activeView}
        onNavigate={(view) => setActiveView(view)}
        userProgress={userProgress}
      >
        {renderMainContent()}
      </Layout>

      {showCertificate && (
        <CertificateModal 
          topicTitle={CURRICULUM[activeView.topicId]?.title || 'Topic'}
          onClose={() => setShowCertificate(false)} 
        />
      )}
    </div>
  );
}

export default App;
