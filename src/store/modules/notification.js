import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from '../storeMutationTypes';

export default {
  state: {
    /**
     * Structure
     * { message, type, url, duration }
     **/
    queue: [],
  },

  mutations: {
    /**
     * @method ADD_NOTIFICATION
     * @desc Add notification to the queue
     * @param {VuexStore.state.notification} state - Vuex Store's notification state
     * @param {Object} notification - { message, type, url, duration }
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.notification.mutations
     **/
    [ADD_NOTIFICATION](state, notification) {
      state.queue.push(notification);
    },

    /**
     * @method REMOVE_NOTIFICATION
     * @desc Remove notification from the queue
     * @param {VuexStore.state.notification} state - Vuex Store's notification state
     * @param {Object} notification - { message, type, url, duration }
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.notification.mutations
     **/
    [REMOVE_NOTIFICATION](state, notification) {
      state.queue.$remove(notification);
    },
  },

  actions: {
    /**
     * @method add
     * @desc Add notification
     * @param {VuexStore} store - Vuex Store
     * @param {Object} notification - notification object
     * @returns {Void} Action does not return
     * @memberof VuexStore.notification.actions
     **/
    add(store, notification) {
      store.dispatch(ADD_NOTIFICATION, notification);
    },

    /**
     * @method remove
     * @desc Remove notification
     * @param {VuexStore} store - Vuex Store
     * @returns {Void} Action does not return
     * @memberof VuexStore.notification.actions
     **/
    remove(store) {
      const notification = store.state.notification.queue[0];
      if (notification) store.dispatch(REMOVE_NOTIFICATION, notification);
    },
  },
};
