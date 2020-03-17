export const getServiceOwnerDetails = (searchText) => {
    debugger;
    return fetch(`http://10.239.65.219:5000/kafka/serviceownergroupname/${searchText}`, {
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

export const getUserDetails = async(searchText) => {
    let result = await fetch("http://10.239.65.219:5000/kafka/user/" + searchText).catch(error => console.log('error', error));
    
    if(result){
        let resultJSON = await result.json();
        return resultJSON;
    }
}