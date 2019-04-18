import React from 'react';
import { connect } from 'react-redux';
import LeaderForm from './LeaderForm';
import { startEditLeader } from '../actions/leaderboard';

export class EditLeaderPage extends React.Component {
    onSubmit = ({ name }) => {
        this.props.startEditLeader(name, this.props.leader.rank);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <LeaderForm
                        leader={this.props.leader}
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    leader: state.leaders.filter(leader => leader.rank == props.match.params.rank)[0],
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditLeader: (name, rank) => dispatch(startEditLeader(name, rank)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLeaderPage);
