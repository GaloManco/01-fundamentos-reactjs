import style from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
    return (
        // Barra do web site....
        <header className={style.header}>
            <img src={igniteLogo} />
            <strong >Ignite Feed</strong>

        </header>
    )
}