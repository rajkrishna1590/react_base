import $ from 'jquery';

function getData() {
    var headerdata = {
        'Content-Type': 'application/json',
    }
    // userData = {
    //     'username': Common.getCookie('qcal_username'),
    //     'qtoken': Common.getCookie('qcal_token'),
    //     'sid': Common.getCookie('qcal_sid'),
    // };

    // return fetch(url, {
    //     credentials: 'same-origin', // 'include', default: 'omit'
    //     method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    //     body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    //     headers: new Headers({
    //         'Content-Type': 'application/json'
    //     }),
    // });
    //   .then(response => response.json())

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/get',
            //data: JSON.stringify(userData),
            // url: ApiConfig.getGlobalData('url') + ':' + ApiConfig.getGlobalData('port') + '/settings',
            headers: headerdata,

            success: function (ret, textStatus, jqXHR) {
                resolve(ret);
            },
            error: function (err, textStatus, jqXHR) {
                //reject(err);
                resolve([1, 2, 3]);
            }
        });
    });
}

module.exports = {
    getData
}