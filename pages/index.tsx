import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import heroImage from '../assets/IMG_2240.jpg';

export default function Home() {
  return (
	<>
		<div className={styles.container}>
			<div className={styles.heroBannerWrap}>
				<div className={styles.heroBannerContent}>
					<div className={styles.tagline}>we strive for excellence in quality</div>
					<div className={styles.motto}>trust through dedication, collaboration, customer satisfaction and value creation</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.overlapContent}>
					<div className={styles.contentHeader}>additional content</div>
					<div className={styles.contentBody}>More information</div>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.contentBlock}>
					<div className={styles.contentHeader}>second content box</div>
					<div className={styles.contentBody}>additional content information...</div>
				</div>
				<div className={styles.sideContent}>
					<div className={styles.sideContentBlock}>
						<div className={styles.sideContentDate}>2 November 2022</div>
						<div className={styles.sideContentTitle}>updates for the month of November</div>
						<div className={styles.sideContentLink}>more info &#10132;</div>
					</div>
					<div className={styles.sideContentBlock}>
						<div className={styles.sideContentDate}>2 October 2022</div>
						<div className={styles.sideContentTitle}>updates for the month of October</div>
						<div className={styles.sideContentLink}>more info &#10132;</div>
					</div>
					<div className={styles.sideContentBlock}>
						<div className={styles.sideContentDate}>2 September 2022</div>
						<div className={styles.sideContentTitle}>updates for the month of September</div>
						<div className={styles.sideContentLink}>more info &#10132;</div>
					</div>
					<div className={styles.sideContentBlock}>
						<div className={styles.sideContentDate}>2 August 2022</div>
						<div className={styles.sideContentTitle}>updates for the month of August</div>
						<div className={styles.sideContentLink}>more info &#10132;</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}
