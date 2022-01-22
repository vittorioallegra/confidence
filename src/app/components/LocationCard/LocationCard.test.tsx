import { shallow } from 'enzyme';
import { mockLocation } from '../../mocks';
import { LocationCard } from './LocationCard';

describe('LocationCard', () => {
    const renderComponent = () => shallow(<LocationCard location={mockLocation} />);

    it('test rendering component', () => {
        const wrapper = renderComponent();
        expect(wrapper.find('.location-card')).toHaveLength(1);
    });
});
