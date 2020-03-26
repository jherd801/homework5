
// get the current day when I open the app and
    ??? Investigate moment.js -- get NOW
// display current date at the top of the screen

// create time blocks
-> time block has three pieces
    * time
    * text area for activity
        -> be able to collect user information in some way (form element?)
    * save button
    -> save button stores the activity in local storage
    -> store the time in local storage
        -> stores 8EACH8 activity in local storage
        -> how can I make sure I don't overwrite what's already in there?
        -> I can turn objects into strings with JSON.stringify(), the pull them back out with JSON.parse()
// display time blocks

// color code the activity
-> get the current time
-> compare time block against current time
    * condition for past event
    * condition for current event
    * condition for future event

ON REFRESH
-> time blocks should populate with local storage data
    * retrieve data from local storage
    * differentiating dates and times
    * display local storage data on screen


time | activity | save button
-> when we hit save,
    storing the time and activity in local storage