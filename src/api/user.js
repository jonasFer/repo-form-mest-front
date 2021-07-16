import request from '@/utils/request'

export function login(data) {
    return request({
        url: 'auth',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: `auth/me?token=${token}`,
        method: 'get'
    })
}

export function logout() {
    return request({
        url: '/vue-element-admin/user/logout',
        method: 'post'
    })
}
