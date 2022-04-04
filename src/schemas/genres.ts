import { GenresType, MediaFilters, ResponseBase, TranslationType, Types } from './shared';

export type GenresOptions = {
	genres_type?: GenresType,
	types?: Types | Types[],
	year?: number,
	translation_id?: number,
	translation_type?: TranslationType,
	sort?: 'title' | 'count',
} & MediaFilters;

export type GenreUnit = {
	title: string,
	count: number,
};

export type GenresResponse = ResponseBase<GenreUnit>;
