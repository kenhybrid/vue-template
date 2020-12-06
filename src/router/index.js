import Vue from "vue";
import VueRouter from "vue-router";
const home = () =>
  import(/* webpackChunkName: "home" */ "../components/home.vue");
const admin = () =>
  import(/* webpackChunkName: "admin" */ "../components/admin.vue");
const projects = () =>
  import(/* webpackChunkName: "projects" */ "../components/projects.vue");
const project = () =>
  import(/* webpackChunkName: "project" */ "../components/project.vue");
const contact = () =>
  import(/* webpackChunkName: "feedback" */ "../components/contact.vue");
const notfound = () =>
  import(/* webpackChunkName: "feedback" */ "../components/notfound.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home
  },

  {
    path: "/arukenya-projects",
    name: "Projects",
    component: projects
  },
  {
    path: "/project/:id",
    props: true,
    name: "Project",
    component: project
  },
  {
    path: "/arukenya-contact",
    name: "Contact",
    component: contact
  },
  {
    path: "/arukenya-emails",
    name: "Admin",
    component: admin
  },
  {
    path: "/404",
    name: "notfound",
    component: notfound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404");
  } else {
    next();
  }
});
export default router;
