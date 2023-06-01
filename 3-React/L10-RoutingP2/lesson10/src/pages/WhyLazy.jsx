import { Routes, Route } from 'react-router-dom';
import LazyLanding from '../components/LazyLanding';
import { lazy } from 'react';
import Heavy from '../components/Heavy';

export default function WhyLazy() {
  return (
    <div>
      <h1>Lazy</h1>
      <Routes>
        <Route path="/" element={<LazyLanding />} />
        <Route path="/heavy" element={<Heavy />} />
      </Routes>
    </div>
  );
}
