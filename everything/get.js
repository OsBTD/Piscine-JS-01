function get(src, path) {
    if (path === undefined || path === "") {
        return undefined;
    }
    let parts = path.split('.');
    return parts.reduce((obj, key) => {
        if (obj && obj[key] !== undefined) {
            return obj[key];
        } else {
            return undefined;
        }
    }, src);
} 
