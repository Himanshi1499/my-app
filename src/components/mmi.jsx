import React, { Component } from 'react';
import "./mmi.css";
class MMI extends Component {
    constructor(props) {
        super(props);
        this.mmi = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" 
        script.async= true;
        script.innerHTML= 
        `            
         {
          "interval": "1m",
          "width": "425",
          "isTransparent": false,
          "height": "450",
          "symbol": "NASDAQ:AMZN",
          "showIntervalTabs": true,
          "locale": "in",
          "colorTheme": "light"
        }
          
     `
    this.mmi.current.appendChild(script);
}
render() {
    return (
      <>
      <hr class="hr-text" data-content="📊MMI" />
      <div className="inactiveLink ">
     <div className="meter">
        <div className="tradingview-widget-container" ref={this.mmi}>
            <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
      </div>
      </>
    )
}
};
export default MMI;