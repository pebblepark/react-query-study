import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

interface Response {
    url?: string;
}

function App() {
    const { isLoading, isError, data } = useQuery<Response, Error>('dogs', () =>
        axios('https://random.dog/woof.json').then(response => response.data)
    );

    if (isError) return <h1>Error, try again...!</h1>;
    if (isLoading) return <h1>Loading...</h1>;
    return (
        <div>
            <img src={data.url} />
        </div>
    );
}

export default App;
