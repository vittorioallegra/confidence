import { shallow } from 'enzyme';
import { mockLocation } from '../../../mocks';
import { MainContent } from './MainContent';

describe('MainContent', () => {
    const renderComponent = () => shallow(<MainContent location={mockLocation} />);

    it('test rendering component', () => {
        const wrapper = renderComponent();
        expect(wrapper.find('.location-card__main')).toHaveLength(1);
    });
});
