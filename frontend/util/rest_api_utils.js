export const fetchRests = data => (
    $.ajax({
        method: 'GET',
        url: 'api/rests',
        data
    })
);

export const fetchRestsTest = data => (
    $.ajax({
        method: 'GET',
        url: 'api/rests',
        data
    })
);

export const fetchRest = restId => (
    $.ajax({
        method: 'GET',
        url: `api/rests/${restId}`
    })
);

export const createRest = rest => (
    $.ajax({
        method: 'POST',
        url:`api/users/${rest.owner_id}/rests`
    })
);