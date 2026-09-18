import { useState } from 'react';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import InvestView from './components/InvestView';
import LessonPage from './components/LessonPage';
import ExercisesPage from './components/ExercisesPage';
import CertificateModal from './components/CertificateModal';
import { CURRICULUM, EXERCISES, TOPICS_BY_GROUP } from './data';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // App-level mode & age group state
  const [appMode, setAppMode] = useState('learn'); // 'learn' | 'invest'
  const [ageGroup, setAgeGroup] = useState('high'); // 'k2' | 'elem35' | 'middle' | 'high' | 'adult'
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Get the first lesson of the first topic for the current age group
  const getDefaultView = (group) => {
    const topics = TOPICS_BY_GROUP[group] || TOPICS_BY_GROUP.high;
    const firstTopic = topics[0] || { id: 'investing' };
    const firstLesson = CURRICULUM[firstTopic.id]?.subtopics[0]?.lessons[0];
    return {
      type: 'lesson',
      id: firstLesson?.id || 'what-is-investing',
      topicId: firstTopic.id
    };
  };

  const [activeView, setActiveView] = useState(getDefaultView('high'));

  const [userProgress, setUserProgress] = useState({
    xp: 150,
    streak: 3,
    completedLessons: [],
    completedCategories: []
  });
  const [showCertificate, setShowCertificate] = useState(false);

  const handleSignIn = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    setAgeGroup(userData.ageGroup || 'high');
    setActiveView(getDefaultView(userData.ageGroup || 'high'));

    // If adult personal email, default directly to Invest / Market Utility mode!
    if (!userData.isGamified) {
      setAppMode('invest');
    } else {
      setAppMode('learn');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const markLessonComplete = (lessonId) => {
    setUserProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newCompletedLessons = [...prev.completedLessons, lessonId];
      const newProgress = { ...prev, xp: prev.xp + 50, completedLessons: newCompletedLessons };
      checkTopicCompletion(activeView.topicId, newCompletedLessons, prev.completedCategories);
      return newProgress;
    });
  };

  const markCategoryComplete = (categoryId) => {
    setUserProgress(prev => {
      if (prev.completedCategories.includes(categoryId)) return prev;
      const newCompletedCategories = [...prev.completedCategories, categoryId];
      const newProgress = { ...prev, xp: prev.xp + 200, completedCategories: newCompletedCategories };
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
    const firstExerciseDone = topicExercises?.length > 0
      ? completedCategories.includes(topicExercises[0].id)
      : true;

    if (allLessonsDone && firstExerciseDone) {
      setTimeout(() => setShowCertificate(true), 500);
    }
  };

  const renderLearnContent = () => {
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
      {/* Top Navigation Bar */}
      <Navbar
        appMode={appMode}
        onModeChange={(mode) => { setAppMode(mode); setShowLeaderboard(false); }}
        ageGroup={ageGroup}
        userProgress={userProgress}
        onShowLeaderboard={() => { setAppMode('invest'); setShowLeaderboard(true); }}
        currentUser={currentUser}
        onSignOut={handleSignOut}
      />

      {/* Main Content — switches between Learn and Invest modes */}
      <div className="flex flex-1 overflow-hidden">
        {appMode === 'learn' ? (
          <Layout
            activeView={activeView}
            onNavigate={(view) => setActiveView(view)}
            userProgress={userProgress}
            ageGroup={ageGroup}
          >
            {renderLearnContent()}
          </Layout>
        ) : (
          <InvestView
            ageGroup={ageGroup}
            showLeaderboard={showLeaderboard}
            currentUser={currentUser}
          />
        )}
      </div>

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

