import { User } from "../../gql/graphql";

export type Store = {
    auth: User|null;
};

let store: Store = {
    auth: null,
};

export type Listener = () => void;

interface CustomWindow extends Window {
    listeners: Listener[];
}

export const globalStore = {
    setAuth(auth:User|null) {
        store = {
            auth: auth,
        };
        emitChange();
    },
    logoout() {
        store = {
            auth: null,
        };
        emitChange();
    },
    subscribe(listener: Listener) {
        const customWindow = window as unknown as CustomWindow;

        const listeners = customWindow.listeners || [];
        customWindow.listeners = [...listeners, listener];
        return () => {
            customWindow.listeners = listeners.filter((l) => l !== listener);
        };
    },
    getSnapshot() {
        return store;
    },
    getServerSnapshot() {
        return store;
    },
};

function emitChange() {
    const customWindow = window as unknown as CustomWindow;
    for (const listener of customWindow.listeners ?? []) {
        listener();
    }
}