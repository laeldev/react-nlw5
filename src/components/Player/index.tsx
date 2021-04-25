import styles from  './styles.module.scss';

export function Player(){
    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="tocando agora"/>
                <strong>Tocando Agora</strong>
            </header>
            
            <div className={styles.emptyPlayer}>
                <strong>Selecione seu podcast para ouvir</strong>

            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider}></div>
                    </div>
                    <span>00:00</span>
                </div>

                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar anterior" />
                    </button>
                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" alt="tocar" />
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar proxima" />
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="repetir" />
                    </button>
                </div>

            </footer>

        </div>
    );
}