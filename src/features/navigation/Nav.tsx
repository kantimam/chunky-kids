import React from 'react';
import {
    toggleDarkMode

} from '../theme/darkModeSlice';
import SimpleNav from './SimpleNav';
import { Component } from 'react'
import { connect } from 'react-redux'



interface Props {
    isDark: boolean,
    toggleDarkMode(): any
}


export class Nav extends Component<Props> {

    render() {
        return (
            <>
                <SimpleNav
                    toggleDark={this.props.toggleDarkMode}
                    isDark={this.props.isDark}
                />
            </>
        )
    }
}



const mapDispatchToProps = {
    toggleDarkMode
}

export default connect(null, mapDispatchToProps)(Nav)
