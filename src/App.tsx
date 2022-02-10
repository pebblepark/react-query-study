import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

function App() {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [data, setData] = useState<{ url?: string }>({});

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios('https://random.dog/woof.json');

                setData(response.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isError) return <h1>Error, try again...!</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    return (
        <div>
            <img src={data.url} />
        </div>
    );
}

export default App;
