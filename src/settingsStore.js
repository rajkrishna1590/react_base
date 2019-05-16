import EventEmitter from 'events';
import dispatcher from './dispatcher';

class SettingsStore extends EventEmitter {
    constructor() {
        super();
        this.settingsData = {
            data: []
        }
    }

    getData(data) {
        this.settingsData.data = data;
        this.emit('getData');
    }

    clearData() {
        this.settingsData.data = [];
        this.emit('getData');
    }

    handleActions(action) {
        switch (action.type) {
            case 'GET_DATA':
                this.getData(action.data);
                break;
            case 'CLEAR_DATA':
                this.clearData();
                break;
        }
    }
}

const settingsStore = new SettingsStore();
dispatcher.register(settingsStore.handleActions.bind(settingsStore));
export default settingsStore;
