import styles from '@/app/page.module.css'
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>

      <header className={styles.header}>

        <Image
        className={styles.logoImg}
        src="/twitter-bird-logo.png.png"
        alt="Logo site"
        width={500}
        height={120}
        />

        <input className={styles.search} type="text" placeholder="Pesquisar no Twitter" />
      </header>

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <nav>
            <ul>
              <li><span className={styles.iconHome} /> <span>Início</span></li>
              <li><span className={styles.iconExplore} /> <span>Explorar</span></li>
              <li><span className={styles.iconNotifications} /> <span>Notificações</span></li>
              <li><span className={styles.iconMessages} /> <span>Mensagens</span></li>
              <li><span className={styles.iconLists} /> <span>Listas</span></li>
            </ul>
          </nav>
        </aside>

        <div className={styles.feed}>
          <div className={styles.tweetInput}>
            <textarea placeholder="O que está acontecendo?" />
            <button>Tweetar</button>
          </div>

          <div className={styles.tweet}>
            <div className={styles.tweetHeader}>
              <div className={styles.tweetInfo}>
                <strong>Welker</strong>
                <span>@welkerdelas</span>
              </div>
            </div>
            <p>Este é um tweet simples!</p>
          </div>
        </div>

        <aside className={styles.trending}>
          <h2>O que está acontecendo</h2>
          <ul>
            <li>#NextJS</li>
            <li>#React</li>
            <li>#SenacMG</li>
          </ul>
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>Feito por Vale :)</p>
      </footer>
    </div>
  );
}
