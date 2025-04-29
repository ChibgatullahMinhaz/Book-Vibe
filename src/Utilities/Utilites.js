const getStoredData = (storedKey) => {
    try {
        const storedData = localStorage.getItem(storedKey);
        const parsesData = JSON.parse(storedData);
        if (Array.isArray(parsesData)) {
            return parsesData;
        }else{
            localStorage.setItem(storedKey , JSON.stringify([]));
            return [];
        }
    } catch (error) {
        console.warn(error.message);
        localStorage.setItem(storedKey, JSON.stringify([]));
        return [];
    }
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