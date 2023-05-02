# Work Day Scheduler

## Description

This project is a simply task scheduler that a user can use to plan their workday within one hour time blocks. The information is saved to Local Storage and the page checks the hour every fifteen minutes to color code the timeblocks as to the ones in the past in gray, the current one in red, and the ones in the future in green. 

## Usage

The site is currently deployed for review on [github pages](https://vulpesviator.github.io/05-work-day-scheduler/). 

To run this application locally, clone or download the repo which contains the necssary html, css, and js files. 

![Work Day Scheduler Screenshot](https://user-images.githubusercontent.com/123843930/235779605-9e26f50a-9923-42b5-b3b8-4891dec4ea1d.gif)

1. After the page loads, the user can click within a block of time and type their reminder
2. Clicking the blue save icon will save that text to Local Storage. 
3. When the user navigates back to the page, it will check Local Storage for previously saved items and populate them in the appropriate time block. 


## Credits

The following tutorials were used for refrence:
- [jQuery Selectors — The Absolute Basics](https://medium.com/@jaeger.rob/jquery-selectors-the-absolute-basics-d781500c722c)
- [Day.js - Format](https://day.js.org/docs/en/display/format)
- [Using CSS Grid & jQuery: Making a Daily Scheduler Pt. II](https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d)


## License

MIT License

Copyright (c) [2023] [Travis Hoffman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
