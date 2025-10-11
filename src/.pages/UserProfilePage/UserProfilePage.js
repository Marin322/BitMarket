import './UserProfilePage.css';
import Header from '../../.components/layout/Header/Header';

const UserProfilePage = () => {
    return (
        <div className="UserProfile-container">
            <Header/>
            <div className='UserInfo-container'>
                <div className='UserInfo-element'>
                    <img/>
                    <p>Александр К.</p>
                </div>
                <div className='UserInfo-settings-container'>
                    <div className='UserInfo-settings-points'>

                    </div>
                    <div className='UserInfo-settings-window'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;