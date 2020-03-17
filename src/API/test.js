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
        "serviceOwnerGroup": {
            "bb_5click_logs": "SG2"
        },
        "owner_DL": {
            "PUSHWEB - BB Service Engineering <pushwebbbserviceengineering@blackberry.com>": "owner_DL"
        },
        "service": {
            "5click": "service"
        },
        "serviceOwner": {
            "5click_logs": "S2"
        },
        "retention_period": {
            "12": "RP2"
        },
        "topic": "log-11-5click-111-accesslog",
        "users": {
            "la-app-dev-adm": "U0",
            "hadoop-admins": "U1",
            "5click_logs": "U2"
        }
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