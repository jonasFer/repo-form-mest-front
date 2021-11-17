import router from './router';
import store from './store';
import getPageTitle from "@/utils/get-page-title";
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth';

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    document.title = getPageTitle(to.meta.title);

    const hasToken = getToken();
    if (hasToken) {
        if(to.path === '/login') {
            next({path: '/'});
        } else {
            // alterar depois
            const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            if (hasRoles) {
                next();
            } else {
                try {
                    // Pegar roles no banco
                    const { roles } = await store.dispatch('user/getInfo')
                    // generate accessible routes map based on roles
                    // const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles);
                    // dynamically add accessible routes
                    router.addRoutes(accessRoutes);
                    next({ ...to, replace: true })
                } catch (error) {
                    // remove token and go to login page to re-login
                    await store.dispatch('user/resetToken');
                    Message.error(error || 'Has Error');
                    next(`/login?redirect=${to.path}`);
                }
            }
        }
    } else {
        /* has no token*/

        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
    // finish progress bar
})
