# INDEX

- [INDEX](#index)
  - [Project description](#project-description)
    - [Profile Page](#profile-page)
    - [Timesheet creation page](#timesheet-creation-page)
  - [Application techstack](#application-techstack)

## Project description

This project is to assist the workflow of EPCC employees by allowing them to generate timesheets quicker and more efficiently. This project consists of 2 main pages:

### Profile Page

- Here, the user is able to input their employee infomation in regards to employment type, personal information, and role details (essentially the header).
- Additionally, the user is able to input their schedule by selecting the days they work and filling out the times.
- On top of that, the user is allowed to print, edit, and archive timesheets from this same dashboard.

All of this will be saved in an encrypted JSON which can be opened only by an user of the application.

### Timesheet creation page

- The user will be able to select the month which they want to create the timesheet for, or select the default current month.
- This will populate a calendar with the boxes to input the amount of hours worked per day, prefilled with the schedule from the profile of the user.
- If the user goes above their max hout rate per month, the system shall notify the user of such.
- The application shall take into consideration holidays and breaks.
- The application shall allow the user to save the timesheet as part of their local dashboard or to print the timesheet, which will save the data in the dashboard as well.

## Application techstack

The app shall be written in sveltekit without the use of any installed dependencies in order to bundle into an HTML, CSS, and JS application for portability.
