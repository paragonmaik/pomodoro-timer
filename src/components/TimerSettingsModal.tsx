import { TimerSettingsContainer,
  FlexRowDiv,
  TimerInputContainer,
  LabelContainer,
  GenericContainer,
  ModalContainer,
} from '../styles/Container.Styles';
import { Checkbox, SettingInput, CheckBoxLabel, CheckBoxWrapper, TaskButton } from '../styles/Elements.Styles';
import { TimerContext } from '../context/TimerContext';
import { useContext } from 'react';

function TimerSettingsModal() {
  const { setIsOpen } = useContext(TimerContext);
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
            <SettingInput min="1" type="number" name="pomodoro" id="pomodoro" />
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="shortBreak">
              Short Break
            </label>
            <SettingInput min="1" type="number" name="shortBreak" id="shortBreak" />
          </LabelContainer>
          <LabelContainer>
            <label htmlFor="longBreak">
              Long Break
            </label>
            <SettingInput min="1" type="number" name="longBreak" id="longBreak" />
          </LabelContainer>
        </TimerInputContainer>
        <GenericContainer>
          <span>
            Auto Start
          </span>
          <CheckBoxWrapper>
            <Checkbox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </GenericContainer>
      </TimerSettingsContainer>
    </ModalContainer>
  )
}

export default TimerSettingsModal;
