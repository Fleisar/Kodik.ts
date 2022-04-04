import { MediaFilters, ResponseBase, TranslationType, Types } from './shared';

export type YearsOptions = {
	types?: Types | Types[],
	translation_id?: number,
	translation_type?: TranslationType,
	sort?: 'year' | 'count',
} & MediaFilters;

export type YearUnit = {
	year: number,
	count: number,
};

export type YearsResponse = ResponseBase<YearUnit>;

