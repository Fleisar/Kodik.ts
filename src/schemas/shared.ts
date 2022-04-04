export interface Auth {
	token: string;
}

export type TranslationType =
	'voice' | 'subtitles';
export type Types =
	`${'foreign' | 'russian'}-movie` | `${'soviet' | 'foreign' | 'russian'}-cartoon` |
	`${'cartoon' | 'documentary' | 'russian' | 'foreign' | 'anime'}-serial`
	| 'anime' | 'multi-part-film';
export type AnimeKind =
	'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48';
export type Status =
	'anons' | 'ongoing' | 'released';
export type GenresType =
	'kinopoisk' | 'shikimori' | 'mydramalist' | 'all';
export type Sort =
	'year' | `${'created' | 'updated'}_at` | `${'kinopoisk' | 'shikimori' | 'imdb'}_rating`;

export type ISO8601 = `${number}-${number}-${number}T${number}:${number}:${number}Z`;
export type DateShort = `${number}-${number}-${number}`;
export type MPAA = 'G' | 'PG' | 'PG-13' | 'R' | 'R+' | 'Rx';
export type NumberRange = number | `${number}-${number}`;
export type Order = 'asc' | 'desc';
export type NumerableSet<T = any> = Record<`${number}`, T>;

export type MediaFilters = {
	countries?: string | string[],
	genres?: string | string[],
	anime_genres?: string | string[],
	drama_genres?: string | string[],
	all_genres?: string | string[],
	duration?: NumberRange,
	kinopoisk_rating?: NumberRange,
	imdb_rating?: NumberRange,
	shikimori_rating?: NumberRange,
	mydramalist_rating?: NumberRange,
	actors?: string | string[],
	directors?: string | string[],
	producers?: string | string[],
	writers?: string | string[],
	composers?: string | string[],
	editors?: string | string[],
	designers?: string | string[],
	operators?: string | string[],
	mpaa_rating?: MPAA | MPAA[],
	minimal_age?: NumberRange,
	anime_kind?: AnimeKind | AnimeKind[],
	anime_status?: Status | Status[],
	drama_status?: Status | Status[],
	all_status?: Status | Status[],
	anime_studios?: string | string[],
	anime_licensed_by?: string | string[],
};

export type MaterialData<T = Partial<KinopoiskData & ShikimoriData & MyDramaListData>> = {
	title_en: string,
	poster_url: string,
	duration: number,
	all_genres: string[],
} & T;

export type KinopoiskData = {
	title: string,
	year: number,
	tagline: string,
	description: string,
	countries: string[],
	genres: string[],
	kinopoisk_rating: number,
	kinopoisk_votes: number,
	imdb_rating: number,
	imdb_votes: number,
	premiere_ru: DateShort,
	premiere_world: DateShort,
	rating_mpaa: MPAA,
	minimal_age: number,
	actors: string[],
	directors: string[],
	producers: string[],
	writers: string[],
	composers: string[],
	editors: string[],
	designers: string[],
	operators: string[],
};

export type ShikimoriData = {
	title: string,
	anime_title: string,
	other_titles: string[]
	other_titles_en: string[],
	other_titles_jp: string[],
	anime_license_name: string,
	anime_licensed_by: string[],
	anime_kind: AnimeKind,
	all_status: Status,
	anime_status: Status,
	description: string,
	anime_description: string,
	screenshots: string[],
	anime_genres: string[],
	anime_studios: string[],
	shikimori_rating: number,
	shikimori_votes: number,
	aired_at: DateShort,
	released_at: DateShort,
	next_episode_at: ISO8601,
	rating_mpaa: MPAA,
	episodes_total: number,
	episodes_aired: number,
};

export type MyDramaListData = {
	other_titles: string[],
	all_status: Status,
	drama_status: Status,
	countries: string[],
	drama_genres: string[],
	mydramalist_rating: number,
	mydramalist_votes: number,
	aired_at: DateShort,
	released_at: DateShort,
	next_episode_at: ISO8601,
	minimal_age: number,
	episodes_total: number,
	episodes_aired: number,
	actors: string[],
	directors: string[],
	producers: string[],
	writers: string[],
	composers: string[],
	editors: string[],
	designers: string[],
	operators: string[],
};

export type Item<T> = {
	id: string,
	title: string,
	title_orig: string,
	other_title?: string,
	link: string,
	year: number,
	kinopoisk_id?: string,
	imdb_id?: string,
	mdl_id?: string,
	worldart_link?: string,
	shikimori_id?: string,
	type: Types,
	quality: string,
	camrip?: boolean,
	translation: {
		id: number,
		title: string,
		type: TranslationType,
	},
	created_at: ISO8601,
	updated_at: ISO8601,
	blocked_countries: string[],
	seasons: NumerableSet<{
		link: string,
		episodes: NumerableSet<string>,
	}>,
	last_season: number,
	last_episode: number,
	episodes_count: number,
	blocked_seasons: NumerableSet<'all' | `${number}`[]>,
	screenshots: string[],
	material_data: MaterialData<T>,
};

export type ResponseBase<T = any, E = {}> = {
	time: `${number}ms`,
	total: number,
	results: T[],
} & E;

export type ResponseError = {
	error: string,
};

export type EasyNetHandler = (url: string) => Promise<Response>;

export type ResponsePage = {
	prev_page: string | null,
	next_page: string | null,
};
