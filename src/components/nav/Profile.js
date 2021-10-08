import React from 'react'
import './Navbar.css'
import { List } from 'antd';
import {
    FieldTimeOutlined,
    UserOutlined,
    HomeOutlined,
    PhoneOutlined,
    FacebookOutlined, LinkedinOutlined
} from '@ant-design/icons';
import { fullname } from "../../const";
import Avatar from "antd/es/avatar/avatar";

const data = [
    {
        title: 'Name',
        icon: <UserOutlined/>,
        description: 'Ngo Quang Trieu'
    },
    {
        title: 'Date of birth',
        icon: <FieldTimeOutlined/>,
        description: '17/06/1999'
    },
    {
        title: 'Address',
        icon: <HomeOutlined/>,
        description: 'Thai Binh'
    },
    {
        title: 'Phone Number',
        icon: <PhoneOutlined/>,
        description: '+84373073645'
    },
    {
        title: 'Facebook',
        icon: <FacebookOutlined/>,
        description: 'facebook.com/million17'
    },
    {
        title: 'Linkedin',
        icon: <LinkedinOutlined/>,
        description: 'linkedin.com/in/million99'
    },
];

const Profile = () => {
    return (
        <div className='cv-profile'>
            <div className='logo'>
                <Avatar size={150} icon={<UserOutlined/>}/>
            </div>
            <div className='myself' style={{padding: '3px'}}>
                <h2 align={'center'}>{fullname}</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.icon}
                                title={item.description}
                                // description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Profile