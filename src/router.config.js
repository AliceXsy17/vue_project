import Movie_v2 from './components/Movie_v2.vue'
import Book_v2 from './components/Book_v2.vue'
import Music_v2 from './components/music_v2.vue'
import Movie_main from './components/Movie_main.vue'

import Aabb from './components/aabb.vue'


export default {
    routes:[
        {
            path:'/movie_v2', 
            name:'movie_v2',
            component:Movie_v2,
            children:[
                {path:'', redirect:'/movie_v2/in_theaters'},
                {path:'in_theaters', name:'in_theaters', component:Movie_main},
                {path:'coming_soon', name:'coming_soon', component:Movie_main},
                {path:'top250', name:'top250', component:Movie_main},
                {path:'us_box', name:'us_box', component:Movie_main}
            ]
        },
        {
            path:'/music_v2',
            name:'music_v2',
            component:Music_v2,
            children:[
                {path:'aaa', name:'aaa', component:Music_v2},
                {path:'bbb', name:'bbb', component:Music_v2},
                {path:'ccc', name:'ccc', component:Music_v2},
                {path:'ddd', name:'ddd', component:Music_v2},
            ]
        },
        {
            path:'/book_v2',
            name:'book_v2',
            component:Book_v2,
            children:[
                {path:'nnn', name:'nnn', component:Book_v2},
                {path:'mmm', name:'mmm', component:Book_v2},
                {path:'hhh', name:'hhh', component:Book_v2},
                {path:'yyy', name:'yyy', component:Book_v2},
            ]
        },
        {
          path:'/search',
          name:'search',
          component:Movie_v2,
            children:[
                {path:'', name:'search', component:Movie_main},
                {path:'in_theaters', name:'in_theaters', component:Movie_main},
                {path:'coming_soon', name:'coming_soon', component:Movie_main},
                {path:'top250', name:'top250', component:Movie_main}
            ]
        },
        {path:'/', redirect:'/movie_v2/in_theaters'}
    ]
}
