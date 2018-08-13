export default {
  increment: (v) => {
    return {
      type: 'INCREMENT',
      v: v
    }
  },
  decrement: () => {
    return {type: 'DECREMENT'}
  },
  inc: () => {
    return {type: 'INC'}
  }
}