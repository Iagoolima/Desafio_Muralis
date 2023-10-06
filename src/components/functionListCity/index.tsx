export default function ListCity(selectedState:string) {
    const sp = ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'];
    const rj = ['Angra dos Reis', 'Niteroi', 'Itaboraí'];
    const mg = ['Belo Horizonte', 'Monte Azul', 'Muzambinho']


    switch (selectedState) {
        case 'São Paulo':
            return sp;
        case 'Rio de Janeiro':
            return rj;
        case 'Minas Gerais':
            return mg;
        default:
            return [];
    }
}
