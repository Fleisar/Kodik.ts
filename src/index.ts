import { CountriesOptions, CountriesResponse } from './schemas/countries';
import { GenresOptions, GenresResponse } from './schemas/genres';
import { ListOptions, ListResponse } from './schemas/list';
import { QualitiesOptions, QualitiesResponse } from './schemas/qualities';
import { SearchOptions, SearchResponse } from './schemas/search';
import { TranslationsOptions, TranslationsResponse } from './schemas/translations';
import { YearsOptions, YearsResponse } from './schemas/years';
import { EasyNetHandler, ResponseError } from './schemas/shared';

export default class Kodik {
	endpoint = 'https://kodikapi.com';

	token: string;

	netHandler: EasyNetHandler;

	constructor(token: string, netHandler: EasyNetHandler) {
		this.token = token;
		this.netHandler = netHandler;
	}

	countries(options: CountriesOptions): Promise<CountriesResponse | ResponseError> {
		return this.netRequest('/countries', options);
	}

	genres(options: GenresOptions): Promise<GenresResponse | ResponseError> {
		return this.netRequest('/genres', options);
	}

	list(options: ListOptions): Promise<ListResponse | ResponseError> {
		return this.netRequest('/list', options);
	}

	qualities(options: QualitiesOptions): Promise<QualitiesResponse | ResponseError> {
		return this.netRequest('/qualities', options);
	}

	search(options: SearchOptions): Promise<SearchResponse | ResponseError> {
		return this.netRequest('/search', options);
	}

	translations(options: TranslationsOptions): Promise<TranslationsResponse | ResponseError> {
		return this.netRequest('/translations/v2', options);
	}

	year(options: YearsOptions): Promise<YearsResponse | ResponseError> {
		return this.netRequest('/year', options);
	}

	async netRequest<T>(path: string, options: T ) {
		const args = new URLSearchParams({ ...options, token: this.token });
		return (await this.netHandler(`${this.endpoint}${path}?${args.toString()}`)).json();
	}
}
