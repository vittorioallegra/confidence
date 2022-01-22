import { shallow } from 'enzyme';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    const renderComponent = () => shallow(<Spinner />);

    it('test rendering component', () => {
        const wrapper = renderComponent();
        expect(wrapper.find('.spinner')).toHaveLength(1);
    });
});
