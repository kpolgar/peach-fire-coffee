const INITIAL_STATE = {
    sections: [
        {
          title: 'accessories',
          imageUrl: 'https://images.unsplash.com/photo-1524686788093-aa1f9c0f7c4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 1,
          linkUrl: 'shop/accessories'
        },
        {
          title: 'mugs',
          imageUrl: 'https://images.unsplash.com/photo-1472517990513-4f22ae253bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
          id: 2,
          linkUrl: 'shop/mugs'
        },
        {
          title: 'treats',
          imageUrl: 'https://images.unsplash.com/photo-1526823127573-0fda76b6c24f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 3,
          linkUrl: 'shop/treats'
        },
        {
          title: 'coffee',
          imageUrl: 'https://images.unsplash.com/photo-1444418185997-1145401101e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1091&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/coffee'
        },
        {
          title: 'Tea',
          imageUrl: 'https://images.unsplash.com/photo-1536998003793-b13c28fae74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/tea'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
};

export default directoryReducer;