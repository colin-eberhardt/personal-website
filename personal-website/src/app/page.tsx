import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div  className={styles.page}>
        <main className={styles['main-content']}>
          <div className={styles['content-container']}>
            {/* Prof pic and quick about me */}
            <Image
              className={styles.logo}
              src="/boss-man.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            <div className={styles['desc-container']}>
              <p className={styles.caption}>
                Meet your next software engineer.
              </p>
              <p className={styles.subtext}>
                Hey, I'm Colin&mdash; a passionate software engineer who thrives on solving complex problems and creating innovative solutions.
              </p>
            </div>
          </div>          
          {/* <hr className={styles.divider}/>
          <div className={styles['content-container']}>
              <Timeline />
          </div> */}
          <hr className={styles.divider}/>
          <div className={styles['content-container']}>
            <div className={styles['desc-container']}>
              <p className={styles.subtext}>The toast refused to leave the kitchen, claiming it had found true love in the butter dish. Meanwhile, a cloud of spaghetti floated by, singing opera to the cows below.</p>
              <p className={styles.subtext}>A parade of singing teacups marched down the street, escorted by a brigade of tap-dancing kangaroos. At the corner, a wizard in a polka-dotted robe offered free advice on how to juggle pineapples.</p>
            </div>
            <div className={styles['desc-container']}>              
              <p className={styles.subtext}>The potatoes began to plot their escape to the moon, but they were delayed by a meeting of disinterested carrots. On the other side of the garden, a tomato declared itself the king of all vegetables.</p>
              <p className={styles.subtext}>The wind started a poetry club for clouds, where each poem was about the weather’s feelings. Meanwhile, a sunflower in a top hat negotiated peace between the ants and the butterflies.</p>
            </div>
          </div>
          <hr className={styles.divider}/>
          <div className={styles['content-container']}>
            Insert experience, tech skills, and second link to resume here
          </div>
        </main> 
    </div>
  );
}
