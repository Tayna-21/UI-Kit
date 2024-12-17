import { Wrapper } from "./App.styles";
import GroupeOfButtons from "./components/GroupeOfComponents/GroupeOfButtons";
import GroupeOfCheckboxes from "./components/GroupeOfComponents/GroupeOfCheckboxes";
import GroupeOfIcons from "./components/GroupeOfComponents/GroupeOfIcons";
import GroupeOfInputs from "./components/GroupeOfComponents/GroupeOfInputs";
import GroupeOfLinks from "./components/GroupeOfComponents/GroupeOfLinks";
import CustomSelect from "./components/Select";
import ColorPicker from "./components/ColorPicker";
import CustomDatePicker from "./components/DatePicker";
import Dropdown from "./components/Dropdown";
import Toast from "./components/Toast";
import Textarea from "./components/Textarea";
import Modal from "./components/Modal";


function App() {
    return (
        <Wrapper data-testid={'main-page'}>
            <div className='container'>
                <div className="content">
                    <GroupeOfButtons />
                    <GroupeOfLinks />
                    <GroupeOfCheckboxes />
                    <GroupeOfInputs />
                    <GroupeOfIcons />
                    <CustomSelect label={'time'} placeholder={'select time'} />
                    <ColorPicker />
                    <CustomDatePicker />
                    <Dropdown />
                    <Toast text={'event deleted'} time={5990} />
                    <Textarea label={'description'} />
                    <Modal title={'title'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'} />
                </div>
            </div>
        </Wrapper>
    );
}

export default App;
