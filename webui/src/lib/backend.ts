export interface GameScript {
    index: number;
    path: string;
    has_client: boolean;
    has_server: boolean;
}

export interface GameStructure {
    scripts: Array<GameScript>;
    attached: boolean;
    attached_message: string;
}

export interface BuildInfo {
    version: string;
    build_type: string;
}