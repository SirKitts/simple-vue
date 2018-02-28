// store.js
export default {
  store: {
    video: {
      id: '12345'
    },
    category: {
      ids: [
        {
          id: '9',
          parentId: 0,
          name: 'Rugby Union'
        },
        {
          id: '10',
          parentId: 9,
          name: 'Super 12'
        },
        {
          id: '12',
          parentId: 10,
          name: 'Players'
        }
      ],
      primary: '14',
      selections: []
    }
  }
}
