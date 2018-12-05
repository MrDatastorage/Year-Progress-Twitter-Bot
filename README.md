# Year Progress Twitter Bot in NodeJS

Hi, I'm Victor [@clarify_mr](https://twitter.com/clarify_mr) creator of Year Progress Twitter Bot in NodeJS. 

Do you love to see him in action? [@YProgressNodeJS](https://twitter.com/YProgressNodeJS)

Inspired by [@year_progress](https://twitter.com/year_progress) twitter bot created by Filip Hráček.

# What does this twitter bot?
This bot post the year Progress in percents in a tweet.

## Installation

If you don't already have have them, please install [Node.js](http://nodejs.org/). This will install two programs: `node`, which runs JavaScript from the command line, and `npm`, which helps you install software that Node.js can run.

Make an empty project directory somewhere convenient for you, [download the archive zip file](https://github.com/MrDatastorage/Year-Progress-Twitter-Bot/archive/master.zip), and unzip the contents to your project directory. Go to your project directory in the command line. There should be four files there: `.gitignore`, `README.md`, `bot.js` and `config.js`. In that directory type:

`npm install`

This installs some code to the `npm_modules` subdirectory, which you don't need to worry about. (It's Twit, the library that lets us talk to Twitter.)

## Connecting to Twitter

At this point you need to register a Twitter account and also get its "app info".

So create a Twitter account for whatever account you want to tweet this stuff. Twitter doesn't allow you to register multiple twitter accounts on the same email address. I recommend you create a brand new email address (perhaps using Gmail) for the Twitter account. Once you register the account to that email address, wait for the confirmation email. Then go here and log in as the Twitter account for your bot:

https://apps.twitter.com/app/new

Once you're there, fill in the required fields: name, description, website. None of it really matters at all to your actual app, it's just for Twitter's information. Do the captcha and submit.

Next you'll see a screen with a "Details" tab. Click on the "Settings" tab and under "Application Type" choose "Read and Write", then hit the update button at the bottom.

Then go to the Keys and Access Tokens tab, and at the bottom click "create my access token". Nothing might happen immediately. Wait a minute and reload the page. then there should be "access token" and "access token secret", which are both long strings of letters and numbers.

Now use a text editor to open up the "config.js" file. It should look like this:

```javascript
module.exports = {
  consumer_key:         'YourCusumerkey',
  consumer_secret:      'YourSecretKey',
  access_token:         'YourAccessKey',
  access_token_secret:  'YourAccessSecret'
}
```

In between those quotes, paste the appropriate info from the Details page. This is essentially the login information for the app.

Now type the following in the command line in your project directory:

`node bot.js`
