


const routes = [
    {
        path:'/test',
        name:'test',
        component:()=>import('@/components/test.vue'),
    },
    {
        path:'/helloworld',
        name:'helloworld',
        component:()=>import('@/components/HelloWorld.vue'),
        
    }

]

export default routes
