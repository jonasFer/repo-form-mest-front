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
                name: 'redirect',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        name: 'login',
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
                path: '',
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
                meta: { title: 'Prontuários', icon: 'el-icon-s-order'}
            },
            {
                path: 'formulario',
                component: () => import('@/views/prontuario/formulario/index'),
                hidden: true,
                children: [
                    {
                        path: ':id',
                        component: () => import('@/views/prontuario/formulario/index'),
                        name: 'Editar Prontuário',
                        meta: { title: 'Prontuários', noCache: false },
                        hidden: true
                    }
                ]
            }
        ]
    },
    {
        path: '/painel-usuario',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '',
                component: () => import('@/views/painel-usuario/index'),
                name: 'painel-usuario',
                hidden: true,
                meta: { title: 'Painel de usuário' },
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
    { path: '*', redirect: '/404', hidden: true },
    {
        path: '/usuario',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/usuario/index'),
                name: 'usuario',
                meta: { title: 'Usuários', icon: 'el-icon-user', roles: ['ROLE_ADMIN']}
            },
            {
                path: 'formulario',
                component: () => import('@/views/usuario/formulario/index'),
                hidden: true,
                name: 'cad-usuario',
                meta: { title: 'Cadastrar usuário', noCache: false },
                children: [
                    {
                        path: ':id',
                        component: () => import('@/views/usuario/formulario/index'),
                        name: 'edit-usuario',
                        meta: { title: 'Editar usuário', noCache: false },
                        hidden: true
                    }
                ]
            }
        ]
    },
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
