import React from 'react'
import { Progress } from "antd";
import { skills } from "../../const";

const Skill = () => {
    return (
        <div style={{padding: "10px", marginBottom: '.5rem'}}>
            <h2 align={'center'}>Skill and Tool</h2>
            {skills.map(({name, level}) => (
                <div style={{marginBottom: '.3rem'}}>
                    <span style={{marginBottom: '-.3rem'}}>{name}</span>
                    <Progress percent={level} status="active" strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}/>
                </div>
            ))}
        </div>
    )
}

export default Skill