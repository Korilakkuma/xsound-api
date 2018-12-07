'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as HeaderActions from '../../actions/HeaderActions';

class Header extends React.Component {
    static CLASS_NAME  = 'Header';
    // static BREAK_POINT = 768;

    static propTypes = {
        dispatch : PropTypes.func.isRequired
        // hidden   : PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);

        // this.githubButtons = null;
        // this.forkme        = null;

        // this.resize = this.resize.bind(this);
    }

    /*
    resize() {
        const dispatch = this.props.dispatch;

        if (window.innerWidth < Header.BREAK_POINT) {
            dispatch(HeaderActions.changeHidden(true));
        } else {
            dispatch(HeaderActions.changeHidden(false));
        }
    }
    */

    shouldComponentUpdate() {
        return false;
        // return this.props.hidden !== nextProps.hidden;
    }

    render() {
        return (
            <header className={Header.CLASS_NAME}>
                <a href="https://github.com/Korilakkuma/XSound" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ position : 'absolute', top : '0', right : '0', border : '0' }}
                      src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
                      alt="Fork me on GitHub"
                    />
                </a>
                <div className={`${Header.CLASS_NAME}__headings`}>
                    <h1 className={`${Header.CLASS_NAME}__title`}>XSound</h1>
                    <h2 className={`${Header.CLASS_NAME}__subtitle`}>Web Audio API Library</h2>
                </div>
            </header>
        );
    }

    /*
    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize, false);
    }
    */

    /*
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize, false);
    }
    */
}

function mapStateToProps(state) {
    return {
        hidden : state.hidden
    };
}

export default connect(mapStateToProps)(Header);
