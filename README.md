# Timesheet Application for EPCC employees

- [Timesheet Application for EPCC employees](#timesheet-application-for-epcc-employees)
  - [Application overview](#application-overview)

## Application overview

This application is created in order to usimplify the workflow of EPCC employee's with regards of creating a timesheet. Please note that **THIS IS A SERVERLESS APPLICATION**, therefore the running of the application is entirely local. All data will be lost when used on another machine, yet data can be exported to a different machine by downloading the json with the employee's information, which will be encrypted and can only be decrypeted by the application itself. Future security enhancements will include decryption through private keys. Current security must concern employee's with the exposure of their data. **Manager's must inform the employee's to not leave their information in unatended devices**.
This will allow the user to provide their timesheet information through a profile, including headers and schedule, for it to be later used in the timesheet creation page. This page will take the schedule and user information from the profile page (which is stored in an encrypted json for portability and security) and populate the calendar with the hours provided by the user. It will let the user know when the hours are over their monthly limit if applicable. The user can see past time sheets, modify them, print them, and archive them. THe format will be the one specified by EPCC HR.
