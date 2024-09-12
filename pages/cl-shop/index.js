import CustomHead from "@/components/CustomHead";
import ShopCard from "@/components/ShopCard";
import { patchData, shoppingData } from "@/constants/shoppingData";

import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/styles/cl-shop.module.css";
import { useState } from "react";

export default function CL_shop() {
	const [isDrawerOpen, setIsDrawerOpen] = useState({
		shopping: true,
		patches: true,
	});

	const toggleDrawer = (section) => {
		setIsDrawerOpen((prevState) => ({
			...prevState,
			[section]: !prevState[section],
		}));
	};

	return (
		<>
			<CustomHead
				metaTitle={"CL-shop | Sektionen för Civilingenjör och Lärare"}
				description={
					"Här hittar du vad som finns att köpa hos Försäljningsansvarig."
				}
				url={"https://www.cl-sektionen.se/webbshopp"}
			/>
			<div id="contentbody">
				<h1 id="page-title">CL-shop</h1>
				<p>
					För att beställa behöver du kontakta sektionens Försäljningsansvarig.
					Du betalar genom att swisha sektionen på numret:{" "}
					<span>123-29 38 108</span>
				</p>

				<div className={styles.drawerSection}>
					<button
						type="button"
						onClick={() => toggleDrawer("shopping")}
						className={styles.drawerToggle}
					>
						Sektions-prylar
						<FontAwesomeIcon
							icon={isDrawerOpen.shopping ? faAngleUp : faAngleDown}
							className={styles.drawerIcon}
						/>
					</button>
					<div
						className={`${styles.drawerContent} ${isDrawerOpen.shopping ? styles.open : styles.closed}`}
					>
						<ul className={styles.itemList}>
							{shoppingData.items.map((item) => (
								<ShopCard key={item.id} item={item} />
							))}
						</ul>
					</div>
				</div>

				<div className={styles.drawerSection}>
					<button
						type="button"
						onClick={() => toggleDrawer("patches")}
						className={styles.drawerToggle}
					>
						Märken
						<FontAwesomeIcon
							icon={isDrawerOpen.patches ? faAngleUp : faAngleDown}
							className={styles.drawerIcon}
						/>
					</button>
					<div
						className={`${styles.drawerContent} ${isDrawerOpen.patches ? styles.open : styles.closed}`}
					>
						<ul className={styles.itemList}>
							{patchData.items.map((item) => (
								<ShopCard key={item.id} item={item} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
