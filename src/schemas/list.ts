import {
	Item, KinopoiskData, MediaFilters, MyDramaListData, Order, ResponseBase, ResponsePage, ShikimoriData, Sort,
	TranslationType, Types,
} from './shared';

export type ListOptions = {
	limit?: number,
	sort?: Sort,
	order?: Order,
	types?: Types | Types[],
	year?: number | number[],
	translation_id?: number | number[],
	translation_type?: TranslationType,
	camrip?: boolean,
	with_seasons?: boolean,
	with_episodes?: boolean,
	with_episodes_data?: boolean,
	with_page_links?: boolean,
	not_blocked_in?: string | string[],
	not_blocked_for_me?: boolean,
} & MediaFilters;

export type ListUnit<T> = Item<T>;

export type ListResponse<T = Partial<KinopoiskData & ShikimoriData & MyDramaListData>> = ResponseBase<ListUnit<T>, ResponsePage>;
