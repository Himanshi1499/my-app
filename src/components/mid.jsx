import React from "react";
import "./mid.css";
import analysis from "../images/analysis.jpg";
import prediction from "../images/Prediction.png";
import news from "../images/news.jpg";
export default function Mid(){
    return(
        <div>
            <div class="mid"></div>
             <hr class="hr-text" data-content="📈Stocks" />
             <div class="analysis">
                 <h3>Analysis</h3>
                 
             </div>
             <div class="performance">
                 <h3>Performance Graphs</h3>
             </div>
             <div class="news">
                 <h3>News and events</h3>

             </div>
             <figure class="snip0023">
	<img src={analysis} alt="sample26"/>
	<div>		
		<i class="ion-ios-play-outline">➡️</i>	
		<div class="curl"></div>
		<a href="www.google.com"></a>
	</div>				
</figure>
<figure class="snip0023">
	<img src={prediction} alt="sample26" />
	<div>		
		<i class="ion-ios-play-outline">➡️</i>	
		<div class="curl"></div>
		<a href="www.google.com"></a>
	</div>				
</figure>
<figure class="snip0023">
	<img src={news} alt="sample26" />
	<div>		
		<i class="ion-ios-play-outline">➡️</i>	
		<div class="curl"></div>
		<a href="www.google.com"></a>
	</div>				
</figure>

            

        </div>
    )

}