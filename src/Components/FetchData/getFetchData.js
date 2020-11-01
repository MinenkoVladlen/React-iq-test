export default class FetchData {

    getResource = async url => {
        console.log(url)
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getMainPage = async () => await this.getResource('../../dataMainPage.js');
}