import { createRouter, createWebHistory } from 'vue-router' // there is also createWebHashHistory and createMemoryHistory
import Home       from '../pages/Home.vue'
// import LoginComponent from '../pages/Login/index.vue'
import WrestlerDetail from '../pages/WrestlerDetail.vue'
import WrestlerList from '../pages/WrestlerList.vue'
import WrestlerAdd from '../pages/WrestlerAdd.vue'
import LeagueEventAddParticipant from '../pages/LeagueEventAddParticipant.vue'
import LeagueEventParticipantDetail from '../pages/LeagueEventParticipantDetail.vue'
import LeagueEventCreate from '../pages/LeagueEventCreate.vue'
import LeagueEventsList from '../pages/LeagueEventsList.vue'
import LeagueEventDetail from '../pages/LeagueEventDetail.vue'
import WeighIn from '../pages/WeighIn.vue'
import LeagueMatchList from '../pages/LeagueMatchList.vue'
import LeagueMatchDetail from '../pages/LeagueMatchDetail.vue'

// Migration Guide: https://next.router.vuejs.org/guide/migration/#new-features
// TODO # https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home},
    // { path: '/login', name: 'login', component: LoginComponent }, // Not part of MVP
    // Dashboard?
    { path: '/wrestlers', name: 'wrestler-list', component: WrestlerList },
    { path: '/wrestlers/:id', name: 'wrestler-detail', component: WrestlerDetail },
    { path: '/wrestlers/add', name: 'wrestler-add', component: WrestlerAdd },
    // { path: '/matches', name: 'match-list', component: MatchList }, // Not part of MVP
    // { path: '/matches/:id', name: 'match-detail', component: MatchDetail }, // Not part of MVP
    // { path: '/matches/add', name: 'match-add', component: MatchAdd }, // Not part of MVP
    { path: '/league-events', name: 'league-event-list', component: LeagueEventsList},
    { path: '/league-events/create', name: 'league-event-create', component: LeagueEventCreate},
    { path: '/league-events/:id', name: 'league-event-detail', component: LeagueEventDetail},
    { path: '/league-events/:id/add-participant', name: 'league-event-add-participant', component: LeagueEventAddParticipant},
    { path: '/league-events/:id/wrestler/:wrestlerId', name: 'league-event-participant-detail', component: LeagueEventParticipantDetail},
    { path: '/league-events/:id/weigh-in/:wrestlerId', name: 'weigh-in', component: WeighIn},
    { path: '/league-events/:id/matches', name: 'events', component: LeagueMatchList},
    { path: '/league-events/:id/matches/:matchId', name: 'events', component: LeagueMatchDetail},
    // { path: '/league-events/:id/brackets', name: 'events', component: EventsList}, // Not part of MVP
    // { path: '/league-events/:id/brackets/:id', name: 'events', component: EventsList}, // Not part of MVP
  ]
})

// router.beforeEach (to, from, next) ->
//   loggedIn = localStorage.getItem('user')
//   console.log "BeforeEach - loggedIn?: ", loggedIn

//   if (to.matched.some((record) -> record.meta.requiresAuth) and not loggedIn)
//     console.log("Did not make it past authentication!")
//     next('/login')
//   else
//     console.log("Made it past authentication!")
//     next()


// router.beforeEach((routeTo, routeFrom, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })

export default router
