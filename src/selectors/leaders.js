// Get ordered leaders

export default (leaders) => {

    const sortedLeaders = leaders.sort((a, b) => {
        return a.rank > b.rank ? 1 : -1;
    });

    sortedLeaders.forEach((leader) => {
        leader.id = leader.rank;
    });
    return sortedLeaders;
};
