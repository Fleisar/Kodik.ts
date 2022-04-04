import {
	Item, KinopoiskData, MediaFilters, MyDramaListData, ResponseBase, ShikimoriData, TranslationType, Types,
} from './shared';

export type SearchOptions = {
	title?: string,
	title_orig?: string,
	strict?: boolean,
	full_match?: boolean,
	id?: string,
	player_link?: string,
	kinopoisk_id?: number | number[],
	imdb_id?: string | string[],
	mdl_id?: string | string[],
	worldart_animation_id?: number | number[],
	worldart_cinema_id?: number | number[],
	worldart_link?: string | string[],
	shikimori_id?: number | number[],
	limit?: number,
	types?: Types,
	year?: number | number[],
	translation_id?: number | number[],
	translation_type?: TranslationType,
	prioritize_translations?: number | TranslationType | (number | TranslationType)[],
	unprioritize_translations?: number | TranslationType | (number | TranslationType)[],
	prioritize_translation_type?: TranslationType,
	block_translations?: number | number[],
	camrip?: boolean,
	with_seasons?: boolean,
	season?: number,
	with_episodes?: boolean,
	with_episodes_data?: boolean,
	episode?: number,
	with_page_links?: boolean,
	not_blocked_in?: string | string[],
	not_blocked_for_me?: boolean,
} & MediaFilters;

export type SearchUnit<T> = Item<T>;

export type SearchResponse<T = Partial<KinopoiskData & ShikimoriData & MyDramaListData>> = ResponseBase<SearchUnit<T>>;


