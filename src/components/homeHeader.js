import React from 'react'
import {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class HomeHeader extends Component{
    render() {
        return (
            <div className='homeHeader'>
                <div className='homeHeader__picture'>
                </div>
                <div className='homeHeader__text'>
                    <p>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</p>
                </div>
                <div className='homeHeader__buttons'>
                    <Link to={this.props.login? '/give_away':'/login'}>ODDAJ RZECZY</Link>
                    <Link to={this.props.login? '/give_away':'/login'}>ZORGANIZUJ ZBIORKE</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.loginState
    }
};

export default connect(
    mapStateToProps,
)(HomeHeader);
//export default HomeHeader;