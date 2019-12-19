import React from 'react';
import {Component} from 'react';

class GiveAwayPageForm extends Component{

    render() {
        return (
            <div className='giveAwayPageContainer'>
                {this.props.login}
            </div>
        )
    }
}


export default GiveAwayPageForm;