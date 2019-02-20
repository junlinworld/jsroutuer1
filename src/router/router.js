import VueRouter from "vue-router";
import routes from '@/router/routes'
import vue from 'vue'


const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.

    // var userId=to.params.userId;
    // if(userId!=888&&to.path==="/test"){
    //     next(false);
    //     return;
    // }
    var userId=to.params.userId;
    if(userId!==999){
        next(false);
        return;
    }


    next();
})



vue.use(VueRouter)

export default router

// import vuerouter from 'vue-router'
// import routes from '@/router/routes'
// import Vue from 'vue'



// const router = new vuerouter({
//     routes
// });

// Vue.use(vuerouter);

// export default router