import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PacmanLoader } from 'react-spinners';
const LazyLanding = lazy(() => import('../components/LazyLanding'));
const Heavy = lazy(() => import('../components/Heavy'));

export default function WhyLazy() {
  return (
    <div>
      <h1>Lazy</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <PacmanLoader color="red" size={30} speedMultiplier={1} />
              }
            >
              <LazyLanding />
            </Suspense>
          }
        />
        <Route
          path="/heavy"
          element={
            <Suspense
              fallback={
                <PacmanLoader color="red" size={30} speedMultiplier={1} />
              }
            >
              <Heavy />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
