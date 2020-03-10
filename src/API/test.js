export const getServiceOwnerDetails = (searchText) => {
    return {
        "topics": {
            "log-11-5click-111-accesslog": "T0",
            "log-11-5click-111-squid-access": "T2",
            "log-11-5click-111-applog": "T1"
        }
    }
}

export const getTopicDetails = (searchText) => {
    return {
        "retention_period": {
            "12": "RP2"
        },
        "users": {
            "hadoop-admins": "U1",
            "5click_logs": "U2",
            "la-app-dev-adm": "U0"
        },
        "serviceOwner": {
            "5click_logs": "S2"
        },
        "serviceOwnerGroup": {
            "bb_5click_logs": "SG2"
        },
        "topic": "log-11-5click-111-accesslog"
    }
}

export const getUserDetails = (searchText) => {
    return {
        "topics": {
            "log-11-auth-applog": "T0"
        },
        "serviceOwners": {
            "auth_logs": "S0"
        },
        "serviceOwnerGroup": {
            "bb_auth_logs": "SG0"
        }
    }
}