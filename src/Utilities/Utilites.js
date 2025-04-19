const getStoredData = (storedKey) => {
    const storedData = localStorage.getItem(storedKey);
    return storedData ? JSON.parse(storedData) : [];
};

// Store new book ID
const storeBookById = (id, key) => {
    const storedData = getStoredData(key);
    if (!storedData.includes(id)) {
        storedData.push(id);
        localStorage.setItem(key, JSON.stringify(storedData));
    }
};


export { storeBookById as storeBook, getStoredData as getData }