
import { baseUrlJson } from '../../exports/commonExports/jsonExports';

export async function setup() {
    console.log("SETUP STARTED");
    
    const environment = process.env.ENV;

    const baseUrl = baseUrlJson[environment].baseUrl;
    await browser.url(baseUrl);
}
