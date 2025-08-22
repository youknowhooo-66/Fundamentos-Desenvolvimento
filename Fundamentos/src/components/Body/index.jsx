import styles from './Body.module.css'
import Card from './Card'
import { CardApi } from './Card/CardApi'

    export function Body (){
    const usuarios = [
        {nome: 'Gislaine', idade:25, cidade:'Monte Dourado'},
        {nome: 'Micael', idade:3, cidade:'Florianópolis'},
        {nome: 'Maycon', idade:26, cidade:'Macapá'},
        {nome: 'Ian', idade:8, cidade:'Macapá'},
    ]
    return(
        <main className={styles.Body}>
            <h2>Usuários Cadastrados: </h2>
            <div className={styles.cardContainer}>
                {usuarios.map((usuario, index)=>(
                <Card
                key={index}
                nome={usuario.nome}
                idade={usuario.idade}
                cidade={usuario.cidade}
                />
                ))}
                
            </div>
            
            <h2>Usuários vindo da API: </h2>
            <div className={styles.cardContainer}>
                <CardApi />
            </div>
        </main>
        )
    }