import { baseUrlJson } from '../exports/commonExports/jsonExports'
export class BaseService {
    getBaseUrl(): string{
        const environment = process.env.ENV;
        
        return baseUrlJson[environment].baseUrl;
    }
}