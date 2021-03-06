/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';


/**
* Components
*/

import Button from '../../../../../library/Button/button';

/**
* Styles
*/

import './megaClippers.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Utility
*/

import * as Utility from '../../../../../utility';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* MegaClippers component definition and export
*/

export class MegaClippers extends Component {

    /**
    * Methods
    */

    megaClippersOnClick = () => {
        this.props.megaClippersButtonPressed();
        this.props.startMegaClippers();
        this.props.switchOffOrOnAutoAndMegaClippers(true);
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="megaClippers-section">
                <div className="megaClippers-wrapper2">
                    <Button
                        onClick={this.megaClippersOnClick}
                        text={"MegaClippers"}
                        disabled={this.props.megaClippersButtonDisabled}
                    />
                    <div className="megaClippers-text">{this.props.megaClippersPerSec}</div>
                </div>
                <div className="megaClippers-text">Cost: $ {this.props.megaClippersPerSec === 0 ? Utility.commaSeparator(this.props.megaClipperInitPrice) : Utility.commaSeparator(this.props.megaClipperPrice)}</div>
            </div> 
        );
    }
}

export default connect(
    (state) => {
        return {
            megaClippersPerSec: Selectors.getMegaClippersPerSecState(state),
            megaClipperPrice: Selectors.getMegaClipperPriceState(state),
            megaClipperInitPrice: Selectors.getMegaClipperInitPriceState(state),
            megaClippersButtonDisabled: Selectors.getMegaClippersButtonDisabledState(state)
        };
    },
    (dispatch) => {
        return {
            megaClippersButtonPressed: bindActionCreators(Actions.megaClippersButtonPressed, dispatch),
            startMegaClippers: bindActionCreators(Actions.startMegaClippers, dispatch),
            switchOffOrOnAutoAndMegaClippers: bindActionCreators(Actions.switchOffOrOnAutoAndMegaClippers, dispatch)
        };
    }
)(MegaClippers);
