import { useEffect, useState } from 'react';
import axios from 'axios';
import { FakeData } from '../models/FakeData';

export function useTasks() {
  const [fakeData, setFakeData] = useState<FakeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements');
        setFakeData(response.data.map((task: FakeData) => task));
      } catch (err: any) {
        setError(err.message || 'Error al cargar tareas');
      } finally {
        setLoading(false);
      }
    };
     

    fetchTasks();
  }, []);

  return { fakeData, loading, error };
}