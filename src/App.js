import './App.css';
import { Layout } from 'antd';
import Navbar from "./components/nav/Navbar";
import Getting from "./components/body/getting/Getting";
import Education from "./components/body/education/Education";
import Experience from "./components/body/experience/Experience";
import Project from "./components/body/project/Project";

const {Header, Footer, Sider, Content} = Layout;

function App() {
    return (
        <div className="cv-container">
            <Layout>
                <Sider>
                    <Navbar/>
                </Sider>
                <Layout>
                    <Header>
                        <Getting/>
                    </Header>
                    <Content>
                        <div className="cv-widget">
                            <Education/>
                        </div>
                        <div className="cv-widget">
                            <Experience/>
                        </div>
                        <div className="cv-widget">
                            <Project/>
                        </div>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
