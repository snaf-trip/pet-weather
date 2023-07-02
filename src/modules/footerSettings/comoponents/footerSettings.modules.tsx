import { observer } from 'mobx-react-lite';
// import { SettingsIcon } from '../icons/settingsIcon';
import './footerSettings.modules.scss';
import TempUnitStore from '../../../stores/tempUnitStore.stores';

export const FooterSettings = observer(() => {
  const { tempUnit, changeTempUnit } = TempUnitStore;
  return (
    <div className="footerSettings__container">
      <a className="footerSettings__tempView" onClick={() => changeTempUnit()}>
        {tempUnit}
      </a>
      {/* <a className="footerSettings__settingsButton">
        <SettingsIcon />
      </a> */}
    </div>
  );
});
