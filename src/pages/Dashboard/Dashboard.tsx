import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "./Card/Card";
import styles from "./Dashboard.module.css"
import { Keep } from "../../models/keep";

const Dashboard = () => {

    const [allKeeps, setAllKeeps] = useState<Keep[]>([
        {
            description: "Hii I am fine",
            keepId: Math.random() + "",
            title: "My name is eissa"
        },
        {
            description: "Just started learning TypeScript!",
            keepId: Math.random() + "",
            title: "Learning Journey"
        },
        {
            description: "Had a great day at the park.",
            keepId: Math.random() + "",
            title: "Day at the Park"
        },
        {
            description: "My favorite food is pizza.",
            keepId: Math.random() + "",
            title: "Food Preferences"
        },
        {
            description: "Long road ahead, but excited for the journey.",
            keepId: Math.random() + "",
            title: "Life Thoughts"
        },
        {
            description: "Working on a new project at work.",
            keepId: Math.random() + "",
            title: "Work Update"
        },
        {
            description: "Sometimes the best days are the quietest ones.",
            keepId: Math.random() + "",
            title: "Quiet Days"
        },
        {
            description: "Got a new puppy today, named Max.",
            keepId: Math.random() + "",
            title: "New Puppy"
        },
        {
            description: "Completed a marathon last weekend! It was tough but rewarding.",
            keepId: Math.random() + "",
            title: "Marathon Achievement"
        },
        {
            description: "Reading a book about space exploration. So fascinating!",
            keepId: Math.random() + "",
            title: "Book I'm Reading"
        },
        {
            description: "I have an idea for a new mobile app, need to start working on it.",
            keepId: Math.random() + "",
            title: "App Idea"
        },
        {
            description: "Got my first paycheck from the new job today!",
            keepId: Math.random() + "",
            title: "First Paycheck"
        },
        {
            description: "I want to learn to play the guitar. It's on my bucket list!",
            keepId: Math.random() + "",
            title: "New Hobby"
        },
        {
            description: "Starting a new fitness routine today, feeling motivated.",
            keepId: Math.random() + "",
            title: "Fitness Goals"
        },
        {
            description: "The weather is cold today, but I love the winter vibe.",
            keepId: Math.random() + "",
            title: "Winter Thoughts"
        },
        {
            description: "I recently traveled to Japan and saw beautiful cherry blossoms.",
            keepId: Math.random() + "",
            title: "Travel Experience"
        },
        {
            description: "I’ve been thinking a lot about self-improvement lately.",
            keepId: Math.random() + "",
            title: "Self-Improvement"
        },
        {
            description: "Saw a documentary on climate change, it was really eye-opening.",
            keepId: Math.random() + "",
            title: "Documentary Thoughts"
        },
        {
            description: "Baking a cake for my friend's birthday, hope it turns out good!",
            keepId: Math.random() + "",
            title: "Baking Adventure"
        },
        {
            description: "I’ve been spending a lot of time outdoors lately, and it feels great to disconnect from technology.",
            keepId: Math.random() + "",
            title: "Outdoors Time"
        }
    ]);


    return <>
        <Navbar />
        <div className={styles.main_container}>
            <div className={styles.card_container}>
                {
                    allKeeps.map((keep) => {
                        return <Card keep={keep} />
                    })
                }
            </div>
            <div className={styles.modal}>

            </div>
        </div>

    </>
};

export default Dashboard;
