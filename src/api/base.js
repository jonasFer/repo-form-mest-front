import request from '@/utils/request'

export function all(path, query) {
    return request({
        url: path,
        method: 'get',
        params: query
    })
}

export function byId(path) {
    return request({
        url: path,
        method: 'get',
    })
}

export function create(path, body) {
    return request({
        url: path,
        method: 'post',
        data: body
    })
}

export function update(path, body) {
    return request({
        url: path,
        method: 'put',
        data: body
    })
}

export function remove(path) {
    return request({
        url: path,
        method: 'delete',
    })
}
