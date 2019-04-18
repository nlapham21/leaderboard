import React from 'react';

export default class LeaderForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.leader ? props.leader.name : '',
            rank: props.leader ? props.leader.rank : '',
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

        onSubmit = (e) => {
            e.preventDefault();

            if (!this.state.name) {
                this.setState(() => ({ error: 'Please provide leaders name.' }));
            } else {
                this.setState(() => ({ error: '' }));
                this.props.onSubmit({
                    name: this.state.name,
                });
            }
        };

        render() {
            return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <h2>Change leader for position {this.state.rank}</h2>
                    <input
                        type="text"
                        placeholder="Leaders Name"
                        autoFocus
                        className="text-input"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <div>
                        <button className="button" type="submit">Save New Leader</button>
                    </div>
                </form>
            );
        }
}
