import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching data...');

        const aboorCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: aboorCont.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error("Could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    }
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 1000);
        return () => aboorCont.abort();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;