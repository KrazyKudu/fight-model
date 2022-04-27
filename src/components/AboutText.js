const text = `This is a work in progress website that will contain what I hope becomes a one-stop-shop for fight nerds who want data about UFC fights and fighters. This is the ugly front end created with React.js (I’m still learning and this website is still very much in development) for a data project completed mostly in python.

I started this project by trying to see if I could create a machine learning model to predict UFC fights using data scraped from the UFC stats website. Initially it was a purely academic exercise that I expected little to come of and I would likely just have a pile of code proving that I know how to preform the basic functions of creating an ETL (Extract, Transform, Load) pipeline and creating a machine learning model that was hopefully a bit better than random chance. 

My expectations for genuine success were extremely limited, and I figured the only thing to come of it would be a fun side-project I could add to my portfolio. 

As I dove into everything, creating the scraper, cleaning up the data, and generally working through all the hurdles a project like this entails, I realized that not only would I be able to use the data to create and test ML models using real world events as a testing ground, I was also creating a database of comprehensive fight statistics and fighter information at my fingertips which was impossible to find anywhere else outside the UFC and ESPN internal databases. 

Even if the models were a complete bust on account of MMA being too chaotic, volatile, and new as a sport, I would still have all this cleaned up data readily accessible to me that I could use however I wanted. This gave me the idea of creating a website to showcase all the data wrangling I had done and give fight fans a place they could go to quickly and easily search up information about their favorite fighters or fights that had happened going all the way back to 1993.

So imagine my shock when the machine learning model turned out to be a smashing success. Initially, my models were just predicting a binary of winner/loser and assigning a probability to each. I quickly found this to be unsatisfactory on account of how many different possible outcomes there are in an MMA fight, and the granularity was missing.

I decided to rework things so a range of probabilities was predicted for each fighter. Each fighter was assigned a probability to win by knockout, submission, or decision, for a total of 6 outcomes (the occurrence of No Contests and draws are quite rare and so have been ignored for the purpose of this modeling). This produced a much more nuanced picture of the fights and it could clearly be seen which fighter was predicted to have certain outcomes more likely than others. 

A fight where fighter X is favored to win 75% of the time after adding up all their paths to victory, but has a 25% chance of getting knocked out suddenly provides much more valuable information than just a binary win/lose classification.  

For the actual construction of the models, I started out with a basic random forest and tinkered with the number of features used, and that turned out to be relatively good on the test set. I also tried logistic regression, K-nearest-neighbors, and a couple of neural networks (MLP and sequential). And finally I tried a mixed method using GridSearchCV. All of these preformed fine, but they each also had their own tendencies and biases that would show up in the predictions.

I also noticed that across all the models there was a tendency to more heavily favor the fighters in the red corner above fighter in the blue corner. This is because corner color is determined by fighters rankings, with the higher ranked fighter being in the red corner and the lower ranked fighter in the blue, and across the dataset of ~6000 fights, the higher ranked red fighters won about 70% of the time.

This led to a situation where essentially coin flip fights would all end up favoring the red corner fighter on account of historical trends. This led me to try various re-sampling methods, which helped give me one of my bigger breakthroughs.

Resampling the data to account for the discrepancy in red/blue wins allowed me to test out some different methods and come to a conclusion about how best to approach testing each. First, I used the duplicate upsampling method built into the scikit-learn resampling package to give me an even number of red and blue winners in the dataset. Second, I tried randomizing the dataset to strip color from the equation entirely and distribute winners into X and Y categories with a random number generator.

This left me with three different sampling methods (no resampling, duplicate up-sampling, and randomized sampling), and 6 different types of models (random forest, logistic regression, k-nearest-neighbors, sequential layer, multilayer perception, and GridSearchCV). I knew they all preformed relatively well on the historical data, and I knew they all tended to have their own quirks and biases, but how was I to know which would preform best on future data with fights that had not happened yet?

Well, that’s what I’m testing now!

Starting at the beginning of this year, I have generated a set of picks from each model using each sampling method for a total of 18 different prediction sets for every UFC event as it has happened. Not only that, but I have decided to also aggregate all of these model’s probabilities to create a “combined model” (which is what you see on the model picks tab above) and stored each of them in a database along with the results as each event occurs.

At the end of the year, I’ll take stock of how each model preformed and see what can be learned. 

Because MMA is so inherantly volatile, and because there are so few UFC fights that occur compared to, say, games of basketball played in an NBA season, it is really hard to know for sure how accurate any of the models will be over the long run, but a little over a third of the way through the year and over 130 fights, it is clear that the models have preformed better than I expected.

The “combined model” has gone ~68% correct on picking fighters with a higher win %, and in many notable cases has gone very counter to betting markets and been proven correct. There have been some notable misses as well, but the success has definitely outweighed the failure so far. 

My goal for now is to continue working on the front end of this website and cleaning up of the code in the pipeline so at the end of the year when I have a much more comprehensive set of results data to look at I can get back to work fine tuning and tinkering with the model(s) to improve accuracy. As of right now however, this website still provides users with the ability to search past fights, fighters, and events to uncover stats they otherwise might not be able to find.`

export default text;