import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Main = lazy(() => import('./Main'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;
