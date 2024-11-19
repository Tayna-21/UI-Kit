import GroupeOfButtons from './components/GroupesOfComponents/GroupeOfButtons';
import GroupeOfLinks from './components/GroupesOfComponents/GroupeOfLinks';
import GroupeOfCheckboxes from './components/GroupesOfComponents/GroupeOfCheckboxes';
import GroupeOfInputs from './components/GroupesOfComponents/GroupeOfInputs';
import GroupeOfIcons from './components/GroupesOfComponents/GroupeOfIcons';
import Modal from './components/Modal';
import CustomSelect from './components/Select';
import Textarea from './components/Textarea/index.tsx';
import CustomDatePicker from './components/DatePicker/index.tsx';
import Dropdown from './components/Dropdown/index.tsx';
import Toast from './components/Toast/index.tsx';
import ColorPicker from './components/ColorPicker/index.tsx';
import { Wrapper } from './App.styes.ts';

function App() {
    return (
        <Wrapper>
            <div className='container'>
                <div className="content">
                    <GroupeOfButtons />
                    <GroupeOfLinks />
                    <GroupeOfCheckboxes />
                    <GroupeOfInputs />
                    <GroupeOfIcons />
                    <Modal 
                        title={'Title'} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'} 
                    />
                    <CustomSelect label={'Time'} placeholder={'select time'}/>
                    <ColorPicker />
                    <CustomDatePicker />
                    <Dropdown />
                    <Toast text={'Event deleted'} time={5990} />
                    <Textarea 
                        label={'Description'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default App