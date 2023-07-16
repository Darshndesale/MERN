let jokes_print = document.getElementById("jokes");
let btn_change = document.getElementById("btn");

const jokes_array = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  'I asked the gym instructor if he could teach me to do the splits. He replied, "How flexible are you?" I said, "I can\'t make it on Tuesdays."',
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  "I used to play piano by ear, but now I use my hands.",
  "Why don't seagulls fly over the bay? Because then they'd be bagels!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to work in a shoe recycling shop. It was sole destroying.",
  "How do you organize a space party? You planet!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? It was two-tired!",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "What did the traffic light say to the car? Don't look, I'm about to change!",
  "I'm on a whiskey diet. I've lost three days already!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I used to play piano by ear, but now I use my hands.",
  "What's orange and sounds like a parrot? A carrot!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "Why did the bicycle fall over? It was two-tired!",
  'I asked the gym instructor if he could teach me to do the splits. He replied, "How flexible are you?" I said, "I can\'t make it on Tuesdays."',
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  "I used to play piano by ear, but now I use my hands.",
  "Why don't seagulls fly over the bay? Because then they'd be bagels!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I used to work in a shoe recycling shop. It was sole destroying.",
  "How do you organize a space party? You planet!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? It was two-tired!",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "What did the traffic light say to the car? Don't look, I'm about to change!",
  "I'm on a whiskey diet. I've lost three days already!",
  "What do you call a bear with no teeth? A gummy bear!",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I used to play piano by ear, but now I use my hands.",
  "What's orange and sounds like a parrot? A carrot!",
  "I used to work in a shoe recycling shop. It was sole destroying.",
  "How do you organize a space party? You planet!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? It was two-tired!",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "What did the traffic light say to the car? Don't look, I'm about to change!",
  "I'm on a whiskey diet. I've lost three days already!",
  "What do you call a bear with no teeth? A gummy bear!",
  "I'm friends with 25 letters of the alphabet. I don't know why.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I used to play piano by ear, but now I use my hands.",
  "What's orange and sounds like a parrot? A carrot!",
  "I used to work in a shoe recycling shop. It was sole destroying.",
  "How do you organize a space party? You planet!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "How do you make a tissue dance? You put a little boogie in it!",
  "I'm reading a book about anti-gravity. It's impossible to put down!",
];

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes_array.length);
  return jokes_array[randomIndex];
}

const joke_generator = () => {
  const randomJoke = getRandomJoke();
  jokes_print.innerHTML = randomJoke;
};

btn_change.addEventListener("click", () => {
  joke_generator();
});
