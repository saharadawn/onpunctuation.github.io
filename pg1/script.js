// Function to create and animate falling images
function createFallingImage() {
  const container = document.querySelector('.container');
  const image = document.createElement('img');
  image.src = 'question.png'; // Replace with the URL or path to your image
  image.classList.add('falling-image');
  container.appendChild(image);
  
  const imageWidth = 100; // Adjust the width to your desired size
  const startPosition = Math.random() * (window.innerWidth - imageWidth); // Random start position within window width
  const fallDuration = Math.random() * 3000 + 2000; // Random fall duration between 2 to 5 seconds
  const rotation = Math.random() * 360; // Random rotation between 0 to 360 degrees

  image.style.left = `${startPosition}px`;
  image.style.transform = `rotate(${rotation}deg)`; // Apply random rotation

  // Animation for falling
  image.animate(
    [
      { top: '-100px', transform: `rotate(${rotation}deg)` },
      { top: `${window.innerHeight}px`, transform: `rotate(${rotation + 720}deg)` } // Rotate twice for full spin during fall
    ],
    {
      duration: fallDuration,
      easing: 'linear',
      iterations: Infinity // Repeat infinitely
    }
  );
}

// Function to simulate typewriter effect
function typeWriterEffect(textElement, text, speed) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Call typewriter effect for a separate body text
const bodyTextElement = document.querySelector('.body-text');
const text = "There are some punctuations that are interesting and there are some punctuations that are not. Let us begin with the punctuations that are not. Of these the one but the first and the most the completely most uninteresting is the question mark. The question mark is alright when it is all alone when it is used as a brand on cattle or when it could be used in decoration but connected with writing it is completely entirely completely uninteresting. It is evident that is you ask a question you ask a question but anybody who can read at all knows when a question is a question as it is written in writing. Therefore I ask you therefore wherefore should one use the question mark. Beside it does not in its form go with ordinary printing and so it pleases neither the eye nor the ear and it is therefore like a noun, just an unnecessary name of something. A question is a question, anybody can know that a question is a question and so why add to it the question mark when it is already there when the question is already there in the writing. Therefore I never could bring myself to use a question mark, I always found it positively revolting, and now very few do use it. Exclamation marks have the same difficulty and also quotation marks, they are unnecessary, they are ugly, they spoil the line of the writing or the printing and anyway what is the use, if you do not know that a question is a question what is the use of its being a question. The same thing is true of a quotation. When I first began writing I found it simply impossible to use question marks and quotation marks and exclamation points and now anybody sees it that way. Perhaps some day they will see it some other way but not at any rate anybody can and does see it that way.</p>     ";
const typingSpeed = 50; // Adjust typing speed as needed
typeWriterEffect(bodyTextElement, text, typingSpeed);




// Create falling images periodically
setInterval(createFallingImage, 2000); // Create a new falling image every 2 seconds
