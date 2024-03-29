import React from 'react'
import {Component} from 'react'

class WhoWeHelpOrganizations extends Component{
    state = {
        organizations: ['Organizacja Lorem Ipsum 1', 'Organizacja Lorem Ipsum 2', 'Organizacja Lorem Ipsum 3',
            'Organizacja Lorem Ipsum 4', 'Organizacja Lorem Ipsum 5', 'Organizacja Lorem Ipsum 6'],
        organizationsPerPage: 3,
        currentPage: 1
    };
    handleClick =(e, i)=> {
        this.setState({currentPage: i})
    };
    render() {
        const {organizations, organizationsPerPage, currentPage} = this.state;
        const indexOfLast = organizationsPerPage * currentPage;
        const indexOfFirst = indexOfLast - organizationsPerPage;
        const currentOrganizations = organizations.slice(indexOfFirst, indexOfLast);
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(organizations.length/organizationsPerPage); i++) {
            pageNumbers.push(<div key={i} onClick={e => this.handleClick(e, i)} className={currentPage === i&& 'active'}>{i}</div>)
        }
        return (
            <div className='homeWhoWeHelpOrganizations' style={this.props.style}>
                <p>
                    Organizacje Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <div className='homeWhoWeHelpOrganizations__organizations'>
                    {
                        currentOrganizations.map((organization, i) => {
                                return <div key={i}>{organization}</div>
                            }
                        )
                    }
                    <div className='homeWhoWeHelpOrganizations__pages'>
                        {pageNumbers}
                    </div>
                </div>
            </div>
        )
    }
}

export default WhoWeHelpOrganizations