export const fetchRests = () => (
    $.ajax({
        method: 'GET',
        url: 'api/rests'
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