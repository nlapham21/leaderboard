// import uuid from 'uuid';
import database from '../firebase/firebase';

// SET_LEADERBOARD
export const setLeaderboard = leaders => ({
    type: 'SET_LEADERBOARD',
    leaders,
});

export const startSetLeaderboard = () => {
    return (dispatch, getState) => {
        return database.ref('leaders').once('value').then((snapshot) => {
            const leaders = [];
            leaders.push(
                ...snapshot.val(),
            );
            dispatch(setLeaderboard(leaders));
        });
    };
};

// EDIT_LEADER
export const editLeader = (name, rank) => ({
    type: 'EDIT_LEADERBOARD',
    name,
    rank,
});

export const startEditLeader = (name, rank) => {
    return (dispatch, getState) => {
        const { leaders } = getState();
        leaders.forEach((leader) => {
            if (leader.rank === rank) {
                leader.name = name;
            }
        });
        return database.ref('leaders').set(leaders).then(() => {
            dispatch(editLeader(name, rank));
        });
    };
};
