export const getData = async (after) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(after)
    };
    const url = 'https://www.reddit.com/r/popular.json';
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};