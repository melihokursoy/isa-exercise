import { Isa, IsaOption, Pension, User } from "../../gql/graphql";

export type Store = {
    auth: User | null | undefined;
    myIsa: Isa | null | undefined;
    myPension: Pension | null| undefined;
    isaOptions: IsaOption[] | null| undefined;
};

let store: Store = {
    auth: null,
    myIsa:  null,
    myPension: null,
    isaOptions: null
};

export type Listener = () => void;

interface CustomWindow extends Window {
    listeners: Listener[];
}

export const globalStore = {
    setAuth(auth: User | null | undefined) {
        store = {
            ...store,
            auth: auth,
        };
        emitChange();
    },
    setMyISA(myIsa: Isa | null | undefined) {
        store = {
            ...store,
            myIsa: myIsa,
        };
        emitChange();
    },
    setMyPension(myPension: Pension | null | undefined) {
        store = {
            ...store,
            myPension: myPension,
        };
        emitChange();
    },
    setIsaOptions(isaOptions: IsaOption[] | null | undefined) {
        store = {
            ...store,
            isaOptions: isaOptions,
        };
        emitChange();
    },
    logoout() {
        store = {
            ...store,
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