import {
  START_PROGRESS,
  FINISH_PROGRESS,
  INCREASE_PROGRESS,
  DECREASE_PROGRESS,
} from '../storeMutationTypes';

const DEFAULT_INCREMENT = 10;
const DEFAULT_START_STATE = 'normal';
const DEFAULT_FINISH_STATE = 'success';
let timer = null;

export default {
  state: {
    active: false,
    state: 'normal',
    percent: 0,
  },

  mutations: {
    /**
     * @method START_PROGRESS
     * @desc Start progress
     * @param {VuexStore.state.progress} state - Vuex Store's progress state
     * @param {Object} [options] - Options for starting progress
     * @param {String} [options.state] - Starting state of progress
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.progress.mutations
     **/
    [START_PROGRESS](state, options = {}) {
      state.state = options.state || DEFAULT_START_STATE;
      state.percent = 0;
      state.active = true;
    },

    /**
     * @method FINISH_PROGRESS
     * @desc Finish progress bar
     * @param {VuexStore.state.progress} state - Vuex Store's progress state
     * @param {Object} [options] - Options for finishing progress
     * @param {String} [options.state] - Finishing state of progress
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.progress.mutations
     **/
    [FINISH_PROGRESS](state, options = {}) {
      clearInterval(timer);
      state.state = options.state || DEFAULT_FINISH_STATE;
      state.percent = 100;
      state.active = false;
    },

    /**
     * @method INCREASE_PROGRESS
     * @desc Increase progress position
     * @param {VuexStore.state.progress} state - Vuex Store's progress state
     * @param {Object} [options] - Options for increasing progress
     * @param {Number} [options.amount] - Amount to increase
     * @param {String} [options.state] - State of progress
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.progress.mutations
     **/
    [INCREASE_PROGRESS](state, options = {}) {
      state.state = options.state || state.state;
      state.percent += options.amount || DEFAULT_INCREMENT;
    },

    /**
     * @method FINISH_PROGRESS
     * @desc Dercrease progress position
     * @param {VuexStore.state.progress} state - Vuex Store's progress state
     * @param {Object} [options] - Options for decreasing progress
     * @param {Number} [options.amount] - Amount to decrease
     * @param {String} [options.state] - State of progress
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.progress.mutations
     **/
    [DECREASE_PROGRESS](state, options = {}) {
      state.state = options.state || state.state;
      state.percent -= options.amount || DEFAULT_INCREMENT;
    },
  },

  actions: {
    /**
     * @method start
     * @desc start progress
     * @param {VuexStore} store - Vuex Store
     * @param {Object} [options] - Options for starting progress
     * @param {String} [options.state] - starting state of progress
     * @returns {Void} Action does not return
     * @memberof VuexStore.progress.actions
     **/
    start(store, options = {}) {
      clearInterval(timer);
      store.dispatch(START_PROGRESS, options.state);
      timer = setInterval(() => {
        store.dispatch({
          type: INCREASE_PROGRESS,
          silent: true,
          payload: {
            amount: (95 - store.state.progress.percent) / 100,
          },
        });
      }, 100);
    },

    /**
     * @method finish
     * @desc finish progress
     * @param {VuexStore} store - Vuex Store
     * @param {Object} [options] - Options for starting progress
     * @param {String} [options.state] - finishing state of progress
     * @returns {Void} Action does not return
     * @memberof VuexStore.progress.actions
     **/
    finish(store, options) {
      store.dispatch(FINISH_PROGRESS, options);
    },

    /**
     * @method increase
     * @desc increase progress
     * @param {VuexStore} store - Vuex Store
     * @param {Object} [options] - Options for increasing progress
     * @param {String} [options.state] - state of progress
     * @param {Number} [options.amount] - Amount to increase
     * @returns {Void} Action does not return
     * @memberof VuexStore.progress.actions
     **/
    increase(store, options) {
      store.dispatch(INCREASE_PROGRESS, options);
    },

    /**
     * @method decrease
     * @desc decrease progress
     * @param {VuexStore} store - Vuex Store
     * @param {Object} [options] - Options for decreasing progress
     * @param {String} [options.state] - state of progress
     * @param {Number} [options.amount] - Amount to increase
     * @returns {Void} Action does not return
     * @memberof VuexStore.progress.actions
     **/
    decrease(store, options) {
      store.dispatch(DECREASE_PROGRESS, options);
    },
  },
};
