import { ResponseBase } from './shared';

export type QualitiesOptions = {};

export type QualityUnit = {
	title: string,
};

export type QualitiesResponse = ResponseBase<QualityUnit>;
