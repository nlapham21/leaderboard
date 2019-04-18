import React from 'react';
import { connect } from 'react-redux';

import LeaderListItem from './LeaderListItem';
import orderedLeaders from '../selectors/leaders';

export const LeaderList = props => (
    <div className="content-container">
        <div className="list-header">
            <div className="list-header__left">Leaders</div>
            <div className="list-header__right">Rank</div>
        </div>
        <div className="list-body">
            {
                props.leaders.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No leaders</span>
                    </div>
                ) : (
                    props.leaders.map((leader) => {
                        return <LeaderListItem key={leader.rank} {...leader} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    leaders: orderedLeaders(state.leaders),
});

export default connect(mapStateToProps)(LeaderList);
