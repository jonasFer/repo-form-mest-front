import Layout from '@/layout'

const cadastroRouter = {
    path: '/pet',
    component: Layout,
    name: 'Cadastro',
    meta: {
        title: 'Cadastro',
        icon: 'el-icon-s-order'
    },
    children: [
        {
            path: 'especie',
            name: 'Especie',
            component: () => import('@/views/pet/especie'),
            meta: { title: 'Espécies', icon: 'el-icon-more-outline' }
        },
        {
            path: 'raca',
            name: 'Raca',
            component: () => import('@/views/pet/raca'),
            meta: { title: 'Raças', icon: 'el-icon-more-outline' }
        },
        {
            path: 'pelagem',
            name: 'Pelagem',
            component: () => import('@/views/pet/pelagem'),
            meta: { title: 'Pelagem', icon: 'el-icon-more-outline' }
        }
    ]
}

export default cadastroRouter;
