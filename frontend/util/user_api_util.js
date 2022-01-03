export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const updateUser = user => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
);