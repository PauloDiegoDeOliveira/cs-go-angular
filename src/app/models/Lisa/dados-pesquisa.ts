export interface DadosPesquisa {
    software: {
        id: string;
        nome: string;
    };
    fluxoSoftwares: Array<{
        id: string;
        nome: string;
    }>;
}
