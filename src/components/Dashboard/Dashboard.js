import React, { Component } from 'react';
import ChordChart from '../ChordChart/ChordChart';
import BarChart from '../BarChart/BarChart';
import * as d3 from 'd3';
import "./Dashboard.css";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, hover: null };
        this.pool = ["MEDCO", "DEPUTY MEDCO", "GAS", "MD", "NURSE", "MIDWIFE", "MTL", "OTHER", "PROJECT COORDINATOR", "NON MEDICAL"];
        this.pool.sort();
        this.color = d3.scaleOrdinal(d3.schemeCategory10);
        this.handleMouse = this.handleMouse.bind(this);
    }

    componentDidMount() {
        d3.csv("./asset/MSF_OCP_departures.csv")
            .then((res) => {
                this.data = res.map((d) => {
                    return {
                        staff_id: d.staff_id,
                        assignment_number: d.assignment_number,
                        departure_date: d.departure_date,
                        return_date: d.return_date,
                        assignment_country: d.assignment_country,
                        pool: d.pool,
                        job_title: d.job_title,
                        age_bracket: d.age_bracket,
                        sex: d.sex,
                        first_departure: d.first_departure
                    };
                });

                this.processData();
                this.setState({ loaded: true });
            });
    }

    processData(){
        this.matrix = [];
        for (let i = 1; i < this.data.length; i++) {
            if (this.data[i].staff_id === this.data[i - 1].staff_id && this.data[i].pool !== this.data[i - 1].pool && this.data[i].pool !== "NA" && this.data[i - 1].pool !== "NA") {
                const from = this.pool.indexOf(this.data[i - 1].pool);
                const to = this.pool.indexOf(this.data[i].pool);
                if (!this.matrix[from]) this.matrix[from] = new Array(this.pool.length).fill(0);
                this.matrix[from][to]++;
            }
        }
    }

    handleMouse(type, id){
        if(this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(
            () => {
                if(id){
                    this.setState({ hover: id });
                }else{
                    this.setState({ hover: null });
                }
            }
        , 500);
    }

    render() {
        const { loaded, hover} = this.state;
        return (
            loaded ?
                <div id={this.props.id}>
                    <ChordChart id={"chord-chart"} width={500} height={500} matrix={this.matrix} pool={this.pool} color={this.color} mouse={this.handleMouse} />
                    <BarChart id={"bar-chart"} width={800} height={500} matrix={this.matrix} pool={this.pool} color={this.color} hover={hover}/>

                </div>
                : <div></div>
        );
    }
}

export default Dashboard;