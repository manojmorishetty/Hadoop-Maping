export const getServiceOwnerDetails = (searchText) => {
    debugger;
    return fetch(`http://10.239.65.219:5000/kafka/serviceownergroup/${searchText}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });
}

export const getTopicDetails = (searchText) => {
    debugger;
    return fetch(`http://10.239.65.219:5000/kafka/topic/${searchText}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });
}

export const getUserDetails = (searchText) => {
    debugger;
    return fetch(`http://10.239.65.219:5000/kafka/user/${searchText}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    })
        .then(response => response.json())
        .catch(err => {
            return err;
        });
}