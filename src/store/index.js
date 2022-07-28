import {createStore} from 'vuex';

export default createStore({
    state () {
        return {
            filters: [
                {text: 'Подборки', imageSrc: '/icons/grid.svg'},
                {text: 'Подборки', imageSrc: '/icons/grid.svg'},
                {text: 'Подборки', imageSrc: '/icons/grid.svg'},
                {text: 'Подборки', imageSrc: '/icons/grid.svg'},
            ],
            categories: [
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                },
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                },
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                }
            ]
        }
    },
    mutations: {}
  })