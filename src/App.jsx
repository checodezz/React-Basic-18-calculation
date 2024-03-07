import "./App.css";

//1. Create a React component called ReverseArray, which has a function to return the reversed array. Use reverse method to achieve that.

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const reverse = (arr) => {
    return arr.reverse().join(", ");
    /*  const reversedArr = [];
    for(let i = arr.length; i >= 0; i--){
      reversedArr.push(arr[i])
    }
    return reversedArr.join(', ') */
  };
  return (
    <div>
      <h2>Reverse Array</h2>
      <p>Reversed Array: {reverse(originalArray)}</p>
    </div>
  );
};

//2. Create a React component called CalculateBMI, which has a function to calculate the bmi. BMI is calculated as weight divided by the square of height. Weight is 70 kg and height is 1.75 m.

const CalculateBMI = () => {
  const calcBMI = (weight, height) => {
    return weight / height ** 2;
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <p>BMI: {calcBMI(70, 1.75).toFixed(2)}</p>
    </div>
  );
};

//3. Create a React component called GenerateQuote, which has a function to display random quote from a given array of quotes.

const GenerateQuotes = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];

  const randomQuote = (quote) => {
    const randomIndex = Math.floor(Math.random() * quote.length);
    return quote[randomIndex];
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{randomQuote(quotes)}</p>
    </div>
  );
};

/* 
4. Create a React component called GradeAnalyser, which has a function that takes a student's score and displays a grade along with a corresponding message. Pass the score 85 as argument. Assume the grading scale is as follows:

Score 90-100: A, "Excellent work!"
Score 80-89: B, "Good job!"
Score 70-79: C, "Not bad, keep it up!"
Score 60-69: D, "You passed, but aim higher next time."
Score below 60: F, "Sorry, you didn't pass. Keep working hard!"
*/

const GradeAnalyser = ({ score }) => {
  const generateMessage = (score) => {
    let grade;
    let message;

    if (score >= 90) {
      grade = "A";
      message = "Excellent Work!";
    } else if (score > 79 && score < 90) {
      grade = "B";
      message = "Good Job!";
    } else if (score > 69 && score < 80) {
      grade = "C";
      message = "Not bad, keep it up!";
    } else if (score > 59 && score < 70) {
      grade = "D";
      message = "You passed, but aim higher next time.";
    } else {
      grade = "F";
      message = "Sorry, you didn't pass. Keep working hard!";
    }
    return { grade, message };
  };
  const { grade, message } = generateMessage(score);
  return (
    <div>
      <h2>Grade Analyzer</h2>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
      <p>Message: {message}</p>
    </div>
  );
};

/*
5. Create a React component named TemperatureFeedback, which has a function that takes the current temperature  as parameter and provides feedback based on the temperature range. Take temperature as 25. Assume the following temperature categories:

Temperature below 0: "Brr, it's freezing!"
Temperature 0 to 10: "It's quite cold, bundle up!"
Temperature 10 to 20: "The weather is cool and comfortable."
Temperature 20 to 30: "It's a warm day!"
Temperature above 30: "It's hot outside, stay cool!"
*/

const TemperatureFeedback = ({ Temp }) => {
  const feedback = (currentTemp) => {
    return currentTemp < 0
      ? "Brr, it's freezing!"
      : currentTemp >= 0 && currentTemp <= 10
        ? "It's quite cold, bundle up!"
        : currentTemp >= 10 && currentTemp <= 20
          ? "The weather is cool and comfortable."
          : currentTemp >= 20 && currentTemp <= 30
            ? "It's a warm day!"
            : "It's hot outside, stay cool!";
  };

  const weatherMessage = feedback(Temp);

  return (
    <div>
      <h2>Temperature Feedback</h2>
      <p>Current Temperature: {Temp} degree celsius.</p>
      <p>{weatherMessage}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ReverseArray />
      <GenerateQuotes />
      <CalculateBMI />
      <GradeAnalyser score={85} />
      <TemperatureFeedback Temp={25} />
    </main>
  );
}
