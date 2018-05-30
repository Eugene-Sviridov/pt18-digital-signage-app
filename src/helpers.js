export const getRoutePath = (path) => `/${path}`;

export const getItemById = (url, items) => {
    let id = url.split('/')[2];
    return items.filter((item) => item.id == id)[0];
}
