// Get ordered leaders

export default (leaders) => {
    return leaders.sort((a, b) => {
        return a.rank > b.rank ? 1 : -1;
    });
};
