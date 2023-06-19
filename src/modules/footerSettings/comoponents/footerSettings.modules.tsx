import { SettingsIcon } from '../icons/settingsIcon';
import './footerSettings.modules.scss';

export const FooterSettings = () => {
  return (
    <div className="footerSettings__container">
      {/* <button>F</button> */}
      <a className="footerSettings__settingsButton">
        <SettingsIcon />
      </a>
    </div>
  );
};
