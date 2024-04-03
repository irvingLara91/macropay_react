
export enum MODES {
    develop = "develop",
    qa = "qa",
    production = "production"
}

export type ModesTypes = keyof typeof MODES;

export interface IConfig {
    base: string | undefined;
    backend: string | undefined;
    credential: {
        clientSecret: string | undefined;
        clientId: string | undefined;
    }
}

export type ConfigEnv = {
    [key in MODES]: IConfig
}
