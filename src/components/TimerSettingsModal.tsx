import { useContext, ChangeEvent } from 'react';
import { TimerContext } from '../context/TimerContext';
import { Checkbox, SettingInput, CheckBoxLabel, CheckBoxWrapper, TaskButton } from '../styles/Elements.Styles';
import { defaultSettings } from '../utils/defaultSettings';
import { selectModeOptions } from '../typescript/types';
import { TimerSettingsContainer,
  FlexRowDiv,
  TimerInputContainer,
  LabelContainer,
  GenericContainer,
  ModalContainer,
} from '../styles/Container.Styles';

function TimerSettingsModal() {
  const { setIsOpen, shouldAutoStart, setShouldAutoStart } = useContext(TimerContext);
  const { pomodoro, shortBreak, longBreak } = defaultSettings;

  const handleTimerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const mode = event.target.id;
    defaultSettings[mode as keyof selectModeOptions] = +event.currentTarget.value
    console.log(typeof event.currentTarget.value, defaultSettings);
  }

  const handleAutoStart = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setShouldAutoStart(!shouldAutoStart);
  }

  return (
    <ModalContainer>
      <TimerSettingsContainer>
        <FlexRowDiv>
          <h4>Timer Settings</h4>
          <TaskButton
            type="button"
            onClick={ () => setIsOpen(false) }
          >
            ×
          </TaskButton>
        </FlexRowDiv>
        <TimerInputContainer>
          <LabelContainer>
            <label htmlFor="pomodoro">
              Pomochoro
            </label>
            <SettingInput
              defaultValue={pomodoro}
              min="1"
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
              defaultValue={shortBreak}
              min="1"
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
              defaultValue={longBreak}
              min="1"
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
              checked={shouldAutoStart}
              onChange={ (event) => handleAutoStart(event) }
              id="checkbox"
              type="checkbox"
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </GenericContainer>
      </TimerSettingsContainer>
    </ModalContainer>
  )
}

export default TimerSettingsModal;
