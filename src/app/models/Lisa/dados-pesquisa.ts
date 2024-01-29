export interface DadosPesquisa {
    software: {
        id: number;
        nome: string
    };

    fluxoSoftwares: Array<{
        id: string;
        nome: string
    }>;
}
