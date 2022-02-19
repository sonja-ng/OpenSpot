export const fetchFavorites = data => (
    $.ajax({
        method: 'GET',
        url: 'api/favorites',
        data
    })
)

export const addFavorite = favorite => (
    $.ajax({
        method: 'POST',
        url: 'api/favorites',
        data: { favorite }
    })
)

export const removeFavorite = favId => (
    $.ajax({
        method: 'DELETE',
        url: `api/favorites/${favId}`
    })
)