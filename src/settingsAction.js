import dispatcher from './dispatcher';
import SettingsApi from './settingsAPI.js';

function getData() {
    SettingsApi.getData().then(function (ret) {

        dispatcher.dispatch({
            type: 'GET_DATA',
            data: ret
        })
    }).catch(function (err) {
        //CommonActions.handleErrorCodes(err);
    });
}

function clearData() {
    dispatcher.dispatch({
        type: 'CLEAR_DATA'
    })
}

module.exports = {
    getData,
    clearData
}