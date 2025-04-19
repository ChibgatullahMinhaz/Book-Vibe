const sortingData = (type, dataList, setData) => {
 if (type === 'rating') {
        const sortedList = [...dataList].sort((a,b)=> a.rating - b.rating)
        setData(sortedList)
    }
    if (type === 'Acceding') {
        const sortedList = [...dataList].sort((a,b)=> a.rating - b.rating)
        setData(sortedList)
    }
    if (type === 'Deciding') {
        const sortedList = [...dataList].sort((a,b)=> b.rating - a.rating)
        setData(sortedList)
    }
    if (type === 'pages') {
        const sortedList = [...dataList].sort((a,b)=> a.totalPages - b.totalPages)
        setData(sortedList)
    }
}

export {sortingData}