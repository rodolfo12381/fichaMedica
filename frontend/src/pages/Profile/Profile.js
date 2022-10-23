import './Profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='section-profile row'>
                <div className='profile-image col-4'>

                </div>
                <div className='profile-info col-6 ms-5 mt-1'>
                    <p>Nome: Rodolfo</p>
                    <p>Sobrenome: Rocha</p>
                    <p>Email: rodolforrodrigues14@gmail.com</p>
                    <p>Data de Nascimento: 14/11/2001</p>
                </div>
            </div>
            <hr />
            <Tabs>
                <TabList>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <Tab className="nav-link">Consultas</Tab>
                    <Tab className="nav-link">Fichas Médicas</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Profile