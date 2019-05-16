
import React from 'react';
import * as SettingActions from './settingsAction.js';
import SettingsStore from './settingsStore.js';

class SettingsBackupPath extends React.Component {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.clearData = this.clearData.bind(this);
        this.get = this.get.bind(this);
        this.clear = this.clear.bind(this);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        SettingsStore.on('getData', this.getData);
        SettingsStore.on('clearData', this.clearData);
    }

    componentWillUnmount() {
        SettingsStore.removeListener('getData', this.getData);
        SettingsStore.removeListener('clearData', this.clearData);
    }
    componentDidMount() {

    }

    getData() {
        this.setState({
            data: SettingsStore.data
        });
    }
    clearData() {
        this.setState({
            data: SettingsStore.data
        });
    }

    clear() {
        SettingActions.clearData();
    }
    get() {
        SettingActions.getData();

    }


    render() {
        return (
            <section>
                <div>
                    <button onClick={this.get.bind(this)}>get</button>
                    <button onClick={this.clear.bind(this)}>clear</button>
                </div>
            </section>
        );
    }
}

export default SettingsBackupPath; 
