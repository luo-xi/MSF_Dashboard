import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Description from '../Description/Description';
import './container.css';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="container">
                <Description>
                    <h1>MSF Staff Movement Analysis</h1>
                    <p>
                        Mouse over on chord chart arcs to view the changes in bar chart.
                    </p>
                </Description>
                <Dashboard id="dashboard" />
                <Description>
                    <h2>Background</h2>
                    <p>
                        Médecins Sans Frontières (MSF) delivers lifesaving medical care in over 70 countries.
                        Approximately 10% of MSF’s global workforce is made up of International Staff that perform temporary assignments in MSF’s country projects.
                        Staff build experience at MSF through movement and by working in various pools across the organization.
                        Pools represent international staff that are grouped together by a common profession, skillset or other similarity.
                        This is how MSF divides its large workforce so that it is more manageable. 
                        As MSF is a medical organization, the Medical Coordinator (‘MedCo’) is one of the most critical coordinator roles in the field.
                        This vis analyses how international staff move from one pool to another, so as to help MSF to allocate assignments, develop new hires and grow staff to become MedCo.
                    </p>
                    <h2>Dataset</h2>
                    <p>
                        Each row of the dataset is an MSF assignment completed by an international staff. 
                        Each assignment item has 10 attributes: staff_id, assignment_number, departure_date, return_date, assignment_country, pool, job_title, age_bracket, sex, first_departure.
                        <br></br>
                        pool is a categorical attribute that can hold the following values: 
                    </p>
                    <ul>
                        <li><b>MEDCO</b>: Medical Coordinator</li>
                        <li><b>DEPUTY MEDCO</b>: Deputy Medical Coordinator, assists the MedCo</li>
                        <li><b>GAS</b>: Gynecology, Anesthesiology, and Surgery medical providers</li>
                        <li><b>MD</b>: Medical doctors other than GAS pool members</li>
                        <li><b>NURSE</b>: Nurse</li>
                        <li><b>MIDWIFE</b>: Midwife or childbirth assistant</li>
                        <li><b>MTL</b>: Medical Team Leader, coordinates medical care at the project level, reports to the MedCo at the country level.</li>
                        <li><b>OTHER</b>: Medical professions not included in any other pool</li>
                        <li><b>PC</b>: Project Coordinator, responsible for all non-medical operations at the project level</li>
                        <li><b>NON MEDICAL</b>: staff in other roles that don’t require medical knowledge</li>
                    </ul>
                    <h2>Queries</h2>
                    <ol>
                        <li>How many MSF assignments have be completed by each of the various pools?</li>
                        <li>Which are the major pools that most staff have moved to from a particular pool?</li>
                        <li>Select one particular pool in chord chart, what is the number of staff that moved away to each other pools?</li>
                        <li>Observe one particular pool in bar chart and select other pools in chord chart, what is the number of staff that moved from each other pools to this particular pool?</li>
                        <li>What career trajectory MSF staff can follow that gives a high probability to become a MedCo?</li>
                    </ol>
                </Description>
            </div>
        )
    }
}

export default Container;