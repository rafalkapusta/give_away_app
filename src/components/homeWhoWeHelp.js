import React from 'react'
import {Component} from 'react'
import {toggleFoundations, toggleOrganizations, toggleLocal} from "../actions/toggleHelp";
import {connect} from "react-redux";
import WhoWeHelpFoundations from "./whoWeHelpFoundations";
import WhoWeHelpOrganizations from "./whoWeHelpOrganizations";
import WhoWeHelpLocals from "./whoWeHelpLocals";

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
                <WhoWeHelpFoundations style={{display: this.props.help.foundations? 'grid':'none'}}/>
                <WhoWeHelpOrganizations style={{display: this.props.help.organizations? 'grid':'none'}}/>
                <WhoWeHelpLocals style={{display: this.props.help.local? 'grid':'none'}}/>
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