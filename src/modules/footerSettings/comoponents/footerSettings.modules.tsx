import { SettingsIcon } from '../icons/settingsIcon';
import './footerSettings.modules.scss';

export const FooterSettings = () => {
  return (
    <div className="footerSettings__container">
      <a className="footerSettings__tempView">F</a>
      <a className="footerSettings__settingsButton">
        <SettingsIcon />
      </a>
    </div>
  );
};
