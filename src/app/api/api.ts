import { ILocationList, ILocations } from '../interfaces';

export class RestApi {
    private endpoint = '/v2/confidence/locations';
    private limit = 3;

    async loadPage(page: number): Promise<ILocationList> {
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Username: 'amitphatak$r5labs.com',
            },
            body: JSON.stringify({
                start: page * this.limit,
                limit: this.limit,
            }),
        });
        const result: ILocations = await response.json();

        return {
            hasMore: result.locations.length === this.limit,
            page,
            items: result.locations,
        };
    }
}
