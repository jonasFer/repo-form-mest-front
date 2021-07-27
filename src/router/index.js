import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * uma página base que não possui requisitos de permissão
 * todas as funções podem ser acessadas
 */
export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'el-icon-s-home', noCache: true }
            }
        ]
    },
    {
        path: '/prontuario',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/prontuario/index'),
                name: 'Prontuários',
                meta: { title: 'Prontuários', icon: 'el-icon-s-home', noCache: true }
            },
            {
                path: 'formulario',
                component: () => import('@/views/prontuario/formulario/index'),
                hidden: true,
                children: [
                    {
                        path: ':id',
                        component: () => import('@/views/prontuario/formulario/index'),
                        name: 'Formulário',
                        meta: { title: 'Prontuários', noCache: true },
                        hidden: true
                    }
                ]
            }
        ]
    },
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        hidden: true,
        children: [
            {
                path: 'index',
                component: () => import('@/views/profile/index'),
                name: 'Profile',
                meta: { title: 'Profile', icon: 'user', noCache: true }
            }
        ]
    }
]

/**
 * asyncRoutes
 * as rotas que precisam ser carregadas dinamicamente com base nas funções do usuário
 */
export const asyncRoutes = [
    /** when your routing map is too long, you can split it into small modules **/
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
    mode: 'history'
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
