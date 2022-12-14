import { useContext, ChangeEvent } from 'react';
import { TimerContext } from '../context/TimerContext';
import { Checkbox, SettingInput, CheckBoxLabel, CheckBoxWrapper, TaskButton } from '../styles/Elements.Styles';
import { defaultSettings } from '../utils/defaultSettings';
import { selectModeOptions, TimerSettings } from '../typescript/types';
import { TimerSettingsContainer,
  FlexRowDiv,
  TimerInputContainer,
  LabelContainer,
  GenericContainer,
  ModalContainer,
} from '../styles/Container.Styles';

function TimerSettingsModal() {
  const { setIsOpen, shouldAutoStart, setShouldAutoStart, setTimerData, darkMode, setDarkMode } = useContext(TimerContext);
  const { pomodoro, shortBreak, longBreak } = defaultSettings;

  const handleTimerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const mode = event.target.id;
    const total = Math.abs(+event.currentTarget.value);
    const updatedTimer = defaultSettings;
    updatedTimer.mode = mode;
    updatedTimer[mode as keyof selectModeOptions] = total > 60 ? 60 : total;
    updatedTimer.timeRemaining.total = Number(updatedTimer[mode as keyof TimerSettings]) * 60;
    updatedTimer.timeRemaining.minutes = Number(updatedTimer[mode as keyof TimerSettings]);
    setTimerData({...updatedTimer});
  }
  
  const handleAutoStart = (event: ChangeEvent<HTMLInputElement>) => {
    setShouldAutoStart(event.target.checked);
  }

  const handleDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  }

  return (
    <ModalContainer>
      <TimerSettingsContainer
        darkMode={darkMode}
      >
        <FlexRowDiv>
          <h4>Timer Settings</h4>
          <TaskButton
            darkMode={darkMode}
            type="button"
            onClick={ () => setIsOpen(false) }
          >
            ×
          </TaskButton>
        </FlexRowDiv>
        <TimerInputContainer
          darkMode={darkMode}
        >
          <LabelContainer>
            <label htmlFor="pomodoro">
              Pomochoro
            </label>
            <SettingInput
              darkMode={darkMode}
              defaultValue={pomodoro}
              min="1"
              max="60"
              type="number"
              name="pomodoro"
              id="pomodoro"
              onChange={ (event) => handleTimerChange(event) }
            />
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="shortBreak">
              Short Break
            </label>
            <SettingInput
              darkMode={darkMode}
              defaultValue={shortBreak}
              min="1"
              max="60"
              type="number"
              name="shortBreak"
              id="shortBreak"
              onChange={ (event) => handleTimerChange(event) }
            />
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="longBreak">
              Long Break
            </label>
            <SettingInput
              darkMode={darkMode}
              defaultValue={longBreak}
              min="1"
              max="60"
              type="number"
              name="longBreak"
              id="longBreak"
              onChange={ (event) => handleTimerChange(event) }
            />
          </LabelContainer>
        </TimerInputContainer>
        <GenericContainer>
          <span>
            Auto Start
          </span>
          <CheckBoxWrapper>
            <Checkbox
              darkMode={darkMode}
              checked={shouldAutoStart}
              onChange={ (event) => handleAutoStart(event) }
              id="checkbox"
              type="checkbox"
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </GenericContainer>
        <GenericContainer>
          <span>
            Dark Mode
          </span>
          <CheckBoxWrapper>
            <Checkbox
              darkMode={darkMode}
              checked={darkMode}
              onChange={ (event) => handleDarkMode(event) }
              id="dmCheckbox"
              type="checkbox"
            />
            <CheckBoxLabel htmlFor='dmCheckbox' />
          </CheckBoxWrapper>
        </GenericContainer>
      </TimerSettingsContainer>
    </ModalContainer>
  )
}

export default TimerSettingsModal;
