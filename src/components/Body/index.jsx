import styles from './Body.module.css'
import Card from './Card'

    export function Body (){
    const usuarios = [
        {nome: 'Ana', idade:22, cidade:'São Paulo'},
        {nome: 'Micael', idade:3, cidade:'Florianópolis'},
        {nome: 'Maycon', idade:36, cidade:'Macapá'},
    ]
    return(
        <main className={styles.Body}>
            <h2>Usuários Cadastrados: </h2>
            <div className={styles.cardContainer}>
                <Card/>
            </div>
        </main>
        )
    }