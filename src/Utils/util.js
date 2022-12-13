export const checkStatus = (response) => {
    if (response.status === 200) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const pareJSON = async (response) => {
    return await response.json();
}

export const addEnum = (enumVal, value) => {
    if (value && !enumVal.find((type) => type.value === value)) {
        enumVal.push({
            value: value,
            label: value
        })
    }
}

export const req = async (url) => {
    let response = await fetch(url);
    response = checkStatus(response);
    response = await pareJSON(response);
    return response;
}