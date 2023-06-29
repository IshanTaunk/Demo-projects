import "./HealthApp.css";
import ProgressBar from "../../components/progress-bar/progressBar";
import RadialProgressBar from "../../components/radial-progess-bar/radialProgressBar";
import { useState } from "react";

const HealthApp=()=>{
    const [radialPercent,setRadialPercent] = useState(25);
    return <div>
        <div className="health-app-top-bar">
            <div>Date Picker</div>
            <div className="total-days">28 Days</div>
        </div>
        <div className="calories-section">
            <div className="calories-overview">
                <div className="total-calories">
                    <div className="radial-progress-bar">
                        <RadialProgressBar
                            strokeWidth="10"
                            sqSize="75"
                            percentage={radialPercent}/>
                    </div>
                    <div>
                        <div>0 of 2900</div>
                        <div>Calories Consumed</div>
                    </div>
                </div>
                <button className="add-food-btn">Add Food Item <i className="fa fa-plus"></i></button>
            </div>
            <div className="calories-distribution">
                <div className="row">
                    <div className="calorie-ingre">
                        Protein: 25%
                        <ProgressBar bgcolor="orange" progress='25'  height={10}></ProgressBar>
                    </div>
                    <div className="calorie-ingre">
                        Carbohydrates: 30%
                        <ProgressBar bgcolor="orange" progress='30'  height={10}></ProgressBar>
                    </div>
                </div>
                <div className="row">
                    <div className="calorie-ingre">
                        Fat: 40%
                        <ProgressBar bgcolor="orange" progress='40'  height={10}></ProgressBar>
                    </div>
                    <div className="calorie-ingre">
                        Fibre: 45%
                        <ProgressBar bgcolor="orange" progress='45'  height={10}></ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HealthApp;