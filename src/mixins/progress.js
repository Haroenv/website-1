import progress from '../store/modules/progress.js';

export default {
  vuex: {
    actions: {
      progressStart: progress.actions.start,
      progressFinish: progress.actions.finish,
    },
    getters: {
      progressPercent(state) {
        return state.progress.percent;
      },
      progressActive(state) {
        return state.progress.active;
      },
      progressState(state) {
        return state.progress.state;
      },
    },
  },
};
