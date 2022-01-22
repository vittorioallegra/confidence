import { mockLocations } from '../mocks';
import { RestApi } from './api';

describe('RestApi', () => {
    const restApi = new RestApi();

    it('test resolve', async () => {
        const restApiMock = jest
            .spyOn(global, 'fetch')
            .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(mockLocations) } as Response));

        const result = await restApi.loadPage(0, 3);
        expect(restApiMock).toHaveBeenCalled();
        expect(result).toEqual(mockLocations);
    });

    it('test reject', async () => {
        const error = new Error('reason');
        const restApiMock = jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject(error));

        try {
            await restApi.loadPage(0, 3);
        } catch (e) {
            expect(restApiMock).toHaveBeenCalled();
            expect(e).toBe(error);
        }
    });
});
