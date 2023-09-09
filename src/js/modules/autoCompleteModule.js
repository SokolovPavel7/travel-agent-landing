import autoComplete from '@tarekraafat/autocomplete.js';
import countryList from '../helpers/countryList';

function autoCompleteModule() {
    const autoCompleteJS = new autoComplete({
        // API Basic Configuration Object
        selector: '#autoCompleteCountry',
        placeHolder: 'e.g Bali, Indonesia',
        data: {
            src: countryList,
            caches: true,
        },
        resultItem: {
            highlight: true,
        },
        /*код, чтобы подставлялось значение выбранной страны*/
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                },
            },
        },
        resultsList: {
            maxResults: 10,
        },
        searchEngine: 'strict',
    });
}

export default autoCompleteModule;
