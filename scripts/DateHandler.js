export class DateHandler {
    constructor() {
        // Month name definitions
        this.monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        // Default to current date
        const date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.monthName = this.getMonthName(this.month);
    
        // DOM elements
        this.monthInput = document.getElementById("month-input");
        this.yearInput = document.getElementById("year-input");
        this.title = document.getElementById("create-timesheet-title");
        this.updateBtn = document.getElementById("update-timesheet-date");
        this.saveBtn = document.createElement("button");
        this.saveBtn.textContent = "Save";
        this.saveBtn.type = "button";
        //Initialize listener
        this.enterListener = null;
        
        //Initialize
        this.init();
    }
    
    init() {
        // Set initial values
        this.setInputs(this.monthName, this.year, true);
    
        // Bind update button
        this.updateBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.enableEditing();
        });
    
        // Hotkey: Ctrl + Shift + U
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
            e.preventDefault();
            this.enableEditing();
            }
        });
    }
  
    setInputs(monthName, year, disable = true) {
        //Set values for user visibility
        this.monthInput.value = monthName;
        this.yearInput.value = year;
    
        //Update month number, name, amnd year
        this.month = this.getMonthIndex(monthName);
        this.year = Number(year);
        this.monthName = monthName;
    
        //Disable inputs
        this.monthInput.disabled = disable;
        this.yearInput.disabled = disable;
    }
  
    enableEditing() {
        //Enable input
        this.monthInput.disabled = false;
        this.yearInput.disabled = false;
    
        //check if updateBtn is part of title, which should
        if (this.updateBtn.parentElement === this.title) {
            this.title.removeChild(this.updateBtn);
        }
    
        //Create and add save button to title
        this.title.appendChild(this.saveBtn);
    
        const saveHandler = () => {
            //Get user input
            const newMonthName = this.monthInput.value;
            const newYear = this.yearInput.value;
    
            //Set the new input values with the user's request
            this.setInputs(newMonthName, newYear, true);
    
            //Remove save button and add update button to title
            if(this.title === this.saveBtn.parentElement){
                this.title.removeChild(this.saveBtn);
            }
            this.title.appendChild(this.updateBtn);
    
            //Remove event listener on enter
            if (this.enterListener) {
                document.removeEventListener("keydown", this.enterListener);
                this.enterListener = null;
            }
        };
    
        //Add the event listener for when user clicks the save button
        this.saveBtn.addEventListener("click", saveHandler);
    
        //Define function to listen for "enter" pressed
        this.enterListener = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                saveHandler();
            }
        };
    
        //Add to whole DOM the enterListener
        document.addEventListener("keydown", this.enterListener);
    }
  
    //Returns the month number (0 indexed) for the specified month name
    getMonthIndex(monthName) {
        return this.monthNames.indexOf(monthName);
    }

    //Based on the month index (0-11) return the month name
    getMonthName(index) {
        return this.monthNames[index];
    }
  
    //Obtains the weekday of the month specified based on the year and the month Index (0-11)
    getFirstWeekday(year, monthIndex) {
        return new Date(year, monthIndex, 1).getDay();
    }

    //Retrieves the last day of the month specified based on the year and the month Index (0-11)
    getLastDay(year, monthIndex){
        return new Date(year, monthIndex+1, 0).getDate();
    }
}  