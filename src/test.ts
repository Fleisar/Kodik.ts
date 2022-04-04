import Kodik from './index';
import { ResponseError } from './schemas/shared.js';
import { ListResponse } from './schemas/list.js';

const fetch = require('node-fetch');
const kodik = new Kodik('07e3119af111900bf95bd7c9554430a4', fetch);

kodik.list({ limit: 10 }).then((response) => {
	if ((response as ResponseError).error) {
		throw new Error((response as ResponseError).error);
	}
	const results = (response as ListResponse).results;
	console.log(results);
});
