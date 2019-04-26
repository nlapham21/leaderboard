import React from 'react';
import { connect } from 'react-redux';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

import { startEditLeaders } from '../actions/leaderboard';

export class LeaderList extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(props.leaders);
        this.state = {
            leaders: props.leaders
        };

        this.itemRenderer = this.itemRenderer.bind(this);
        this.handleRLDDChange = this.handleRLDDChange.bind(this);
    }

    handleRLDDChange = (reorderedleaders) => {
        let index = 1;
        reorderedleaders.forEach((leaders) => {
            leaders.rank = index;
            leaders.id = index + 21;
            index += 1;
        });
        this.setState({ leaders: reorderedleaders });
        this.props.startEditLeaders(reorderedleaders);
    };

    itemRenderer({ name, rank }) {
        return (
            <div className="item">
                <div className="list-item">
                    <h3 className="list-item__title">{name}</h3>
                    <h3 className="list-item__data">({rank})</h3>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="list-header__left">Leaders</div>
                    <div className="list-header__right">Rank</div>
                </div>
                <div className="list-body">
                    {
                        this.state.leaders.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No leaders</span>
                            </div>
                        ) : (
                            <RLDD
                                cssClasses="example"
                                items={this.state.leaders}
                                itemRenderer={this.itemRenderer}
                                onChange={this.handleRLDDChange}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    leaders: state.leaders,
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditLeaders: leaders => dispatch(startEditLeaders(leaders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderList);
