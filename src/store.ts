// This class holds the universal state for the project

import { IState } from "./types";

// Implemented singleton pattern
class Store {
  private static instance: Store;
  state: IState;

  constructor() {
    if (Store.instance == null) {
      this.state = {
        is_awake: true,
      };
      Store.instance = this;
    }
    return Store.instance;
  }

  /**
   * Activates the chatbot
   */
  wake_up() {
    this.state.is_awake = true;
  }

  /**
   * Deactivates the chatbot
   */
  sleep() {
    this.state.is_awake = false;
  }
}

const store = new Store();
Object.freeze(store);
export default store;
