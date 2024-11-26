import Link from "next/link";
import { useState } from "react";

import styles from "@/styles/reseberattelser.module.css";

const continents = [
	{ name: "Nordamerika", emoji: "🌎" },
	{ name: "Sydamerika", emoji: "🌎" },
	{ name: "Europa", emoji: "🌍" },
	{ name: "Afrika", emoji: "🌍" },
	{ name: "Asien", emoji: "🌏" },
	{ name: "Oceanien", emoji: "🌏" },
];

export default function Reseberattelser() {
	const [activeContinent, setActiveContinent] = useState();

	const handleContinentClick = (continent) => {
		if (activeContinent === continent) {
			setActiveContinent(undefined);
		} else {
			setActiveContinent(continent);
		}
		document
			.getElementById(styles.scrollNode)
			.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div id="contentbody">
			<h1 id="page-title">Reseberättelser</h1>
			<h2>
				Klicka en världsdel för att filtrera reseberättelser eller scrolla ned
				för att se alla
			</h2>
			<p>
				Här kan du läsa om andra CL-studenters erfarenheter under sina
				utbytesstudievistelser. Listan av reseberättelser är för tillfället inte
				särskilt lång, men vi hoppas att den kommer växa så småningom! Förutom
				att läsa CL-studenters reseberättelser rekommenderar vi även att du
				kikar på de som publicerats på KTHs webbplats av studenter från andra
				program.
			</p>
			<div className={styles.mapSelector}>
				{continents.map((continent) => (
					<button
						type="button"
						key={continent.name}
						className={`${styles.continentButton} ${
							activeContinent === continent.name ? styles.active : ""
						}`}
						onClick={() => handleContinentClick(continent.name)}
					>
						<span className={styles.continentEmoji}>{continent.emoji}</span>
						{continent.name}
					</button>
				))}
			</div>
			<div id={styles.scrollNode} />
			{!activeContinent || activeContinent === "Nordamerika" ? (
				<div>
					<h2>Nordamerika</h2>
					<div className={styles.grid}>
						<Link
							href="/reseberattelser/anton-sundberg-usa"
							className={styles.card}
						>
							<span className={styles.cardName}>Anton Sundberg</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>USA</span>
								<span className={styles.cardEmoji}>🇺🇸</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/caroline-stejmar-kanada"
							className={styles.card}
						>
							<span className={styles.cardName}>Caroline Stejmar</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Kanada</span>
								<span className={styles.cardEmoji}>🇨🇦</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/astrid-häggström-usa"
							className={styles.card}
						>
							<span className={styles.cardName}>Astrid Häggström</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>USA</span>
								<span className={styles.cardEmoji}>🇺🇸</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/ida-marie-freden-usa"
							className={styles.card}
						>
							<span className={styles.cardName}>Ida-Marie Fréden</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>USA</span>
								<span className={styles.cardEmoji}>🇺🇸</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/sabina-permats-usa"
							className={styles.card}
						>
							<span className={styles.cardName}>Sabina Permats</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>USA</span>
								<span className={styles.cardEmoji}>🇺🇸</span>
							</div>
						</Link>
					</div>
				</div>
			) : null}
			{!activeContinent || activeContinent === "Europa" ? (
				<div>
					<h2>Europa</h2>
					<div className={styles.grid}>
						<Link
							href="/reseberattelser/camilla-björn-irland"
							className={styles.card}
						>
							<span className={styles.cardName}>Camilla Björn</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Irland</span>
								<span className={styles.cardEmoji}>🇮🇪</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/camilla-björn-tyskland"
							className={styles.card}
						>
							<span className={styles.cardName}>Camilla Björn</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Tyskland</span>
								<span className={styles.cardEmoji}>🇩🇪</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/ida-fantenberg-niklasson-irland"
							className={styles.card}
						>
							<span className={styles.cardName}>Ida Fantenberg Niklasson</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Irland</span>
								<span className={styles.cardEmoji}>🇮🇪</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/julia-engström-italien"
							className={styles.card}
						>
							<span className={styles.cardName}>Julia Engström</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Italien</span>
								<span className={styles.cardEmoji}>🇮🇹</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/ewa-hörnlund-tjeckien"
							className={styles.card}
						>
							<span className={styles.cardName}>Ewa Hörnlund</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Tjeckien</span>
								<span className={styles.cardEmoji}>🇨🇿</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/philip-gullberg-tjeckien"
							className={styles.card}
						>
							<span className={styles.cardName}>Philip Gullberg</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Tjeckien</span>
								<span className={styles.cardEmoji}>🇨🇿</span>
							</div>
						</Link>
					</div>
				</div>
			) : null}
			{!activeContinent || activeContinent === "Asien" ? (
				<div>
					<h2>Asien</h2>
					<div className={styles.grid}>
						<Link
							href="/reseberattelser/william-friefeldt-taiwan"
							className={styles.card}
						>
							<span className={styles.cardName}>William Friefeldt</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Taiwan</span>
								<span className={styles.cardEmoji}>🇹🇼</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/furkan-kocak-turkiet"
							className={styles.card}
						>
							<span className={styles.cardName}>Furkan Kocak</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Turkiet</span>
								<span className={styles.cardEmoji}>🇹🇷</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/albin-westlin-singapore"
							className={styles.card}
						>
							<span className={styles.cardName}>Albin Westlin</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Singapore</span>
								<span className={styles.cardEmoji}>🇸🇬</span>
							</div>
						</Link>
					</div>
				</div>
			) : null}
			{!activeContinent || activeContinent === "Oceanien" ? (
				<div>
					<h2>Oceanien</h2>
					<div className={styles.grid}>
						<Link
							href="/reseberattelser/anna-stolpe-australien"
							className={styles.card}
						>
							<span className={styles.cardName}>Anna Stolpe</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Australien</span>
								<span className={styles.cardEmoji}>🇦🇺</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/emelie-selinder-australien"
							className={styles.card}
						>
							<span className={styles.cardName}>Emelie Selinder</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Australien</span>
								<span className={styles.cardEmoji}>🇦🇺</span>
							</div>
						</Link>
					</div>
				</div>
			) : null}
			{!activeContinent || activeContinent === "Afrika" ? (
				<div>
					<h2>Afrika</h2>
					<div className={styles.grid}>
						<Link
							href="/reseberattelser/veronica-vilbern-botswana"
							className={styles.card}
						>
							<span className={styles.cardName}>Veronica Vilbern</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Botswana</span>
								<span className={styles.cardEmoji}>🇧🇼</span>
							</div>
						</Link>
						<Link
							href="/reseberattelser/edith-jacobson-botswana"
							className={styles.card}
						>
							<span className={styles.cardName}>Edith Jacobson</span>
							<div className={styles.cardLocationContainer}>
								<span className={styles.cardLocation}>Botswana</span>
								<span className={styles.cardEmoji}>🇧🇼</span>
							</div>
						</Link>
					</div>
				</div>
			) : null}
			{!activeContinent || activeContinent === "Sydamerika" ? (
				<div>
					<h2>Sydamerika</h2>
					<div className={styles.grid}>Inga reseberättelser här än</div>
				</div>
			) : null}
		</div>
	);
}
