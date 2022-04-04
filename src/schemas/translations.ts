import { ResponseBase, TranslationType, Types } from './shared';

export type TranslationsOptions = {
	types?: Types | Types[],
	year?: number,
	translation_type?: TranslationType,
	sort?: 'title' | 'count',
};

export type TranslationUnit = {
	id: number,
	title: string,
	count: number,
};

export type TranslationsResponse = ResponseBase<TranslationUnit>;
