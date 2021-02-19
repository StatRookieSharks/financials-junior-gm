import exitBtn from '@images/exit-btn.svg';
import settingsBtn from '@images/settings-btn.svg';
import { logout } from '../../api-helper';
import { useHistory } from 'react-router-dom';
import { setLoginState } from '@redux/actions';
import { useDispatch } from 'react-redux';
import '@css/components/home-page/Navigation.css';

export const Navigation = ({ tutorialActive }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const doLogout = () => {
    logout()
      .then(() => {
        dispatch(setLoginState(false, ''));
        history.push('/login/student');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className='nav-container'
      style={{
        position: 'relative',
        zIndex: tutorialActive ? 0 : 1,
      }}
    >
      <div className='exit-stick-box'>
        <img
          src={exitBtn}
          alt='Exit'
          onClick={doLogout}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className='home-title-box'>
        <h1 className='page-title'>HOME</h1>
      </div>

      {
        <div style={{ opacity: 0 }} className='settings-link-box'>
          <img src={settingsBtn} alt='Settings' />
        </div>
      }
    </div>
  );
};
