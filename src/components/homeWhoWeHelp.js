import React from 'react'
import {Component} from 'react'
import {toggleFoundations, toggleOrganizations, toggleLocal} from "../actions/toggleHelp";
import {connect} from "react-redux";

class HomeWhoWeHelp extends Component{
    render() {
        return (
            <div className='homeWhoWeHelp'>
                <p className='homeWhoWeHelp__header'>Komu pomagamy?</p>
                <div className='homeWhoWeHelp__nav'>
                    <div onClick={this.props.toggleFoundations}>Fundacjom</div>
                    <div onClick={this.props.toggleOrganizations}>Organizacjom pozarządowym</div>
                    <div onClick={this.props.toggleLocals}>Lokalnym zbiórkom</div>
                </div>
                <div className='homeWhoWeHelp__foundations' style={{display: this.props.help.foundations? 'block':'none'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div>foundation1</div>
                    <div>foundation2</div>
                    <div>foundation3</div>
                </div>
                <div className='homeWhoWeHelp__organizations' style={{display: this.props.help.organizations? 'block':'none'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div>organization1</div>
                    <div>organization2</div>
                    <div>organization3</div>
                </div>
                <div className='homeWhoWeHelp__locals' style={{display: this.props.help.local? 'block':'none'}}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div>local1</div>
                    <div>local2</div>
                    <div>local3</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        help: state.helpState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFoundations: ()=> {
            dispatch(toggleFoundations())
        },
        toggleOrganizations: ()=> {
            dispatch(toggleOrganizations())
        },
        toggleLocals: ()=> {
            dispatch(toggleLocal())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeWhoWeHelp);