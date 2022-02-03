import { ILocations, IRestApi } from '../interfaces';

export class RestApi implements IRestApi {
    private endpoint = '/v2/confidence/locations';

    async loadPage(page: number, limit: number): Promise<ILocations> {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Username: 'amitphatak$r5labs.com',
            },
            body: JSON.stringify({
                start: page * limit,
                limit,
            }),
        });

        return response.json();
    }
}
