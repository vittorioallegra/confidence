import { shallow } from 'enzyme';
import { InfiniteList } from './InfiniteList';

describe('InfiniteList', () => {
    const props = {
        hasMore: false,
        items: [],
        loadNext: jest.fn(),
    };
    const renderComponent = () => shallow(<InfiniteList {...props} />);

    it('test rendering component', () => {
        const wrapper = renderComponent();
        expect(wrapper.find('.infinite-list')).toHaveLength(1);
    });
});
