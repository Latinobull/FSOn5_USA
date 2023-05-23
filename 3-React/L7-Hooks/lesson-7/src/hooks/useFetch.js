import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);
}
