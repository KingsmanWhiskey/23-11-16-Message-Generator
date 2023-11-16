const messages = ["Life's riddle: the mystery of bajinggo. Solve it with a smile and a dash of humor.",
    "Bajinggo is the plot twist in our life story, turning mundane moments into epic adventures.",
    "When life hands you bajinggo, craft a comedy routine. Laughter is the antidote to the unexpected.",
    "Bajinggo moments are life's pop quizzes. Embrace the challenge, and ace the test with a grin.",
    "Life's journey is a bumpy road, but bajinggo is the unexpected speed bump that keeps us alert.",
    "Bajinggo is the spice that flavors the dull dish of routine. Season liberally and savor the difference.",
    "Life is a novel, and bajinggo is the unpredictable plot twist that keeps readers engaged.",
    "Bajinggo is the comedian in life's stand-up routine, delivering punchlines when you least expect it.",
    "Turn the page, and there it is—the next chapter of bajinggo. Embrace the narrative with a smirk.",
    "Life's playlist: a mix of melodies and the occasional bajinggo beat. Dance through both with style.",];

function main() {
    console.log("Welcome toe the magical witty bajinggo generator. Here's a welcome message for you: ");

    const messageIndex = Math.floor(Math.random() * 100 % messages.length);
    // console.log(messageIndex);

    console.log(`\n ${messages[messageIndex]} \n`);
    console.log("I hope you like it. Have a nice day!");
}


main();
