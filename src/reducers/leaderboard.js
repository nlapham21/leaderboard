// Leaderboard Reducer

const leaderboardReducerDefaultState = [];

export default (state = leaderboardReducerDefaultState, action) => {
    switch (action.type) {
    case 'SET_LEADERBOARD':
        return action.leaders;
    case 'EDIT_LEADERBOARD':
        return state.map((leader) => {
            if (leader.rank === action.rank) {
                return {
                    ...leader,
                    ...action.name,
                };
            }
            return leader;
        });
    default:
        return state;
    }
};
