import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/About.module.scss"

export default function About() {
    return (
        <Layout>
            <Seo title="About me" />
            <div className={styles.about}>
                <h1 className={styles.gradienttext}>About me</h1>
                <p>
                    I am a programmer, an ethical hacker, a graphic designer and
                    a photographer. I am currently working as a freelancer.
                </p>
            </div>
        </Layout>
    )
}
